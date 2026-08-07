import { Helmet } from '../components/Helmet'
import { Link } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'

const adrs = [
  { id: '0001', title: 'Use C++ for Roll', status: 'Proposed' as const },
  { id: '0002', title: 'Require Btrfs for Early Savepoint Prototypes', status: 'Proposed' as const },
  { id: '0003', title: 'Use systemd', status: 'Proposed' as const },
  { id: '0004', title: 'Start With the Upstream Linux Kernel', status: 'Accepted' as const },
  { id: '0005', title: 'Defer Dicebox', status: 'Accepted' as const },
  { id: '0006', title: 'roll sendit Is the Only Savepoint Bypass', status: 'Proposed' as const },
]

export default function ADRList() {
  return (
    <>
      <Helmet title="Architecture Decision Records" description="Recorded design decisions and their rationale." />
      <h1>Architecture Decision Records</h1>

      <p>
        Architecture Decision Records (ADRs) document the reasons behind significant design
        choices. Each record includes the status, context, decision, consequences, and alternatives
        that were considered.
      </p>

      <ul className="adr-list">
        {adrs.map((adr) => (
          <li key={adr.id} className="adr-list-item">
            <Link to={`/adrs/${adr.id}`}>
              ADR {adr.id} — {adr.title}
            </Link>
            <div className="adr-meta">
              <StatusBadge status={adr.status} />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
