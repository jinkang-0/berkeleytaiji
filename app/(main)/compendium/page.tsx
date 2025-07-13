import CompendiumCarousel from "@/components/compendium/carousel";
import styles from "./page.module.scss";
import { featuredCompendiumItems } from "@/data/compendium";

export default function CompendiumPage() {
  return (
    <div className={styles.container}>
      <h3>Currently Practiced</h3>
      <CompendiumCarousel items={featuredCompendiumItems} />
    </div>
  );
}
