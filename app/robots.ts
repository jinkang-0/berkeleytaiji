import CONFIG from "@/data/config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin-login", "/refresh"]
    },
    sitemap: `${CONFIG.siteUrl}/sitemap.xml`,
    host: CONFIG.siteUrl
  };
}
