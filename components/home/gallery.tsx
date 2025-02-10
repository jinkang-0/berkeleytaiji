"use client";

import { GalleryItem } from "@/lib/types";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/scss";
import styles from "./gallery.module.scss";

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay]}
        className={styles.carousel}
        spaceBetween={42}
        slidesPerView="auto"
        centeredSlides
        loop
        autoplay={{
          delay: 3000
        }}
        speed={500}
        pagination={{ clickable: true }}
      >
        {items.map((i) => (
          <SwiperSlide key={i.image.src} className={styles.carouselItemWrapper}>
            <div className={styles.carouselItem}>
              <Image
                src={i.image}
                placeholder="blur"
                alt={i.caption ?? "alt"}
              />
              <Image
                className={styles.ambiance}
                src={i.image}
                placeholder="blur"
                alt={i.caption ?? "alt"}
              />
              <p className={styles.caption}>{i.caption}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
