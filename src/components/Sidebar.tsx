import type { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { sidebarSections } from '../routeMeta'

const Sidebar: FC = () => {
  const { pathname } = useLocation()

  return (
    <aside className="sidebar" role="navigation" aria-label="Documentation sidebar">
      {sidebarSections.map((section) => (
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
    </aside>
  )
}

export default Sidebar
