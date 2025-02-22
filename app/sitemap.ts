import CONFIG from "@/data/config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: CONFIG.siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    }
  ];

  return sitemap;
}
