import Image from "next/image";
import Link from "next/link";
import styles from "./blog-card.module.scss";
import { formatList } from "@/lib/utils";

interface BlogCardProps {
  blogId: string;
  image: string;
  title: string;
  published: boolean;
  publishDate: Date | undefined;
  content: string;
  authors: string[];
}

export default function BlogCard({
  blogId,
  image,
  title,
  publishDate,
  published,
  content,
  authors
}: BlogCardProps) {
  const link = published ? `/blog/${blogId}` : `/blog/draft/${blogId}`;

  return (
    <Link className={styles.blogCard} href={link}>
      <Image
        src={image}
        width="400"
        height="400"
        alt={title}
        blurDataURL={image}
      />
      <div className={styles.blogDetails}>
        <header>
          <p>{title}</p>
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
        </header>
        <section>{content}</section>
      </div>
    </Link>
  );
}
