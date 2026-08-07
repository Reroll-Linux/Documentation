import { Helmet } from '../components/Helmet'
import Callout from '../components/Callout'
import TerminalBlock from '../components/TerminalBlock'

export default function UpdatePolicy() {
  return (
    <>
      <Helmet title="Update Policy" description="Intended behaviour for different types of system changes." />
      <h1>Update Policy</h1>

      <Callout type="proposed">
        The update policy is proposed. No implementation exists to enforce these behaviours.
      </Callout>

      <p>
        Reroll Linux intends to distinguish between different types of updates and apply the
        appropriate level of caution for each.
      </p>

      <h2 id="table">Update Behaviour Table</h2>

      <table>
        <thead>
          <tr>
            <th>Update type</th>
            <th>Intended behaviour</th>
            <th>Savepoint</th>
            <th>Reboot</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Normal application</td><td>Apply normally</td><td>No</td><td>No</td></tr>
          <tr><td>User library</td><td>Apply normally; restart apps if necessary</td><td>No</td><td>Usually no</td></tr>
          <tr><td>System service</td><td>Restart the affected service when appropriate</td><td>Optional</td><td>Usually no</td></tr>
          <tr><td>Desktop/session component</td><td>Apply normally; logout may be needed</td><td>Optional</td><td>Usually no</td></tr>
          <tr><td>Kernel / driver / boot stack</td><td>Stage new bootable system generation</td><td>Yes</td><td>Yes to activate</td></tr>
          <tr><td>Core system runtime</td><td>Protected transaction</td><td>Yes</td><td>May be required</td></tr>
        </tbody>
      </table>

      <Callout type="note">
        <strong>Reroll Linux should not force a reboot for normal application updates.</strong>{' '}
        Savepoints exist to protect system-critical changes, not to make everyday package
        management annoying.
      </Callout>

      <h2 id="sendit">The <code>roll sendit</code> Escape Hatch</h2>

      <p>
        For cases where a user deliberately wants to apply a system-critical update without
        creating a savepoint, <code>roll sendit</code> is the proposed mechanism.
      </p>

      <TerminalBlock title="roll sendit — concept">
        <div><span className="prompt">$ </span><span className="cmd">roll sendit</span></div>
        <div>&nbsp;</div>
        <div><span style={{ color: 'var(--color-orange)' }}>Warning: this transaction changes system-critical dice without</span></div>
        <div><span style={{ color: 'var(--color-orange)' }}>creating a new savepoint.</span></div>
        <div>&nbsp;</div>
        <div>Type "send it" to continue: █</div>
      </TerminalBlock>

      <p>
        This is deliberately explicit. There are no generic flags such as{' '}
        <code>--no-savepoint</code> or <code>--force</code>.
      </p>
    </>
  )
}
