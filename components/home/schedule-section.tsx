import { LINKS } from "@/data/links";
import styles from "./schedule-section.module.scss";
import Link from "next/link";
import { LinkButtonOutline, LinkButtonPrimary } from "../ui/button";
import ExternalIcon from "@/icons/external";
import PRACTICE_SCHEDULE from "@/data/schedule";
import { getSchedule } from "@/api/spreadsheet";
import { Suspense } from "react";
import { ScheduleItem } from "@/lib/types";
import Callout from "../ui/callout";

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
          <Callout className={styles.callout}>
            Class has ended! We will resume instruction on May 28, 2025.
          </Callout>
          <div className={styles.buttonGroup}>
            <LinkButtonPrimary
              className="disabled"
              href={LINKS.registration}
              target="_blank"
            >
              Register <ExternalIcon />
            </LinkButtonPrimary>
            <LinkButtonOutline
              className="disabled"
              href={LINKS.registration_online_only}
              target="_blank"
            >
              Register for Online-only <ExternalIcon />
            </LinkButtonOutline>
          </div>
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
