// @ts-check
import { defineConfig } from 'astro/config'

import alpinejs from '@astrojs/alpinejs'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),
    tailwind(),
    react()
  ],
  output: 'hybrid',
  adapter: vercel(),
  redirects: {}
})
