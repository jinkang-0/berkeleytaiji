import { getDrafts } from "@/api/db";
import BlogCard from "./blog-card";

export default async function DraftBlogFeed() {
  const drafts = await getDrafts();

  return (
    <>
      {drafts.length > 0 && <h6>Unpublished Drafts</h6>}

      {drafts.map((b) => (
        <BlogCard key={b._id} blog={b} />
      ))}
    </>
  );
}
