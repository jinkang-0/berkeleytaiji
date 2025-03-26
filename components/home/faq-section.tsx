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
            practice can be applied for self-defense as well. If you&apos;re
            curious to see how a move can be applied for self-defense, feel free
            to ask!
          </FAQCard>
          <FAQCard question="What are the health benefits of tai chi?">
            Tai chi has been linked to more resistant tendons, stronger muscles,
            better flexibility, increased spatial awareness, improved balancing,
            and some degree of aerobic conditioning without raising the
            heartbeat (see{" "}
            <Link
              href="https://www.health.harvard.edu/staying-healthy/the-health-benefits-of-tai-chi"
              target="_blank"
            >
              this article from Harvard Medical School
            </Link>
            ).
            <br /> <br />
            We start each class with a set of joint loosening exercises, which
            helps release stress and tension built up during the day. Many
            students reportedly find this helpful to manage stress, especially
            for those who adopt a sedentary lifestyle.
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
              reduced chances of dementia
            </Link>
            .
            <br /> <br />
            For readers curious in learning more, you can find more sources
            online discussing the health benefits of tai chi. A good source to
            get started on is{" "}
            <Link href="https://a.co/d/eGcBFL1" target="_blank">
              The Harvard Medical School Guide to Tai Chi
            </Link>
            , published in 2013, which discusses the benefits of tai chi from
            studies. That said, you are also welcome to email us or join in for
            the first week for free to learn more.
          </FAQCard>
          <FAQCard question="Are members required to perform at events?">
            Not at all!
            <br />
            <br />
            For context, we schedule many performance events throughout the
            year, organized to help spread the art and grow the martial arts
            community. Sometimes, we may also host or participate in
            tournaments!
            <br />
            <br />
            We encourage members to attend and help out at these events because
            they help spread the art and continue our long martial lineage!
            Attending competitions are also a great chance to see how your form
            merits among other practitioners, or to see what else is out there
            in the kung fu world.
            <br />
            <br />
            That said, we understand that many feel uncomfortable to perform or
            attend competitions, so it is definitely not a requirement for
            members to perform!
          </FAQCard>
          <FAQCard question="How are classes organized?">
            We start class with a joint loosening exercise to release stress
            built up during the day. After that, it is usually followed up with
            a stretch or qigong, which helps practitioners build sensitivity of
            &quot;qi.&quot;
            <br />
            <br />
            For online classes, our time is limited, so we either do an extended
            session of qigong or one of form practice each class.
            <br /> <br />
            For in person classes, we split off into groups. Beginners will
            practice the fundamental forms while advanced members work on their
            own projects under the guidance of Sifu Fong.
            <br /> <br />
            It&apos;s important to note that forms are taught piece by piece. No
            one is shown a complete form and expected to remember it.
            You&apos;re welcome to take as much time and repetitions as you need
            to understand the core concepts. Don&apos;t be afraid to interrupt
            and ask questions!
          </FAQCard>
          <FAQCard question="What forms are practiced?">
            If you are new to tai chi, we will start you off by working on your
            footwork, your sensitivity towards energy, and how to express energy
            with three fundamental forms. Sun 12 in the Fall, Sun Guangbo in the
            Spring, and Bafa Wubu in the Summer.
            <br /> <br />
            For practitioners who already have experience in tai chi, or have
            completed their fundamentals, they can choose to work on perfecting
            a form of their choice. Whether it&apos;s a long tai chi hand form,
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
