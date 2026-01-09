import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.URL || "https://example.com";

export default defineConfig({
  site: siteUrl,
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});
