const skills = ['JavaScript', 'React', 'Node.js', 'C++', 'Java', 'Python', 'SQL', 'GitHub']
const certs = ['NVIDIA LLM Applications', 'GitHub Foundations', 'Oracle AI Vector Search']

function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
      <p className="mt-4 text-gray-700">
        I’m a B.Tech CSE student at KL University with hands-on experience in MERN, embedded systems, AI-driven apps, and hackathons (Google AI Day, Adobe Hackathon, Odoo Hack).
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Certifications</h3>
          <ul className="mt-3 list-disc list-inside text-gray-700">
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


