import type { FC, ReactNode } from 'react'
import { useState, useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import TableOfContents from './TableOfContents'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    el.focus({ preventScroll: true })
  }
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      className={`scroll-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      ↑
    </button>
  )
}

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((v) => !v)
  }, [])

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return

      if (href.startsWith('#') && !href.startsWith('#/')) {
        const id = href === '#' ? '' : href.slice(1)
        if (id) {
          e.preventDefault()
          scrollToId(id)
        }
        return
      }

      if (href.startsWith('/') && !href.startsWith('//') && !anchor.getAttribute('target')) {
        e.preventDefault()
        navigate(href)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [navigate])

  return (
    <div className="app-layout">
      <div className="app-header">
        <Header onToggleSidebar={toggleSidebar} />
      </div>
      <div className={`app-sidebar${sidebarOpen ? ' sidebar--mobile-open' : ''}`}>
        <Sidebar />
      </div>
      <main className="app-content-wrapper">
        <article className="app-content">
          {children}
        </article>
        <aside className="app-toc">
          <TableOfContents />
        </aside>
      </main>
      <div className="app-footer">
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default Layout
