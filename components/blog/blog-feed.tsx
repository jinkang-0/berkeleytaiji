import { getBlogs } from "@/api/db";
import BlogCard from "./blog-card";

export default async function BlogFeed({ isAdmin }: { isAdmin: boolean }) {
  const blogs = await getBlogs(isAdmin ? undefined : true);

  return (
    <>
      {isAdmin && <h6>Published</h6>}

      {blogs.map((b) => (
        <BlogCard
          key={b.id}
          blogId={b.blogId}
          image={b.image}
          title={b.title}
          published={b.published}
          publishDate={b.publishDate ?? undefined}
          content={b.content}
          authors={b.authors.map((a) => a.name)}
        />
      ))}
    </>
  );
}
