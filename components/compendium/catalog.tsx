"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel, Pagination } from "swiper/modules";
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
import { CatalogContextProvider } from "./catalog-context";

const alignments = ["left", "middle", "right"] as const;

export default function CompendiumCatalog({
  items
}: {
  items: CompendiumItem[];
}) {
  const swiperRef = useRef<SwiperRef>(null);
  const overlayPortalRef = useRef<HTMLDivElement>(null);

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

  const groupedItems = carouselItems.reduce(
    (acc: (typeof carouselItems)[0][][], item, index) => {
      const groupIndex = Math.floor(index / 3);
      if (acc.length <= groupIndex) {
        acc.push([]);
      }
      acc[groupIndex].push(item);
      return acc;
    },
    []
  );

  return (
    <div className={styles.container}>
      <CatalogContextProvider>
        <Swiper
          modules={[Autoplay, Mousewheel, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className={styles.carousel}
          loop
          speed={250}
          pagination={{ clickable: true }}
          mousewheel={{
            enabled: true,
            forceToAxis: true
          }}
          ref={swiperRef}
        >
          {groupedItems.map((grp) => (
            <SwiperSlide
              key={grp[0].title}
              className={styles.carouselItemWrapper}
            >
              <div className={styles.itemGroup}>
                {grp.map((i, idx) => (
                  <CatalogCard
                    key={i.title}
                    description={i.description}
                    image={i.image}
                    link={i.link}
                    title={i.title}
                    tags={i.tags}
                    alignment={alignments[idx % 3]}
                    overlayPortalRef={overlayPortalRef}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {carouselItems.length > 3 && (
          <>
            <CarouselControlLeft swiperRef={swiperRef} />
            <CarouselControlRight swiperRef={swiperRef} />
          </>
        )}
        <div ref={overlayPortalRef} className={styles.overlayPortal} />
      </CatalogContextProvider>
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
