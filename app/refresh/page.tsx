import Footer from "@/components/ui/footer";
import styles from "./page.module.scss";
import { LinkButtonOutline } from "@/components/ui/button";
import { revalidate } from "@/api/actions";
import { ButtonSinglePrimary } from "@/components/ui/button-single";
import { getSession } from "@/api/auth";
import { checkAdmin } from "@/api/db";
import { notFound } from "next/navigation";

export default async function RefreshPage() {
  const session = await getSession();
  const user = session.success && session.user;
  const isAdmin = user && checkAdmin(user.email);
  if (!isAdmin) {
    return notFound();
  }

  return (
    <main className={styles.container}>
      <article>
        <ButtonSinglePrimary
          onClick={async () => {
            "use server";
            revalidate("/");
            revalidate("/blog");
          }}
        >
          Refresh content data
        </ButtonSinglePrimary>
        <LinkButtonOutline href="/">Back to home</LinkButtonOutline>
      </article>
      <Footer />
    </main>
  );
}
