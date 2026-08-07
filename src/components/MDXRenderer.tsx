import type { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import StatusBadge from './StatusBadge'
import Callout from './Callout'
import TerminalBlock from './TerminalBlock'

interface MDXRendererProps {
  content: string
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function makeComponents(): any {
  return {
    callout({ node: _node, 'data-type': type, ...props }: any) {
      const safeType = (type === 'warning' || type === 'proposed' || type === 'deferred' || type === 'note' || type === 'danger') ? type : 'note'
      return <Callout type={safeType} {...props} />
    },
    statusbadge({ node: _node, 'data-status': status }: any) {
      const safeStatus = (status === 'Completed' || status === 'In Progress' || status === 'Planned' || status === 'Deferred' || status === 'Proposed' || status === 'Accepted') ? status : 'Proposed'
      return <StatusBadge status={safeStatus} />
    },
    terminalblock({ node: _node, 'data-title': title, ...props }: any) {
      return <TerminalBlock title={title || undefined} {...props} />
    },
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const MDXRenderer: FC<MDXRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={makeComponents()}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MDXRenderer
