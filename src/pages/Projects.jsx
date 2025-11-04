import React from 'react'

const projects = [
  {
    title: 'FinTech!',
    description: 'AI-powered personal finance tracker with analytics and bill reminders.',
    tech: ['React Native', 'Node.js'],
    link: '#'
  },
  {
    title: 'Retail Sales Forecasting',
    description: 'Predicts future sales using regression models and visualizes insights with Power BI.',
    tech: ['Python', 'Pandas', 'scikit-learn', 'Power BI'],
    link: 'https://github.com/Karthik9512/Superstore-Sales-Data'
  },
  {
    title: 'Stock Market Risk & Return Analyzer',
    description: 'Analyzes stock data to calculate returns, volatility, and Sharpe ratio with Power BI dashboards.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'DAX'],
    link: 'https://github.com/Karthik9512/Stock-Market-Risk-Return-Analyzer'
  },
  {
    title: 'Study Habit Predictor — Linear Regression',
    description: 'Built a regression model to predict students’ final exam scores based on study hours and attendance. Achieved 85% accuracy.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    link: 'https://github.com/Karthik9512/Smart-Study-Habit-Analyzer-Grade-Predictor'
  },
  {
    title: 'Student Admission Prediction',
    description: 'Machine learning model predicting student admissions based on exam data.',
    tech: ['Python', 'NumPy', 'Pandas', 'Logistic Regression'],
    link: 'https://github.com/Karthik9512/Predicting-Student-Admission-with-logistic-Regression'
  }
]

function Projects() {
  return (
    <section className="relative w-full min-h-screen px-4 py-20 overflow-hidden sm:px-6 lg:px-8">
      {/* 🌌 Full-Page Gradient Background */}
     
      {/* ✨ Optional Glow Orbs */}
      <div className="absolute w-72 h-72 bg-[#7209B7]/30 rounded-full blur-3xl top-10 left-10 animate-pulse -z-10"></div>
      <div className="absolute w-96 h-96 bg-[#4361EE]/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse -z-10"></div>

     {/* 🟣 Section Heading */}
    <div className="text-center">
   <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#7209B7] via-[#5A3AFF] to-[#4361EE] bg-clip-text text-transparent drop-shadow-md tracking-tight leading-tight">
    Projects
    </h2>

    <p className="mt-3 text-lg font-medium text-[#5A3AFF]/80">
    A selection of my favorite work and experiments blending AI, data, and design.
   </p>
    </div>




      {/* 🧩 Project Grid */}
      <div className="grid max-w-6xl gap-8 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="relative overflow-hidden transition-all duration-500 bg-white border border-purple-100 shadow-md rounded-2xl group hover:shadow-purple-500/50 hover:-translate-y-1"
          >
            {/* Header Gradient */}
            <div className="h-36 bg-gradient-to-br from-[#7209B7] to-[#4361EE] group-hover:scale-105 transition-transform duration-700"></div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#4C00C0] group-hover:text-[#4361EE] transition-colors duration-300">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700">{p.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium text-[#4C00C0] border border-[#D1C4FF] rounded-full bg-[#F6F3FF]/80 hover:bg-[#ECE7FF] transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="mt-6">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 text-sm font-medium text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-[#7209B7] to-[#4361EE] hover:from-[#5E17EB] hover:to-[#4895EF] hover:shadow-lg"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Hover Glow Overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 bg-gradient-to-br from-[#7209B7] to-[#4895EF] blur-2xl transition-all duration-700 -z-10"></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
