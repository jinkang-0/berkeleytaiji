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
          Taijiquan (太极拳), or tai chi, is a traditional Chinese martial art
          where practitioners practice with slow, deliberate movements to focus
          on the internal movements on their body.
          <br /> <br />
          At Cal Taiji, we teach tai chi with an emphasis on health and
          wellness. Tai chi can improve your physical health, in muscular
          strength, flexibility, and balance. It can also aid with your mental
          health, as exercises can help ease the mind and relax tension in the
          muscles.
          <br /> <br />
          We focus on Sun style tai chi, as it very easily applies to the
          purpose of health and wellness. That said, we also mix in elements
          from Yang and Chen to work on flexibility and strength.
          <br /> <br />
          Advanced members may choose to hone in and perfect a specific style
          and form after completing 3 semesters. This can be a long tai chi hand
          form, a tai chi weapon form, or other styles of tai chi.
          Alternatively, members can also learn from different martial arts,
          like Xingyi, Bagua, or Shaolin, to further advance their
          understanding.
        </p>
        <SingleWhip className={styles.singlewhip} />
      </div>
    </section>
  );
}
