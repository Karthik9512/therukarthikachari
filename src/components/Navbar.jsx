import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Common link styles
  const baseLink =
    'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200'
  const activeLink =
    'bg-gradient-to-r from-[#7209B7] via-[#5A3AFF] to-[#4361EE] text-white shadow-md'

  return (
    <header className="sticky top-0 z-30 border-b border-[#E5E0FF]/60 bg-white/70 backdrop-blur-md shadow-sm">
      <nav className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 🌈 Logo */}
          <Link
            to="/"
            className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#7209B7] via-[#5A3AFF] to-[#4361EE] bg-clip-text text-transparent hover:opacity-90 transition"
          >
          T Karthik Achari
          </Link>

          {/* 🖥️ Desktop Navigation */}
          <div className="items-center hidden gap-2 md:flex">
            {[
              ['/', 'Home'],
              ['/projects', 'Projects'],
              ['/about', 'About'],
              ['/contact', 'Contact'],
            ].map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `${baseLink} ${
                    isActive
                      ? activeLink
                      : 'text-gray-700 hover:text-[#5A3AFF]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md md:hidden hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 📲 Animated Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="pb-4 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {[
                  ['/', 'Home'],
                  ['/projects', 'Projects'],
                  ['/about', 'About'],
                  ['/contact', 'Contact'],
                ].map(([path, label]) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `${baseLink} ${
                        isActive
                          ? 'bg-gradient-to-r from-[#7209B7] via-[#5A3AFF] to-[#4361EE] text-white'
                          : 'text-gray-700 hover:bg-[#F5F3FF]'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
