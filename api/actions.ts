"use server";

import { revalidatePath } from "next/cache";

export async function revalidateContent() {
  await Promise.all([
    revalidatePath("/(main)", "page"),
    revalidatePath("/(main)/blog", "page")
  ]);
}
