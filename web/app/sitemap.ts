import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data/services";
import { SERVICE_SLUGS } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: SITE_URL + "/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: SITE_URL + "/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: SITE_URL + "/resources", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: SITE_URL + "/security-disclosure", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: SITE_URL + "/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: SITE_URL + "/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: SITE_URL + "/checklists", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: SITE_URL + "/glossary", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: SITE_URL + "/services/" + slug,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...base, ...servicePages];
}
