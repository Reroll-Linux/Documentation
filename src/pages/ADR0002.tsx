import { Helmet } from '../components/Helmet'
import StatusBadge from '../components/StatusBadge'
import Breadcrumb from '../components/Breadcrumb'

export default function ADR0002() {
  return (
    <>
      <Helmet title="ADR 0002 — Require Btrfs for Early Savepoint Prototypes" />
      <Breadcrumb items={[{ label: 'ADRs', path: '/adrs' }, { label: 'ADR 0002' }]} />

      <h1>ADR 0002 — Require Btrfs for Early Savepoint Prototypes</h1>

      <p><StatusBadge status="Proposed" /></p>

      <h2 id="context">Context</h2>
      <p>
        Savepoints require the ability to create lightweight, bootable system snapshots. Rather
        than building a custom versioning filesystem, the prototypes should use an existing
        filesystem with snapshot and subvolume support.
      </p>

      <h2 id="decision">Decision</h2>
      <p>
        Early rollback experiments will likely target <strong>Btrfs</strong> because subvolumes
        and snapshots are practical for testing bootable system generations.
      </p>

      <h2 id="consequences">Consequences</h2>
      <ul>
        <li>Immediate access to snapshot and subvolume primitives without custom kernel development.</li>
        <li>Limits early testing to systems that can run Btrfs (most QEMU VMs, many real machines).</li>
        <li>Does not prevent supporting other filesystems later if the savepoint model proves out.</li>
        <li>Btrfs has known edge cases with certain RAID and quota configurations, but these are unlikely to affect early prototyping.</li>
      </ul>

      <h2 id="alternatives">Alternatives Considered</h2>
      <ul>
        <li><strong>ZFS:</strong> Powerful snapshots but licensing complexity and out-of-tree kernel module status add friction.</li>
        <li><strong>LVM snapshots:</strong> Block-level, not filesystem-aware, harder to make bootable.</li>
        <li><strong>Custom overlay/delta scheme:</strong> Solves none of the problems Btrfs already handles.</li>
      </ul>
    </>
  )
}
