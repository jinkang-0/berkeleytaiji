import { getDrafts } from "@/api/db";
import BlogCard from "./blog-card";

export default async function DraftBlogFeed() {
  const drafts = await getDrafts();

  return (
    <>
      {drafts.length > 0 && <h6>Unpublished Drafts</h6>}

      {drafts.map((b) => (
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
