interface VideoLoaderProps {
  videoUrl: string;
}

export default function VideoLoader({ videoUrl }: VideoLoaderProps) {
  return (
    <iframe
      src={videoUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share;"
      referrerPolicy="strict-origin-when-cross-origin"
      loading="lazy"
      allowFullScreen
    />
  );
}
