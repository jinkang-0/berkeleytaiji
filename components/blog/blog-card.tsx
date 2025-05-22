import Image from "next/image";
import Link from "next/link";
import styles from "./blog-card.module.scss";
import { formatList } from "@/lib/utils";
import ButtonDeleteBlog from "./button-delete-draft";
import ButtonVisibilityToggle from "./button-visibility-toggle";
import { PopulatedBlog } from "@/lib/types";

export default function BlogCard({ blog }: { blog: PopulatedBlog }) {
  const link = blog.published
    ? `/blog/${blog.blogId}`
    : `/blog/draft/${blog.blogId}`;

  return (
    <div className={styles.blogCardContainer}>
      <Link className={styles.blogCard} href={link}>
        <Image
          src={blog.image}
          width="400"
          height="400"
          alt={blog.title}
          blurDataURL={blog.image}
          className={styles.blogCardImage}
        />
        <div className={styles.blogCardDetails}>
          <header>
            <p>{blog.title}</p>
            <span>
              {formatList(blog.authors.map((a) => a.name))} ·{" "}
              {blog.published && blog.publishDate
                ? blog.publishDate.toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })
                : "Unpublished"}
            </span>
          </header>
          <section>{blog.summary}</section>
        </div>
      </Link>
      <div className={styles.cardActions}>
        {blog.published ? (
          <ButtonVisibilityToggle blogId={blog._id} visible={blog.visible} />
        ) : (
          <ButtonDeleteBlog blogId={blog._id} />
        )}
      </div>
    </div>
  );
}
