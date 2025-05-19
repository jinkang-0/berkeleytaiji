"use client";

import TrashIcon from "@/icons/trash";
import { ButtonGhost } from "@/components/ui/button";
import { useCallback } from "react";
import { deleteDraft } from "@/api/db";
import { useRouter } from "next/navigation";

export default function ButtonDeleteBlog({ blogId }: { blogId: string }) {
  const router = useRouter();

  const handleClick = useCallback(async () => {
    await deleteDraft(blogId);

    router.replace("/blog");
  }, [blogId, router]);

  return (
    <ButtonGhost onClick={handleClick}>
      <TrashIcon />
    </ButtonGhost>
  );
}
