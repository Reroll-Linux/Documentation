import { Helmet } from '../components/Helmet'
import StatusBadge from '../components/StatusBadge'
import Breadcrumb from '../components/Breadcrumb'

export default function ADR0006() {
  return (
    <>
      <Helmet title="ADR 0006 — roll sendit Is the Only Savepoint Bypass" />
      <Breadcrumb items={[{ label: 'ADRs', path: '/adrs' }, { label: 'ADR 0006' }]} />

      <h1>ADR 0006 — <code>roll sendit</code> Is the Only Savepoint Bypass</h1>

      <p><StatusBadge status="Proposed" /></p>

      <h2 id="context">Context</h2>
      <p>
        During a system-critical update, creating a savepoint is the default. However, there may
        be legitimate situations where a user needs to apply a change immediately without staging
        a new bootable generation (e.g. during initial system setup, or in an automated environment).
      </p>

      <h2 id="decision">Decision</h2>
      <p>
        The project intends to avoid generic flags such as <code>--no-savepoint</code> or{' '}
        <code>--force</code>. The only bypass should be explicit and memorable:{' '}
        <code>roll sendit</code>.
      </p>

      <h2 id="consequences">Consequences</h2>
      <ul>
        <li>No accidental bypass through a forgotten flag or muscle memory.</li>
        <li>The command is deliberately unusual and requires typing &quot;send it&quot; to confirm.</li>
        <li>Simpler CLI surface: one bypass, not a matrix of flags.</li>
        <li>May frustrate users who want a shorthand for common bypass scenarios. This is intentional.</li>
      </ul>

      <h2 id="alternatives">Alternatives Considered</h2>
      <ul>
        <li><strong><code>--no-savepoint</code> flag:</strong> Easy to type accidentally or include in scripts, defeating the safety default.</li>
        <li><strong><code>--force</code> flag:</strong> Generic and overloaded; doesn&apos;t communicate what is being forced.</li>
        <li><strong>No bypass at all:</strong> Too inflexible for early setup and certain automation scenarios.</li>
      </ul>
    </>
  )
}
