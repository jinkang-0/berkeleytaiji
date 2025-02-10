"use client";

import styles from "@/app/page.module.scss";
import { useMemo, useState } from "react";
import EventCard from "./event-card";
import { ButtonGhost } from "./button";
import { Event } from "@/lib/types";

interface EventListClientProps {
  events: Event[];
}

export default function EventListClient({ events }: EventListClientProps) {
  const [expanded, setExpanded] = useState(false);
  const isOverflowing = useMemo(() => events.length > 3, [events.length]);

  return (
    <div className={styles.eventsList}>
      {events.slice(0, 3).map((ev, idx) => (
        <EventCard event={ev} key={ev.name + idx} />
      ))}
      {isOverflowing && expanded
        ? events
            .slice(3)
            .map((ev, idx) => <EventCard event={ev} key={ev.name + idx} />)
        : null}
      {isOverflowing && (
        <ButtonGhost onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? "show less" : "show more"}
        </ButtonGhost>
      )}
    </div>
  );
}
