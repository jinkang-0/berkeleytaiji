import { Form } from "@/lib/types";
import styles from "./gallery.module.scss";
import VideoLoader from "./video-loader";
import { Suspense } from "react";
import GalleryClient from "./gallery-client";
import { getYTEmbed } from "@/lib/utils";

interface GalleryProps {
  forms: Form[];
}

export default function Gallery({ forms }: GalleryProps) {
  return (
    <GalleryClient numForms={forms.length}>
      {forms.map((form) => (
        <div className={styles.card} key={form.name}>
          <Suspense fallback={<div className={styles.placeholder} />}>
            <VideoLoader videoUrl={getYTEmbed(form.link)} />
          </Suspense>
          <div>
            <h6>{form.name}</h6>
            <p>{form.chinese}</p>
          </div>
        </div>
      ))}
    </GalleryClient>
  );
}
