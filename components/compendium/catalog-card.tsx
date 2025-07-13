"use client";

import { createPortal } from "react-dom";
import styles from "./catalog.module.scss";
import Image, { StaticImageData } from "next/image";
import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { useCatalogContext } from "./catalog-context";

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
  alignment: "left" | "middle" | "right";
  overlayPortalRef: React.RefObject<HTMLDivElement | null>;
}

export default function CatalogCard({
  link,
  image,
  title,
  description,
  tags,
  alignment,
  overlayPortalRef
}: CatalogCardProps) {
  const elemRef = useRef<HTMLDivElement>(null);
  const { isCardHovered, setIsCardHovered } = useCatalogContext();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!link) return;
    setIsCardHovered(true);
    setIsHovering(true);
  }, [setIsCardHovered, link]);

  const handleMouseLeave = useCallback(() => {
    if (!link) return;
    setIsCardHovered(false);
    setIsHovering(false);
  }, [setIsCardHovered, link]);

  return (
    <div
      className={styles.carouselItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={elemRef}
        className={clsx(
          styles.carouselCard,
          !link && styles.inactiveCard,
          isCardHovered && !isHovering && styles.lowerPresence
        )}
      >
        <Image
          src={image.src}
          blurDataURL={image.blurDataURL}
          placeholder="blur"
          className={styles.itemImage}
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
      {overlayPortalRef.current &&
        createPortal(
          <AnimatePresence>
            {link && isHovering && (
              <motion.a
                href={link}
                target="_blank"
                className={clsx(
                  styles.itemOverlay,
                  styles[`${alignment}Align`]
                )}
                initial={{
                  opacity: 0,
                  width: elemRef.current?.getBoundingClientRect().width
                }}
                animate={{
                  opacity: 1,
                  width: elemRef.current?.getBoundingClientRect().width
                    ? elemRef.current.getBoundingClientRect().width * 1.33
                    : 0
                }}
                exit={{
                  opacity: 0,
                  width: elemRef.current?.getBoundingClientRect().width,
                  transition: {
                    duration: 0.2,
                    opacity: { delay: 0.1 }
                  }
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src={image.src}
                  blurDataURL={image.blurDataURL}
                  placeholder="blur"
                  className={styles.itemImage}
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
              </motion.a>
            )}
          </AnimatePresence>,
          overlayPortalRef.current
        )}
    </div>
  );
}
