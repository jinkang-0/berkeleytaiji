import { getCommunityImages } from "@/api/spreadsheet";
import ImageCarouselClient from "./image-carousel-client";
import { CarouselItem } from "@/lib/types";
import { gDriveToDownload } from "@/lib/utils";
import styles from "./image-carousel.module.scss";
import { SAMPLE_IMAGES } from "@/data/sample";

export const ImageCarouselPlaceholder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.placeholder}></div>
    </div>
  );
};

export default async function ImageCarousel() {
  // const communityImages = await getCommunityImages();
  // const items: CarouselItem[] = communityImages.map((row) => ({
  //   imageUrl: gDriveToDownload(row.URL),
  //   caption: row.Caption
  // }));
  const items = SAMPLE_IMAGES.map((i) => ({
    ...i,
    imageUrl: gDriveToDownload(i.imageUrl)
  }));

  return <ImageCarouselClient items={items} />;
}
