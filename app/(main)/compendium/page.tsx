import CompendiumCarousel from "@/components/compendium/carousel";
import styles from "./page.module.scss";
import {
  coreCompulsory,
  exercises,
  featuredCompendiumItems,
  intermediateCompulsory,
  qigong
} from "@/data/compendium";
import CompendiumCatalog from "@/components/compendium/catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compendium",
  description:
    "Explore what we practice at Berkeley Taiji, including exercises, qigong, and compulsory forms."
};

export default function CompendiumPage() {
  return (
    <div className={styles.container}>
      <h3>Currently Practiced</h3>
      <CompendiumCarousel items={featuredCompendiumItems} />

      <div className={styles.catalog}>
        <h3>Exercises</h3>
        <CompendiumCatalog items={exercises} />
      </div>

      <div className={styles.catalog}>
        <h3>Qigong</h3>
        <CompendiumCatalog items={qigong} />
      </div>

      <div className={styles.catalog}>
        <h3>Core Compulsory</h3>
        <CompendiumCatalog items={coreCompulsory} />
      </div>

      <div className={styles.catalog}>
        <h3>Intermediate Compulsory</h3>
        <CompendiumCatalog items={intermediateCompulsory} />
      </div>
    </div>
  );
}
