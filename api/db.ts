import { isValidObjectId } from "mongoose";
import { Blog, UserType, getConnection } from "./mongoose";

/**
 * Get all viewable blogs.
 */
export async function getBlogs() {
  if (!(await getConnection())) return [];

  const blogs = await Blog.find({ visible: true })
    .populate<{ authors: [UserType] }>("authors")
    .exec();

  return blogs;
}

export async function getBlog(id: string) {
  if (!(await getConnection())) return [];
  if (!isValidObjectId(id)) return [];

  const blog = await Blog.find({ _id: id, visible: true })
    .populate<{ authors: [UserType] }>("authors")
    .exec();

  return blog;
}
