import Image from "next/image";
import styles from "./error.module.scss";
import ImageConfusedCat from "@/assets/graphics/confused_cat.jpg";
import { LinkButtonPrimary } from "@/components/ui/button";
import Footer from "@/components/ui/footer";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <article>
        <Image src={ImageConfusedCat} alt="Confused Cat" />
        <div>
          <h3>Error 404</h3>
          <p>Sorry, we couldn&apos;t find the page you were looking for.</p>
          <LinkButtonPrimary href="/">Back to Home</LinkButtonPrimary>
        </div>
      </article>

      <Footer />
    </main>
  );
}
