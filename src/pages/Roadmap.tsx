import { Helmet } from '../components/Helmet'
import MilestoneCard from '../components/MilestoneCard'
import Callout from '../components/Callout'

const milestones = [
  {
    version: '0.0.1',
    name: 'First Roll',
    status: 'Planned' as const,
    goal: 'C++ CLI skeleton, help output, dice notation parser, and roll d20.',
  },
  {
    version: '0.0.2',
    name: 'Loaded Dice',
    status: 'Planned' as const,
    goal: 'Local .dice archive prototype with metadata inspection, checksums, and install/remove behaviour inside a disposable test root.',
  },
  {
    version: '0.0.3',
    name: 'The Test Table',
    status: 'Planned' as const,
    goal: 'Minimal QEMU boot environment containing the roll prototype.',
  },
  {
    version: '0.1',
    name: 'First Savepoint',
    status: 'Planned' as const,
    goal: 'Btrfs snapshot/subvolume proof of concept and two independently bootable system generations.',
  },
  {
    version: '0.2',
    name: 'Reroll',
    status: 'Planned' as const,
    goal: 'A failed test update can be abandoned by booting a known-good prior generation.',
  },
  {
    version: '0.3',
    name: 'Trusted Dice',
    status: 'Planned' as const,
    goal: 'Manufacturer marks, signed dice, and local package verification.',
  },
  {
    version: '0.4',
    name: 'The Adventure Begins',
    status: 'Planned' as const,
    goal: 'A live USB prototype with a persistent overlay and safe live-session tooling.',
  },
]

export default function Roadmap() {
  return (
    <>
      <Helmet title="Roadmap" description="Development milestones and planned features." />
      <h1>Roadmap</h1>

      <p>
        The milestones below represent early development snapshots, not traditional fixed OS
        releases. Reroll Linux is a rolling distribution concept; these are checkpoints for
        testing core ideas.
      </p>

      <div className="milestone-header" style={{ justifyContent: 'flex-start', marginBottom: '1.2em' }} />

      {milestones.map((m) => (
        <MilestoneCard key={m.version} {...m} />
      ))}

      <Callout type="note">
        <strong>Milestone numbers and feature assignments are provisional.</strong> Reroll Linux is
        a rolling distribution concept; milestones represent development snapshots, not traditional
        fixed OS releases.
      </Callout>
    </>
  )
}
