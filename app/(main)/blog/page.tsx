import Image from "next/image";
import styles from "./feed.module.scss";
import { formatList } from "@/lib/utils";
import { checkAdmin, getBlogs } from "@/api/db";
import Link from "next/link";
import { getSession } from "@/api/auth";
import { ButtonSecondary } from "@/components/ui/button";
import NewBlogIcon from "@/icons/new-blog";

export default async function Page() {
  const blogs = await getBlogs();
  const session = await getSession();
  const user = session.success && session.user;
  const isAdmin = user && (await checkAdmin(user.email));

  return (
    <div className={styles.feed}>
      {isAdmin && (
        <ButtonSecondary>
          <NewBlogIcon />
          Create new blog
        </ButtonSecondary>
      )}
      {blogs.map((b) => (
        <Link key={b.id} className={styles.blogCard} href={`/blog/${b._id}`}>
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
        </Link>
      ))}
    </div>
  );
}
