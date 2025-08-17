import ContentEmbed from "@/components/compendium/content-embed";
import Link from "next/link";

export default function XingyiDrills() {
  return (
    <article>
      <section>
        <p>
          These drills focus on the five elements of Xingyi (形意), an internal
          martial art that emphasizes explosive energy using internal energy.
          Each of the five element represented by a specific movement and form
          of energy expression.
          <br /> <br />
          Due to its more physical nature, Xingyi is often more accessible to
          some than tai chi, which can be more subtle and nuanced. As such, we
          teach these drills to expose students to Xingyi's internal techniques
          to help develop their understanding of internal martial arts and their
          ability to express energy through movement.
          <br /> <br />
          We usually practice these drills with wooden <i>miao daos</i> (Chinese
          long sabers) (苗刀) and <i>bokkens</i> (Japanese wooden sword) to
          develop sword skills alongside our practice. However, these drills can
          also be practiced empty-handed if you do not have access to a sword at
          home, or with other weapons, such as a staff or a spear, if you prefer
          to work with those instead.
        </p>
      </section>
      <section>
        <h4>Videos</h4>
        <ContentEmbed id="D6A9WHOYia4" title="Xingyi Five Element Drills" />
        <ContentEmbed
          id="K9NkeicoLIM"
          title="2025 NCCCAF Championship, Mason's Xingyi Linked Five Elements Miao Dao"
        />
      </section>
      <section>
        <h4>Resources</h4>
        <ul>
          <li>
            <Link
              href="https://en.wikipedia.org/wiki/Xingyiquan"
              target="_blank"
            >
              Wikipedia on Xingyiquan
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
