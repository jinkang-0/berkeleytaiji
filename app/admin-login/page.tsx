import { ButtonGoogleSignIn } from "@/components/auth/button-google";
import styles from "./login.module.scss";
import Footer from "@/components/ui/footer";
import { getSession } from "@/api/auth";
import { redirect } from "next/navigation";
import SessionRefresher from "@/components/auth/session-refresher";

export default async function AdminLoginPage() {
  const session = await getSession();
  const hasSession = session.success;

  if (hasSession) {
    redirect("/");
  }

  return (
    <main className={styles.container}>
      <SessionRefresher user={session.user!} />
      <article>
        <h4>Admin Login</h4>
        <ButtonGoogleSignIn />
      </article>
      <Footer />
    </main>
  );
}
