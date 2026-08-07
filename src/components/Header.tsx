import type { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchPlaceholder from './SearchPlaceholder'
import ThemeToggle from './ThemeToggle'

const headerLinks = [
  { path: '/', label: 'Docs' },
  { path: '/status', label: 'Status' },
  { path: '/roadmap', label: 'Roadmap' },
]

const Header: FC<{ onToggleSidebar?: () => void }> = ({ onToggleSidebar }) => {
  const { pathname } = useLocation()

  return (
    <header className="header" role="banner">
      <Link to="/" className="header-logo" aria-label="Reroll Linux home">
        <img src="/Documentation/logo.svg" alt="Reroll Linux logo" />
        <span>REROLL LINUX</span>
      </Link>

      <nav className="header-links" aria-label="Main navigation">
        {headerLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={pathname === link.path ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="header-meta">
        <SearchPlaceholder />
        <ThemeToggle />
        <a
          href="https://github.com/reroll-linux"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reroll Linux on GitHub"
        >
          GitHub ↗
        </a>
      </div>

      <button
        className="header-mobile-toggle"
        onClick={onToggleSidebar}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
    </header>
  )
}

export default Header
