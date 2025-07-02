import CONFIG from "@/data/config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: CONFIG.siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1
    },
    {
      url: `${CONFIG.siteUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5
    }
  ];

  return sitemap;
}
