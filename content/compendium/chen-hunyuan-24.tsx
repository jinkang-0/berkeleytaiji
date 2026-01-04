import ContentEmbed from "@/components/compendium/content-embed";
import Link from "next/link";

export default function ChenHunyuan24() {
  return (
    <article>
      <section>
        <p>
          Chen Hunyuan 24 is a set of 24 movements from the Chen Hunyuan style
          of tai chi. Chen Hunyuan is a style developed by Grandmaster Feng
          Zhiqiang 冯志强 (1928-2012), aimed to develop power by linking and
          connecting the whole body and mind using circular meditative motions
          and effective footwork.
        </p>
      </section>
      <section>
        <h4>Videos</h4>
        <ContentEmbed id="8jnvSfA5P60" />
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
