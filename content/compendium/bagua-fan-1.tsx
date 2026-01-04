import ContentEmbed from "@/components/compendium/content-embed";
import Link from "next/link";

export default function BaguaFan1() {
  return (
    <article>
      <section>
        <p>
          The first of the three fan sets in Bagua, also referred to as Kun Lun
          Fan. This fan set is a more challenging version of fan as compared to
          the <Link href="/compendium?id=taiji-bagua-fan">Taiji Bagua Fan</Link>
          , but is easier in comparison to the other two fan sets in Bagua. The
          Bagua fan is notoriously famous for its difficulty to learn, which is
          why it could be a lifelong pursuit for some practitioners.
        </p>
      </section>
      <section>
        <h4>Videos</h4>
        <ContentEmbed
          id="tp1COJNH40E"
          title="Kun Lun Fan by Sifu Dere in 2012"
        />
      </section>
      <section>
        <h4>Resources</h4>
        <ul>
          <li>
            <Link href="https://en.wikipedia.org/wiki/Baguazhang">
              Wikipedia on Baguazhang
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
