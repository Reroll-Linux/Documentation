import { Helmet } from '../components/Helmet'
import StatusBadge from '../components/StatusBadge'
import Breadcrumb from '../components/Breadcrumb'

export default function ADR0003() {
  return (
    <>
      <Helmet title="ADR 0003 — Use systemd" />
      <Breadcrumb items={[{ label: 'ADRs', path: '/adrs' }, { label: 'ADR 0003' }]} />

      <h1>ADR 0003 — Use systemd</h1>

      <p><StatusBadge status="Proposed" /></p>

      <h2 id="context">Context</h2>
      <p>
        Reroll Linux needs an init system, service manager, boot loader integration, and
        system-state tracking. Building these from scratch would delay the core rollback
        prototype by months or years.
      </p>

      <h2 id="decision">Decision</h2>
      <p>
        Early prototypes will likely use <strong>systemd</strong> and{' '}
        <strong>systemd-boot</strong> to reduce custom infrastructure while testing Reroll&apos;s
        own update logic.
      </p>

      <h2 id="consequences">Consequences</h2>
      <ul>
        <li>Immediate service management, boot configuration, and journaling.</li>
        <li>systemd-boot provides a UEFI boot menu that can list multiple system generations.</li>
        <li>The decision is not ideological and may be revisited if a simpler alternative is needed.</li>
        <li>systemd is large and complex; Reroll only depends on a subset of its features.</li>
      </ul>

      <h2 id="alternatives">Alternatives Considered</h2>
      <ul>
        <li><strong>OpenRC / runit / s6:</strong> Lighter, but lack built-in boot-loader integration and require more custom scripting for multi-generation booting.</li>
        <li><strong>Custom init:</strong> Would consume development time better spent on the rollback prototype.</li>
      </ul>
    </>
  )
}
