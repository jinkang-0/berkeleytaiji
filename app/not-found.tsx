import Image from "next/image";
import styles from "./error.module.scss";
import ImageConfusedCat from "@/assets/graphics/confused_cat.jpg";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <article>
        <Image src={ImageConfusedCat} alt="Confused Cat" />
        <div>
          <h5>Error 404</h5>
          <p>
            Sorry, we couldn&apos;t find the page you were looking for. Try
            again later or click one of the links above.
          </p>
        </div>
      </article>
    </main>
  );
}
