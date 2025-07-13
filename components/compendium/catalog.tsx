"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { CompendiumItem } from "@/lib/types";
import { useRef } from "react";
import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";
import CatalogCard from "./catalog-card";

import "swiper/scss";
import "swiper/scss/mousewheel";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";
import styles from "./catalog.module.scss";

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
        {carouselItems.map((i, idx) => (
          <SwiperSlide key={i.title} className={styles.carouselItemWrapper}>
            <CatalogCard
              description={i.description}
              image={i.image}
              link={i.link}
              title={i.title}
              tags={i.tags}
              rightAlign={idx % 3 === 2}
            />
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
