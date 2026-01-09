import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const siteUrl = process.env.URL || "https://example.com";

export default defineConfig({
  site: siteUrl,
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
