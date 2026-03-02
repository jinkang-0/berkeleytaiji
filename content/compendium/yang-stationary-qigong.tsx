import ContentEmbed from "@/components/compendium/content-embed";
import Link from "next/link";

export default function YangStationaryQigong() {
  return (
    <article>
      <section>
        <p>
          This set of Yang style tai chi qigong exercises is curated by Sifu
          Bryant Fong. It highlights a set of basic qigong exercises in the Yang
          style tai chi system, curated to be easy to remember yet nonetheless
          effective for cultivating <i>qi</i>.
          <br /> <br />
          The 12 movements are:
        </p>
        <ol>
          <li>Stand still to regulate the body</li>
          <li>Big python softens its body</li>
          <li>
            Raise qi to the{" "}
            <Link href="https://en.wikipedia.org/wiki/Dantian" target="_blank">
              <i>dantian</i>
            </Link>
          </li>
          <li>Open the chest to cleanse the body</li>
          <li>
            Pour qi to the <i>bai hui</i>
          </li>
          <li>
            Settle the palms, relax the wrists ("Return tiger to the mountain")
          </li>
          <li>Left and right to push the mountain</li>
          <li>Big bear swims in the ocean</li>
          <li>Eagle seeks its prey</li>
          <li>Left and right to open the mountain</li>
          <li>White crane spreads its wings</li>
          <li>Cross hands, end taiji</li>
        </ol>
      </section>
      <section>
        <h4>Videos</h4>
        <ContentEmbed
          id="4NBRvPSN60o"
          title="Yang Style Stationary Taiji Qigong"
        />
      </section>
    </article>
  );
}
