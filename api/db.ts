"use server";

import {
  Blog,
  BlogType,
  User,
  UserType,
  getConnection
} from "@/api/setup/mongoose";
import { getRandomImage } from "./unsplash";
import { isValidObjectId, Types } from "mongoose";
import { serializeLeanDoc } from "@/lib/utils";
import { getSession, isAdminSession } from "./auth";

/**
 * Get all viewable blogs.
 *
 * @returns An array of blog objects.
 */
export async function getBlogs() {
  if (!(await getConnection())) return [];

  const isAdmin = await isAdminSession();
  const query = !isAdmin ? { visible: true } : {};
  const blogs = await Blog.find({ ...query, published: true })
    .select("-__v -content")
    .populate<{ authors: [UserType] }>("authors")
    .lean();

  return serializeLeanDoc(blogs);
}

/**
 * Get all drafts.
 *
 * @returns An array of draft blog objects.
 */
export async function getDrafts() {
  if (!(await getConnection())) return [];
  if (!isAdminSession()) return [];

  const drafts = await Blog.find({ published: false })
    .populate<{ authors: [UserType] }>("authors")
    .lean();

  return serializeLeanDoc(drafts);
}

/**
 * Get a blog by blog ID.
 *
 * @param id - The ID of the blog to get.
 * @param filterVisible - Whether to filter by visibility.
 * @returns The blog object if found, or an empty array if not found or invalid ID.
 */
export async function getBlogByBlogId(id: string) {
  if (!(await getConnection())) return [];

  const isAdmin = await isAdminSession();
  const visible = !isAdmin ? { visible: true } : {};
  const blog = await Blog.find({ blogId: id, ...visible })
    .populate<{ authors: [UserType] }>("authors")
    .lean();

  return serializeLeanDoc(blog);
}

/**
 * Get a blog by object ID.
 *
 * @param id - The ID of the blog to get.
 * @returns The blog object if found, or an empty array if not found or invalid ID.
 */
export async function getBlogByObjectId(id: string) {
  if (!(await getConnection())) return [];
  if (!isValidObjectId(id)) return [];
  if (!isAdminSession()) return [];

  const blog = await Blog.find({ _id: new Types.ObjectId(id) })
    .populate<{ authors: [UserType] }>("authors")
    .lean();

  return serializeLeanDoc(blog);
}

/**
 * Check if the user is an admin.
 *
 * @param email - The email of the user to check.
 * @returns True if the user is an admin, false otherwise.
 */
export const checkAdmin = async (email: string) => {
  if (!(await getConnection())) return false;

  const num = await User.find({ email }).countDocuments().lean();
  if (num === 0) return false;

  return true;
};

/**
 * Create a new blog draft.
 */
export async function createDraft() {
  if (!(await getConnection())) return false;
  if (!isAdminSession()) return false;

  // get session user
  const session = await getSession();
  if (!session.success) return false;

  const user = session.user;
  if (!user) return false;

  // get author id
  const authorResult = await User.find({ email: user.email }).lean();
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
    content: [
      {
        type: "p",
        children: [
          {
            text: "This is a new blog. Start writing!"
          }
        ]
      }
    ],
    imageOffset: 0,
    summary: "This is a new blog. Start writing!"
  });

  await blog.save();

  return blog.id;
}

/**
 * Update a blog.
 *
 * @param id - The ID of the blog to update.
 * @param data - The data to update the blog with.
 */
export async function updateBlog(id: string, data: Partial<BlogType>) {
  if (!(await getConnection())) return false;
  if (!isValidObjectId(id)) return false;
  if (!isAdminSession()) return false;

  const result = await Blog.updateOne(
    { _id: new Types.ObjectId(id) },
    { ...data }
  ).exec();

  if (result.modifiedCount === 0) return false;

  return true;
}

/**
 * Delete a blog draft.
 *
 * @param id - The ID of the blog draft to delete.
 * @returns True if the draft was deleted, false otherwise.
 */
export async function deleteDraft(id: string) {
  if (!(await getConnection())) return false;
  if (!isValidObjectId(id)) return false;
  if (!isAdminSession()) return false;

  const result = await Blog.deleteOne({ _id: new Types.ObjectId(id) }).exec();
  if (result.deletedCount === 0) return false;

  return true;
}

/**
 * Get the number of blogs with the same blogId.
 *
 * @param blogId - The blogId to check.
 * @returns The number of blogs with the same blogId.
 * @remarks This function is used to ensure that blog IDs are unique when publishing a new blog.
 */
export async function numSameIdBlogs(blogId: string) {
  if (!(await getConnection())) return 0;
  if (!isAdminSession()) return 0;

  const num = await Blog.find({ blogId }).countDocuments().lean();

  return num;
}
