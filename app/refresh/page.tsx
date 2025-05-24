import Footer from "@/components/ui/footer";
import styles from "./page.module.scss";
import { LinkButtonOutline } from "@/components/ui/button";
import { revalidate } from "@/api/actions";
import { ButtonSinglePrimary } from "@/components/ui/button-single";
import { isAdminSession } from "@/api/auth";
import { notFound } from "next/navigation";

export default async function RefreshPage() {
  const isAdmin = isAdminSession();
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
