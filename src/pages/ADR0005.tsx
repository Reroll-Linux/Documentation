import { Helmet } from '../components/Helmet'
import StatusBadge from '../components/StatusBadge'
import Breadcrumb from '../components/Breadcrumb'

export default function ADR0005() {
  return (
    <>
      <Helmet title="ADR 0005 — Defer Dicebox" />
      <Breadcrumb items={[{ label: 'ADRs', path: '/adrs' }, { label: 'ADR 0005' }]} />

      <h1>ADR 0005 — Defer Dicebox</h1>

      <p><StatusBadge status="Accepted" /></p>

      <h2 id="context">Context</h2>
      <p>
        Dicebox is an optional sandbox/runtime concept that would provide isolated application
        environments. While interesting, it would add significant scope to a project that has not
        yet proven its core mechanism.
      </p>

      <h2 id="decision">Decision</h2>
      <p>
        An optional sandbox/runtime idea called <strong>Dicebox is deferred</strong>.
      </p>

      <h2 id="consequences">Consequences</h2>
      <ul>
        <li>Development stays focused on package deployment and system rollback.</li>
        <li>No design work spent on sandboxing before the package format is stable.</li>
        <li>Dicebox may be revisited later if users demonstrate a real need.</li>
        <li>No dependency on container or namespace technologies in the core.</li>
      </ul>

      <h2 id="alternatives">Alternatives Considered</h2>
      <ul>
        <li><strong>Build Dicebox early:</strong> Would distract from the core rollback prototype and dilute the project&apos;s focus.</li>
      </ul>
    </>
  )
}
