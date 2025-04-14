"use server";

import { revalidatePath } from "next/cache";
import { searchFiles, updateImage, uploadImage } from "./files";

/**
 * Revalidates a path
 */
export async function revalidate(path: string) {
  revalidatePath(path);
}

/**
 * Uploads a file to the blog image folder. Replaces the original if the file with the same name is used.
 *
 * @param file - File object from form input
 */
export async function uploadFile(file: File) {
  const fileId = await searchFiles(file.name);

  if (fileId) await updateImage(file, fileId);
  else await uploadImage(file);
}
