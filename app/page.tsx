import styles from "./page.module.scss";
import Link from "next/link";
import { LINKS } from "@/data/links";
import ExternalIcon from "@/icons/external";
import { LinkButtonPrimary } from "@/components/ui/button";
import EventList, { EventListPlaceholder } from "@/components/ui/event-list";
import { Suspense } from "react";
import Schedule, { SchedulePlaceholder } from "@/components/home/schedule";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Gallery from "@/components/ui/gallery";
import { COMMUNITY_PHOTOS } from "@/data/images";
import AboutSection from "@/components/home/about-section";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />

      <Gallery items={COMMUNITY_PHOTOS} />

      <div className={styles.content}>
        <article>
          <AboutSection />

          <section className={styles.practice}>
            <h5>Practice</h5>
            <p>
              Practice is held at the{" "}
              <Link href={LINKS.location}>
                Recreational Sports Facility (RSF)
              </Link>{" "}
              on the UC Berkeley campus. All skill levels are welcome! New
              members can try out their first week of classes for free.
            </p>
            <Suspense fallback={<SchedulePlaceholder />}>
              <Schedule />
            </Suspense>
            <footer>
              <LinkButtonPrimary href={LINKS.registration} target="_blank">
                Register <ExternalIcon />
              </LinkButtonPrimary>
              <p>
                Online only members, students, and UC Berkeley alumni/faculty
                can receive discounts. Regular members can attend both in person
                and online classes.
              </p>
            </footer>
          </section>

          <section className={styles.events}>
            <h5>Upcoming Events</h5>
            <Suspense fallback={<EventListPlaceholder />}>
              <EventList />
            </Suspense>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
