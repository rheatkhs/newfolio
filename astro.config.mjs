// https://astro.build/config
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
function resolveSiteUrl() {
  const raw = process.env.PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || 'https://works.mevia.web.id/';
  let url = String(raw).trim().replace(/^['"]|['"]$/g, '');
  if (!url || url === 'undefined' || url === 'null') {
    return 'https://works.mevia.web.id/';
  }
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = `https://${url}`;
  }
  if (!url.endsWith('/')) {
    url = `${url}/`;
  }
  try {
    new URL(url);
    return url;
  } catch {
    return 'https://works.mevia.web.id/';
  }
}

const SITE_URL = resolveSiteUrl();
export default defineConfig({
  markdown: {
    shikiConfig: {
    theme: "github-dark",
    wrap: true,
    }
  },
  envPrefix: 'PUBLIC_',
  site: SITE_URL,
  base: '/',
  integrations: [sitemap(), mdx()],
  redirects: {
    '/detail/2960-gt3': '/d/a9f2c8d1',
    '/detail/kadia': '/d/e4b1a7d2',
    '/detail/neostream': '/d/c8f2b0e4',
    '/detail/kopken': '/d/d7a3f8c5',
    '/detail/lyricscape': '/d/39e1b4f6',
    '/detail/sigap': '/d/b2f8a9c3',
    '/detail/ppid': '/d/7d4e1b8a',
    '/detail/pramuka': '/d/f8a2c5d9',
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern",
      },
    },
  },
})