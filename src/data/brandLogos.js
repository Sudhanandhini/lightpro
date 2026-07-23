// Partner logo lookup. Drop a file named after the slug of a brand
// (see slugify below) into src/assets/brands/ and it's picked up here
// automatically - no manual import wiring needed.

const files = import.meta.glob('../assets/brands/*.{svg,png,webp}', { eager: true, import: 'default' })

const bySlug = Object.fromEntries(
  Object.entries(files).map(([path, url]) => {
    const slug = path.split('/').pop().replace(/\.(svg|png|webp)$/, '')
    return [slug, url]
  })
)

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function getBrandLogo(name) {
  return bySlug[slugify(name)]
}
