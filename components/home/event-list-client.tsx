"use client";

import { useState } from "react";
import { ButtonGhost } from "../ui/button";
import styles from "./events-section.module.scss";

interface EventListClientProps {
  children: React.ReactNode;
}

export default function EventListClient({ children }: EventListClientProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={`${styles.extras} ${expanded ? styles.expanded : ""}`}>
        {children}
      </div>
      <ButtonGhost onClick={() => setExpanded((prev) => !prev)}>
        {expanded ? "show less" : "show more"}
      </ButtonGhost>
    </>
  );
}
