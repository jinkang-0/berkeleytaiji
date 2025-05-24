"use client";

import { ButtonGhost, ButtonPrimary } from "@/components/ui/button";
import { useBlogContext } from "../context-blog";
import * as Dialog from "@radix-ui/react-dialog";
import BookOpen from "@/icons/editor/book-open";
import NotVisible from "@/icons/not-visible";
import VisibleIcon from "@/icons/visible";
import { useRouter } from "next/navigation";
import { deleteDraft, numSameIdBlogs, updateBlog } from "@/api/db";
import styles from "./editor-actions.module.scss";
import dialogStyles from "@/components/ui/dialog.module.scss";
import { useCallback } from "react";

export default function EditorActions() {
  const {
    blog: { published }
  } = useBlogContext();

  return (
    <div className={styles.actions}>
      {published ? <BlogEditorActions /> : <DraftEditorActions />}
    </div>
  );
}

function DraftEditorActions() {
  const {
    saveBlog,
    blog: { _id, title }
  } = useBlogContext();
  const router = useRouter();

  const publishBlog = useCallback(async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const yearMonth = `${year}-${month < 10 ? "0" + month : month}`;

    const trimmedTitle = title
      .toLowerCase()
      .replaceAll(/[^\w\s]/g, "")
      .replaceAll(/\W/g, "-");

    let blogId = `${yearMonth}-${trimmedTitle}`;
    const numSameName = await numSameIdBlogs(blogId);
    if (numSameName > 0) blogId = `${blogId}-${numSameName}`;

    saveBlog({ published: true, publishDate: today, blogId, visible: true });

    router.push(`/blog`);
  }, [saveBlog, title, router]);

  const discardBlog = useCallback(() => {
    deleteDraft(_id);
    router.push("/blog");
  }, [_id, router]);

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonGhost className={styles.gray}>Discard</ButtonGhost>
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
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonPrimary>
            <BookOpen />
            Publish
          </ButtonPrimary>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={dialogStyles.dialogOverlay} />
          <Dialog.Content className={dialogStyles.dialogContent}>
            <Dialog.Title className={dialogStyles.dialogTitle}>
              Publish?
            </Dialog.Title>
            <Dialog.Description className={dialogStyles.dialogDescription}>
              You are about to publish this blog to the public.
            </Dialog.Description>
            <footer>
              <Dialog.Close asChild>
                <ButtonGhost>Cancel</ButtonGhost>
              </Dialog.Close>
              <Dialog.Close asChild>
                <ButtonPrimary onClick={publishBlog}>Confirm</ButtonPrimary>
              </Dialog.Close>
            </footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

function BlogEditorActions() {
  const {
    blog: { visible, _id, blogId },
    setBlogState
  } = useBlogContext();
  const router = useRouter();

  const unpublishBlog = useCallback(() => {
    updateBlog(_id, {
      published: false,
      visible: false,
      blogId: _id,
      publishDate: null
    });
    router.push("/blog");
  }, [router, _id]);

  const toggleVisibility = useCallback(() => {
    updateBlog(_id, { visible: !visible });
    setBlogState((prev) => ({ ...prev, visible: !visible }));
    router.replace(`/blog/${blogId}`);
  }, [router, _id, blogId, setBlogState, visible]);

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonGhost className={styles.gray}>Unpublish</ButtonGhost>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={dialogStyles.dialogOverlay} />
          <Dialog.Content className={dialogStyles.dialogContent}>
            <Dialog.Title className={dialogStyles.dialogTitle}>
              Are you sure?
            </Dialog.Title>
            <Dialog.Description className={dialogStyles.dialogDescription}>
              This blog will be unpublished and removed from public access.
              However, it will still be available in your drafts.
              <br /> <br />
              Once you publish it again, it may appear with a different publish
              date and potentially different URL.
            </Dialog.Description>
            <footer>
              <Dialog.Close asChild>
                <ButtonGhost>Cancel</ButtonGhost>
              </Dialog.Close>
              <Dialog.Close asChild>
                <ButtonPrimary onClick={unpublishBlog}>Confirm</ButtonPrimary>
              </Dialog.Close>
            </footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonPrimary>
            {visible ? (
              <>
                <NotVisible />
                Hide Blog
              </>
            ) : (
              <>
                <VisibleIcon />
                Show Blog
              </>
            )}
          </ButtonPrimary>
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
                <ButtonPrimary onClick={toggleVisibility}>
                  Confirm
                </ButtonPrimary>
              </Dialog.Close>
            </footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
