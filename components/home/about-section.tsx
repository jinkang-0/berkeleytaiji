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
          on the internal movements of their body.
          <br /> <br />
          At Cal Taiji, we teach tai chi with an emphasis on health and
          wellness. This means we practice with the intent to improve physical
          fitness and to relax the mind.
          <br /> <br />
          We focus on Sun style tai chi, as it is most applicable to the purpose
          of health and wellness. That said, we also mix in elements from Yang
          and Chen styles to work on flexibility and strength.
          <br /> <br />
          Advanced members can try honing their craft in a specific style of tai
          chi, or explore other internal martial arts like Xingyi and Bagua,
          under the advisory of Sifu Fong.
        </p>
        <SingleWhip className={styles.singlewhip} />
      </div>
    </section>
  );
}
