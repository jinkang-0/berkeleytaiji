import styles from "./page.module.scss";
import EventList, { EventListPlaceholder } from "@/components/ui/event-list";
import { Suspense } from "react";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Gallery from "@/components/ui/gallery";
import { COMMUNITY_PHOTOS } from "@/data/images";
import AboutSection from "@/components/home/about-section";
import ScheduleSection from "@/components/home/schedule-section";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />

      <Gallery items={COMMUNITY_PHOTOS} />

      <div className={styles.content}>
        <article>
          <AboutSection />
          <ScheduleSection />

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
