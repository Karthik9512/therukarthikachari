import React from 'react'

const skills = [
  'Python',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Seaborn',
  'Machine Learning',
  'Statistics',
  'Data Analysis',
  'Data Visualization',
  'Power BI',
  'DAX',
  'Excel',
  'MySQL',
  'Node.js'
]

const certs = [
  'NVIDIA LLM Applications with Prompt Engineering',
  'Oracle AI Vector Search Certified Professional',
  'Advanced Automation Professional – Automation Anywhere',
  'GitHub Foundations',
  'Power BI for Beginners'
]

function About() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16 overflow-hidden bg-white">
      {/* ✨ Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 via-white to-purple-50 opacity-70" />
      <div className="absolute rounded-full -top-20 -left-20 w-60 h-60 bg-purple-300/30 blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 rounded-full w-72 h-72 bg-purple-400/20 blur-3xl animate-pulse -z-10" />

      {/* 💜 Heading */}
      <h1
        className="mb-8 text-4xl font-extrabold tracking-tight text-center text-purple-700 sm:text-5xl"
        style={{ fontFamily: 'Poppins, Inter, system-ui' }}
      >
        About Me
      </h1>

      {/* 🌸 Glass Card */}
      <div className="w-full max-w-5xl p-[1px] rounded-3xl bg-gradient-to-br from-purple-300/30 to-purple-100/10 shadow-2xl">
        <div className="flex flex-col overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md md:flex-row">

          {/* 🧍 Left Side: Bio */}
          <div className="flex flex-col justify-center gap-6 p-8 md:w-1/2 md:p-12">
            <div className="text-sm font-medium tracking-wide text-purple-700 uppercase">
              Who I Am
            </div>

            <p className="max-w-lg leading-relaxed text-gray-700">
              I’m a B.Tech CSE student at KL University with hands-on experience in Python, Machine Learning, Power BI, and Data Analytics. 
              I love transforming raw data into actionable insights and building AI-driven solutions that solve real-world problems. 
              When I’m not coding, I’m diving into the latest in AI, binge-watching anime, battling it out in Call of Duty, 
              or traveling to spark new ideas and fresh inspiration.
            </p>

            {/* 📨 Get in Touch */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="/contact"
                className="inline-block px-6 py-2.5 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-purple-600 to-purple-400 hover:shadow-purple-400/50 hover:scale-105"
              >
                Get in Touch
              </a>

              <a
                href="/Resume_Karthik_Achari.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-[#7F00FF] to-[#E100FF] hover:scale-105 transform transition-all duration-300"
                download
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* ⚙️ Right Side: Skills + Certifications */}
          <div className="flex flex-col justify-between p-8 md:w-1/2 md:p-12">
            <div>
              <h3 className="text-xl font-semibold text-purple-700">Skills</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-br from-purple-100/50 to-white border border-purple-200 text-purple-800 font-medium hover:scale-105 transition-transform"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-purple-700">Certifications</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                {certs.map((c) => (
                  <li
                    key={c}
                    className="px-3 py-2 rounded-lg bg-white/70 border border-purple-100 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-auto">
              <p className="text-sm italic text-gray-600">
                Available for freelance & collaboration — open to exciting AI and data projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 💫 Footer */}
      <footer className="mt-10 text-sm text-center text-gray-500">
        <div className="w-24 h-1 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-80" />
        © {new Date().getFullYear()} Karthik Achari — Built with 💜 and creativity.
      </footer>
    </section>
  )
}

export default About
