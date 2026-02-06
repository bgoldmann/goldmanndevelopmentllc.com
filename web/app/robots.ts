import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data/services";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production" && process.env.NODE_ENV === "production";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: isProduction ? ["/api/", "/checkout/"] : ["/"],
    },
    sitemap: SITE_URL + "/sitemap.xml",
  };
}
