import Footer from "@/components/ui/footer";
import styles from "./page.module.scss";
import { LinkButtonPrimary } from "@/components/ui/button";
import { revalidatePathInternal } from "@/api/actions";
import { ButtonSingleSecondary } from "@/components/ui/button-single";
import { getSession } from "@/api/auth";
import { notFound } from "next/navigation";
import SessionRefresher from "@/components/auth/session-refresher";

export default async function RefreshPage() {
  const session = await getSession();
  if (!session.user) {
    return notFound();
  }

  return (
    <main className={styles.container}>
      <SessionRefresher user={session.user} />
      <article>
        <ButtonSingleSecondary
          onClick={async () => {
            "use server";
            await Promise.all([
              revalidatePathInternal("/"),
              revalidatePathInternal("/blog")
            ]);
          }}
        >
          Refresh content data
        </ButtonSingleSecondary>
        <ButtonSingleSecondary
          onClick={async () => {
            "use server";
            await revalidatePathInternal("check-admin");
          }}
        >
          Refresh admin list
        </ButtonSingleSecondary>
        <LinkButtonPrimary href="/">Back to home</LinkButtonPrimary>
      </article>
      <Footer />
    </main>
  );
}
