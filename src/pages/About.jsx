const skills = [
  'Python',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Seaborn',
  'Machine Learning',
  'Power BI',
  'DAX',
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
    <section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
      <p className="mt-4 text-gray-700">
        I’m a B.Tech CSE student at KL University with hands-on experience in Python, Machine Learning, Power BI, and Data Analytics. I love transforming raw data into actionable insights and building AI-driven solutions that solve real-world problems. When I’m not coding, you’ll find me exploring the latest in AI, hiking, or experimenting with new recipes in the kitchen.
      </p>

      <div className="grid gap-8 mt-10 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                {s}
                
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Certifications</h3>
          <ul className="mt-3 text-gray-700 list-disc list-inside">
            {certs.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About


