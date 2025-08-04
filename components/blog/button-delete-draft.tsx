"use client";

import TrashIcon from "@/icons/trash";
import { ButtonGhost, ButtonPrimary } from "@/components/ui/button";
import { useCallback } from "react";
import { deleteDraft } from "@/api/db";
import { useRouter } from "next/navigation";
import { Dialog } from "radix-ui";
import dialogStyles from "@/components/ui/dialog.module.scss";

export default function ButtonDeleteBlog({ blogId }: { blogId: string }) {
  const router = useRouter();

  const discardBlog = useCallback(async () => {
    await deleteDraft(blogId);

    router.replace("/blog");
  }, [blogId, router]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonGhost>
          <TrashIcon />
        </ButtonGhost>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={dialogStyles.dialogOverlay} />
        <Dialog.Content className={dialogStyles.dialogContent}>
          <Dialog.Title className={dialogStyles.dialogTitle}>
            Are you sure?
          </Dialog.Title>
          <Dialog.Description className={dialogStyles.dialogDescription}>
            This will discard everything in this draft. This action cannot be
            reversed.
          </Dialog.Description>
          <footer>
            <Dialog.Close asChild>
              <ButtonGhost>Cancel</ButtonGhost>
            </Dialog.Close>
            <Dialog.Close asChild>
              <ButtonPrimary onClick={discardBlog}>Confirm</ButtonPrimary>
            </Dialog.Close>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
