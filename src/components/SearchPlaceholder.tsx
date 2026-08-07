import type { FC } from 'react'

const SearchPlaceholder: FC = () => (
  <div className="search-box">
    <span className="search-icon" aria-hidden="true">&#x1F50D;</span>
    <input
      className="search-input"
      type="text"
      placeholder="Search docs..."
      disabled
      aria-label="Search (not yet implemented)"
      title="Search is not yet implemented"
    />
  </div>
)

export default SearchPlaceholder
