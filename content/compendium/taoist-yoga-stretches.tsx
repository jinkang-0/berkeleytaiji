import Link from "next/link";

export default function TaoistYogaStretches() {
  return (
    <article>
      <section>
        <p>
          These stretches target the hamstrings, glutes, calves, hips, and lower
          back to increase flexibility and mobility.
          <br /> <br />
          While we rarely practice these in typical class sessions, we do add
          them on when we have upcoming events like competitions or
          performances, as they help loosen up the body and prepare for more
          intense physical activity.
          <br /> <br />
          If you are interested in practicing these stretches, feel free to ask
          our instructor for guidance.
        </p>
      </section>
      <section>
        <h4>Resources</h4>
        <ul>
          <li>
            <Link href="https://en.wikipedia.org/wiki/Daoyin" target="_blank">
              Wikipedia on Daoyin
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
