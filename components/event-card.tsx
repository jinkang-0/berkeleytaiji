import { Event } from "@/lib/types";
import styles from "./event-card.module.scss";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className={styles.card}>
      <header>
        <p>{event.month}</p>
        <strong>{event.date}</strong>
      </header>
      <section>
        <div>
          <h6>{event.name}</h6>
          <span>{event.time}</span>
        </div>
        <div>
          <p>{event.location}</p>
        </div>
      </section>
    </div>
  );
}
