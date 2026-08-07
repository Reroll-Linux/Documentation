import { Helmet } from '../components/Helmet'
import StatusBadge from '../components/StatusBadge'
import Breadcrumb from '../components/Breadcrumb'

export default function ADR0001() {
  return (
    <>
      <Helmet title="ADR 0001 — Use C++ for Roll" />
      <Breadcrumb items={[{ label: 'ADRs', path: '/adrs' }, { label: 'ADR 0001' }]} />

      <h1>ADR 0001 — Use C++ for Roll</h1>

      <p><StatusBadge status="Proposed" /></p>

      <h2 id="context">Context</h2>
      <p>
        The <code>roll</code> command-line tool will be the primary user interface for package
        management in Reroll Linux. It must be reliable, fast, and produce a single static binary
        that can run in a minimal boot environment, a live USB, and a fully installed system.
      </p>

      <h2 id="decision">Decision</h2>
      <p>
        The first <code>roll</code> prototype will likely use <strong>C++</strong> for a single
        static CLI binary, strong error handling, and performance.
      </p>

      <h2 id="consequences">Consequences</h2>
      <ul>
        <li>Single static binary: no runtime dependency on language interpreters or shared libraries beyond libc.</li>
        <li>High performance without a garbage collector or runtime overhead.</li>
        <li>Mature ecosystem with widespread system-level tooling and packaging support.</li>
        <li>Extensive control over memory layout and allocation strategies for a system tool.</li>
      </ul>

      <h2 id="alternatives">Alternatives Considered</h2>
      <ul>
        <li><strong>Rust:</strong> Strong memory safety guarantees and modern tooling, but a steeper learning curve and a more limited pool of contributors familiar with systems-level Rust.</li>
        <li><strong>C:</strong> Familiar and fast, but manual memory management increases risk of memory-safety bugs in a system tool without the abstraction benefits of C++.</li>
        <li><strong>Go:</strong> Good static binaries, but the runtime and GC add overhead in minimal environments.</li>
        <li><strong>Python/Shell:</strong> Quick to prototype, but dependency-heavy and slow for a core system tool.</li>
      </ul>
    </>
  )
}
