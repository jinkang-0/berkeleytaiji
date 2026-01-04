import ContentEmbed from "@/components/compendium/content-embed";
import Link from "next/link";

export default function YangStaff13() {
  return (
    <article>
      <section>
        <p>
          The Yang style tai chi Thirteen Staff is a derivative of the Yang
          style tai chi Thirteen Spear. Similar to the Thirteen Postures, or{" "}
          <Link href="/compendium?id=bafa-wubu">
            <i>Bafa Wubu</i>
          </Link>
          , this form exhibits the 13 Principles of tai chi - the eight internal
          powers and the five cardinal directions.
        </p>
      </section>
      <section>
        <h4>Videos</h4>
        <ContentEmbed
          id="UL-vCzaBwZo"
          title="Yang 13 Staff taught by Sifu Dere"
        />
      </section>
    </article>
  );
}
