import { getBlogs } from "@/api/db";
import BlogCard from "./blog-card";

export default async function BlogFeed({ isAdmin }: { isAdmin: boolean }) {
  const blogs = await getBlogs(isAdmin ? false : true);

  return (
    <>
      {isAdmin && <h6>Published</h6>}

      {blogs.map((b) => (
        <BlogCard key={b._id} blog={b} />
      ))}
    </>
  );
}
