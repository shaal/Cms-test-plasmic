import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import lit from '@astrojs/lit';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['**/pages/**/*.astro'],
    }),
    lit()
  ],
  vite: {
    optimizeDeps: {
      include: ['@plasmicapp/host', '@lit/react', '@lit-labs/react']
    },
    ssr: {
      noExternal: ['@lit/react', '@lit-labs/react']
    },
    server: {
      cors: {
        origin: ['https://studio.plasmic.app'],
        credentials: true
      }
    }
  }
});
