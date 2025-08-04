import Link from "next/link";

export default function SpiralingExercises() {
  return (
    <article>
      <section>
        <p>
          These spiraling exercises help loosen up the body and prepare for
          practice. We always start the first 30 minutes of class with these
          exercises to help train body awareness, coordination, and spiraling
          techniques.
          <br /> <br />
          The exercises are based on the Chen style spiraling exercises, also
          known as &quot;Reeling Silk&quot; exercises, albeit a bit distilled.
          Those who want to learn more about Chen style tai chi should check in
          with Sifu and refer to the book in the resources section below.
        </p>
      </section>
      <section>
        <h4>Resources</h4>
        <ul>
          <li>
            <Link
              href="https://austinchentaichi.com/wp-content/uploads/2009/10/ReelingSilkBook.pdf"
              target="_blank"
            >
              Reeling Silk Energy Exercises Book by Grandmaster Feng Zhiqiang
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
