import type { FC } from 'react'

interface StatusBadgeProps {
  status: 'Completed' | 'In Progress' | 'Planned' | 'Deferred' | 'Proposed' | 'Accepted'
}

const classMap: Record<string, string> = {
  Completed: 'badge-completed',
  'In Progress': 'badge-in-progress',
  Planned: 'badge-planned',
  Deferred: 'badge-deferred',
  Proposed: 'badge-proposed',
  Accepted: 'badge-accepted',
}

const StatusBadge: FC<StatusBadgeProps> = ({ status }) => (
  <span className={`badge ${classMap[status] ?? 'badge-proposed'}`}>{status}</span>
)

export default StatusBadge
