"use client";

import { PlateContent, usePlateEditor } from "@udecode/plate/react";
import { EditorToolbar } from "./editor-toolbar";
import { useBlogContext } from "../context-blog";
import { editorComponents, editorPlugins } from "./editor-react";
import AutosavingEditor from "./autosaving-editor";
import styles from "../blog-content.module.scss";

export default function EditorContent() {
  const {
    blog: { content: blogContent }
  } = useBlogContext();

  const editor = usePlateEditor({
    value: blogContent,
    plugins: editorPlugins,
    components: editorComponents
  });

  return (
    <AutosavingEditor editor={editor}>
      <EditorToolbar />
      <PlateContent
        className={styles.content}
        style={{ minHeight: "100px" }}
        placeholder="Write something..."
      />
    </AutosavingEditor>
  );
}
