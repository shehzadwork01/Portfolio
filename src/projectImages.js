// Auto-loads every image in src/assets/projects/<slug>/ (jpg, jpeg, png, webp).
// Add as many as you like per project; they are sorted by file name (1.jpg, 2.jpg, ... 10.jpg).
const files = import.meta.glob('./assets/projects/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const bySlug = {}
for (const [path, url] of Object.entries(files)) {
  const [, slug, name] = path.match(/projects\/([^/]+)\/([^/]+)$/)
  ;(bySlug[slug] ||= []).push({ name, url })
}

const collator = new Intl.Collator(undefined, { numeric: true })

export function getImages(slug) {
  return (bySlug[slug] || []).sort((a, b) => collator.compare(a.name, b.name)).map((f) => f.url)
}
