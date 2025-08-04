import ContentEmbed from "@/components/compendium/content-embed";
import Link from "next/link";

export default function Yang24() {
  return (
    <article>
      <section>
        <p>
          Yang 24 is the Yang style version of the 24-form tai chi, which is a
          widely practiced tai chi form commonly seen in competitions. It is
          more often practiced as a demonstration of physical aptitude and skill
          rather than as a health form.
          <br /> <br />
          However, it can still be practiced as a health form if you remove the{" "}
          <i>nandu</i> (difficulty factors) such as low stances and leg lifts.
        </p>
      </section>
      <section>
        <h4>Videos</h4>
        <ContentEmbed
          id="Cr0Tv7DNWbc"
          title="2025 NCCCAF Taiji Championship, Mason's Yang 24"
        />
        <br />
        <ContentEmbed
          id="XkCwv9oNM3c"
          title="Summer Outdoors Group Practice, Yang 24"
        />
      </section>
      <section>
        <h4>Resources</h4>
        <ul>
          <li>
            <Link
              href="https://en.wikipedia.org/wiki/24-form_tai_chi"
              target="_blank"
            >
              Wikipedia on 24-form tai chi
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
