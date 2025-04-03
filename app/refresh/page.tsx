import Footer from "@/components/ui/footer";
import styles from "./page.module.scss";
import { LinkButtonOutline } from "@/components/ui/button";
import { revalidate } from "@/api/actions";
import { ButtonPrimarySingle } from "@/components/ui/button-single";

export default function RefreshPage() {
  return (
    <main className={styles.container}>
      <article>
        <ButtonPrimarySingle
          onClick={() => {
            revalidate("/");
            revalidate("/blog");
          }}
        >
          Refresh content data
        </ButtonPrimarySingle>
        <LinkButtonOutline href="/">Back to home</LinkButtonOutline>
      </article>
      <Footer />
    </main>
  );
}
