import Image from "next/image";
import styles from "./blog.module.scss";
import { formatList } from "@/lib/utils";
import { getBlogs } from "@/api/db";

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <div className={styles.feed}>
      {blogs.map((b) => (
        <div key={b.id} className={styles.blogCard}>
          <Image
            src={b.image}
            width="400"
            height="400"
            alt={b.title}
            blurDataURL={b.image}
          />
          <div className={styles.blogDetails}>
            <header>
              <p>{b.title}</p>
              <span>
                {formatList(b.authors.map((a) => a.name))} ·{" "}
                {b.published
                  ? b.published.toLocaleDateString(undefined, {
                      month: "long",
                      day: "numeric",
                      year: "numeric"
                    })
                  : "Unpublished"}
              </span>
            </header>
            <section>{b.content}</section>
          </div>
        </div>
      ))}
    </div>
  );
}
