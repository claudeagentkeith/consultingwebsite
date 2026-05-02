import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/draft/"],
      },
    ],
    sitemap: "https://hitmakerengineering.com/sitemap.xml",
    host: "https://hitmakerengineering.com",
  };
}
