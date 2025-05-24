"use client";

import NewBlogIcon from "@/icons/new-blog";
import { useRouter } from "next/navigation";
import { ButtonSingleSecondary } from "@/components/ui/button-single";
import { createDraft } from "@/api/db";
import { useCallback } from "react";

export default function ButtonCreateBlog() {
  const router = useRouter();

  const handleClick = useCallback(async () => {
    // create new blog
    const draftId = await createDraft();

    // redirect to new blog page
    router.push(`/blog/draft/${draftId}`);
  }, [router]);

  return (
    <ButtonSingleSecondary onClick={handleClick} icon={<NewBlogIcon />}>
      Create new blog
    </ButtonSingleSecondary>
  );
}
