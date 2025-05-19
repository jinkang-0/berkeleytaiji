import { getBlogByObjectId } from "@/api/db";
import { notFound } from "next/navigation";
import BlogReader from "@/components/blog/blog-reader";

export default async function DraftBlogPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogData = await getBlogByObjectId(id);
  if (blogData.length !== 1 || !blogData[0]) return notFound();

  const blog = blogData[0];

  return (
    <BlogReader
      image={blog.image}
      title={blog.title}
      imageOffset={blog.imageOffset}
      authors={blog.authors.map((author) => author.name)}
      content={blog.content}
      published={blog.published}
      publishDate={blog.publishDate ?? null}
    />
  );
}
