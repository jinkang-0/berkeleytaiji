"use server";

import { oauthClient } from "@/api/setup/google";
import { cookies } from "next/headers";
import { checkAdmin } from "./db";
import jwt from "jsonwebtoken";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Credentials, UserRefreshClient } from "google-auth-library";
import { User } from "@/lib/classes";
import { cache } from "react";
import { getConnection } from "./setup/mongoose";

// ensure environmental variables are imported
if (!process.env.AUTH_GOOGLE_ID)
  throw new Error(
    "Google OAuth Client ID not included in environment variables."
  );

if (!process.env.JWT_SECRET)
  throw new Error("JWT secret not included in environment variables.");

if (!process.env.AUTH_GOOGLE_SECRET)
  throw new Error(
    "Google OAuth Client secret not included in environment variables."
  );

// config options
const expirationDays = 30;
const refreshThreshold = 7 * 24 * 60 * 60 * 1000; // 7 days

const jwtOptions: jwt.SignOptions = {
  expiresIn: `${expirationDays}d`
};

const cookieOptions: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * expirationDays
};

/**
 * Refresh the user's access token using the refresh token.
 *
 * @param refreshToken The refresh token of the user.
 * @returns Refreshed token credentials.
 */
async function refreshToken(refreshToken: string) {
  const user = new UserRefreshClient(
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET,
    refreshToken
  );

  const { credentials } = await user.refreshAccessToken();

  return credentials;
}

/**
 * Checks the expiration date of the token credentials of the user and refreshes it if necessary.
 *
 * @param tokens The token credentials of the user.
 * @returns Success object with credentials if the token is valid, or false if it is not.
 */
export async function checkCredentials(tokens: Credentials) {
  if (tokens.refresh_token && tokens.expiry_date) {
    const expiresIn = tokens.expiry_date - Date.now();
    if (expiresIn < refreshThreshold) {
      const credentials = await refreshToken(tokens.refresh_token);
      return { success: true, credentials };
    }
  }

  return { success: false };
}

/**
 * Logs the user in using Google OAuth.
 *
 * @param authCode The authorization code for Google OAuth.
 * @returns Success status, or error message if login fails.
 */
export async function loginWithGoogle(authCode: string) {
  // get tokens from google oauth
  const { tokens } = await oauthClient.getToken(authCode);

  if (!tokens.expiry_date) {
    console.error("No expiry date found in tokens.");
    return { success: false, message: "An unexpected error occurred." };
  }

  if (tokens.expiry_date < Date.now()) {
    console.error("Token expired.");
    return { success: false, message: "An unexpected error occurred." };
  }

  // refresh token expiration date
  const checkRes = await checkCredentials(tokens);
  const idToken = checkRes.success
    ? checkRes.credentials?.id_token
    : tokens.id_token;

  if (!idToken) {
    console.error("No ID token found.");
    return { success: false, message: "An unexpected error occurred." };
  }

  const ticket = await oauthClient.verifyIdToken({
    idToken,
    audience: process.env.AUTH_GOOGLE_ID
  });

  // check email exists and is verified
  const payload = ticket.getPayload();
  if (!payload) return { success: false, message: "Invalid token." };
  if (!payload.email) return { success: false, message: "No email found." };
  if (!payload.email_verified)
    return { success: false, message: "Email not verified." };

  if (!getConnection()) {
    return { success: false, message: "Internal server error." };
  }

  // check user is admin
  const isAdmin = await checkAdmin(payload.email);
  if (!isAdmin) {
    return { success: false, message: "Not authorized." };
  }

  // store user session
  const user = {
    email: payload.email,
    name: payload.name,
    sub: payload.sub
  };

  const cookieStore = await cookies();
  const token = jwt.sign(user, process.env.JWT_SECRET!, jwtOptions);
  cookieStore.set("session", token, cookieOptions);

  return { success: true };
}

/**
 * Gets the current session and extends it if it is valid.
 *
 * @returns Current session's user, or an error message if the session is invalid.
 */
export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (!session) return { success: false, message: "No session found" };

  // verify JWT token
  try {
    const decoded = jwt.verify(session.value, process.env.JWT_SECRET!, {
      maxAge: `${expirationDays}d`
    });

    if (typeof decoded === "string")
      return { success: false, message: "Invalid token" };

    const user = new User(decoded.email, decoded.name, decoded.sub);

    // report success
    return { success: true, user };
  } catch (err) {
    return { success: false, message: String(err) };
  }
}

/**
 * Logs the user out by deleting the session cookie.
 */
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

/**
 * Checks if the calling user is an admin.
 *
 * @returns True if the user is an admin, false otherwise.
 */
export const isAdminSession = cache(async () => {
  const session = await getSession();
  if (!session.success) return false;

  const user = session.user;
  if (!user) return false;

  return await checkAdmin(user.getEmail());
});

/**
 * Gets the email of the logged-in user.
 *
 * @returns The user email, or null if the user is not logged in.
 */
export const getEmail = cache(async () => {
  const session = await getSession();
  if (!session.success) return null;

  const user = session.user;
  if (!user) return null;

  return user.getEmail();
});
