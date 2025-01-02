"use client";

import Image from "next/image";
import ImageSorryCat from "@/assets/graphics/sorry_cat.jpg";
import styles from "./error.module.scss";

export default function ErrorPage() {
  return (
    <main className={styles.container}>
      <article>
        <Image src={ImageSorryCat} alt="Sorry Cat" />
        <div>
          <h5>Whoops</h5>
          <p>
            Whoops, something went wrong on our end. Please try again later or
            contact us if the error persists.
          </p>
        </div>
      </article>
    </main>
  );
}
