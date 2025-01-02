import { getEvents } from "@/api/spreadsheet";
import EventListClient from "./event-list-client";
import { Event } from "@/lib/types";
import styles from "@/app/page.module.scss";

export const EventListPlaceholder = () => {
  return (
    <div className={styles.eventsList}>
      <div className={styles.placeholder}></div>
      <div className={styles.placeholder}></div>
      <div className={styles.placeholder}></div>
    </div>
  );
};

export default async function EventList() {
  const eventsData = await getEvents();
  const events: Event[] = eventsData.map((ev) => ({
    date: ev.Date,
    from: ev.From,
    to: ev.To,
    location: ev.Location,
    name: ev.Name
  }));

  return <EventListClient events={events} />;
}
