"use client";

import { useState } from "react";
import { ButtonGhost } from "../ui/button";
import styles from "./instructors-section.module.scss";

interface DescriptionProps {
  children?: React.ReactNode;
}

export default function InstructorDescription({ children }: DescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.desc}>
      <p className={expanded ? styles.expanded : ""}>{children}</p>
      <footer>
        <ButtonGhost onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? "show less" : "show more"}
        </ButtonGhost>
      </footer>
    </div>
  );
}
