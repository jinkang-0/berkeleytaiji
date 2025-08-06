import styles from "./hero.module.scss";
import Image from "next/image";
import InstagramIcon from "@/icons/instagram";
import FacebookIcon from "@/icons/facebook";
import YoutubeIcon from "@/icons/youtube";
import Link from "next/link";
import { LINKS } from "@/data/links";
import HeroImage from "@/assets/hero.webp";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.image}
        src={HeroImage}
        blurDataURL={HeroImage.blurDataURL}
        placeholder="blur"
        alt="hero image"
      />
      <div className={styles.imageCover}></div>
      <div className={styles.content}>
        <h1>Berkeley Taiji</h1>
        <div>
          <p>Official tai chi club at UC Berkeley</p>
          <p>Founded 1969</p>
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
      <div className={styles.transition}></div>
    </div>
  );
}
