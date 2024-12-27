import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Book from "@/assets/hero_images/book.jpg";
import styles from "./page.module.scss";
import Gallery from "@/components/gallery";
import COMPENDIUM from "@/lib/compendium";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Hero image={Book} />
      <Navbar />
      <article className={styles.container}>
        <section>
          <h5>Core</h5>
          <p>
            These exercises can be practiced by all participants to develop
            internal strength and improve health and wellness.
          </p>
          <Gallery forms={COMPENDIUM.core} />
        </section>

        <section>
          <h5>Taijiquan</h5>
          <p>
            Listed below are the compulsory forms of Taijiquan (太极拳), which
            can be used as set practice, performance art pieces, or competition
            pieces.
          </p>
          <Gallery forms={COMPENDIUM.taijiquan} />
        </section>

        <section>
          <h5>Ruler</h5>
          <p>
            The Taiji ruler (太极棒) is an implement used to build intuition on
            channeling qi through foreign objects. It&apos;s the first step into
            weapons practice.
          </p>
          <Gallery forms={COMPENDIUM.ruler} />
        </section>

        <section>
          <h5>Straight Sword</h5>
          <p>
            The Chinese double-edged straight sword (剑) emphasizes swiftness
            and finesse, considered to be &quot;The Gentleman of Weapons&quot;
            in Chinese folklore.
          </p>
          <Gallery forms={COMPENDIUM.straightSword} />
        </section>

        <section>
          <h5>Broadsword</h5>
          <p>
            The Chinese broadsword and miao dao, or dao (刀) in general, is a
            single blade sword designed for the battlefield, made to effectively
            cut and slash, but can just as easily block and parry.
          </p>
          <Gallery forms={COMPENDIUM.broadsword} />
        </section>
      </article>
      <Footer />
    </main>
  );
}
