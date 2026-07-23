import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import DigitalWorkspace from './pages/DigitalWorkspace.jsx'
import NetworkEndpoint from './pages/NetworkEndpoint.jsx'
import DeviceManagement from './pages/DeviceManagement.jsx'
import ProductivityTools from './pages/ProductivityTools.jsx'
import CyberSecurity from './pages/CyberSecurity.jsx'
import ProfessionalServices from './pages/ProfessionalServices.jsx'
import ITStaffing from './pages/ITStaffing.jsx'
import SeamlessDeployment from './pages/SeamlessDeployment.jsx'
import OnDemandServices from './pages/OnDemandServices.jsx'
import Warehousing from './pages/Warehousing.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/digital-workspace-solutions" element={<DigitalWorkspace />} />
          <Route path="/digital-workspace-solutions/network-and-endpoint" element={<NetworkEndpoint />} />
          <Route path="/digital-workspace-solutions/device-management-solutions" element={<DeviceManagement />} />
          <Route path="/digital-workspace-solutions/productivity-software-and-tools" element={<ProductivityTools />} />

          <Route path="/network-and-cyber-security-services" element={<CyberSecurity />} />

          <Route path="/professional-services" element={<ProfessionalServices />} />
          <Route path="/professional-services/it-staffing-services" element={<ITStaffing />} />
          <Route path="/professional-services/seamless-deployment" element={<SeamlessDeployment />} />
          <Route path="/professional-services/on-demand-services" element={<OnDemandServices />} />
          <Route path="/professional-services/warehousing" element={<Warehousing />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
