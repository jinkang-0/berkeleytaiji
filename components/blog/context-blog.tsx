"use client";

import { updateBlog } from "@/api/db";
import { BlogType } from "@/api/setup/mongoose";
import { PopulatedBlog } from "@/lib/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
  useTransition
} from "react";

interface BlogContextProps {
  blog: PopulatedBlog;
  setBlogState: Dispatch<SetStateAction<PopulatedBlog>>;
  saveBlog: (data: Partial<BlogType>) => Promise<boolean>;
  isSaving: boolean;
}

const BlogContext = createContext<BlogContextProps | null>(null);

export const useBlogContext = () => {
  const ctx = useContext(BlogContext);
  if (!ctx) {
    throw new Error("useBlogContext must be used within a BlogContextProvider");
  }
  return ctx;
};

export function BlogContextProvider({
  children,
  blog
}: {
  children: React.ReactNode;
  blog: PopulatedBlog;
}) {
  const [blogState, setBlogState] = useState<PopulatedBlog>(blog);
  const [isSaving, startSaving] = useTransition();

  const saveBlog = useCallback(
    async (data: Partial<BlogType>) => {
      const result = updateBlog(blogState._id, data);
      startSaving(async () => {
        await result;
      });
      return await result;
    },
    [startSaving, blogState._id]
  );

  return (
    <BlogContext.Provider
      value={{ blog: blogState, setBlogState, isSaving, saveBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
}
