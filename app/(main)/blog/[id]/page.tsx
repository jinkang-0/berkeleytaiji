import { getBlog } from "@/api/db";
import { notFound } from "next/navigation";
import styles from "./blog.module.scss";
import Link from "next/link";
import LeftArrow from "@/icons/left-arrow";
import Image from "next/image";
import { formatList } from "@/lib/utils";

export default async function BlogPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogData = await getBlog(id);
  if (blogData.length !== 1 || !blogData[0]) return notFound();

  const blog = blogData[0];

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/blog">
            <LeftArrow /> Back to blogs
          </Link>
          <Image
            src={blog.image}
            alt={blog.title}
            width="400"
            height="200"
            blurDataURL={blog.image}
            style={{
              objectPosition: `0% ${blog.imageOffset}%`
            }}
          />
          <div className={styles.titles}>
            <h2>{blog.title}</h2>
            <span>
              {formatList(blog.authors.map((a) => a.name))} ·{" "}
              {blog.published
                ? blog.published.toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })
                : "Unpublished"}
            </span>
          </div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
    </div>
  );
}
