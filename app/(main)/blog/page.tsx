import styles from "./feed.module.scss";
import { checkAdmin } from "@/api/db";
import { getSession } from "@/api/auth";
import DraftBlogFeed from "@/components/blog/draft-feed";
import BlogFeed from "@/components/blog/blog-feed";
import ButtonCreateBlog from "@/components/blog/create-blog";

export default async function Page() {
  const session = await getSession();
  const user = session.success && session.user;
  const isAdmin = user && (await checkAdmin(user.email));

  return (
    <div className={styles.feed}>
      {/* admin only components */}
      {isAdmin && (
        <>
          <ButtonCreateBlog userEmail={user.email} />
          <DraftBlogFeed />
        </>
      )}
      {/* blog feed */}
      <BlogFeed isAdmin={!!isAdmin} />
    </div>
  );
}
