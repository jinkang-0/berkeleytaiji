"use client";

import { Plate, PlateEditor, PlateProps } from "@udecode/plate/react";
import { useBlogContext } from "../context-blog";
import { Value } from "@udecode/plate";
import { useRef, useState } from "react";
import { serializeValue } from "./editor-static";
import { convert } from "html-to-text";

interface AutosaveState {
  lastSavedValue: Value;
  currentValue: Value;
}

const autosaveInterval = 1000; // 1 second

export default function AutosavingEditor(props: PlateProps<PlateEditor>) {
  const { saveBlog } = useBlogContext();
  const [checkingAutosave, setCheckingAutosave] = useState(false);
  const autosaveState = useRef<AutosaveState>({
    lastSavedValue: [],
    currentValue: []
  });

  const attemptAutosave = () => {
    const currentValue = autosaveState.current.currentValue;
    const lastSavedValue = autosaveState.current.lastSavedValue;

    // if current and previous values are the same, user stopped typing, so save the blog
    if (JSON.stringify(lastSavedValue) === JSON.stringify(currentValue)) {
      (async () => {
        const serializedContent = await serializeValue(currentValue);
        const result = convert(serializedContent);
        const trimmed = result.replaceAll(/\s+/g, " ").slice(0, 300);
        saveBlog({ content: currentValue, summary: trimmed });
      })();
      setCheckingAutosave(false);
    } else {
      // otherwise, record current change and keep checking
      autosaveState.current.lastSavedValue = currentValue;
      setTimeout(() => {
        attemptAutosave();
      }, autosaveInterval);
    }
  };

  const handleValueChange = ({ value }: { value: Value }) => {
    autosaveState.current.currentValue = value;
    if (checkingAutosave) return;

    // attempt to autosave
    autosaveState.current.lastSavedValue = value;
    setTimeout(() => {
      attemptAutosave();
    }, autosaveInterval);
    setCheckingAutosave(true);
  };

  return <Plate {...props} onValueChange={handleValueChange} />;
}
