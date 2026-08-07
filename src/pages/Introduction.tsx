import { Helmet } from '../components/Helmet'
import Callout from '../components/Callout'
import TerminalBlock from '../components/TerminalBlock'

export default function Introduction() {
  return (
    <>
      <Helmet title="Introduction" description="What is Reroll Linux?" />
      <h1>What is Reroll Linux?</h1>

      <p>
        Reroll Linux is a <strong>proposed</strong> minimal rolling-release Linux distribution focused
        on one core idea: <strong>critical system updates should be recoverable by default.</strong>
      </p>

      <p>
        Traditional package updates can replace a running system in place. Reroll Linux is intended
        to <strong>stage risky system changes into a new bootable savepoint</strong>, allowing the user
        to return to a previously working state if an update fails.
      </p>

      <div className="tagline">
        &ldquo;Roll forward confidently. Reroll safely.&rdquo;
      </div>

      <Callout type="warning">
        <strong>Warning:</strong> Reroll Linux is currently in the design and prototype stage. It is
        not ready to install on a real computer.
      </Callout>

      <h2 id="why">Why Reroll Linux?</h2>

      <ul>
        <li>
          <strong>Rolling distributions</strong> provide current software, but updates can
          sometimes break graphics, boot configuration, drivers, or custom setups.
        </li>
        <li>
          <strong>Recovery should not require</strong> a live USB, manual chroot repair, or
          reinstall.
        </li>
        <li>
          A user should be able to <strong>choose an older known-good system generation</strong>{' '}
          from the boot menu.
        </li>
      </ul>

      <h2 id="example">What would a typical update look like?</h2>

      <TerminalBlock title="roll update — concept">
        <div><span className="prompt">$ </span><span className="cmd">roll update</span></div>
        <div>&nbsp;</div>
        <div>Resolving dice...</div>
        <div>System-critical changes detected:</div>
        <div>&nbsp;&nbsp;linux</div>
        <div>&nbsp;&nbsp;graphics-driver</div>
        <div>&nbsp;&nbsp;system-services</div>
        <div>&nbsp;</div>
        <div>Creating savepoint 42...</div>
        <div>Update staged.</div>
        <div>&nbsp;</div>
        <div><span style={{ color: 'var(--color-green)' }}>Reboot when ready.</span></div>
      </TerminalBlock>

      <Callout type="proposed">
        The terminal output above is a mock-up of the intended behaviour. The <code>roll</code>{' '}
        command does not exist yet.
      </Callout>
    </>
  )
}
