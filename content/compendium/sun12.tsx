import ContentEmbed from "@/components/compendium/content-embed";
import Link from "next/link";

export default function Sun12() {
  return (
    <article>
      <section>
        <p>
          Sun 12 is a simplified form of Sun-style tai chi, designed to focus on
          developing footwork. It is a great introduction to Sun style tai chi
          as it covers much of the basic movements and principles of the style.
        </p>
      </section>
      <section>
        <h4>Videos</h4>
        <ContentEmbed id="fRA7bMWEpjo" />
      </section>
      <section>
        <h4>Resources</h4>
        <ul>
          <li>
            <Link
              href="https://en.wikipedia.org/wiki/Sun-style_tai_chi"
              target="_blank"
            >
              Wikipedia on Sun style tai chi
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
