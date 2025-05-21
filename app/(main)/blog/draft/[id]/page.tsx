import { checkAdmin, getBlogByObjectId } from "@/api/db";
import { notFound } from "next/navigation";
import BlogReader from "@/components/blog/blog-reader";
import { getSession } from "@/api/auth";

export default async function DraftBlogPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogData = await getBlogByObjectId(id);
  if (blogData.length !== 1 || !blogData[0]) return notFound();

  const blog = blogData[0];

  const session = await getSession();
  const user = session.success && session.user;
  const isAdmin = user && (await checkAdmin(user.email));

  return <BlogReader blog={blog} editable={isAdmin} />;
}
