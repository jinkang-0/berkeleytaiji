"use client";

import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { CompendiumItem } from "@/lib/types";

import "swiper/scss";
import "swiper/scss/mousewheel";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";

import styles from "./carousel.module.scss";
import { useRef } from "react";
import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";

export default function CompendiumCatalog({
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
    tags: [...item.otherNames],
    link: item.link
  }));

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay, Mousewheel, Pagination]}
        className={styles.carousel}
        spaceBetween={24}
        slidesPerGroup={3}
        slidesPerView={3}
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
        ref={swiperRef}
      >
        {carouselItems.map((i) => (
          <SwiperSlide key={i.title} className={styles.carouselItemWrapper}>
            <a
              className={`${styles.carouselItem} ${
                i.link ? styles.carouselCard : styles.inactiveCard
              }`}
              href={i.link}
              target="_blank"
            >
              <Image
                src={i.image.src}
                blurDataURL={i.image.blurDataURL}
                placeholder="blur"
                alt={i.image.alt ?? "alt"}
                width="800"
                height="450"
              />
              <div className={styles.carouselItemContentStatic}>
                <h6 className={styles.title}>{i.title}</h6>
                {i.tags && i.tags.length > 0 && (
                  <div className={styles.tags}>
                    {i.tags.map((tag) => (
                      <span key={tag} className={styles.tagDark}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {carouselItems.length > 3 && (
        <>
          <CarouselControlLeft swiperRef={swiperRef} />
          <CarouselControlRight swiperRef={swiperRef} />
        </>
      )}
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
