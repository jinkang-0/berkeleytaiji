"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination
} from "swiper/modules";
import { CompendiumItem } from "@/lib/types";
import { getThumbnail } from "@/lib/utils";

import "swiper/scss";
import "swiper/scss/mousewheel";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";

import styles from "./carousel.module.scss";

export default function CompendiumCarousel({
  items
}: {
  items: CompendiumItem[];
}) {
  const carouselItems = items.map((item) => ({
    image: {
      src:
        item.youtubeLink !== undefined
          ? getThumbnail(item.youtubeLink)
          : item.image,
      alt: item.title
    },
    title: item.title,
    description: item.description,
    tags: [item.category, ...item.otherNames]
  }));

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay, Mousewheel, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className={styles.carousel}
        loop
        autoplay={{
          delay: 5000
        }}
        speed={500}
        pagination={{ clickable: true }}
        mousewheel={{
          enabled: true,
          forceToAxis: true
        }}
      >
        {carouselItems.map((i) => (
          <SwiperSlide key={i.title} className={styles.carouselItemWrapper}>
            <div className={styles.carouselItem}>
              <Image
                src={i.image.src}
                blurDataURL={i.image.src}
                placeholder="blur"
                alt={i.image.alt ?? "alt"}
                width="800"
                height="450"
              />
              <div className={styles.carouselItemContent}>
                <h3 className={styles.title}>{i.title}</h3>
                {i.tags && i.tags.length > 0 && (
                  <div className={styles.tags}>
                    {i.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p className={styles.caption}>{i.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
