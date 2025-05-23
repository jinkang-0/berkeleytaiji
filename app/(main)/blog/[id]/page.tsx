import { getBlogByBlogId } from "@/api/db";
import { notFound } from "next/navigation";
import BlogReader from "@/components/blog/blog-reader";
import { isAdminSession } from "@/api/auth";

export default async function BlogPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogData = await getBlogByBlogId(id);
  if (blogData.length !== 1 || !blogData[0]) return notFound();

  const blog = blogData[0];
  const isAdmin = await isAdminSession();

  return <BlogReader blog={blog} editable={isAdmin} />;
}
