export const prerender = true;

const staticPages = [
  "/",
  "/blog/",
  "/deodorant/",
  "/deodorant/natural/",
  "/deodorant/oud-musk/",
  "/deodorant/whitening/",
  "/contact/",
  "/sitemap/"
];

const blogPosts = [
  "/blog/industrial-deodorant-supply/",
  "/blog/gulf-fragrance-trends/",
  "/blog/private-label-deodorant-launch/",
  "/blog/antiperspirant-vs-deodorant/",
  "/blog/aluminum-free-options/",
  "/blog/format-comparison-rollon-spray-stick/",
  "/blog/export-compliance-checklist/",
  "/blog/whitening-deodorant-formulas/",
  "/blog/natural-claims-proof/",
  "/blog/retail-merchandising-tactics/"
];

export async function GET({ site }) {
  const base = site ?? new URL(process.env.URL || "https://example.com");
  const urls = [...staticPages, ...blogPosts];
  const lastmod = new Date().toISOString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => {
    const loc = new URL(path, base).toString();
    return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
  })
  .join("")}
</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
