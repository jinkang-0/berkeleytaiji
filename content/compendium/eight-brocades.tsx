import Link from "next/link";

export default function EightBrocades() {
  return (
    <article>
      <section>
        <p>
          Eight brocades, also known as Baduanjin (八段锦), is a traditional
          Chinese qigong practice that dates back to the Song Dynasty.
          Currently, it is one of the most popular forms of qigong practiced
          worldwide.
          <br /> <br />
          While it is often practiced as a medical qigong exercise, it also has
          its place in martial arts training to supplement external exertion of
          force with internal energy training.
        </p>
      </section>
      <section>
        <h4>Resources</h4>
        <ul>
          <li>
            <Link
              href="https://en.wikipedia.org/wiki/Baduanjin_qigong"
              target="_blank"
            >
              Wikipedia on Baduanjin
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
