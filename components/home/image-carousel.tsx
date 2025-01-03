import { getCommunityImages } from "@/api/spreadsheet";
import ImageCarouselClient from "./image-carousel-client";
import { CarouselItem } from "@/lib/types";
import { gDriveToDownload } from "@/lib/utils";
import styles from "./image-carousel.module.scss";

export const ImageCarouselPlaceholder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.placeholder}></div>
    </div>
  );
};

export default async function ImageCarousel() {
  const communityImages = await getCommunityImages();
  const items: CarouselItem[] = communityImages.map((row) => ({
    imageUrl: gDriveToDownload(row.URL),
    caption: row.Caption
  }));

  return <ImageCarouselClient items={items} />;
}
