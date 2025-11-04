import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// ✨ Page Transition Animation
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

// ✨ Navbar Component
const Navbar = () => (
  <nav className="fixed top-0 left-0 z-50 w-full shadow-sm backdrop-blur-md bg-white/80">
    <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
      {/* 🌟 Logo */}
      <NavLink
        to="/"
        className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#7209B7] to-[#4361EE] bg-clip-text text-transparent"
      >
        T Karthik Achari
      </NavLink>

      {/* 🔗 Nav Links */}
      <div className="flex gap-6 text-sm font-medium sm:text-base">
        {["Home", "Projects", "About", "Contact"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive
                  ? "text-[#5A3AFF] font-semibold"
                  : "text-gray-600 hover:text-[#7209B7]"
              }`
            }
          >
            {item}
            {/* underline animation */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7209B7] to-[#4361EE] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);

function App() {
  return (
    <Router>
      <div className="font-[Inter] text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Page Container */}
        <div className="pt-20"> {/* pushes content below navbar */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div {...pageTransition}>
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div {...pageTransition}>
                    <Projects />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div {...pageTransition}>
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div {...pageTransition}>
                    <Contact />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;
