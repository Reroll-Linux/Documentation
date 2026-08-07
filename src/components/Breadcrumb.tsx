import type { FC } from 'react'
import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  path?: string
}

const Breadcrumb: FC<{ items: BreadcrumbItem[] }> = ({ items }) => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    {items.map((item, i) => (
      <span key={i}>
        {i > 0 && <span className="separator" aria-hidden="true">/</span>}
        {item.path ? (
          <Link to={item.path}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        )}
      </span>
    ))}
  </nav>
)

export default Breadcrumb
