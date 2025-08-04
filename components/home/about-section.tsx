import SingleWhip from "@/icons/single-whip";
import styles from "./about-section.module.scss";
import YinYang from "@/icons/yinyang";
import Link from "next/link";
import { LINKS } from "@/data/links";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <h3>About</h3>
      <div className={styles.about}>
        <YinYang className={styles.yinyang} />
        <p>
          Berkeley Taiji is the official tai chi club at UC Berkeley, as part of
          the{" "}
          <Link href={LINKS.ucmap} about="_blank">
            UC Martial Arts Program (UCMAP)
          </Link>
          .
          <br /> <br />
          The concept of tai chi covers many things. However, situated in the
          context of a college club, we place an emphasis on health and
          wellness. That is, we aim to help our students improve their physical
          abilities and ease stress through tai chi practice.
          <br /> <br />
          We welcome all students, regardless of prior experience, age, or
          physical aptitude. Whether you are a beginner or an experienced
          practitioner, you will find a place in our community.
          <br /> <br />
          After grasping the basics, members are encouraged to further hone
          their craft. This can mean mastering complete forms, trying out
          weapons, using tai chi in application, or deepening your soft energy
          skills.
        </p>
        <SingleWhip className={styles.singlewhip} />
      </div>
    </section>
  );
}
