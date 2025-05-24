import Link from "next/link";
import styles from "./faq-section.module.scss";
import FAQCard, { FAQList } from "./faq-card";

export default function FAQSection() {
  return (
    <section className={styles.section}>
      <h3>FAQ</h3>
      <div className={styles.faq}>
        <FAQList>
          <FAQCard question="What happens if I miss a class?">
            Don&apos;t worry! We understand that life (especially as a student)
            can get busy, and it&apos;s not uncommon for members to miss classes
            from time to time. If you miss a class, you can always catch up by
            attending the next class.
            <br /> <br />
            Ultimately, it is up to you to decide how much you want to practice.
            We encourage you to attend classes regularly, but we also understand
            that everyone has different schedules and commitments.
          </FAQCard>
          <FAQCard question="Are there ranks in tai chi?">
            No, there are no ranks in tai chi. We do not use a belt system or
            any other ranking system to classify practitioners. Instead, we
            focus on the individual&apos;s progress and understanding of the
            art.
            <br /> <br />
            We believe that tai chi is a lifelong journey, and everyone
            progresses at their own pace. Our instructors are here to guide you
            and help you improve your skills, regardless of your current level.
          </FAQCard>
          <FAQCard question="What is tai chi?">
            Tai chi, or taijiquan, is one of the three internal Chinese martial
            arts, alongside Xingyi and Bagua. Tai chi emphasizes slow,
            deliberate movements, deep breathing, and mental focus. It is often
            practiced for its health benefits, including stress reduction,
            improved balance, and increased flexibility.
            <br /> <br />
            Tai chi is also a martial art that emphasizes yielding and
            redirecting force, to ground the opponent&apos;s force and use it
            against them, incorporating techniques like spiraling and{" "}
            <Link href="https://en.wikipedia.org/wiki/Chin_Na">qin na</Link>.
            However, this requires an advanced understanding of internal energy,
            which may take years to develop through diligent practice. As such,
            our class advertises and takes an emphasis on the health and
            wellness practice of tai chi.
            <br /> <br />
            That said, we still promote the understanding of internal energy
            (&quot;qi&quot;) as a core part of our practice, as it is not only
            useful for self-defense, but also a vital enrichment of one&apos;s
            own life. Moreover, if you are interested in the martial aspect of
            tai chi, our instructors can demonstrate how the forms can be
            applied for self-defense (even without using internal energy). Feel
            free to ask during class if you are curious to see how a move can be
            applied for self-defense!
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
            community. Sometimes, members or instructors may also participate in
            tournaments. These events help us spread the art of tai chi and are
            a great way to meet other practitioners and learn from different
            styles.
            <br />
            <br />
            Helping volunteer at these events is a great way to get involved
            with the community, and you don&apos;t necessarily have to perform
            to help out! We often need volunteers to help set up the event,
            assist with registration, or help with logistics.
            <br /> <br />
            That said, we do encourage members to perform at events if they feel
            comfortable doing so. Not only is it a great way to build confidence
            and showcase your skills, but it also helps promote the art of tai
            chi to a wider audience.
            <br /> <br />
            We also encourage members to attend events even if they are not
            performing. It&apos;s a great way to learn from other practitioners,
            see different styles of tai chi, and meet other martial artists.
          </FAQCard>
          <FAQCard question="How are classes organized?">
            We start class with a joint loosening exercise to release stress
            built up during the day. After that, it is usually followed up with
            a stretch or qigong, which helps practitioners build sensitivity of
            internal energy (&quot;qi&quot;).
            <br />
            <br />
            For online classes, our time is limited, so we either do an extended
            session of qigong or a form practice each class.
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
            footwork, your sensitivity towards energy, and expression of energy
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
          Have other questions? Email us at{" "}
          <Link href="mailto:taiji@ucmap.org">taiji@ucmap.org</Link>!
        </span>
      </div>
    </section>
  );
}
