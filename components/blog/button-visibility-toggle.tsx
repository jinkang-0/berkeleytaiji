"use client";

import { updateBlog } from "@/api/db";
import { ButtonGhost, ButtonPrimary } from "@/components/ui/button";
import NotVisible from "@/icons/not-visible";
import VisibleIcon from "@/icons/visible";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import dialogStyles from "@/components/ui/dialog.module.scss";

export default function ButtonVisibilityToggle({
  blogId,
  visible
}: {
  blogId: string;
  visible: boolean;
}) {
  const router = useRouter();

  const toggleVisibility = useCallback(async () => {
    await updateBlog(blogId, { visible: !visible });
    router.replace("/blog");
  }, [blogId, visible, router]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonGhost>{visible ? <VisibleIcon /> : <NotVisible />}</ButtonGhost>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={dialogStyles.dialogOverlay} />
        <Dialog.Content className={dialogStyles.dialogContent}>
          <Dialog.Title className={dialogStyles.dialogTitle}>
            Are you sure?
          </Dialog.Title>
          <Dialog.Description className={dialogStyles.dialogDescription}>
            {visible
              ? "This blog will be hidden from public access."
              : "This blog will be visible to the public."}
          </Dialog.Description>
          <footer>
            <Dialog.Close asChild>
              <ButtonGhost>Cancel</ButtonGhost>
            </Dialog.Close>
            <Dialog.Close asChild>
              <ButtonPrimary onClick={toggleVisibility}>Confirm</ButtonPrimary>
            </Dialog.Close>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
