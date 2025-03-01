import SingleWhip from "@/icons/single-whip";
import styles from "./about-section.module.scss";
import YinYang from "@/icons/yinyang";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <h3>About</h3>
      <div className={styles.about}>
        <YinYang className={styles.yinyang} />
        <p>
          Berkeley Taiji is the official taiji club at UC Berkeley, one of the
          many programs offered at the UC Martial Arts Program (UCMAP).
          <br /> <br />
          We teach tai chi with an emphasis on health and wellness. This means
          we practice with the intent to improve physical fitness and to relax
          the mind.
          <br /> <br />
          We focus on Sun style tai chi, as it is most applicable to this
          purpose, and the simplest style to get started. That said, this is
          more of a holistic view, as many exercises are mixed with elements
          from Yang and Chen styles to work on flexibility and strength.
          <br /> <br />
          After grasping the basics, members are encouraged to further hone
          their craft. This can mean mastering complete forms, trying out
          weapons, or exploring other martial arts like Xingyi, Bagua, or
          Shaolin.
        </p>
        <SingleWhip className={styles.singlewhip} />
      </div>
    </section>
  );
}
