import styles from "./feed.module.scss";
import DraftBlogFeed from "@/components/blog/draft-feed";
import BlogFeed from "@/components/blog/blog-feed";
import ButtonCreateBlog from "@/components/blog/button-create-blog";
import { isAdminSession } from "@/api/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read the latest blogs from Berkeley Taiji."
};

export default async function Page() {
  const isAdmin = await isAdminSession();

  return (
    <div className={styles.feed}>
      {/* admin only components */}
      {isAdmin && (
        <>
          <ButtonCreateBlog />
          <DraftBlogFeed />
        </>
      )}
      {/* blog feed */}
      <BlogFeed />
    </div>
  );
}
