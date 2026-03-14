import { Event } from "@/lib/types";
import MapIcon from "@/icons/map";
import { getDate, getMonth } from "@/lib/utils";
import styles from "./events-section.module.scss";
import AttachmentIcon from "@/icons/attachment";
import { LinkButtonGhost } from "../ui/button";

interface EventCardProps {
  event: Event;
}

function EventDate({ event }: EventCardProps) {
  const fromMonth = getMonth(event.fromDate);
  const fromDate = getDate(event.fromDate);
  const toMonth = event.toDate ? getMonth(event.toDate) : "";
  const toDate = event.toDate ? getDate(event.toDate) : "";

  if (!event.toDate)
    return (
      <div className={styles.cardHeader}>
        <p>{fromMonth}</p>
        <span>{fromDate}</span>
      </div>
    );

  if (fromMonth === toMonth)
    return (
      <div className={styles.cardHeader}>
        <p>{fromMonth}</p>
        <span>{fromDate}</span>
        <div className={styles.dateRangeDivider} />
        <span>{toDate}</span>
      </div>
    );

  return (
    <div className={styles.cardHeader}>
      <p>{fromMonth}</p>
      <span>{fromDate}</span>
      <div className={styles.dateRangeDivider} />
      <p>{toMonth}</p>
      <span>{toDate}</span>
    </div>
  );
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className={styles.card}>
      <EventDate event={event} />
      <div className={styles.cardBody}>
        <div className={styles.cardDetails}>
          <b>{event.name}</b>
          <span>
            {event.from === event.to
              ? event.from
              : `${event.from} - ${event.to}`}
          </span>
          <div className={styles.locationBox}>
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
