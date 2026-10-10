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
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        const now = new Date().toISOString();

        if (url === `${SITE_URL}` || url === SITE_URL.slice(0, -1)) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
          item.lastmod = now;
        } else if (
          url === `${SITE_URL}project/` ||
          url === `${SITE_URL}about/` ||
          url === `${SITE_URL}design/` ||
          url === `${SITE_URL}blog/`
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
          item.lastmod = now;
        } else if (url.includes('/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
          item.lastmod = now;
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
          item.lastmod = now;
        }
        return item;
      },
    }),
    mdx()
  ],
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