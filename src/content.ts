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

interface PageEntry {
  meta: PageMeta
  content: string
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!fmMatch) return { data: {}, body: raw }
  const data: Record<string, string> = {}
  for (const line of fmMatch[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    if (key && value) data[key] = value
  }
  return { data, body: raw.slice(fmMatch[0].length) }
}

const registry: Record<string, PageEntry> = {}

function register(slug: string, raw: string) {
  const { data, body } = parseFrontmatter(raw)
  if (!data.title) return
  const meta: PageMeta = {
    slug,
    path: slug === '' ? '/' : `/${slug}`,
    title: data.title,
    description: data.description || '',
    section: data.section || 'Overview',
    order: parseInt(data.order, 10) || 99,
  }
  registry[meta.path] = { meta, content: body }
}

// === Import all MDX files as raw strings ===
import indexRaw from '../docs/index.mdx?raw'
import statusRaw from '../docs/status.mdx?raw'
import roadmapRaw from '../docs/roadmap.mdx?raw'
import terminologyRaw from '../docs/terminology.mdx?raw'
import architectureRaw from '../docs/architecture.mdx?raw'
import rollRaw from '../docs/roll.mdx?raw'
import diceRaw from '../docs/dice.mdx?raw'
import savepointsRaw from '../docs/savepoints.mdx?raw'
import updatePolicyRaw from '../docs/update-policy.mdx?raw'
import manufacturersRaw from '../docs/manufacturers.mdx?raw'
import liveUsbRaw from '../docs/live-usb.mdx?raw'
import adrsIndexRaw from '../docs/adrs/index.mdx?raw'
import adr0001Raw from '../docs/adrs/0001.mdx?raw'
import adr0002Raw from '../docs/adrs/0002.mdx?raw'
import adr0003Raw from '../docs/adrs/0003.mdx?raw'
import adr0004Raw from '../docs/adrs/0004.mdx?raw'
import adr0005Raw from '../docs/adrs/0005.mdx?raw'
import adr0006Raw from '../docs/adrs/0006.mdx?raw'
import faqRaw from '../docs/faq.mdx?raw'
import contributingRaw from '../docs/contributing.mdx?raw'
import securityRaw from '../docs/security.mdx?raw'

register('', indexRaw)
register('status', statusRaw)
register('roadmap', roadmapRaw)
register('terminology', terminologyRaw)
register('architecture', architectureRaw)
register('roll', rollRaw)
register('dice', diceRaw)
register('savepoints', savepointsRaw)
register('update-policy', updatePolicyRaw)
register('manufacturers', manufacturersRaw)
register('live-usb', liveUsbRaw)
register('adrs', adrsIndexRaw)
register('adrs/0001', adr0001Raw)
register('adrs/0002', adr0002Raw)
register('adrs/0003', adr0003Raw)
register('adrs/0004', adr0004Raw)
register('adrs/0005', adr0005Raw)
register('adrs/0006', adr0006Raw)
register('faq', faqRaw)
register('contributing', contributingRaw)
register('security', securityRaw)

// === Public API ===

const sectionOrder = ['Overview', 'Design', 'Decisions', 'Meta']

const pages: PageMeta[] = Object.values(registry)
  .map((e) => e.meta)
  .sort((a, b) => {
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
  return registry[path]?.content
}

export function getSidebarSections(): SidebarSection[] {
  const map = new Map<string, { path: string; label: string }[]>()
  for (const page of pages) {
    if (!map.has(page.section)) map.set(page.section, [])
    map.get(page.section)!.push({ path: page.path, label: page.title })
  }
  const result: SidebarSection[] = []
  for (const section of sectionOrder) {
    const items = map.get(section)
    if (items && items.length > 0) result.push({ label: section, items })
  }
  for (const [section, items] of map) {
    if (!sectionOrder.includes(section)) result.push({ label: section, items })
  }
  return result
}
