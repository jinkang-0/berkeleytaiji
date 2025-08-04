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
            In our club, we do not use a belt system or any other ranking system
            to classify practitioners. Instead, we focus on the
            individual&apos;s progress and understanding of the art.
            <br /> <br />
            If you are interested in competing, you will likely be categorized
            based on your years of experience or age, but obviously this is not
            a ranking of skill, just a categorization.
            <br /> <br />
            That is not to say that we do not have a system of progression or
            roadmap, however. In tai chi, we generally recognize your
            understanding of the essence of the art far more than your ability
            to memorize and perform a form.
            <br /> <br />
            That is, are you able to feel energy (&quot;qi&quot;)? Perhaps as
            tingling sensations in your hands, or a sense of heaviness in your
            limbs? Are you able to express energy through your movements and
            direct it towards or into your opponent?
            <br /> <br />
            Of course, memorizing and performing forms is important, but it is
            not the end goal of tai chi. What is important is your personal
            growth in the internal arts and your ability to apply tai chi in
            your life, to shape it to your needs, and to understand the art in a
            way that is meaningful to you.
          </FAQCard>
          <FAQCard question="What is tai chi?">
            Tai chi, or taijiquan, is one of the three major internal Chinese
            martial arts, alongside Xingyi and Bagua. Tai chi emphasizes slow,
            deliberate movements, deep breathing, and mental focus. It is often
            practiced for its health benefits, including stress reduction and
            improvements in physical fitness (i.e. balance and flexibility).
            <br /> <br />
            Tai chi is also a martial art that, on the surface, incorporates
            techniques like spiraling and{" "}
            <Link href="https://en.wikipedia.org/wiki/Chin_Na">qin na</Link> to
            deliver force and neutralize opponents. However, advanced levels of
            tai chi practice involves the understanding and application of
            internal energy to ground or redirect the opponent&apos;s force or
            issue force into the opponent from the ground.
            <br /> <br />
            Unfortunately, advanced understanding of energy often takes decades
            to develop through diligent practice. As such, our class advertises
            and takes an emphasis on the health and wellness practice of tai
            chi. But, if you are interested, we are happy to discuss the martial
            aspects of tai chi, and how it can be applied in self-defense.
            <br /> <br />
            That said, we still promote the understanding of internal energy as
            a core part of our practice, as it is not only useful for
            self-defense, but also a vital enrichment in life!
          </FAQCard>
          <FAQCard question="What are the health benefits of tai chi?">
            To be clear, we are not medical professionals and do not claim that
            tai chi is a cure for any medical condition. While there are
            anecdotal evidence that tai chi has helped folks overcome conditions
            they couldn&apos;t with medication, it is important to understand
            that everyone&apos;s situation is different. It is always best to
            consult with a medical professional if your goal is to use tai chi
            to treat a specific condition, especially if you are limited by
            physical ailments.
            <br /> <br />
            Having said that, there is generally a consensus that tai chi is
            beneficial for overall health and wellness. It is a low-impact
            exercise that can be practiced by people of all ages and fitness
            levels. Below are a few health benefits of tai chi that have been
            observed from medical studies.
            <br /> <br />
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
            ). Tai chi is also positively linked with{" "}
            <Link
              href="https://www.alzinfo.org/articles/prevention/tai-chi-for-brain-health/"
              target="_blank"
            >
              enhanced memory and cognitive function
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
            medical studies. You are also welcome to email us or join in for the
            first week for free to learn more!
            <br /> <br />
            That said, one must also be careful to not overexert themselves, as
            tai chi is a physical activity. If you feel any pain or discomfort
            while practicing, please stop and rest. It is important to listen to
            your body and not push yourself too hard.
            <br /> <br />
            This is especially important to heed for elderly practitioners or
            those with pre-existing conditions - if you are getting started in
            tai chi, please practice with an experienced instructor who can
            guide you through the movements and ensure that you are practicing
            safely.
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
            completed their fundamentals, they can choose to work on a project.
            Whether that is a form, a weapon, or an application, it is up to you
            to decide what you want to work on. If you are unsure, instructors
            are happy to help you find a project that suits your interests and
            skill level.
            <br /> <br />
            We&apos;re fortunate to have Sifu Bryant Fong who&apos;s
            knowledgeable in a broad range of traditional Chinese martial arts
            to provide pointers for Chen, Yang, and Sun style tai chi; for
            weapons like swords, fans, and staff; and for other martial arts
            like Baguazhang and Xingyiquan.
            <br /> <br />
            For a compendium of forms practiced by students currently or in the
            recent past, you can check out our{" "}
            <Link href="https://berkeleytaiji.vercel.app/compendium">
              Compendium page
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
