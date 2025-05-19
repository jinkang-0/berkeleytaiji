"use server";

import { Blog, User, UserType, getConnection } from "@/api/setup/mongoose";
import { getRandomImage } from "./unsplash";
import { isValidObjectId, Types } from "mongoose";

/**
 * Get all viewable blogs.
 *
 * @param filterVisible - Whether to filter by visibility.
 * @returns An array of blog objects.
 */
export async function getBlogs(filterVisible = true) {
  if (!(await getConnection())) return [];

  const visible = filterVisible ? true : undefined;
  const blogs = await Blog.find({ visible })
    .populate<{ authors: [UserType] }>("authors")
    .exec();

  return blogs;
}

/**
 * Get all drafts.
 *
 * @returns An array of draft blog objects.
 */
export async function getDrafts() {
  if (!(await getConnection())) return [];

  const drafts = await Blog.find({ published: false })
    .populate<{ authors: [UserType] }>("authors")
    .exec();

  return drafts;
}

/**
 * Get a blog by blog ID.
 *
 * @param id - The ID of the blog to get.
 * @param filterVisible - Whether to filter by visibility.
 * @returns The blog object if found, or an empty array if not found or invalid ID.
 */
export async function getBlogByBlogId(id: string, filterVisible = true) {
  if (!(await getConnection())) return [];

  const visible = filterVisible ? true : undefined;
  const blog = await Blog.find({ blogId: id, visible })
    .populate<{ authors: [UserType] }>("authors")
    .exec();

  return blog;
}

/**
 * Get a blog by object ID.
 * WARNING: This function does not check for visibility.
 *
 * @param id - The ID of the blog to get.
 * @returns The blog object if found, or an empty array if not found or invalid ID.
 */
export async function getBlogByObjectId(id: string) {
  if (!(await getConnection())) return [];
  if (!isValidObjectId(id)) return [];

  const blog = await Blog.find({ _id: new Types.ObjectId(id) })
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

/**
 * Create a new blog draft.
 *
 */
export async function createDraft(authorEmail: string) {
  if (!(await getConnection())) return false;

  // get author id
  const authorResult = await User.find({ email: authorEmail }).exec();
  if (authorResult.length === 0) return false;

  const author = authorResult[0];
  const authorId = author._id;

  // get random image
  const image = await getRandomImage();
  if (!image) return false;

  // create new blog
  const id = Types.ObjectId.createFromTime(Date.now());

  const blog = new Blog({
    _id: id,
    blogId: id.toString(),
    title: "New Blog",
    authors: [authorId],
    published: false,
    publishDate: null,
    visible: false,
    image,
    content: "This is a new blog. Start writing!",
    imageOffset: 0
  });

  await blog.save();

  return blog.id;
}
