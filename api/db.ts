"use server";

import { isValidObjectId } from "mongoose";
import { Blog, User, UserType, getConnection } from "@/lib/mongoose";

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

/**
 * Get a blog by ID.
 *
 * @param id - The ID of the blog to get.
 * @returns The blog object if found, or an empty array if not found or invalid ID.
 */
export async function getBlog(id: string) {
  if (!(await getConnection())) return [];
  if (!isValidObjectId(id)) return [];

  const blog = await Blog.find({ _id: id, visible: true })
    .populate<{ authors: [UserType] }>("authors")
    .exec();

  return blog;
}

/**
 * Check if the user is an admin.
 *
 * @param email - The email of the user to check.
 * @returns True if the user is an admin, false otherwise.
 */
export async function checkAdmin(email: string) {
  if (!(await getConnection())) return false;

  const result = await User.find({ email }).exec();
  if (result.length === 0) return false;

  return true;
}
