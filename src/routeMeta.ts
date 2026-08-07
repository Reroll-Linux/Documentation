export interface RouteMeta {
  path: string
  title: string
  description?: string
  section?: string
  headings?: { id: string; text: string }[]
}

export const routeMeta: Record<string, RouteMeta> = {
  '/': {
    path: '/',
    title: 'Introduction',
    description: 'What is Reroll Linux?',
    section: 'Overview',
  },
  '/status': {
    path: '/status',
    title: 'Project Status',
    description: 'Current state of the Reroll Linux project.',
    section: 'Overview',
  },
  '/roadmap': {
    path: '/roadmap',
    title: 'Roadmap',
    description: 'Development milestones and planned features.',
    section: 'Overview',
  },
  '/terminology': {
    path: '/terminology',
    title: 'Terminology',
    description: 'Key terms and concepts used in the Reroll Linux ecosystem.',
    section: 'Design',
  },
  '/architecture': {
    path: '/architecture',
    title: 'System Architecture',
    description: 'How the Reroll Linux system is intended to work.',
    section: 'Design',
  },
  '/roll': {
    path: '/roll',
    title: 'Roll Package Manager',
    description: 'The proposed command-line interface for package management.',
    section: 'Design',
  },
  '/dice': {
    path: '/dice',
    title: 'Dice Package Format',
    description: 'The proposed package format for Reroll Linux.',
    section: 'Design',
  },
  '/savepoints': {
    path: '/savepoints',
    title: 'Savepoints and Rerolls',
    description: 'Recoverable system states and bootable generations.',
    section: 'Design',
  },
  '/update-policy': {
    path: '/update-policy',
    title: 'Update Policy',
    description: 'Intended behaviour for different types of system changes.',
    section: 'Design',
  },
  '/manufacturers': {
    path: '/manufacturers',
    title: 'Manufacturers and Signing',
    description: 'Package signing, maker\'s marks, and trust model.',
    section: 'Design',
  },
  '/live-usb': {
    path: '/live-usb',
    title: 'Live USB',
    description: 'The intended development, recovery, and installation environment.',
    section: 'Design',
  },
  '/adrs': {
    path: '/adrs',
    title: 'Architecture Decision Records',
    description: 'Recorded design decisions and their rationale.',
    section: 'Decisions',
  },
  '/adrs/0001': {
    path: '/adrs/0001',
    title: 'ADR 0001 — Use C++ for Roll',
    section: 'Decisions',
  },
  '/adrs/0002': {
    path: '/adrs/0002',
    title: 'ADR 0002 — Require Btrfs for Early Savepoint Prototypes',
    section: 'Decisions',
  },
  '/adrs/0003': {
    path: '/adrs/0003',
    title: 'ADR 0003 — Use systemd',
    section: 'Decisions',
  },
  '/adrs/0004': {
    path: '/adrs/0004',
    title: 'ADR 0004 — Start With the Upstream Linux Kernel',
    section: 'Decisions',
  },
  '/adrs/0005': {
    path: '/adrs/0005',
    title: 'ADR 0005 — Defer Dicebox',
    section: 'Decisions',
  },
  '/adrs/0006': {
    path: '/adrs/0006',
    title: 'ADR 0006 — roll sendit Is the Only Savepoint Bypass',
    section: 'Decisions',
  },
  '/faq': {
    path: '/faq',
    title: 'FAQ',
    description: 'Frequently asked questions about Reroll Linux.',
    section: 'Meta',
  },
  '/contributing': {
    path: '/contributing',
    title: 'Contributing',
    description: 'How to contribute to the Reroll Linux project.',
    section: 'Meta',
  },
  '/security': {
    path: '/security',
    title: 'Security',
    description: 'Security policies and reporting information.',
    section: 'Meta',
  },
  '/design-system': {
    path: '/design-system',
    title: 'Design System',
    description: 'Visual reference and component library for the documentation site.',
    section: 'Meta',
  },
}

export const sidebarSections = [
  {
    label: 'Overview',
    items: [
      { path: '/', label: 'Introduction' },
      { path: '/status', label: 'Project Status' },
      { path: '/roadmap', label: 'Roadmap' },
      { path: '/terminology', label: 'Terminology' },
    ],
  },
  {
    label: 'Design',
    items: [
      { path: '/architecture', label: 'System Architecture' },
      { path: '/roll', label: 'Roll Package Manager' },
      { path: '/dice', label: 'Dice Package Format' },
      { path: '/savepoints', label: 'Savepoints and Rerolls' },
      { path: '/update-policy', label: 'Update Policy' },
      { path: '/manufacturers', label: 'Manufacturers and Signing' },
      { path: '/live-usb', label: 'Live USB' },
    ],
  },
  {
    label: 'Decisions',
    items: [
      { path: '/adrs', label: 'Architecture Decision Records' },
    ],
  },
  {
    label: 'Meta',
    items: [
      { path: '/faq', label: 'FAQ' },
      { path: '/contributing', label: 'Contributing' },
      { path: '/security', label: 'Security' },
      { path: '/design-system', label: 'Design System' },
    ],
  },
]
