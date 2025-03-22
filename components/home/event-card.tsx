import { Event } from "@/lib/types";
import MapIcon from "@/icons/map";
import { getDate, getMonth } from "@/lib/utils";
import styles from "./events-section.module.scss";
import AttachmentIcon from "@/icons/attachment";
import { LinkButtonGhost } from "../ui/button";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const month = getMonth(event.date);
  const date = getDate(event.date);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p>{month}</p>
        <span>{date}</span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardDetails}>
          <b>{event.name}</b>
          <span>
            {event.from} - {event.to}
          </span>
          <div>
            <div>
              <MapIcon />
            </div>
            <p>{event.location}</p>
          </div>
        </div>
        <div className={styles.cardAttachments}>
          {event.attachments.length > 0 &&
            event.attachments.map((att) => (
              <LinkButtonGhost key={att} href={att} target="_blank">
                <AttachmentIcon />
              </LinkButtonGhost>
            ))}
        </div>
      </div>
    </div>
  );
}
