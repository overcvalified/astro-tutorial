import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://glittery-lamington-2ebed2.netlify.app",
  integrations: [preact()]
});