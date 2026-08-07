import { Helmet } from '../components/Helmet'
import Callout from '../components/Callout'

export default function SystemArchitecture() {
  return (
    <>
      <Helmet title="System Architecture" description="How the Reroll Linux system is intended to work." />
      <h1>System Architecture</h1>

      <Callout type="proposed">
        Every element on this page is proposed. Nothing described here has been implemented.
      </Callout>

      <p>
        The diagram below shows the intended high-level architecture of Reroll Linux, from the
        user issuing a command through to booting a new generation or selecting a known-good reroll.
      </p>

      <h2 id="diagram">Architecture Diagram</h2>

      <div className="architecture-diagram">
        <pre>
{`User
  |
  v
roll CLI
  |
  v
rolled transaction daemon (proposed)
  |--------------------|
  v                    v
Dicebag repository     Local die store
  |                    |
  ---------> Dependency resolution
                       |
                       v
              Is this system-critical?
                 |              |
                no             yes
                 |              |
                 v              v
         Live application   Create a savepoint
         update path        Stage a new bootable generation
                 |              |
                 v              v
            Run normally   systemd-boot selection
                                  |
                                  v
                    New generation or known-good reroll`}
        </pre>
      </div>

      <h2 id="principles">Architecture Principles</h2>

      <ul>
        <li>Normal application updates should not require a reboot.</li>
        <li>System-critical updates should create a savepoint by default.</li>
        <li>A savepoint must be bootable, not merely a package list.</li>
        <li>Rerolling the operating system must not automatically erase user files.</li>
        <li>
          <code>roll sendit</code> is intended to be the only explicit bypass for system savepoints.
        </li>
        <li>
          Package signing and system rollback are separate concerns: a signed package can still
          contain a bug, while a savepoint provides recovery.
        </li>
      </ul>

      <h2 id="components">Proposed Components</h2>

      <h3>roll CLI</h3>
      <p>
        The user-facing command-line tool. It handles package installation, removal, updates,
        system history, savepoint management, and rollback operations. It communicates with the
        transaction daemon for protected operations.
      </p>

      <h3>rolled (Transaction Daemon)</h3>
      <p>
        A proposed privileged background service that performs system changes on behalf of the CLI.
        It would resolve dependencies against configured Dicebag repositories, determine whether
        a change is system-critical, create savepoints, and apply staged updates.
      </p>

      <h3>Dicebag</h3>
      <p>
        A package repository containing signed dice (packages), metadata, and a manufacturer
        signature. The official Reroll Foundry would provide the primary Dicebag.
      </p>

      <h3>Local Die Store</h3>
      <p>
        The on-disk cache of installed and available dice. Includes package metadata, file listings,
        checksums, and signature data.
      </p>
    </>
  )
}
