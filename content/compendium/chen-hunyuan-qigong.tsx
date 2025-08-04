import Link from "next/link";

export default function ChenHunyuanQigong() {
  return (
    <article>
      <section>
        <p>
          Chen-style Hunyuan tai chi was created by Grandmaster Feng Zhiqiang,
          which integrates the full body into the movement to train every part
          of the body to harmonize with the mind and spirit.
          <br /> <br />
          The term &quot;Hunyuan&quot; (混元) refers to the primordial state of
          the universe, where everything is unified and undifferentiated. In a
          similar way, Chen Hunyuan tai chi aims to unify the body, mind, and
          spirit into a single practice.
          <br /> <br />
          As neigong practice, it helps practitioners align all the components
          of neigong together into one practice: <i>li</i> (body mechanics),{" "}
          <i>qi</i> (energy),
          <i>yi</i> (intention), <i>jing</i> (energy expression), and{" "}
          <i>shen</i> (spirit). Thereby reducing much of the difficulty and
          confusion that comes with learning tai chi and neigong.
          <br /> <br />
          In class, we practice this qigong in repetitions of 9 for each
          movement, focusing on the coordination of the body and mind.
        </p>
      </section>
      <section>
        <h4>Resources</h4>
        <ul>
          <li>
            <Link
              href="https://en.m.wikipedia.org/wiki/Chen-style_tai_chi#Xinyi_Hunyuan_tai_chi"
              target="_blank"
            >
              Wikipedia on Chen Hunyuan tai chi
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
