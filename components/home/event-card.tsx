import { Event } from "@/lib/types";
import styles from "./event-card.module.scss";
import MapIcon from "@/icons/map";
import { getMonth, getTime } from "@/lib/utils";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const month = getMonth(event.date);
  const date = event.date.getDate();
  const startTime = getTime(event.from);
  const endTime = getTime(event.to);

  return (
    <div className={styles.card}>
      <header>
        <p>{month}</p>
        <strong>{date}</strong>
      </header>
      <div>
        <div>
          <p>{event.name}</p>
          <span>
            {startTime} - {endTime}
          </span>
        </div>
        <div>
          <MapIcon />
          <p>{event.location}</p>
        </div>
      </div>
    </div>
  );
}
