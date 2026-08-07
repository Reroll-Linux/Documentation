import { Helmet } from '../components/Helmet'
import Callout from '../components/Callout'
import TerminalBlock from '../components/TerminalBlock'

export default function LiveUSB() {
  return (
    <>
      <Helmet title="Live USB" description="The intended development, recovery, and installation environment." />
      <h1>The Live USB</h1>

      <Callout type="proposed">
        The live USB is planned. No image exists.
      </Callout>

      <p>
        The Reroll Linux live USB is intended to be a development, recovery, and installation
        environment.
      </p>

      <h2 id="goals">Planned Goals</h2>

      <ul>
        <li>Boot a minimal Reroll environment.</li>
        <li>Test hardware and boot behaviour.</li>
        <li>Install Reroll Linux to a target disk.</li>
        <li>Run <code>roll</code> commands.</li>
        <li>Preserve optional live-session data in a dedicated persistence area.</li>
        <li>Support dice commands such as <code>roll d20</code>.</li>
      </ul>

      <h2 id="permadeath">Permadeath</h2>

      <p>
        A future <code>roll d20 --permadeath</code> Easter egg may be available only on a Reroll
        live USB. It may erase the USB&apos;s own writable session or persistence data after a
        critical failure.
      </p>

      <Callout type="danger">
        <strong>It must never:</strong>
        <ul style={{ marginBottom: 0 }}>
          <li>select an internal disk,</li>
          <li>wipe an installed operating system,</li>
          <li>delete a user&apos;s home directory on another device,</li>
          <li>silently destroy data.</li>
        </ul>
      </Callout>

      <h2 id="installed-response">Installed-System Response</h2>

      <TerminalBlock title="roll d20 --permadeath on an installed system — concept">
        <div><span className="prompt">$ </span><span className="cmd">roll d20 --permadeath</span></div>
        <div>&nbsp;</div>
        <div><span style={{ color: 'var(--color-violet)' }}>The presence has no power here.</span></div>
      </TerminalBlock>

      <Callout type="deferred">
        Permadeath is a future live-USB-only feature concept and is deferred. It is not part of
        the current scope.
      </Callout>
    </>
  )
}
