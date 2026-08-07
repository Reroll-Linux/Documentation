import { Helmet } from '../components/Helmet'
import Callout from '../components/Callout'
import TerminalBlock from '../components/TerminalBlock'

export default function Savepoints() {
  return (
    <>
      <Helmet title="Savepoints and Rerolls" description="Recoverable system states and bootable generations." />
      <h1>Savepoints: recoverable system states</h1>

      <Callout type="proposed">
        Savepoints are a proposed mechanism. No implementation exists.
      </Callout>

      <p>
        A <strong>savepoint</strong> is intended to be a complete bootable system generation
        created before a system-critical transaction. If the new generation fails, the user
        should be able to boot a previously known-good generation.
      </p>

      <h2 id="boot-menu">Example Boot Menu</h2>

      <TerminalBlock title="systemd-boot concept">
        <div style={{ fontWeight: 600, marginBottom: '0.5em' }}>Reroll Linux</div>
        <div>&nbsp;</div>
        <div><span style={{ color: 'var(--color-green)' }}>• Savepoint 42</span> — pending system update</div>
        <div>&nbsp;&nbsp;Savepoint 41 — known-good</div>
        <div>&nbsp;&nbsp;Savepoint 40 — known-good</div>
        <div>&nbsp;&nbsp;Recovery shell</div>
      </TerminalBlock>

      <h2 id="what-counts">What Counts as System-Critical?</h2>

      <ul>
        <li>Kernel (<code>linux</code>)</li>
        <li>Graphics driver stack</li>
        <li>Bootloader</li>
        <li>Initramfs / initrd</li>
        <li>Core system libraries (e.g. <code>glibc</code>, <code>systemd</code>)</li>
        <li>Core system services</li>
      </ul>

      <h2 id="important">Important Considerations</h2>

      <ul>
        <li>User home data should be separate from system-generation rollback where possible.</li>
        <li>
          A filesystem snapshot alone is not enough; the boot configuration, kernel, initramfs,
          and matching system state must also be coherent.
        </li>
        <li>
          The first proof of concept is expected to use <strong>Btrfs subvolumes</strong> and{' '}
          <strong>systemd-boot</strong>, but these choices are proposed.
        </li>
      </ul>

      <h2 id="reroll">Rerolling</h2>

      <p>
        A <strong>reroll</strong> means selecting an earlier savepoint for the next boot. The
        proposed command is:
      </p>

      <pre><code>roll reroll 41</code></pre>

      <p>
        This would tell the bootloader to start from savepoint 41 on the next reboot. The
        current (potentially broken) generation would remain on disk for inspection.
      </p>
    </>
  )
}
