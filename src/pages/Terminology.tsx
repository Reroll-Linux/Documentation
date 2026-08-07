import { Helmet } from '../components/Helmet'

const terms = [
  { term: 'Die', def: 'One installable package.' },
  { term: 'Dice', def: 'Multiple installable packages.' },
  {
    term: 'Roll',
    def: 'A resolved package transaction, such as installing, removing, or updating dice.',
  },
  {
    term: 'Savepoint',
    def: 'A bootable system generation preserved before a system-critical change.',
  },
  {
    term: 'Reroll',
    def: 'Returning to an earlier savepoint after a failed or unwanted system update.',
  },
  { term: 'roll', def: 'The proposed package and deployment command-line tool.' },
  {
    term: 'rolled',
    def: 'The proposed privileged transaction daemon that may eventually perform protected system changes.',
  },
  {
    term: 'Dicebag',
    def: 'A package repository containing signed dice and metadata.',
  },
  {
    term: 'Manufacturer',
    def: 'The identity responsible for signing a die or Dicebag.',
  },
  {
    term: "Maker's mark",
    def: 'The fingerprint of a manufacturer\'s public signing key.',
  },
  {
    term: 'roll sendit',
    def: 'The deliberately explicit command intended to apply system changes without creating a new savepoint. This policy is proposed and not implemented.',
  },
  {
    term: 'Permadeath',
    def: 'A future live-USB-only feature concept. It may erase the USB session/persistence data after a critical roll, but must never erase internal computer disks.',
  },
  {
    term: 'Dicebox',
    def: 'A deferred optional sandbox/runtime concept. It is not currently part of the Reroll Linux scope.',
  },
]

export default function Terminology() {
  return (
    <>
      <Helmet title="Terminology" description="Key terms and concepts used in the Reroll Linux ecosystem." />
      <h1>Terminology</h1>

      <p>
        Reroll Linux uses tabletop-gaming-inspired names for core concepts. This page collects
        the current terminology. Some terms are proposed and may change.
      </p>

      <div className="term-grid">
        {terms.map((item) => (
          <dl key={item.term} className="term-card">
            <dt>{item.term}</dt>
            <dd>{item.def}</dd>
          </dl>
        ))}
      </div>
    </>
  )
}
