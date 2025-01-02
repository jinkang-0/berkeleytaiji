import styles from "./hero.module.scss";
import Image from "next/image";
import InstagramIcon from "@/icons/instagram";
import FacebookIcon from "@/icons/facebook";
import YoutubeIcon from "@/icons/youtube";
import Link from "next/link";
import { LINKS } from "@/data/links";
import { StaticImageData } from "next/image";

interface HeroProps {
  image: StaticImageData;
}

export default function Hero({ image }: HeroProps) {
  return (
    <div className={styles.hero}>
      <Image className={styles.image} src={image} alt="hero image" />
      <div className={styles.imageCover}></div>
      <div className={styles.content}>
        <h1>Cal Taiji</h1>
        <div>
          <p>Official Taiji club at UC Berkeley</p>
          <p>Founded 1987</p>
        </div>
        <div className={styles.links}>
          <Link href={LINKS.instagram} target="_blank">
            <InstagramIcon />
          </Link>
          <Link href={LINKS.facebook} target="_blank">
            <FacebookIcon />
          </Link>
          <Link href={LINKS.youtube} target="_blank">
            <YoutubeIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
