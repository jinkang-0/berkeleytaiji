"use server";

import { revalidatePath, revalidateTag } from "next/cache";

/**
 * Revalidates a path
 */
export async function revalidatePathInternal(path: string) {
  revalidatePath(path);
}

export async function revalidateTagInternal(tag: string) {
  revalidateTag(tag);
}
