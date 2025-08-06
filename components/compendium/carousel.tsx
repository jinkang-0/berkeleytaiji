"use client";

import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel, Pagination } from "swiper/modules";
import { CompendiumItem } from "@/lib/types";
import { useRef } from "react";
import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";
import Link from "next/link";
import styles from "./carousel.module.scss";

export default function CompendiumCarousel({
  items
}: {
  items: CompendiumItem[];
}) {
  const swiperRef = useRef<SwiperRef>(null);

  const carouselItems = items.map((item) => ({
    image: {
      src: item.image,
      blurDataURL: typeof item.image === "string" ? item.image : undefined,
      alt: item.title
    },
    title: item.title,
    description: item.description,
    tags: [item.category, ...item.otherNames],
    link: `?id=${item.id}`
  }));

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay, Mousewheel, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className={styles.carousel}
        loop
        slidesPerView="auto"
        autoplay={{
          delay: 5000
        }}
        speed={500}
        pagination={{ clickable: true }}
        mousewheel={{
          enabled: true,
          forceToAxis: true
        }}
        ref={swiperRef}
        resistance={false}
      >
        {carouselItems.map((i) => (
          <SwiperSlide key={i.title}>
            <Link className={styles.carouselItem} href={i.link}>
              <Image
                src={i.image.src}
                blurDataURL={i.image.blurDataURL}
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
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselControlLeft swiperRef={swiperRef} />
      <CarouselControlRight swiperRef={swiperRef} />
    </div>
  );
}

function CarouselControlLeft({
  swiperRef
}: {
  swiperRef: React.RefObject<SwiperRef | null>;
}) {
  return (
    <button
      className={styles.carouselControlLeft}
      onClick={() => swiperRef.current?.swiper.slidePrev()}
      aria-label="Previous slide"
    >
      <ChevronLeft />
    </button>
  );
}

function CarouselControlRight({
  swiperRef
}: {
  swiperRef: React.RefObject<SwiperRef | null>;
}) {
  return (
    <button
      className={styles.carouselControlRight}
      onClick={() => swiperRef.current?.swiper.slideNext()}
      aria-label="Next slide"
    >
      <ChevronRight />
    </button>
  );
}
