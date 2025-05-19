"use server";

import { oauthClient } from "@/api/setup/google";
import { cookies } from "next/headers";
import { checkAdmin } from "./db";
import jwt from "jsonwebtoken";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Credentials, UserRefreshClient } from "google-auth-library";

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

// refresh token
async function refreshToken(refreshToken: string) {
  const user = new UserRefreshClient(
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET,
    refreshToken
  );

  const { credentials } = await user.refreshAccessToken();

  return credentials;
}

// check session and refresh token if expires in less than a week
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

// login using google token
export async function loginWithGoogle(authCode: string) {
  // get tokens from google oauth
  const { tokens } = await oauthClient.getToken(authCode);

  if (!tokens.expiry_date)
    return { success: false, message: "No expiry date found" };

  if (tokens.expiry_date < Date.now())
    return { success: false, message: "Token expired" };

  // refresh token expiration date
  const checkRes = await checkCredentials(tokens);
  const idToken = checkRes.success
    ? checkRes.credentials?.id_token
    : tokens.id_token;

  if (!idToken) return { success: false, message: "No id token found" };

  const ticket = await oauthClient.verifyIdToken({
    idToken,
    audience: process.env.AUTH_GOOGLE_ID
  });

  // check email exists and is verified
  const payload = ticket.getPayload();
  if (!payload) return { success: false, message: "Invalid token" };
  if (!payload.email) return { success: false, message: "No email found" };
  if (!payload.email_verified)
    return { success: false, message: "Email not verified" };

  // check user is admin
  const isAdmin = await checkAdmin(payload.email);
  if (!isAdmin) {
    return { success: false, message: "User is not an admin" };
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

// verify and renew session
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

    const user = {
      email: decoded.email,
      name: decoded.name,
      sub: decoded.sub
    };

    // report success
    return { success: true, user };
  } catch (err) {
    return { success: false, message: String(err) };
  }
}

// logout: delete session
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
  return { success: true };
}
