export interface PageMeta {
  slug: string
  path: string
  title: string
  description?: string
  section: string
  order: number
}

export interface SidebarSection {
  label: string
  items: { path: string; label: string }[]
}

const rawModules = import.meta.glob('/docs/**/*.mdx', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const pages: PageMeta[] = []

for (const [filePath, raw] of Object.entries(rawModules)) {
  const content = raw as string
  const slug = filePath
    .replace('/docs/', '')
    .replace(/\/index\.mdx$/, '')
    .replace(/\.mdx$/, '')

  const meta: PageMeta = {
    slug,
    path: slug === '' ? '/' : `/${slug}`,
    title: slug,
    description: '',
    section: 'Overview',
    order: 99,
  }

  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
  if (fmMatch) {
    const lines = fmMatch[1].split('\n')
    for (const line of lines) {
      const [key, ...rest] = line.split(':')
      if (key && rest.length) {
        const value = rest.join(':').trim()
        if (key === 'title') meta.title = value
        else if (key === 'description') meta.description = value
        else if (key === 'section') meta.section = value
        else if (key === 'order') meta.order = parseInt(value, 10) || 99
      }
    }
  }

  pages.push(meta)
}

const sectionOrder = ['Overview', 'Design', 'Decisions', 'Meta']

pages.sort((a, b) => {
  const sa = sectionOrder.indexOf(a.section)
  const sb = sectionOrder.indexOf(b.section)
  if (sa !== sb) return sa - sb
  return a.order - b.order
})

export function getAllPages(): PageMeta[] {
  return pages
}

export function getPage(path: string): PageMeta | undefined {
  return pages.find((p) => p.path === path)
}

export function getPageContent(path: string): string | undefined {
  for (const [filePath, raw] of Object.entries(rawModules)) {
    const slug = filePath
      .replace('/docs/', '')
      .replace(/\/index\.mdx$/, '')
      .replace(/\.mdx$/, '')
    const p = slug === '' ? '/' : `/${slug}`
    if (p === path) {
      const content = raw as string
      return content.replace(/^---\n[\s\S]*?\n---\n?/, '')
    }
  }
  return undefined
}

export function getSidebarSections(): SidebarSection[] {
  const map = new Map<string, { path: string; label: string }[]>()
  for (const page of pages) {
    if (!map.has(page.section)) {
      map.set(page.section, [])
    }
    map.get(page.section)!.push({ path: page.path, label: page.title })
  }
  const result: SidebarSection[] = []
  for (const section of sectionOrder) {
    const items = map.get(section)
    if (items && items.length > 0) {
      result.push({ label: section, items })
    }
  }
  for (const [section, items] of map) {
    if (!sectionOrder.includes(section)) {
      result.push({ label: section, items })
    }
  }
  return result
}
