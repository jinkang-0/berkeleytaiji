import Image from "next/image";
import Link from "next/link";
import styles from "./blog-card.module.scss";
import { formatList } from "@/lib/utils";
import ButtonDeleteBlog from "./button-delete-draft";
import ButtonVisibilityToggle from "./button-visibility-toggle";

interface BlogCardProps {
  id: string;
  blogId: string;
  image: string;
  title: string;
  published: boolean;
  publishDate: Date | undefined;
  content: string;
  authors: string[];
  visible: boolean;
}

export default function BlogCard({
  id,
  blogId,
  image,
  title,
  publishDate,
  published,
  content,
  authors,
  visible
}: BlogCardProps) {
  const link = published ? `/blog/${blogId}` : `/blog/draft/${blogId}`;

  return (
    <div className={styles.blogCardContainer}>
      <Link className={styles.blogCard} href={link}>
        <Image
          src={image}
          width="400"
          height="400"
          alt={title}
          blurDataURL={image}
          className={styles.blogCardImage}
        />
        <div className={styles.blogCardDetails}>
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
      <div className={styles.cardActions}>
        {published ? (
          <ButtonVisibilityToggle blogId={id} visible={visible} />
        ) : (
          <ButtonDeleteBlog blogId={id} />
        )}
      </div>
    </div>
  );
}
