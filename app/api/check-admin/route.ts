import { checkAdmin } from "@/api/db";

if (!process.env.ADMIN_KEY) {
  throw new Error("Admin key not included in environment variables.");
}

export const dynamic = "force-static";

export async function GET(request: Request) {
  // check if request has the correct admin key
  const key = request.headers.get("Authorization");
  if (!key || key !== process.env.ADMIN_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }

  // check if email is provided in the request headers
  const email = request.headers.get("X-Email");
  if (!email) {
    return new Response("Email header missing", { status: 400 });
  }

  // check if the user is an admin
  const isAdmin = await checkAdmin(email);
  return new Response(JSON.stringify({ isAdmin }));
}
