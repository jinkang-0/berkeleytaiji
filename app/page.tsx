import styles from "./page.module.scss";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Gallery from "@/components/ui/gallery";
import { COMMUNITY_PHOTOS } from "@/data/images";
import AboutSection from "@/components/home/about-section";
import ScheduleSection from "@/components/home/schedule-section";
import EventsSection from "@/components/home/events-section";

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
          <EventsSection />
        </article>
      </div>

      <Footer />
    </main>
  );
}
