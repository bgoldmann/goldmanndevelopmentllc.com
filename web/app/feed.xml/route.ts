import { SITE_URL, SITE_NAME } from "@/lib/data/services";

export const revalidate = 3600;

export async function GET() {
  // In production, fetch posts from Supabase
  const posts = [
    { slug: "what-is-pentesting", title: "What Is Pentesting?", updated: new Date().toISOString() },
    { slug: "soc2-readiness-guide", title: "SOC 2 Readiness Guide", updated: new Date().toISOString() },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} - Blog &amp; Resources</title>
    <link>${escapeXml(SITE_URL + "/resources")}</link>
    <description>Security explainers and best practices</description>
    <atom:link href="${escapeXml(SITE_URL + "/feed.xml")}" rel="self" type="application/rss+xml"/>
    ${posts.map((p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${escapeXml(SITE_URL + "/resources/" + p.slug)}</link>
      <pubDate>${new Date(p.updated).toUTCString()}</pubDate>
    </item>`).join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
