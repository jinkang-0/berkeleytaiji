import { LINKS } from "@/data/links";
import styles from "./schedule-section.module.scss";
import Link from "next/link";
import { LinkButtonOutline, LinkButtonPrimary } from "../ui/button";
import ExternalIcon from "@/icons/external";
import PRACTICE_SCHEDULE, { SCHEDULE_SETTINGS } from "@/data/schedule";
import { getSchedule, loadScheduleSettings } from "@/api/spreadsheet";
import { Suspense } from "react";
import { ScheduleItem, ScheduleSettings } from "@/lib/types";
import Callout from "../ui/callout";
import { parseDate } from "@/lib/utils";

//
// Class Schedule Components
//

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

//
// Registration Components
//

function RegistrationTemplate({ config }: { config: ScheduleSettings }) {
  const today = new Date();

  const classEnded =
    (config.classStartDate &&
      config.registrationStartDate &&
      today < config.classStartDate &&
      today < config.registrationStartDate) ||
    (config.classEndDate && today > config.classEndDate) ||
    (!config.classStartDate &&
      !config.classInSession &&
      !config.registrationOpen);

  const classUpcoming =
    config.classStartDate && config.registrationStartDate
      ? today < config.classStartDate && today >= config.registrationStartDate
      : !config.classInSession && config.registrationOpen;

  const classFutureUncertain = config.classEndDate
    ? today > config.classEndDate
    : true;

  const registrationOpen =
    config.registrationOpen ||
    (config.registrationStartDate &&
      config.classEndDate &&
      today >= config.registrationStartDate &&
      today <= config.classEndDate);

  return (
    <>
      {classEnded || classUpcoming ? (
        <Callout type={config.registrationOpen ? "success" : "warning"}>
          {/* class ended */}
          {classEnded && !classFutureUncertain && (
            <>
              Class has ended! We will resume on{" "}
              {parseDate(SCHEDULE_SETTINGS.classStartDate)}.
            </>
          )}
          {/* class upcoming */}
          {classUpcoming && (
            <>
              Registration is open! Classes start on{" "}
              {parseDate(SCHEDULE_SETTINGS.classStartDate)}.
            </>
          )}
          {/* class ended, future start uncertain */}
          {classEnded && classFutureUncertain && (
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
    </>
  );
}

async function Registration() {
  const config = await loadScheduleSettings();

  return <RegistrationTemplate config={config} />;
}

//
// Main Schedule Section Component
//

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
          <Registration />
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
