import { LINKS } from "@/data/links";
import styles from "./schedule-section.module.scss";
import Link from "next/link";
import { LinkButtonOutline, LinkButtonPrimary } from "../ui/button";
import ExternalIcon from "@/icons/external";
import PRACTICE_SCHEDULE, { SCHEDULE_SETTINGS } from "@/data/schedule";
import { getSchedule } from "@/api/spreadsheet";
import { Suspense } from "react";
import { ScheduleItem } from "@/lib/types";
import Callout from "../ui/callout";
import { newUTCDate, parseDate } from "@/lib/utils";

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
  const today = new Date();
  const classStartDate = newUTCDate(SCHEDULE_SETTINGS.classStartDate);
  const classEndDate = newUTCDate(SCHEDULE_SETTINGS.classEndDate);
  const registrationStartDate = newUTCDate(
    SCHEDULE_SETTINGS.registrationStartDate
  );

  const classInSession = today >= classStartDate && today <= classEndDate;
  const registrationOpen =
    today >= registrationStartDate && today < classEndDate;

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
          {!classInSession ? (
            <Callout type={registrationOpen ? "success" : "warning"}>
              {/* class ended */}
              {today < classStartDate && today < registrationStartDate && (
                <>
                  Class has ended! We will resume on{" "}
                  {parseDate(SCHEDULE_SETTINGS.classStartDate)}.
                </>
              )}
              {/* class upcoming */}
              {today < classStartDate && today >= registrationStartDate && (
                <>
                  Registration is open! Classes start on{" "}
                  {parseDate(SCHEDULE_SETTINGS.classStartDate)}.
                </>
              )}
              {/* class ended, future start uncertain */}
              {today > classEndDate && (
                <>Classes have ended! We will resume next semester.</>
              )}
            </Callout>
          ) : null}
          <div className={styles.buttonGroup}>
            <LinkButtonPrimary
              className={registrationOpen ? "" : "disabled"}
              href={LINKS.registration}
              target="_blank"
            >
              Register <ExternalIcon />
            </LinkButtonPrimary>
            <LinkButtonOutline
              className={registrationOpen ? "" : "disabled"}
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
