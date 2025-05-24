"use client";

import { useState } from "react";
import { useBlogContext } from "../context-blog";
import styles from "./editor.module.scss";

const placeholder = "Untitled";

export default function EditorTitle({
  defaultTitle = placeholder
}: {
  defaultTitle?: string;
}) {
  const blogCtx = useBlogContext();
  const [previousTitle, setPreviousTitle] = useState(
    blogCtx.blog.title || defaultTitle
  );
  const [title, setTitle] = useState(blogCtx.blog.title || defaultTitle);

  // store title change in state
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value || "";
    setTitle(newTitle);
  };

  // save blog when user unfocuses the title input
  const handleUnfocus = () => {
    if (title === previousTitle) return;
    const newTitle = title === "" ? placeholder : title;
    setPreviousTitle(newTitle);
    blogCtx.setBlogState((prev) => ({ ...prev, title: newTitle }));
    blogCtx.saveBlog({ title: newTitle });
  };

  return (
    <div className={styles.titleContainer}>
      <input
        type="text"
        onChange={(e) => handleTitleChange(e)}
        onBlur={() => handleUnfocus()}
        value={title}
        placeholder={placeholder}
        className={styles.editableTitle}
      />
    </div>
  );
}
