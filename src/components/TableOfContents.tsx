import { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

interface TocItem {
  id: string
  text: string
}

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    el.focus({ preventScroll: true })
  }
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2[id], h3[id]'))
    const items: TocItem[] = elements.map((el) => ({
      id: el.id,
      text: el.textContent ?? '',
    }))
    setHeadings(items)

    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToId(id)
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className="toc" aria-label="On this page">
      <div className="toc-title">On this page</div>
      <ul className="toc-list">
        {headings.map((h) => (
          <li key={h.id} className="toc-item">
            <a
              href={`#${h.id}`}
              className={`toc-link ${activeId === h.id ? 'active' : ''}`}
              onClick={(e) => handleClick(e, h.id)}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
