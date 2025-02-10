import Link from "next/link";
import styles from "./faq-section.module.scss";
import FAQCard, { FAQList } from "./faq-card";

export default function FAQSection() {
  return (
    <section className={styles.section}>
      <h3>FAQ</h3>
      <div className={styles.faq}>
        <FAQList>
          <FAQCard question="What is tai chi?">
            Tai chi, or taijiquan, is one of the three internal Chinese martial
            arts, alongside Xingyi and Bagua. Tai chi is grounded in the Taoist
            philosophy of the same name, and as such draws many concepts from
            the Taoist cosmology.
            <br /> <br />
            From time to time, we may refer to concepts from the tai chi Taoist
            philosophy, many of which unfortunately has no direct translation in
            English. Please ask us to clarify when things get too esoteric!
            <br /> <br />
            While our focus is to teach tai chi for health and wellness, our
            instructors can also demonstrate how the forms practitioners
            practice can be applied for self-defense as well. If you&apos;d like
            to see a demonstration, feel free to ask!
          </FAQCard>
          <FAQCard question="What are the health benefits of tai chi?">
            Tai chi practitioners perform exercises like squats and kicks and
            are asked to do so without momentum. This helps{" "}
            <Link
              href="https://www.health.harvard.edu/staying-healthy/the-health-benefits-of-tai-chi"
              target="_blank"
            >
              develop muscular strength, balance, flexibility, and promote blood
              flow
            </Link>
            , all without needing to raise the heart rate.
            <br /> <br />
            Some exercises are designed to help loosen up the joints, helping to
            release stress and tension built up during the day, which many find
            therapeutic. Many students and adults reportedly find this helpful
            to manage stress, especially if one leads a busy lifestyle.
            <br /> <br />
            Tai chi is also positively linked to{" "}
            <Link
              href="https://www.alzinfo.org/articles/prevention/tai-chi-for-brain-health/"
              target="_blank"
            >
              enhancing memory and cognitive function
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.health.harvard.edu/mind-and-mood/a-sharper-mind-tai-chi-can-improve-cognitive-function"
              target="_blank"
            >
              reduced chance of dementia
            </Link>
            .
            <br /> <br />
            For readers curious in learning more, you can find more sources
            online discussing the health benefits of tai chi. A good source to
            get started on is{" "}
            <Link href="https://a.co/d/eGcBFL1" target="_blank">
              The Harvard Medical School Guide to Tai Chi
            </Link>
            , first published in 2013, which goes over a basic tai chi program,
            the traditional principles of tai chi, and a summary of health
            benefits up to date to its time. That said, you are also welcome to
            email us or join in for the first week for free to learn more.
          </FAQCard>
          <FAQCard question="Are members required to perform?">
            Not at all! Although we encourage all members, new or old, to help
            out at performances, it is not a requirement to join us for
            practice.
          </FAQCard>
          <FAQCard question="How are classes organized?">
            We start class with a joint loosening exercise to release stress
            built up during the day. After that, it is usually followed up with
            a stretch or qigong, which helps practitioners build sensitivity of
            &quot;qi.&quot;
            <br /> <br />
            In the final hour of class, we split off into groups. Beginners will
            practice the fundamental forms while advanced members work on their
            own projects under the guidance of Sifu Fong.
            <br /> <br />
            It&apos;s important to note that forms are taught piece by piece. No
            one is shown a complete form and expected to remember it.
            You&apos;re welcome to take as much time and repetitions as you need
            to understand the core concepts.
          </FAQCard>
          <FAQCard question="What forms are practiced?">
            For practitioners who are new to tai chi, we start them off by
            building their footwork and understanding of energy with three
            fundamental forms. Sun 12 in the Fall, Sun Guangbo in the Spring,
            and Bafa Wubu in the Summer.
            <br /> <br />
            For practitioners who already have experience in tai chi, or have
            completed their fundamentals, they can choose to work on perfecting
            a form of their choice! Whether it&apos;s a long tai chi hand form,
            a tai chi weapon form, or a form from another martial art like
            Xingyi or Bagua.
            <br /> <br />
            We&apos;re fortunate to have Sifu Bryant Fong who&apos;s
            knowledgeable in a broad range of traditional Chinese martial arts
            to provide pointers for Chen, Yang, and Sun style tai chi; for
            weapons like swords, fans, and staff; and for other martial arts
            like Baguazhang and Xingyiquan.
            <br /> <br />
            For a compendium of forms practiced by students currently or in the
            recent past, you can check out this live{" "}
            <Link
              target="_blank"
              href="https://rough-editorial-8b3.notion.site/Cal-Taiji-Compendium-18e5ae60fdec80f880eff8c1736129c7"
            >
              Notion page
            </Link>
            .
          </FAQCard>
        </FAQList>
        <span>
          Got more questions? Email us at{" "}
          <Link href="mailto:taiji@ucmap.org">taiji@ucmap.org</Link> and
          we&apos;ll be more than happy to answer!
        </span>
      </div>
    </section>
  );
}
