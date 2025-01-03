import { JWT } from "google-auth-library";

if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
  throw new Error("Google service account email not set.");

if (!process.env.GOOGLE_PRIVATE_KEY)
  throw new Error("Google service account private key not set.");

export const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});
