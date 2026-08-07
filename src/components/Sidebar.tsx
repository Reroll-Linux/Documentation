import type { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getSidebarSections } from '../content'

const Sidebar: FC = () => {
  const { pathname } = useLocation()
  const sections = getSidebarSections()

  return (
    <aside className="sidebar" role="navigation" aria-label="Documentation sidebar">
      {sections.map((section) => (
        <div className="sidebar-section" key={section.label}>
          <div className="sidebar-section-label">{section.label}</div>
          {section.items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
      <div className="sidebar-section">
        <Link
          to="/design-system"
          className={`sidebar-link ${pathname === '/design-system' ? 'active' : ''}`}
        >
          Design System
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
