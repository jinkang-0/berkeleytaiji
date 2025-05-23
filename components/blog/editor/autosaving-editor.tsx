"use client";

import { Plate, PlateEditor, PlateProps } from "@udecode/plate/react";
import { useBlogContext } from "../context-blog";
import { Value } from "@udecode/plate";
import { useRef, useState } from "react";
import { serializeValue } from "./editor-config-static";
import { convert } from "html-to-text";

interface AutosaveState {
  lastSavedValue: Value;
  currentValue: Value;
}

const autosaveInterval = 2000; // 2 seconds

export default function AutosavingEditor(props: PlateProps<PlateEditor>) {
  const { saveBlog, reportEdit } = useBlogContext();
  const autosaveState = useRef<AutosaveState>({
    lastSavedValue: [],
    currentValue: []
  });
  const [autosaveTimeout, setAutosaveTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

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
      setAutosaveTimeout(null);
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

    // reset existing timeout
    if (autosaveTimeout) {
      clearTimeout(autosaveTimeout);
    } else {
      // first time typing, record current value for checking
      // and report edit status
      autosaveState.current.lastSavedValue = value;
      reportEdit();
    }

    // attempt to autosave
    setAutosaveTimeout(
      setTimeout(() => {
        attemptAutosave();
      }, autosaveInterval)
    );
  };

  return <Plate {...props} onValueChange={handleValueChange} />;
}
