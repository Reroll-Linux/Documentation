import { Helmet } from '../components/Helmet'
import StatusBadge from '../components/StatusBadge'
import Callout from '../components/Callout'

export default function ProjectStatus() {
  return (
    <>
      <Helmet title="Project Status" description="Current state of the Reroll Linux project." />
      <h1>Project Status</h1>

      <p>
        This page tracks what has been done and what is currently planned. Reroll Linux is in its
        earliest stage: <strong>design and prototyping.</strong>
      </p>

      <h2 id="completed">Completed</h2>

      <ul>
        <li><StatusBadge status="Completed" /> GitHub organization created</li>
        <li><StatusBadge status="Completed" /> Documentation repository created</li>
        <li><StatusBadge status="Completed" /> Initial visual identity created</li>
        <li><StatusBadge status="Completed" /> Initial project terminology defined</li>
        <li><StatusBadge status="Completed" /> Initial rollback/update model designed</li>
      </ul>

      <h2 id="in-progress">In Progress</h2>

      <ul>
        <li><StatusBadge status="In Progress" /> Documentation website</li>
        <li><StatusBadge status="In Progress" /> Roll command-line interface design</li>
        <li><StatusBadge status="In Progress" /> Package and signing model design</li>
        <li><StatusBadge status="In Progress" /> Local prototype development environment planning</li>
      </ul>

      <h2 id="planned">Planned</h2>

      <ul>
        <li><StatusBadge status="Planned" /> C++ <code>roll</code> CLI prototype</li>
        <li><StatusBadge status="Planned" /> Dice notation support, including <code>roll d20</code></li>
        <li><StatusBadge status="Planned" /> Local <code>.dice</code> archive prototype</li>
        <li><StatusBadge status="Planned" /> Package metadata inspection and verification</li>
        <li><StatusBadge status="Planned" /> Minimal bootable QEMU test image</li>
        <li><StatusBadge status="Planned" /> Btrfs savepoint proof of concept</li>
        <li><StatusBadge status="Planned" /> Bootable generation and rollback proof of concept</li>
        <li><StatusBadge status="Planned" /> Signed manufacturer mark prototype</li>
        <li><StatusBadge status="Planned" /> Live USB prototype</li>
      </ul>

      <h2 id="deferred">Deferred</h2>

      <ul>
        <li><StatusBadge status="Deferred" /> Custom Linux kernel patches</li>
        <li><StatusBadge status="Deferred" /> Dicebox sandbox/runtime</li>
        <li><StatusBadge status="Deferred" /> Desktop environment selection</li>
        <li><StatusBadge status="Deferred" /> Full graphical installer</li>
        <li><StatusBadge status="Deferred" /> ARM support</li>
        <li><StatusBadge status="Deferred" /> Secure Boot support</li>
        <li><StatusBadge status="Deferred" /> Public third-party Dicebag infrastructure</li>
      </ul>

      <Callout type="note">
        <strong>Current focus:</strong> define a small, testable package/update prototype before
        attempting a complete Linux distribution.
      </Callout>
    </>
  )
}
