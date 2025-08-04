"use client";

import styles from "./catalog.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { CompendiumItem } from "@/lib/types";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { useCatalogContext } from "./catalog-context";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface CatalogCardProps {
  item: CompendiumItem;
  alignment: "left" | "middle" | "right";
  overlayPortalRef: React.RefObject<HTMLDivElement | null>;
}

export default function CatalogCard({
  item,
  alignment,
  overlayPortalRef
}: CatalogCardProps) {
  const elemRef = useRef<HTMLAnchorElement>(null);
  const { isCardHovered, setIsCardHovered } = useCatalogContext();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsCardHovered(true);
    setIsHovering(true);
  }, [setIsCardHovered]);

  const handleMouseLeave = useCallback(() => {
    setIsCardHovered(false);
    setIsHovering(false);
  }, [setIsCardHovered]);

  return (
    <div
      className={styles.carouselItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        ref={elemRef}
        href={`?id=${item.id}`}
        className={clsx(
          styles.carouselCard,
          isCardHovered && !isHovering && styles.lowerPresence
        )}
        scroll={false}
      >
        <Image
          src={item.image}
          blurDataURL={typeof item.image === "string" ? item.image : undefined}
          placeholder="blur"
          className={styles.itemImage}
          alt={item.title}
          width="800"
          height="450"
        />
        <div className={styles.carouselItemContent}>
          <h6 className={styles.title}>{item.title}</h6>
          {item.otherNames.length > 0 && (
            <div className={styles.tags}>
              {item.otherNames.map((name) => (
                <span key={name} className={styles.tag}>
                  {name}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
      {overlayPortalRef.current &&
        createPortal(
          <AnimatePresence>
            {isHovering && (
              <motion.div
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
                  height: elemRef.current?.getBoundingClientRect().height,
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
                <Link
                  href={`?id=${item.id}`}
                  className={styles.overlayLink}
                  scroll={false}
                >
                  <Image
                    src={item.image}
                    blurDataURL={
                      typeof item.image === "string" ? item.image : undefined
                    }
                    placeholder="blur"
                    className={styles.itemImage}
                    alt={item.title}
                    width="800"
                    height="450"
                  />
                  <div className={styles.carouselItemContent}>
                    <h6 className={styles.title}>{item.title}</h6>
                    {item.otherNames && item.otherNames.length > 0 && (
                      <div className={styles.tags}>
                        {item.otherNames.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>,
          overlayPortalRef.current
        )}
    </div>
  );
}
