import { LINKS } from "@/data/links";
import styles from "./schedule-section.module.scss";
import Link from "next/link";
import { LinkButtonPrimary } from "../ui/button";
import ExternalIcon from "@/icons/external";
import PRACTICE_SCHEDULE from "@/data/schedule";
import { getSchedule } from "@/api/spreadsheet";
import { Suspense } from "react";
import { ScheduleItem } from "@/lib/types";

interface ScheduleProps {
  items: ScheduleItem[];
}

function ScheduleTemplate({ items }: ScheduleProps) {
  return items.map((sched) => (
    <div
      key={sched.Day + sched.From + sched.To}
      className={styles.scheduleBlock}
    >
      <p>{sched.Day}</p>
      <span>
        {sched.From} - {sched.To}
      </span>
      <div>
        <p>{sched.Location}</p>
        {sched.Alternative ? <p>({sched.Alternative})</p> : null}
      </div>
    </div>
  ));
}

function DefaultSchedule() {
  return <ScheduleTemplate items={PRACTICE_SCHEDULE} />;
}

async function Schedule() {
  const schedule = (await getSchedule()) as ScheduleItem[];

  return <ScheduleTemplate items={schedule} />;
}

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
          <Suspense fallback={<DefaultSchedule />}>
            <Schedule />
          </Suspense>
        </div>
        <footer>
          <LinkButtonPrimary href={LINKS.registration} target="_blank">
            Register <ExternalIcon />
          </LinkButtonPrimary>
          <p className={styles.note}>
            Online-only members and UC Berkeley students, alumni, and faculty
            can receive discounts. Regular members can attend both in person and
            online classes.
          </p>
        </footer>
      </div>
    </section>
  );
}
