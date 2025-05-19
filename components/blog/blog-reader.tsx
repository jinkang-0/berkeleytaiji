import Link from "next/link";
import styles from "./blog.module.scss";
import Image from "next/image";
import LeftArrow from "@/icons/left-arrow";
import { formatList } from "@/lib/utils";

interface BlogReaderProps {
  image: string;
  title: string;
  imageOffset: number;
  authors: string[];
  content: string;
  published: boolean;
  publishDate: Date | null;
}

export default async function BlogReader({
  image,
  title,
  imageOffset,
  authors,
  content,
  published,
  publishDate
}: BlogReaderProps) {
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/blog">
            <LeftArrow /> Back to blogs
          </Link>
          <Image
            src={image}
            alt={title}
            width="400"
            height="200"
            blurDataURL={image}
            style={{
              objectPosition: `0% ${imageOffset}%`
            }}
          />
          <div className={styles.titles}>
            <h2>{title}</h2>
            <span>
              {formatList(authors)} ·{" "}
              {published && publishDate
                ? publishDate.toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })
                : "Unpublished"}
            </span>
          </div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  );
}
