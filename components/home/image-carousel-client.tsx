"use client";

import Image from "next/image";
import { CarouselItem } from "@/lib/types";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import LeftCaret from "@/icons/left-caret";
import RightCaret from "@/icons/right-caret";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import styles from "./image-carousel.module.scss";

const ButtonGroup = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.buttonGroup}>
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <LeftCaret />
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <RightCaret />
      </button>
    </div>
  );
};

interface ImageCarouselProps {
  items: CarouselItem[];
}

export default function ImageCarouselClient({ items }: ImageCarouselProps) {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Pagination, Autoplay]}
        className={styles.carousel}
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000
        }}
        pagination={{ clickable: true }}
      >
        <div slot="container-start">
          <ButtonGroup />
        </div>
        {items.map((i) => (
          <SwiperSlide key={i.imageUrl} className={styles.carouselItemWrapper}>
            <div className={styles.carouselItem}>
              <Image
                src={i.imageUrl}
                blurDataURL={i.imageUrl}
                placeholder="blur"
                width={640}
                height={360}
                alt={i.caption ?? "alt"}
              />
              {Boolean(i.caption) && <p>{i.caption}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
