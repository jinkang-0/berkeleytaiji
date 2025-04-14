// import { getSession } from "@/api/auth";
import { ButtonGoogleSignIn } from "@/components/ui/button-google";
import styles from "./login.module.scss";
import Footer from "@/components/ui/footer";

export default async function AdminLoginPage() {
  // const session = await getSession();

  // if (session.success) {
  //   console.log(session.user);
  // } else {
  //   console.log(session.message);
  // }

  return (
    <main className={styles.container}>
      <article>
        <h4>Admin Login</h4>
        <ButtonGoogleSignIn />
      </article>
      <Footer />
    </main>
  );
}
