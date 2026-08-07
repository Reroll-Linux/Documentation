import type { FC, ReactNode } from 'react'

interface TerminalBlockProps {
  title?: string
  children: ReactNode
}

const TerminalBlock: FC<TerminalBlockProps> = ({ title, children }) => (
  <div className="terminal-block" role="img" aria-label={title ?? 'Terminal example'}>
    <div className="terminal-header">
      <span className="terminal-dot" aria-hidden="true" />
      <span className="terminal-dot" aria-hidden="true" />
      <span className="terminal-dot" aria-hidden="true" />
      {title && <span style={{ marginLeft: '0.5em' }}>{title}</span>}
    </div>
    <div className="terminal-body">{children}</div>
  </div>
)

export default TerminalBlock
