"use client";

import Carousel, { CarouselProps } from "react-multi-carousel";
import Image from "next/image";
import styles from "./image-carousel.module.scss";
import { CarouselItem } from "@/lib/types";

const responsive = {
  any: {
    breakpoint: {
      max: 5000,
      min: 200
    },
    items: 1
  }
};

type ImageCarouselProps = {
  items: CarouselItem[];
} & Omit<CarouselProps, "responsive" | "children">;

export default function ImageCarousel({ items, ...rest }: ImageCarouselProps) {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      arrows={false}
      responsive={responsive}
      className={styles.carousel}
      showDots
      infinite
      autoPlay
      autoPlaySpeed={5000}
      transitionDuration={500}
      sliderClass={styles.items}
      dotListClass={styles.dots}
      {...rest}
    >
      {items.map((i) => (
        <div key={i.image.src} className={styles.carouselItem}>
          <Image src={i.image} alt={i.caption} />
          <p>{i.caption}</p>
        </div>
      ))}
    </Carousel>
  );
}
