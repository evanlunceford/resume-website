import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FooterContact from './components/FooterContact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import ScrollToTop from './config/ScrollToTop'

import { Analytics } from "@vercel/analytics/next"


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <FooterContact />
      </div>
    </BrowserRouter>
  )
}
