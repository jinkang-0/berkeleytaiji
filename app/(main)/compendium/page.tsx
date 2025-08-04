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
import CompendiumDialog from "@/components/compendium/compendium-dialog";
import CompendiumDialogContent from "@/components/compendium/compendium-dialog-content";

export const metadata: Metadata = {
  title: "Compendium",
  description:
    "Explore what we practice at Berkeley Taiji, including exercises, qigong, and compulsory forms."
};

export default async function CompendiumPage({
  searchParams
}: {
  searchParams: Promise<{ id: string }>;
}) {
  const { id } = await searchParams;

  return (
    <div className={styles.container}>
      <CompendiumDialog>
        {id && <CompendiumDialogContent id={id} />}
      </CompendiumDialog>

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
