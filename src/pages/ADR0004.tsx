import { Helmet } from '../components/Helmet'
import StatusBadge from '../components/StatusBadge'
import Breadcrumb from '../components/Breadcrumb'

export default function ADR0004() {
  return (
    <>
      <Helmet title="ADR 0004 — Start With the Upstream Linux Kernel" />
      <Breadcrumb items={[{ label: 'ADRs', path: '/adrs' }, { label: 'ADR 0004' }]} />

      <h1>ADR 0004 — Start With the Upstream Linux Kernel</h1>

      <p><StatusBadge status="Accepted" /></p>

      <h2 id="context">Context</h2>
      <p>
        Many Linux distributions carry custom kernel patches for performance, compatibility, or
        features. Reroll Linux is trying to prove a specific system-management idea, not a new
        kernel.
      </p>

      <h2 id="decision">Decision</h2>
      <p>
        Reroll Linux will begin with an <strong>upstream kernel</strong> rather than custom patches.
      </p>

      <h2 id="consequences">Consequences</h2>
      <ul>
        <li>No ongoing maintenance burden for custom kernel patches.</li>
        <li>Tracking upstream releases is simpler.</li>
        <li>Slightly fewer kernel features tuned for the Reroll use case initially.</li>
        <li>Custom patches can be considered later if specific needs arise and are justified.</li>
      </ul>

      <h2 id="alternatives">Alternatives Considered</h2>
      <ul>
        <li><strong>Custom kernel patchset:</strong> Would consume significant maintenance effort without proving the rollback concept.</li>
        <li><strong>Linux-libre:</strong> Different set of concerns; not relevant to the rollback prototype.</li>
      </ul>
    </>
  )
}
