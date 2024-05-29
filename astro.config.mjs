import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://rpgdevs.com",
  integrations: [
    tailwind(),
    react(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});