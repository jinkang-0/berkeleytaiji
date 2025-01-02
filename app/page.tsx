import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import OrientalDoor from "@/assets/hero_images/oriental_door_taiji.jpg";
import styles from "./page.module.scss";
import Link from "next/link";
import { LINKS } from "@/data/links";
import ExternalIcon from "@/icons/external";
import { LinkButton } from "@/components/button";
import EventCard from "@/components/event-card";
import Image from "next/image";
import YinYang from "@/assets/graphics/yinyang.png";
import ImageCarousel from "@/components/image-carousel";
import { communityImages } from "@/lib/images";
import Footer from "@/components/footer";
import PRACTICE_SCHEDULE from "@/data/schedule";
import UPCOMING_EVENTS from "@/data/events";

export default function Home() {
  return (
    <main>
      <Hero image={OrientalDoor} />
      <Navbar />
      <div className={styles.container}>
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
            <div className={styles.scheduleTable}>
              {PRACTICE_SCHEDULE.map((sched) => (
                <div
                  key={sched.day + sched.time}
                  className={styles.scheduleBlock}
                >
                  <p>{sched.day}</p>
                  <span>{sched.time}</span>
                  <div>{sched.location}</div>
                </div>
              ))}
            </div>
            <footer>
              <LinkButton href={LINKS.registration} target="_blank">
                Register <ExternalIcon />
              </LinkButton>
              <p>
                Online only members, students, and UC Berkeley alumni/faculty
                can receive discounts. Regular members can attend both in person
                and online classes.
              </p>
            </footer>
          </section>

          <section className={styles.events}>
            <h5>Upcoming Events</h5>
            {/* hardcoded for now */}
            <div className={styles.eventsList}>
              {UPCOMING_EVENTS.map((ev) => (
                <EventCard event={ev} key={ev.name} />
              ))}
            </div>
          </section>

          <section className={styles.about}>
            <h5>About</h5>
            <div className={styles.aboutContent}>
              <p>
                At CalTaiji, we practice Taiji with the spirit of health,
                wellness, and community.
                <br /> <br />
                We build internal strength through exercises like qigong,
                stretches, and Taijiquan forms. These exercises help strengthen
                the tendons and ligaments, improve skeletal integrity, declutter
                blood vessels, and increase mindfulness.
                <br /> <br />
                Outside of class, you can expect to find us performing at local
                events, including the EAU Night Market on campus and the SF
                Chinese New Years Parade. If you would like us to perform at an
                event, feel free to reach out to us at{" "}
                <Link href="mailto:taiji@ucmap.org">taiji@ucmap.org</Link>
              </p>
              <Image src={YinYang} alt="Yin Yang" />
            </div>
          </section>

          <section className={styles.community}>
            <h5>Community</h5>
            <ImageCarousel items={communityImages} />
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}
