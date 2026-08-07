import { Helmet } from '../components/Helmet'
import Callout from '../components/Callout'

export default function Security() {
  return (
    <>
      <Helmet title="Security" description="Security policies and reporting information." />
      <h1>Security</h1>

      <p>
        Reroll Linux takes security seriously, even at the design stage. This page documents
        current security policies and known limitations.
      </p>

      <h2 id="principles">Security Principles</h2>

      <ul>
        <li>
          <strong>Never commit private signing keys.</strong> Keys used for package signing,
          development, or testing must never appear in the repository.
        </li>
        <li>
          <strong>Package signing protects integrity and publisher identity, not software quality.</strong>{' '}
          A valid signature means the package came from a known source and was not tampered with.
          It does not guarantee the package is free of bugs or malicious behaviour.
        </li>
        <li>
          <strong>Savepoints are recovery tools, not malware protection.</strong> If an attacker
          has root access, they can modify savepoints. Rollback protects against failed updates,
          not malicious actors.
        </li>
        <li>
          <strong>Test all destructive/live-USB experiments in a VM first.</strong> Never test
          code that modifies boot configuration, partitions, or filesystems on a real machine
          without first validating it in a virtual machine.
        </li>
      </ul>

      <h2 id="reporting">Reporting a Security Issue</h2>

      <Callout type="note">
        Security reporting contact is not set yet. Once configured, use the &ldquo;Report a
        vulnerability&rdquo; option through the GitHub Security Advisory page on the relevant
        repository.
      </Callout>

      <h2 id="current-limitations">Current Limitations</h2>

      <p>
        As a design-stage project, there is no installed software to evaluate. The following are
        known gaps that will need to be addressed before the project reaches any real user:
      </p>

      <ul>
        <li>No signed package infrastructure exists.</li>
        <li>No reproducible build pipeline exists.</li>
        <li>No formal threat model has been documented.</li>
        <li>No third-party security audit has been performed.</li>
      </ul>
    </>
  )
}
