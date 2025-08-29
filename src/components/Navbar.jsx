import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const baseLink = "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
  const activeLink = "bg-gray-900 text-white hover:bg-gray-900"

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-semibold tracking-tight">
              Karthik Achari
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-gray-700"}`}>
              Home
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-gray-700"}`}>
              Projects
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-gray-700"}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-gray-700"}`}>
              Contact
            </NavLink>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              <NavLink onClick={() => setMobileOpen(false)} to="/" end className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-gray-700"}`}>
                Home
              </NavLink>
              <NavLink onClick={() => setMobileOpen(false)} to="/projects" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-gray-700"}`}>
                Projects
              </NavLink>
              <NavLink onClick={() => setMobileOpen(false)} to="/about" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-gray-700"}`}>
                About
              </NavLink>
              <NavLink onClick={() => setMobileOpen(false)} to="/contact" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-gray-700"}`}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar


