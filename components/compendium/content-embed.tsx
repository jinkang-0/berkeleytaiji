import styles from "./content.module.scss";

export default function ContentEmbed({
  id,
  title
}: {
  id: string;
  title?: string;
}) {
  return (
    <div className={styles.embed}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}?mute=1`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      {title && <p>{title}</p>}
    </div>
  );
}
