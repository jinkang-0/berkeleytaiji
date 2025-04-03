import { Blog, UserType, getConnection } from "./mongoose";

// export functions
export async function getBlogs() {
  if (!(await getConnection())) return [];

  const blogs = await Blog.find({})
    .populate<{ authors: [UserType] }>("authors")
    .exec();

  return blogs;
}
