import { getSchedule } from "@/api/spreadsheet";
import styles from "@/app/page.module.scss";
import PRACTICE_SCHEDULE from "@/data/schedule";

export const SchedulePlaceholder = () => {
  return (
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
  );
};

export default async function Schedule() {
  const schedule = await getSchedule();

  return (
    <div className={styles.scheduleTable}>
      {schedule.map((sched) => (
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
  );
}
