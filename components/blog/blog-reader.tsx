import Link from "next/link";
import styles from "./blog.module.scss";
import Image from "next/image";
import LeftArrow from "@/icons/left-arrow";
import { formatList } from "@/lib/utils";
import { PopulatedBlog } from "@/lib/types";
import { BlogContextProvider } from "./context-blog";
import EditorTitle from "./editor/editor-title";
import EditorImage from "./editor/editor-image";
import EditorContent from "./editor/editor-content";
import BlogContent from "./blog-content";

export default async function BlogReader({
  blog,
  editable
}: {
  blog: PopulatedBlog;
  editable?: boolean;
}) {
  return (
    <BlogContextProvider blog={blog}>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            <Link href="/blog">
              <LeftArrow /> Back to blogs
            </Link>
            {editable ? (
              <EditorImage />
            ) : (
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
            )}
            <div className={styles.titles}>
              {editable ? <EditorTitle /> : <h2>{blog.title}</h2>}
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
            </div>
          </header>
          {editable ? (
            <EditorContent />
          ) : (
            <BlogContent blogContent={blog.content} />
          )}
        </article>
      </div>
    </BlogContextProvider>
  );
}
