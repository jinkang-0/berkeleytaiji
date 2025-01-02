"use client";

import { useCurrentBreakpoint } from "@/lib/hooks";
import styles from "./gallery.module.scss";
import { ButtonGhost } from "../ui/button";
import { Breakpoint } from "@/lib/types";
import { useState } from "react";

const isOverflowing = (breakpoint: Breakpoint, numForms: number) => {
  if (breakpoint === "xl") return numForms > 6;
  if (breakpoint === "lg") return numForms > 4;
  return numForms > 2;
};

interface GalleryClientProps {
  children: React.ReactNode;
  numForms: number;
}

export default function GalleryClient({
  numForms,
  children
}: GalleryClientProps) {
  const breakpoint = useCurrentBreakpoint();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.galleryWrapper}>
      <div className={`${styles.gallery} ${expanded ? styles.expanded : ""}`}>
        {children}
      </div>
      {isOverflowing(breakpoint, numForms) && (
        <ButtonGhost onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? "show less" : "show more"}
        </ButtonGhost>
      )}
    </div>
  );
}
