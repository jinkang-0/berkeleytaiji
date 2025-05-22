"use client";

import { useEffect, useState } from "react";
import { useBlogContext } from "../context-blog";
import LoadingIcon from "@/icons/loading";
import Checkmark from "@/icons/checkmark";
import styles from "./saving-indicator.module.scss";

export default function SavingIndicator() {
  const blogContext = useBlogContext();
  const { isSaving } = blogContext;
  const [visible, setVisible] = useState(false);
  const [, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isSaving) {
      setVisible(true);
      setTimer((prev) => {
        if (prev) clearTimeout(prev);
        return null;
      });
    } else if (visible) {
      setTimer(
        setTimeout(() => {
          setVisible(false);
        }, 2000)
      );
    }
  }, [isSaving, visible]);

  return (
    <div className={`${styles.container} ${visible ? styles.visible : ""}`}>
      {isSaving ? (
        <div className={styles.saving}>
          <LoadingIcon />
          <span>Saving...</span>
        </div>
      ) : (
        <div className={styles.saved}>
          <Checkmark />
          <span>Saved</span>
        </div>
      )}
    </div>
  );
}
