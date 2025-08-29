import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="relative flex flex-col min-h-screen text-gray-900 bg-white">
        {/* Translucent wallpaper background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30" />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
