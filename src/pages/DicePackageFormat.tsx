import { Helmet } from '../components/Helmet'
import Callout from '../components/Callout'

export default function DicePackageFormat() {
  return (
    <>
      <Helmet title="Dice Package Format" description="The proposed package format for Reroll Linux." />
      <h1>Dice: the proposed package format</h1>

      <Callout type="proposed">
        This file layout is an early proposal. The project has not committed to a final archive
        format, metadata schema, compression method, dependency solver, or build-recipe syntax.
      </Callout>

      <p>
        A <strong>die</strong> is Reroll Linux terminology for one installable package. The proposed
        archive extension is <code>.dice</code>.
      </p>

      <h2 id="naming">Naming Convention</h2>

      <p>
        <code>neovim-0.11.2-1.x86_64.dice</code>
      </p>

      <p>Format: <code>&lt;name&gt;-&lt;version&gt;-&lt;release&gt;.&lt;arch&gt;.dice</code></p>

      <h2 id="layout">Conceptual Archive Layout</h2>

      <pre>
{`neovim-0.11.2-1.x86_64.dice
├── meta/
│   ├── manifest.json
│   ├── files.sha256
│   └── signature.ed25519
└── payload/
    └── usr/
        └── bin/
            └── nvim`}
      </pre>

      <h2 id="metadata">Metadata (proposed)</h2>

      <p>
        The <code>manifest.json</code> file would contain package identity, dependency declarations,
        and installation instructions. The <code>files.sha256</code> file would list every shipped
        file with its checksum. The <code>signature.ed25519</code> file would carry the
        manufacturer&apos;s cryptographic signature over the metadata and content.
      </p>

      <h2 id="payload">Payload</h2>

      <p>
        The <code>payload/</code> directory would contain the actual filesystem tree installed
        into the target system. The layout mirrors the target root filesystem structure so that
        installation is a straightforward merge.
      </p>

      <Callout type="note">
        This design draws loose inspiration from the simplicity of tarball-based packaging, while
        adding structured metadata and signing that similar simple formats often lack. Nothing is
        final.
      </Callout>
    </>
  )
}
