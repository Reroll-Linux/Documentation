import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'

import Introduction from './pages/Introduction'
import ProjectStatus from './pages/ProjectStatus'
import Roadmap from './pages/Roadmap'
import Terminology from './pages/Terminology'
import SystemArchitecture from './pages/SystemArchitecture'
import RollPackageManager from './pages/RollPackageManager'
import DicePackageFormat from './pages/DicePackageFormat'
import Savepoints from './pages/Savepoints'
import UpdatePolicy from './pages/UpdatePolicy'
import ManufacturerMarks from './pages/ManufacturerMarks'
import LiveUSB from './pages/LiveUSB'
import ADRList from './pages/ADRList'
import ADR0001 from './pages/ADR0001'
import ADR0002 from './pages/ADR0002'
import ADR0003 from './pages/ADR0003'
import ADR0004 from './pages/ADR0004'
import ADR0005 from './pages/ADR0005'
import ADR0006 from './pages/ADR0006'
import FAQ from './pages/FAQ'
import Contributing from './pages/Contributing'
import Security from './pages/Security'
import DesignSystem from './pages/DesignSystem'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
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

function DocPage({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <ScrollToTop />
      {children}
    </Layout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DocPage><Introduction /></DocPage>} />
      <Route path="/status" element={<DocPage><ProjectStatus /></DocPage>} />
      <Route path="/roadmap" element={<DocPage><Roadmap /></DocPage>} />
      <Route path="/terminology" element={<DocPage><Terminology /></DocPage>} />
      <Route path="/architecture" element={<DocPage><SystemArchitecture /></DocPage>} />
      <Route path="/roll" element={<DocPage><RollPackageManager /></DocPage>} />
      <Route path="/dice" element={<DocPage><DicePackageFormat /></DocPage>} />
      <Route path="/savepoints" element={<DocPage><Savepoints /></DocPage>} />
      <Route path="/update-policy" element={<DocPage><UpdatePolicy /></DocPage>} />
      <Route path="/manufacturers" element={<DocPage><ManufacturerMarks /></DocPage>} />
      <Route path="/live-usb" element={<DocPage><LiveUSB /></DocPage>} />
      <Route path="/adrs" element={<DocPage><ADRList /></DocPage>} />
      <Route path="/adrs/0001" element={<DocPage><ADR0001 /></DocPage>} />
      <Route path="/adrs/0002" element={<DocPage><ADR0002 /></DocPage>} />
      <Route path="/adrs/0003" element={<DocPage><ADR0003 /></DocPage>} />
      <Route path="/adrs/0004" element={<DocPage><ADR0004 /></DocPage>} />
      <Route path="/adrs/0005" element={<DocPage><ADR0005 /></DocPage>} />
      <Route path="/adrs/0006" element={<DocPage><ADR0006 /></DocPage>} />
      <Route path="/faq" element={<DocPage><FAQ /></DocPage>} />
      <Route path="/contributing" element={<DocPage><Contributing /></DocPage>} />
      <Route path="/security" element={<DocPage><Security /></DocPage>} />
      <Route path="/design-system" element={<DocPage><DesignSystem /></DocPage>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
