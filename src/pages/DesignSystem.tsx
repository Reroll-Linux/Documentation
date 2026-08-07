import { Helmet } from '../components/Helmet'
import StatusBadge from '../components/StatusBadge'
import Callout from '../components/Callout'
import TerminalBlock from '../components/TerminalBlock'

export default function DesignSystem() {
  return (
    <>
      <Helmet title="Design System" description="Visual reference and component library for the documentation site." />
      <h1>Design System</h1>

      <p>
        This page documents the visual language, component library, and design rules for the
        Reroll Linux documentation site. It serves as a reference for future contributors
        and maintainers.
      </p>

      <h2 id="palette">Colour Palette</h2>

      <p>The site uses a dark theme with a limited, purpose-driven colour set.</p>

      <table>
        <thead>
          <tr><th>Token</th><th>Hex</th><th>Usage</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Background</strong></td><td><code>#0C0F15</code></td><td>Page background</td></tr>
          <tr><td><strong>Elevated</strong></td><td><code>#131720</code></td><td>Header, code blocks</td></tr>
          <tr><td><strong>Raised</strong></td><td><code>#1A1F2A</code></td><td>Hover states</td></tr>
          <tr><td><strong>Surface</strong></td><td><code>#1E2433</code></td><td>Cards, elevated surfaces</td></tr>
          <tr><td><strong>Border</strong></td><td><code>#2A3040</code></td><td>Borders, dividers</td></tr>
          <tr><td><strong>Text</strong></td><td><code>#FCFDFC</code></td><td>Primary text</td></tr>
          <tr><td><strong>Text muted</strong></td><td><code>#9CA3B0</code></td><td>Secondary text</td></tr>
          <tr><td><strong>Text dim</strong></td><td><code>#6B7280</code></td><td>Tertiary / metadata</td></tr>
          <tr><td><strong>Green</strong></td><td><code>#ACEA86</code></td><td>Success, active, links, safe states</td></tr>
          <tr><td><strong>Violet</strong></td><td><code>#B8A0F0</code></td><td>Proposed, experimental</td></tr>
          <tr><td><strong>Orange</strong></td><td><code>#F0BC68</code></td><td>Warnings, deferred</td></tr>
          <tr><td><strong>Red</strong></td><td><code>#F06068</code></td><td>Destructive, critical failure</td></tr>
          <tr><td><strong>Blue</strong></td><td><code>#68A0F0</code></td><td>In Progress, informational</td></tr>
        </tbody>
      </table>

      <h2 id="layout-wireframe">Layout Wireframe</h2>

      <div className="wireframe">
        <pre>
{`Desktop view
┌──────────────────────────────────────────────────────────────────┐
│ [Reroll icon] REROLL LINUX    Docs  Status  Roadmap   [GitHub ↗] │
├──────────┬───────────────────────────────────┬───────────────────┤
│ Sidebar  │ Main documentation content       │ On this page      │
│          │                                  │                   │
│ Overview │ Breadcrumb                       │ • Purpose         │
│ > Intro  │ Page title                       │ • Status          │
│   Status │ Status badge                     │ • Architecture    │
│   Roadmap│ Short lead paragraph             │                   │
│          │                                  │                   │
│ Design   │ [Proposed callout]               │                   │
│ > Arch   │                                  │                   │
│   Roll   │ Code blocks, diagrams, tables    │                   │
│   Save-  │                                  │                   │
│   points │                                  │                   │
├──────────┴───────────────────────────────────┴───────────────────┤
│ Code: Apache-2.0 · Documentation: CC BY-SA 4.0 · GitHub        │
└──────────────────────────────────────────────────────────────────┘

Mobile view
┌────────────────────────────────┐
│ [☰] REROLL LINUX      [GitHub] │
├────────────────────────────────┤
│                                │
│ Breadcrumb                     │
│ Page title                     │
│ Status badge                   │
│ Short lead paragraph           │
│                                │
│ [Proposed callout]             │
│                                │
│ Code blocks, diagrams, tables  │
│                                │
│ (No right-side TOC)            │
│ (Menu button opens drawer)     │
│ (Code blocks scroll h.)        │
│                                │
├────────────────────────────────┤
│ Code: Apache-2.0 · Docs: CC...│
└────────────────────────────────┘`}
        </pre>
      </div>

      <h2 id="responsive">Responsive Rules</h2>
      <ul>
        <li><strong>Desktop (&gt;1024px):</strong> sidebar + content + right-side table of contents.</li>
        <li><strong>Tablet (&le;1024px):</strong> content only; sidebar toggleable via hamburger; TOC hidden.</li>
        <li><strong>Mobile (&le;640px):</strong> full-width content; stacks everything vertically.</li>
        <li>Code blocks horizontally scroll instead of breaking layout on narrow screens.</li>
        <li>All interactive elements have visible focus states.</li>
      </ul>

      <h2 id="status-badges">Status Badges</h2>

      <div className="comp-demo">
        <StatusBadge status="Completed" />
        <StatusBadge status="In Progress" />
        <StatusBadge status="Planned" />
        <StatusBadge status="Deferred" />
        <StatusBadge status="Proposed" />
        <StatusBadge status="Accepted" />
      </div>

      <h2 id="callouts">Callout Types</h2>

      <Callout type="warning">
        <strong>Warning:</strong> This is a warning callout. Use for important cautions.
      </Callout>
      <Callout type="proposed">
        This is a proposed callout. Use for features or designs that are not yet decided.
      </Callout>
      <Callout type="deferred">
        This is a deferred callout. Use for features that are postponed.
      </Callout>
      <Callout type="note">
        <strong>Note:</strong> This is a note callout. Use for informational highlights.
      </Callout>
      <Callout type="danger">
        <strong>Danger:</strong> This is a danger callout. Use for destructive or critical-failure content.
      </Callout>

      <h2 id="terminal">Terminal / Code Blocks</h2>

      <TerminalBlock title="Example terminal">
        <div><span className="prompt">$ </span><span className="cmd">roll update</span></div>
        <div>Creating savepoint 42...</div>
        <div><span style={{ color: 'var(--color-green)' }}>Done.</span></div>
      </TerminalBlock>

      <pre><code>// Inline code block
const greeting = "Hello from Reroll Linux";</code></pre>

      <h2 id="buttons">Buttons</h2>

      <div className="comp-demo">
        <button className="btn btn-primary" type="button">Primary Button</button>
        <button className="btn btn-secondary" type="button">Secondary Button</button>
      </div>

      <h2 id="heading-hierarchy">Heading Hierarchy</h2>

      <div style={{ padding: '1em', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', marginBottom: '1.2em' }}>
        <h1 style={{ marginTop: 0 }}>Heading 1 — Page Title</h1>
        <h2>Heading 2 — Major Section (with border)</h2>
        <h3>Heading 3 — Sub-section</h3>
        <h4>Heading 4 — Minor heading</h4>
        <p>Body text. The quick brown fox jumps over the lazy dog. <code>inline code</code> inside a paragraph. <a href="#">A link example</a> in context.</p>
      </div>

      <h2 id="table-styling">Table Styling</h2>

      <table>
        <thead>
          <tr><th>Column A</th><th>Column B</th><th>Column C</th></tr>
        </thead>
        <tbody>
          <tr><td>Row 1</td><td>Data</td><td>More data</td></tr>
          <tr><td>Row 2</td><td>Data</td><td><code>inline.code</code></td></tr>
        </tbody>
      </table>

      <h2 id="design-rules">Design Rules</h2>

      <ul>
        <li>Use the dark Reroll palette consistently.</li>
        <li><strong>Green</strong> is used for successful, active, and safe states.</li>
        <li><strong>Violet</strong> is used for proposed or experimental states.</li>
        <li><strong>Orange/yellow</strong> is used for warnings.</li>
        <li><strong>Red</strong> is used only for destructive or critical-failure content.</li>
        <li>Use cream/white for primary text and die outlines.</li>
        <li>Do not use bright green for every decorative element.</li>
        <li>Avoid giant logo art on regular docs pages.</li>
        <li>The logo may appear in the header and home hero.</li>
        <li>Keep docs pages text-first and technical.</li>
        <li>Semantic HTML: use <code>&lt;h1&gt;</code> through <code>&lt;h4&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>.</li>
        <li>Keyboard navigation: all interactive elements are reachable via Tab, with visible focus rings.</li>
        <li>Contrast: all text-on-background combinations pass WCAG AA contrast thresholds.</li>
      </ul>
    </>
  )
}
