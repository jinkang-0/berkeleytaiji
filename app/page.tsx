import styles from "./page.module.scss";
import Link from "next/link";
import { LINKS } from "@/data/links";
import ExternalIcon from "@/icons/external";
import { LinkButtonPrimary } from "@/components/ui/button";
import Image from "next/image";
import YinYang from "@/assets/graphics/yinyang.png";
import ImageCarousel from "@/components/home/image-carousel";
import { communityImages } from "@/data/images";
import EventList, { EventListPlaceholder } from "@/components/home/event-list";
import { Suspense } from "react";
import Schedule, { SchedulePlaceholder } from "@/components/home/schedule";

export default function Home() {
  return (
    <main className={styles.container}>
      <article>
        <section className={styles.practice}>
          <h5>Practice</h5>
          <p>
            Practice is held at the{" "}
            <Link href={LINKS.location}>
              Recreational Sports Facility (RSF)
            </Link>{" "}
            on the UC Berkeley campus. All skill levels are welcome! There is
            also a one week free trial period for new members to try it out.
          </p>
          <Suspense fallback={<SchedulePlaceholder />}>
            <Schedule />
          </Suspense>
          <footer>
            <LinkButtonPrimary href={LINKS.registration} target="_blank">
              Register <ExternalIcon />
            </LinkButtonPrimary>
            <p>
              Online only members, students, and UC Berkeley alumni/faculty can
              receive discounts. Regular members can attend both in person and
              online classes.
            </p>
          </footer>
        </section>

        <section className={styles.events}>
          <h5>Upcoming Events</h5>
          <Suspense fallback={<EventListPlaceholder />}>
            <EventList />
          </Suspense>
        </section>

        <section className={styles.about}>
          <h5>About</h5>
          <div className={styles.aboutContent}>
            <p>
              At CalTaiji, we practice Taiji with the spirit of health and
              wellness, as well as culture and community.
              <br /> <br />
              We develop physical health and spiritual wellness through
              practice, which has the benefit of healing as well as
              self-defense. As participants in our community, we share the art
              that we practice, and share also the culture from whence it came.
              <br /> <br />
              Outside of class, you can expect to find us performing at local
              events, including the EAU Night Market on campus and the SF
              Chinese New Years Parade. If you would like us to perform at an
              event, feel free to reach out to us at{" "}
              <Link href="mailto:taiji@ucmap.org">taiji@ucmap.org</Link>.
            </p>
            <Image src={YinYang} alt="Yin Yang" />
          </div>
        </section>

        <section className={styles.community}>
          <h5>Community</h5>
          <ImageCarousel items={communityImages} />
        </section>
      </article>
    </main>
  );
}
