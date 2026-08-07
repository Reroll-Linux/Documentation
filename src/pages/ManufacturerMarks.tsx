import { Helmet } from '../components/Helmet'
import Callout from '../components/Callout'
import TerminalBlock from '../components/TerminalBlock'

export default function ManufacturerMarks() {
  return (
    <>
      <Helmet title="Manufacturers and Signing" description="Package signing, maker's marks, and trust model." />
      <h1>Manufacturers and Maker&apos;s Marks</h1>

      <Callout type="proposed">
        The signing and manufacturer model is proposed. No signing infrastructure exists.
      </Callout>

      <p>
        Reroll Linux intends to use package signing so users can verify <strong>where</strong> a
        die came from and <strong>whether it was modified after signing</strong>.
      </p>

      <h2 id="concepts">Key Concepts</h2>

      <ul>
        <li>
          A <strong>manufacturer</strong> is the signing identity for a die or repository.
        </li>
        <li>
          A <strong>maker&apos;s mark</strong> is the fingerprint of that manufacturer&apos;s
          public key.
        </li>
        <li>
          The official <strong>Reroll Foundry</strong> would sign official dice.
        </li>
        <li>
          Each installed device may eventually generate its own local manufacturer identity
          for self-built dice.
        </li>
        <li>
          Importing another device&apos;s public manufacturer mark could allow a user to trust
          packages built by that specific device.
        </li>
        <li>
          <strong>Trusting a signing key proves package origin and integrity.</strong> It does
          not prove that the package has no bugs or malicious behaviour.
        </li>
      </ul>

      <h2 id="example">Inspection Example</h2>

      <TerminalBlock title="roll inspect — concept">
        <div><span className="prompt">$ </span><span className="cmd">roll inspect custom-tool.dice</span></div>
        <div>&nbsp;</div>
        <div>Die:            custom-tool-1.0.0-1.x86_64.dice</div>
        <div>Manufacturer:   Local manufacturer</div>
        <div>Maker&apos;s mark:   83C2 7A1F 4B9D 91E0 ...</div>
        <div>Signature:      <span style={{ color: 'var(--color-green)' }}>Valid</span></div>
        <div>Trust:          Local</div>
      </TerminalBlock>

      <Callout type="proposed">
        <strong>Why are you checking your own die?</strong> Verifying a locally-built package
        against your own manufacturer mark confirms that it was not tampered with between build
        and install. This is a proposed behaviour, not implemented.
      </Callout>
    </>
  )
}
