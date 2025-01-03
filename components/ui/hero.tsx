"use client";

import styles from "./hero.module.scss";
import Image from "next/image";
import InstagramIcon from "@/icons/instagram";
import FacebookIcon from "@/icons/facebook";
import YoutubeIcon from "@/icons/youtube";
import Link from "next/link";
import { LINKS } from "@/data/links";
import ImageOrientalDoor from "@/assets/hero_images/oriental_door_taiji.jpg";
import ImageBook from "@/assets/hero_images/book.jpg";
import ImageClouds from "@/assets/hero_images/clouds.jpg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  const [image, setImage] = useState(ImageOrientalDoor);

  useEffect(() => {
    if (pathname === "/") {
      setImage(ImageOrientalDoor);
    } else if (pathname === "/compendium") {
      setImage(ImageBook);
    } else {
      setImage(ImageClouds);
    }
  }, [pathname]);

  return (
    <div className={styles.hero}>
      <Image
        className={styles.image}
        src={image}
        blurDataURL={image.blurDataURL}
        placeholder="blur"
        alt="hero image"
      />
      <div className={styles.imageCover}></div>
      <div className={styles.content}>
        <h1>Cal Taiji</h1>
        <div>
          <p>Official Taiji club at UC Berkeley</p>
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
    </div>
  );
}
