import { Helmet } from '../components/Helmet'

const faqs = [
  {
    q: 'Is Reroll Linux based on Arch?',
    a: 'No final base distribution has been chosen. Reroll Linux is intended to be an independently developed Linux distribution, though its minimal and rolling-release philosophy is inspired by projects such as Arch Linux.',
  },
  {
    q: 'Is Reroll Linux a custom kernel?',
    a: 'No. The early project focus is package management, bootable system generations, and rollback. It is expected to begin with an upstream Linux kernel.',
  },
  {
    q: 'Is Reroll Linux usable today?',
    a: 'No. It is currently a design and prototype project. There is no installable image, no package repository, and no bootable environment.',
  },
  {
    q: 'Will every update force a reboot?',
    a: 'No. The intended design separates ordinary application updates from system-critical changes. Only changes that need a bootable deployment (kernel, drivers, boot stack) should require rebooting to activate.',
  },
  {
    q: 'What is roll sendit?',
    a: 'It is the proposed explicit command for bypassing savepoint creation during a system update. It is meant to be exceptional, not normal, and requires typing "send it" to confirm.',
  },
  {
    q: 'Is Dicebox required?',
    a: 'No. Dicebox is deferred and may never be developed unless users demonstrate a real need. Reroll Linux does not depend on it.',
  },
  {
    q: 'Can Reroll Linux wipe my computer through permadeath?',
    a: 'No. Permadeath is intended only as a future live-USB joke feature and must never affect internal disks or installed systems. An installed system will refuse the command.',
  },
  {
    q: 'Why is the project called Reroll Linux?',
    a: 'The name comes from tabletop gaming: a "reroll" means discarding a bad dice result and rolling again. In Reroll Linux, a bad update result can be discarded by booting a previous system generation.',
  },
  {
    q: 'When will Reroll Linux be ready to try?',
    a: 'There is no release date. The project is in its earliest stage. The Roadmap page shows the planned development milestones.',
  },
]

export default function FAQ() {
  return (
    <>
      <Helmet title="FAQ" description="Frequently asked questions about Reroll Linux." />
      <h1>Frequently Asked Questions</h1>

      {faqs.map((faq, i) => (
        <section key={i}>
          <h3 id={`faq-${i}`}>{faq.q}</h3>
          <p>{faq.a}</p>
        </section>
      ))}

      <hr />

      <p>
        Have a question not covered here?{' '}
        <a href="https://github.com/reroll-linux" target="_blank" rel="noopener noreferrer">
          Open an issue on GitHub
        </a>
        .
      </p>
    </>
  )
}
