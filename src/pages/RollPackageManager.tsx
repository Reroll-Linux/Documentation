import { Helmet } from '../components/Helmet'
import Callout from '../components/Callout'
import TerminalBlock from '../components/TerminalBlock'

export default function RollPackageManager() {
  return (
    <>
      <Helmet title="Roll Package Manager" description="The proposed command-line interface for package management." />
      <h1>Roll: package manager and deployment tool</h1>

      <Callout type="proposed">
        <code>roll</code> is the proposed command-line interface. It does not exist yet.
      </Callout>

      <p>
        <code>roll</code> is the proposed command-line interface for package installation, updates,
        package inspection, system history, and rollback operations in Reroll Linux.
      </p>

      <h2 id="examples">Example Commands</h2>

      <TerminalBlock title="Package operations — concept">
        <div><span className="prompt">$ </span><span className="cmd">roll install neovim</span></div>
        <div><span className="prompt">$ </span><span className="cmd">roll remove neovim</span></div>
        <div><span className="prompt">$ </span><span className="cmd">roll update</span></div>
        <div><span className="prompt">$ </span><span className="cmd">roll history</span></div>
        <div><span className="prompt">$ </span><span className="cmd">roll savepoints</span></div>
        <div><span className="prompt">$ </span><span className="cmd">roll reroll</span></div>
        <div><span className="prompt">$ </span><span className="cmd">roll sendit</span></div>
        <div><span className="prompt">$ </span><span className="cmd">roll d20</span></div>
        <div><span className="prompt">$ </span><span className="cmd">roll 2d6+3</span></div>
      </TerminalBlock>

      <h2 id="commands">Planned Command Table</h2>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Intended purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>roll install &lt;die&gt;</code></td><td>Install a package</td></tr>
          <tr><td><code>roll remove &lt;die&gt;</code></td><td>Remove a package</td></tr>
          <tr><td><code>roll update</code></td><td>Apply normal updates and stage critical updates safely</td></tr>
          <tr><td><code>roll history</code></td><td>Show prior transactions</td></tr>
          <tr><td><code>roll savepoints</code></td><td>List bootable system generations</td></tr>
          <tr><td><code>roll reroll [generation]</code></td><td>Select an earlier savepoint for the next boot</td></tr>
          <tr><td><code>roll sendit</code></td><td>Explicitly bypass new savepoint creation for a system update</td></tr>
          <tr><td><code>roll d20</code></td><td>Roll a twenty-sided die</td></tr>
          <tr><td><code>roll &lt;notation&gt;</code></td><td>Roll standard dice notation such as 2d6+3</td></tr>
        </tbody>
      </table>

      <Callout type="warning">
        <code>roll sendit</code> is a proposed escape hatch, not a recommended update method. It
        should never create a partial package transaction; it only bypasses the new rollback
        savepoint.
      </Callout>
    </>
  )
}
