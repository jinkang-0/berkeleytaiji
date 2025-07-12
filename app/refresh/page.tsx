import Footer from "@/components/ui/footer";
import styles from "./page.module.scss";
import { LinkButtonPrimary } from "@/components/ui/button";
import { revalidatePathInternal } from "@/api/actions";
import { ButtonSingleSecondary } from "@/components/ui/button-single";
import { isAdminSession } from "@/api/auth";
import { notFound } from "next/navigation";

export default async function RefreshPage() {
  const isAdmin = await isAdminSession();
  if (!isAdmin) {
    return notFound();
  }

  return (
    <main className={styles.container}>
      <article>
        <ButtonSingleSecondary
          onClick={async () => {
            "use server";
            revalidatePathInternal("/");
            revalidatePathInternal("/blog");
          }}
        >
          Refresh content data
        </ButtonSingleSecondary>
        <ButtonSingleSecondary
          onClick={async () => {
            "use server";
            revalidatePathInternal("check-admin");
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
