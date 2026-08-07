import type { FC } from 'react'
import { useEffect } from 'react'

interface HelmetProps {
  title: string
  description?: string
}

export const Helmet: FC<HelmetProps> = ({ title, description }) => {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} — Reroll Linux`
    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', description)
    }
    return () => {
      document.title = previousTitle
    }
  }, [title, description])
  return null
}
