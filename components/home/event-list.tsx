"use client";

import styles from "@/app/page.module.scss";
import UPCOMING_EVENTS from "@/data/events";
import EventCard from "./event-card";
import { useMemo, useState } from "react";
import { ButtonGhost } from "../ui/button";

export default function EventList() {
  const [expanded, setExpanded] = useState(false);
  const isOverflowing = useMemo(() => UPCOMING_EVENTS.length > 3, []);

  return (
    <div className={styles.eventsList}>
      {UPCOMING_EVENTS.slice(0, 3).map((ev, idx) => (
        <EventCard event={ev} key={ev.name + idx} />
      ))}
      {isOverflowing && expanded
        ? UPCOMING_EVENTS.slice(3).map((ev, idx) => (
            <EventCard event={ev} key={ev.name + idx} />
          ))
        : null}
      {isOverflowing && (
        <ButtonGhost onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? "show less" : "show more"}
        </ButtonGhost>
      )}
    </div>
  );
}
