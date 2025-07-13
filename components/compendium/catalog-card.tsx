import styles from "./catalog.module.scss";
import Image, { StaticImageData } from "next/image";

interface CatalogCardProps {
  link?: string;
  image: {
    src: string | StaticImageData;
    blurDataURL?: string;
    alt?: string;
  };
  title: string;
  description: string;
  tags: string[];
  rightAlign?: boolean;
}

export default function CatalogCard({
  link,
  image,
  title,
  description,
  tags,
  rightAlign
}: CatalogCardProps) {
  return (
    <a className={styles.carouselItem} href={link} target="_blank">
      <div
        className={`${styles.carouselCard} ${link ? "" : styles.inactiveCard}`}
      >
        <Image
          src={image.src}
          blurDataURL={image.blurDataURL}
          placeholder="blur"
          alt={image.alt ?? "alt"}
          width="800"
          height="450"
        />
        <div className={styles.carouselItemContent}>
          <h6 className={styles.title}>{title}</h6>
          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div
        className={`${styles.itemOverlay} ${
          rightAlign ? styles.rightAlign : ""
        }`}
      >
        <Image
          src={image.src}
          blurDataURL={image.blurDataURL}
          placeholder="blur"
          alt={image.alt ?? "alt"}
          width="800"
          height="450"
        />
        <div className={styles.carouselItemContent}>
          <h6 className={styles.title}>{title}</h6>
          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
