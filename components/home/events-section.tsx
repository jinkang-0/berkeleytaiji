import { Suspense } from "react";
import styles from "./events-section.module.scss";
import EventList, { EventListPlaceholder } from "./event-list";

export default function EventsSection() {
  return (
    <section className={styles.section}>
      <h3>Upcoming Events</h3>
      <Suspense fallback={<EventListPlaceholder />}>
        <EventList />
      </Suspense>
    </section>
  );
}
