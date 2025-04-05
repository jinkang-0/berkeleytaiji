import Image from "next/image";
import styles from "@/app/error.module.scss";
import ImageConfusedCat from "@/assets/graphics/confused_cat.jpg";
import { LinkButtonPrimary } from "@/components/ui/button";

export default function NotFoundTemplate() {
  return (
    <article className={styles.error}>
      <Image src={ImageConfusedCat} alt="Confused Cat" />
      <div>
        <h3>Error 404</h3>
        <p>Sorry, we couldn&apos;t find the page you were looking for.</p>
        <LinkButtonPrimary href="/">Back to Home</LinkButtonPrimary>
      </div>
    </article>
  );
}
