import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ✨ Animation Presets
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay,
    },
  }),
}

function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden bg-gradient-to-b from-[#f9f6ff] via-white to-[#f1f0ff]">
      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-200/40 via-transparent to-indigo-100/40" />
      <div className="absolute top-0 left-0 rounded-full w-72 h-72 bg-purple-400/20 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 rounded-full w-72 h-72 bg-indigo-400/20 blur-3xl -z-10 animate-pulse" />

      {/* 🏠 Hero Section */}
      <div className="grid items-center max-w-6xl gap-10 px-4 mx-auto md:grid-cols-2">
        {/* 💬 Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
        >
          <p className="text-sm tracking-wider text-[#5A3AFF]/70 uppercase">Welcome</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-[#7209B7] via-[#5A3AFF] to-[#4361EE] bg-clip-text text-transparent drop-shadow-sm">
            Hey, I’m Karthik 
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Aspiring <span className="font-semibold text-[#7209B7]">Data Scientist</span> & AI Enthusiast skilled in 
            <span className="font-semibold text-[#5A3AFF]"> Python, Power BI, Machine Learning</span>, 
            and <span className="font-semibold text-[#5A3AFF]">Data Analytics</span> — passionate about turning data 
            into intelligent, real-world solutions.
          </p>

          {/* 🧭 Buttons */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-6 py-3 text-sm font-semibold shadow-md hover:scale-105 transition-transform"
            >
              View Projects 🚀
            </Link>

            <a
              href="mailto:karthikachari780@gmail.com"
              className="inline-flex items-center justify-center rounded-lg border border-[#d1b3ff]/60 px-6 py-3 text-sm font-semibold text-[#3A0CA3] bg-white/70 backdrop-blur hover:bg-[#f5f3ff] hover:scale-105 transition-transform"
            >
              Contact Me ✉️
            </a>
          </motion.div>
        </motion.div>

        {/* 🧠 Right Side (Image / Illustration Placeholder) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.2}
          className="relative flex justify-center"
        >
          <div className="relative aspect-square w-72 sm:w-80 md:w-96 rounded-3xl bg-gradient-to-br from-[#7F00FF]/40 via-[#5A3AFF]/30 to-[#4361EE]/40 shadow-2xl backdrop-blur-md flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute inset-6 rounded-full border-4 border-dashed border-[#7F00FF]/40"
            />
            <motion.img
              src="/My Pic.jpg" 
              alt="Profile"
              className="z-10 object-contain w-48 h-48 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
