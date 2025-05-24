"use server";

import { revalidatePath } from "next/cache";

/**
 * Revalidates a path
 */
export async function revalidate(path: string) {
  revalidatePath(path);
}
