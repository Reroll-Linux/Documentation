import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { getAllPages, getPageContent } from './content'
import MDXRenderer from './components/MDXRenderer'
import DesignSystem from './pages/DesignSystem'

function DocPage({ path }: { path: string }) {
  const content = getPageContent(path)
  if (!content) {
    return (
      <Layout>
        <div className="not-found">
          <h1>404</h1>
          <p>Page not found. The dice did not land in your favour.</p>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <MDXRenderer content={content} />
    </Layout>
  )
}

function NotFound() {
  return (
    <Layout>
      <div className="not-found">
        <h1>404</h1>
        <p>Page not found. The dice did not land in your favour.</p>
      </div>
    </Layout>
  )
}

export default function App() {
  const pages = getAllPages()

  return (
    <Routes>
      {pages.map((page) => {
        const routePath = page.slug === '' ? '/' : page.slug
        return (
          <Route
            key={page.path}
            path={routePath}
            element={<DocPage path={page.path} />}
          />
        )
      })}
      <Route path="/design-system" element={<Layout><DesignSystem /></Layout>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
