import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import OrientalDoor from "@/assets/hero_images/oriental_door_taiji.jpg";
import styles from "./page.module.scss";
import Link from "next/link";
import { LINKS, PRACTICE_SCHEDULE } from "@/lib/config";
import ExternalIcon from "@/icons/external";
import { LinkButton } from "@/components/button";
import EventCard from "@/components/event-card";
import Image from "next/image";
import YinYang from "@/assets/graphics/yinyang.png";
import ImageCarousel from "@/components/image-carousel";
import { communityImages } from "@/lib/images";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero image={OrientalDoor} />
      <Navbar />
      <article className={styles.container}>
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
                <p>{sched.location}</p>
              </div>
            ))}
          </div>
          <LinkButton href={LINKS.registration} target="_blank">
            Register <ExternalIcon />
          </LinkButton>
        </section>

        <section className={styles.events}>
          <h5>Upcoming Events</h5>
          {/* hardcoded for now */}
          <div className={styles.eventsList}>
            <EventCard
              event={{
                month: "Jan",
                date: "25",
                name: "Martial Arts Open House",
                time: "10:00 AM - 4:00 PM",
                location: "RSF, Combatives Room"
              }}
            />
            <EventCard
              event={{
                month: "Jan",
                date: "26",
                name: "Chinese New Years Demonstration",
                time: "11:00 AM - 4:00 PM",
                location: "SF Chinatown"
              }}
            />
            <EventCard
              event={{
                month: "Feb",
                date: "16",
                name: "Chinese Martial Arts Tournament",
                time: "11:00 AM - 4:00 PM",
                location: "Sunnyvale, CA"
              }}
            />
          </div>
        </section>

        <section className={styles.about}>
          <h5>About</h5>
          <div className={styles.aboutContent}>
            <div>
              <p>
                What is Taiji? Congue ante tellus eget ac vel diam vel. Eget ut
                risus arcu aliquam lorem egestas commodo amet porttitor.
                <br /> <br />
                Sollicitudin integer viverra penatibus elementum. Ut quam leo in
                vel odio. Id nisl pulvinar consectetur neque massa a eu. Egestas
                a iaculis mattis proin egestas fringilla elementum lectus.
                <br /> <br />
                Tincidunt euismod proin nulla nulla sapien nisi quis sed.
                Faucibus ornare fermentum posuere parturient nisl ut tortor
                integer. Felis facilisis egestas morbi aenean donec maecenas ac
                aliquet condimentum.
                <br /> <br />
                At CalTaiji, we focus on teaching Taiji with health and wellness
                in mind. Self-defense aspects will be practiced as well.
              </p>
            </div>
            <Image src={YinYang} alt="Yin Yang" />
          </div>
        </section>

        <section className={styles.community}>
          <h5>Community</h5>
          <ImageCarousel items={communityImages} />
        </section>
      </article>

      <Footer />
    </main>
  );
}
