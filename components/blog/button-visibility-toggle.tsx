"use client";

import { updateVisibility } from "@/api/db";
import { ButtonGhost } from "@/components/ui/button";
import NotVisible from "@/icons/not-visible";
import VisibleIcon from "@/icons/visible";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function ButtonVisibilityToggle({
  blogId,
  visible
}: {
  blogId: string;
  visible: boolean;
}) {
  const router = useRouter();

  const handleClick = useCallback(async () => {
    await updateVisibility(blogId, !visible);

    router.replace("/blog");
  }, [blogId, visible, router]);

  return (
    <ButtonGhost onClick={handleClick}>
      {visible ? <VisibleIcon /> : <NotVisible />}
    </ButtonGhost>
  );
}
