import { getEvents } from "@/api/spreadsheet";
import EventListClient from "./event-list-client";
import { Event } from "@/lib/types";
import styles from "@/app/page.module.scss";
import LeavesIcon from "@/icons/leaves";
import { compareDate } from "@/lib/utils";

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
  const today = new Date();
  const events: Event[] = eventsData
    .map((ev) => ({
      date: ev.Date,
      from: ev.From,
      to: ev.To,
      location: ev.Location,
      name: ev.Name
    }))
    .filter((ev) => compareDate(today, ev.date, ev.to))
    .slice(0, 10);

  return events.length > 0 ? (
    <EventListClient events={events} />
  ) : (
    <div className={styles.emptyAnnouncer}>
      <LeavesIcon />
      <p>No upcoming events right now, check back later!</p>
    </div>
  );
}
