import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// 🧠 Skills & Certifications
const skills = [
  'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
  'Machine Learning', 'Statistics', 'Data Analysis', 'Data Visualization',
  'Power BI', 'DAX', 'Excel', 'MySQL', 'Node.js'
]

const certs = [
  'NVIDIA LLM Applications with Prompt Engineering',
  'Oracle AI Vector Search Certified Professional',
  'Advanced Automation Professional – Automation Anywhere',
  'GitHub Foundations',
  'Power BI for Beginners'
]

// ✨ Motion Variants
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

function About() {
  // 🌀 Parallax Scroll Effect
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 80])
  const y2 = useTransform(scrollY, [0, 500], [0, -50])
  const [year] = useState(new Date().getFullYear())

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden bg-gradient-to-b from-[#f9f6ff] via-white to-[#f1f0ff]">
      
      {/* 🌈 Parallax Background Layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-200/40 via-transparent to-indigo-100/40"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute rounded-full -top-20 -left-16 w-72 h-72 bg-purple-400/20 blur-3xl -z-10 animate-pulse"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute right-0 rounded-full -bottom-20 w-72 h-72 bg-indigo-400/20 blur-3xl -z-10 animate-pulse"
      />

      {/* 💜 Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.1}
        className="text-center mb-14"
      >
        <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#7209B7] via-[#5A3AFF] to-[#4361EE] bg-clip-text text-transparent drop-shadow-sm">
          About Me
        </h2>
        <p className="mt-3 text-lg font-medium text-[#5A3AFF]/80 max-w-2xl mx-auto">
          A passionate Data Science enthusiast who loves turning data into stories, 
          building AI-driven tools, and designing elegant solutions that make an impact.
        </p>
      </motion.div>

      {/* 🌸 Glass Card Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.3}
        className="w-full max-w-6xl rounded-3xl p-[1px] bg-gradient-to-br from-[#7F00FF]/20 to-[#3A0CA3]/10 shadow-2xl"
      >
        <div className="flex flex-col overflow-hidden md:flex-row rounded-3xl bg-white/70 backdrop-blur-md">

          {/* 🧍 Left Side: Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.4}
            className="flex flex-col justify-center gap-6 p-10 md:w-1/2"
          >
            <div className="text-sm font-medium tracking-wide text-[#5A3AFF] uppercase">Who I Am</div>

            <p className="leading-relaxed text-gray-700">
              I’m <span className="font-semibold text-[#5A3AFF]">Karthik Achari</span>, a B.Tech CSE student at KL University with a deep interest in 
              <span className="font-semibold text-[#7209B7]"> Data Analytics, Machine Learning</span>, and 
              <span className="font-semibold text-[#7209B7]"> AI-driven systems</span>.  
              I love crafting intelligent solutions from raw data and designing intuitive, data-powered dashboards.
            </p>

            <p className="leading-relaxed text-gray-700">
              Outside tech, I enjoy anime, gaming, and traveling — fueling creativity and balance in everything I build.
            </p>

            {/* 📨 Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="px-6 py-2.5 font-semibold text-white rounded-lg bg-gradient-to-r from-[#7209B7] to-[#4361EE] shadow-md transition-transform"
              >
                Get in Touch
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/Resume_Karthik_Achari.pdf"
                download
                className="px-5 py-2.5 font-semibold text-white rounded-lg bg-gradient-to-r from-[#5A3AFF] to-[#3A0CA3] shadow-md transition-transform"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* ⚙️ Right Side: Skills + Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="flex flex-col justify-between p-10 md:w-1/2"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={0.6}
            >
              <h3 className="text-xl font-semibold text-[#5A3AFF]">Skills</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((s, i) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-br from-[#E0C3FC]/60 to-[#8EC5FC]/60 border border-[#d1b3ff]/40 text-[#3A0CA3] font-medium"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#5A3AFF]">Certifications</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                {certs.map((c, i) => (
                  <motion.li
                    key={c}
                    whileHover={{ scale: 1.03 }}
                    className="px-3 py-2 rounded-lg bg-white/80 border border-[#D3C0FF]/40 shadow-sm hover:shadow-md transition-all"
                  >
                    {c}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-auto text-sm italic text-gray-600">
              Available for freelance & collaboration — open to AI, analytics, and full-stack innovation.
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 💫 Footer */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.6}
        className="mt-12 text-sm text-center text-gray-500"
      >
        <div className="w-24 h-1 mx-auto mb-3 rounded-full bg-gradient-to-r from-[#7209B7] to-[#4361EE]" />
             </motion.footer>
    </section>
  )
}

export default About
