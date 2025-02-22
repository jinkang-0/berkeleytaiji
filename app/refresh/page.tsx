import Footer from "@/components/ui/footer";
import styles from "./page.module.scss";
import { LinkButtonPrimary } from "@/components/ui/button";
import { revalidateHome } from "@/api/actions";
import { ButtonPrimarySingle } from "@/components/ui/button-single";

export default function RefreshPage() {
  return (
    <main className={styles.container}>
      <article>
        <ButtonPrimarySingle onClick={revalidateHome}>
          Refresh content data
        </ButtonPrimarySingle>
        <LinkButtonPrimary href="/">Back to home</LinkButtonPrimary>
      </article>
      <Footer />
    </main>
  );
}
