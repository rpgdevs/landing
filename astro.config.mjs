import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import astroI18next from "astro-i18next";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rpgdevs.com",
  base: "",
  integrations: [tailwind(), react(), astroI18next(), icon(), svelte()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      en: 'es'
    }
  },
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});