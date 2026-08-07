import type { FC, ReactNode } from 'react'

interface CalloutProps {
  type: 'warning' | 'proposed' | 'deferred' | 'note' | 'danger'
  children: ReactNode
}

const Callout: FC<CalloutProps> = ({ type, children }) => (
  <div className={`callout callout-${type}`}>
    {children}
  </div>
)

export default Callout
