import { Link } from 'react-router-dom'
import { Helmet } from '../components/Helmet'

export default function Contributing() {
  return (
    <>
      <Helmet title="Contributing" description="How to contribute to the Reroll Linux project." />
      <h1>Contributing</h1>

      <p>
        Reroll Linux is in its earliest design stage. Contributions of ideas, design critique,
        and narrowly-scoped prototypes are welcome.
      </p>

      <h2 id="guidelines">Guidelines</h2>

      <ul>
        <li>
          <strong>This project is early</strong> and design feedback is welcome. Open an issue
          before implementing a large subsystem.
        </li>
        <li><strong>Keep proposals narrowly scoped.</strong> Avoid &quot;let&apos;s also add...&quot; creep.</li>
        <li>
          <strong>Do not add features merely because another distro has them.</strong> Every
          feature must serve the core rollback/recovery goal.
        </li>
        <li><strong>Document decisions through ADRs.</strong> See the Architecture Decision Records page.</li>
        <li><strong>Test future system changes in QEMU first.</strong> Never test potentially destructive code on real hardware.</li>
        <li><strong>Never commit private signing keys, tokens, or credentials.</strong></li>
      </ul>

      <h2 id="where-to-start">Where to Start</h2>

      <ol>
        <li>Read the <Link to="/terminology">Terminology</Link> page to understand the vocabulary.</li>
        <li>Review the <Link to="/adrs">ADRs</Link> for existing design decisions.</li>
        <li>Check the <Link to="/roadmap">Roadmap</Link> for planned work.</li>
        <li>Open a GitHub issue to discuss your idea before writing code.</li>
      </ol>

      <h2 id="communication">Communication</h2>

      <p>
        All project communication currently happens through{' '}
        <a href="https://github.com/reroll-linux" target="_blank" rel="noopener noreferrer">
          GitHub issues and discussions
        </a>
        . There are no chat servers, mailing lists, or forums at this stage.
      </p>
    </>
  )
}
