import { LINKS } from "@/data/links";
import styles from "./schedule-section.module.scss";
import Link from "next/link";
import { LinkButtonPrimary } from "../ui/button";
import ExternalIcon from "@/icons/external";
import PRACTICE_SCHEDULE from "@/data/schedule";

export default function ScheduleSection() {
  return (
    <section className={styles.section}>
      <h3>Schedule</h3>
      <div className={styles.schedule}>
        <p>
          In person practice is held at the{" "}
          <Link href={LINKS.location}>Recreational Sports Facility (RSF)</Link>{" "}
          on the UC Berkeley campus. All skill levels are welcome! New members
          can try out their first week of classes for free.
        </p>
        <div className={styles.scheduleTable}>
          {PRACTICE_SCHEDULE.map((sched) => (
            <div
              key={sched.Day + sched.From + sched.To}
              className={styles.scheduleBlock}
            >
              <p>{sched.Day}</p>
              <span>
                {sched.From} - {sched.To}
              </span>
              <div>{sched.Location}</div>
            </div>
          ))}
        </div>
        <footer>
          <LinkButtonPrimary href={LINKS.registration} target="_blank">
            Register <ExternalIcon />
          </LinkButtonPrimary>
          <p className={styles.note}>
            Online only members, students, and UC Berkeley alumni/faculty can
            receive discounts. Regular members can attend both in person and
            online classes.
          </p>
        </footer>
      </div>
    </section>
  );
}
