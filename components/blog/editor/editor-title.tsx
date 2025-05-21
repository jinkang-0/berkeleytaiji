"use client";

import { useState } from "react";
import { useBlogContext } from "../context-blog";
import styles from "./editor.module.scss";

export default function EditorTitle({
  defaultTitle = "Untitled"
}: {
  defaultTitle?: string;
}) {
  const blogCtx = useBlogContext();
  const [previousTitle, setPreviousTitle] = useState(
    blogCtx.blog.title || defaultTitle
  );
  const [title, setTitle] = useState(blogCtx.blog.title || defaultTitle);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value || "";
    setTitle(newTitle);
  };

  const handleUnfocus = () => {
    if (title === previousTitle) return;
    setPreviousTitle(title);
    blogCtx.setBlogState((prev) => ({ ...prev, title }));
    blogCtx.saveBlog({ title });
  };

  return (
    <div className={styles.titleContainer}>
      <input
        type="text"
        onChange={(e) => handleTitleChange(e)}
        onBlur={() => handleUnfocus()}
        value={title}
        placeholder="Untitled"
        className={styles.editableTitle}
      />
    </div>
  );
}
