"use client";

import { useEffect, useState } from "react";
import { useBlogContext } from "../context-blog";
import LoadingIcon from "@/icons/loading";
import Checkmark from "@/icons/checkmark";
import styles from "./saving-indicator.module.scss";
import CloudOff from "@/icons/editor/cloud-off";

function Indicator({ status }: { status: "saving" | "saved" | "unsaved" }) {
  if (status === "saving") {
    return (
      <div className={styles.saving}>
        <LoadingIcon />
        <span>Saving...</span>
      </div>
    );
  }

  if (status === "unsaved") {
    return (
      <div className={styles.unsaved}>
        <CloudOff />
        <span>Unsaved</span>
      </div>
    );
  }

  return (
    <div className={styles.saved}>
      <Checkmark />
      <span>Saved</span>
    </div>
  );
}

export default function SavingIndicator() {
  const blogContext = useBlogContext();
  const { status } = blogContext;
  const [visible, setVisible] = useState(false);
  const [, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (status === "unsaved") {
      setVisible(true);
    } else if (status === "saving") {
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
  }, [status, visible]);

  return (
    <div className={`${styles.container} ${visible ? styles.visible : ""}`}>
      <Indicator status={status} />
    </div>
  );
}
