import type { FC } from 'react'
import StatusBadge from './StatusBadge'

interface MilestoneCardProps {
  version: string
  name: string
  status: 'Completed' | 'In Progress' | 'Planned' | 'Deferred' | 'Proposed'
  goal: string
}

const MilestoneCard: FC<MilestoneCardProps> = ({ version, name, status, goal }) => (
  <div className="milestone-card">
    <div className="milestone-header">
      <span className="milestone-version">{version}</span>
      <span className="milestone-name">— {name}</span>
      <StatusBadge status={status} />
    </div>
    <p className="milestone-goal"><strong>Goal:</strong> {goal}</p>
  </div>
)

export default MilestoneCard
