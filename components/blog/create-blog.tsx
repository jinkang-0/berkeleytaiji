"use client";

import NewBlogIcon from "@/icons/new-blog";
import { useRouter } from "next/navigation";
import { ButtonSingleSecondary } from "../ui/button-single";
import { createDraft } from "@/api/db";

export default function ButtonCreateBlog({ userEmail }: { userEmail: string }) {
  const router = useRouter();

  const handleClick = async () => {
    // create new blog
    const draftId = await createDraft(userEmail);

    // redirect to new blog page
    router.push(`/blog/draft/${draftId}`);
  };

  return (
    <ButtonSingleSecondary onClick={handleClick} icon={<NewBlogIcon />}>
      Create new blog
    </ButtonSingleSecondary>
  );
}
