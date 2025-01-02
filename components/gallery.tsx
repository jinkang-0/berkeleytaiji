import { Form } from "@/lib/types";
import styles from "./gallery.module.scss";

interface GalleryProps {
  forms: Form[];
}

export default function Gallery({ forms }: GalleryProps) {
  return (
    <div className={styles.gallery}>
      {forms.map((form) => (
        <div className={styles.card} key={form.name}>
          <iframe
            src={form.link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* <div className={styles.placeholder}></div> */}
          <div>
            <h6>{form.name}</h6>
            <p>{form.chinese}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
