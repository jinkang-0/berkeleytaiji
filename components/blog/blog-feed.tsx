import { getBlogs } from "@/api/db";
import BlogCard from "./blog-card";
import { isAdminSession } from "@/api/auth";

export default async function BlogFeed() {
  const isAdmin = await isAdminSession();
  const blogs = await getBlogs();

  return (
    <>
      {isAdmin && <h6>Published</h6>}

      {blogs.map((b) => (
        <BlogCard key={b._id} blog={b} />
      ))}
    </>
  );
}
