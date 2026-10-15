/**
 * Runs after `vite build`. Renders every page listed in src/data/seo.js to its own
 * HTML file, with that page's title, description, canonical URL, social tags and
 * structured data, so search engines can read each page without running JavaScript.
 * Also writes 404.html, sitemap.xml and robots.txt.
 *
 *   /                      -> dist/index.html
 *   /about                 -> dist/about.html
 *   /professional-services/warehousing -> dist/professional-services/warehousing.html
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, pages, notFound, SITE_URL, SITE_NAME, company } = await import(pathToFileURL(ssrEntry).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const urlFor = p => SITE_URL + (p === '/' ? '/' : p)
const ogImage = SITE_URL + '/og-image.jpg'

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  alternateName: SITE_NAME,
  url: SITE_URL + '/',
  logo: ogImage,
  foundingDate: String(company.since),
  email: company.email.map(e => e.trim())[0],
  telephone: company.phone[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 32, BHCS Layout, Bannerghatta Main Road, Opp Gopalan Innovation Mall',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560076',
    addressCountry: 'IN'
  },
  contactPoint: company.phone.map(telephone => ({
    '@type': 'ContactPoint', telephone, contactType: 'sales', areaServed: 'IN', availableLanguage: ['en']
  }))
}

function breadcrumbs(p) {
  const parts = p.split('/').filter(Boolean)
  const items = [{ name: 'Home', url: urlFor('/') }]
  parts.forEach((_, i) => {
    const sub = '/' + parts.slice(0, i + 1).join('/')
    if (pages[sub]) items.push({ name: pages[sub].title.split(' | ')[0], url: urlFor(sub) })
  })
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url }))
  }
}

function head(meta, p) {
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`
  ]
  if (!p) {
    tags.push('<meta name="robots" content="noindex" />')
    return tags.join('\n    ')
  }
  const url = urlFor(p)
  const ld = p === '/' ? organization : breadcrumbs(p)
  tags.push(
    `<link rel="canonical" href="${url}" />`,
    '<meta name="robots" content="index, follow, max-image-preview:large" />',
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    '<meta property="og:locale" content="en_IN" />',
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`
  )
  return tags.join('\n    ')
}

function page(route, meta, seoPath) {
  return template
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, head(meta, seoPath))
    .replace('<!--app-html-->', render(route))
}

function write(file, html) {
  const out = path.join(dist, file)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
}

for (const [p, meta] of Object.entries(pages)) {
  const file = p === '/' ? 'index.html' : p.slice(1) + '.html'
  write(file, page(p, meta, p))
  console.log('prerendered', p, '->', file)
}
write('404.html', page('/404', notFound, null))

const today = new Date().toISOString().slice(0, 10)
write('sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  Object.entries(pages).map(([p, m]) =>
    `  <url><loc>${urlFor(p)}</loc><lastmod>${today}</lastmod><priority>${m.priority}</priority></url>`).join('\n') +
  '\n</urlset>\n')

// robots.txt only takes effect at the domain root. If the site lives under /lightpro,
// copy this Sitemap line into the root robots.txt as well.
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('wrote 404.html, sitemap.xml, robots.txt')
