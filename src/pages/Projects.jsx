const projects = [
  {
    title: 'AeroDrone',
    description: 'Transformable drone for rescue & defense.',
    tech: ['C++', 'Embedded', 'Sensors'],
    link: '#'
  },
  {
    title: 'FinTech! App',
    description: 'Personal finance tracker with budgets & reminders.',
    tech: ['React Native', 'Node', 'AI'],
    link: '#'
  },
  {
    title: 'Nexus Website',
    description: 'Next-gen digital hub for engagement.',
    tech: ['React', 'AI', 'Security'],
    link: '#'
  },
  {
    title: 'Skill Swap Platform',
    description: 'Space for sharing & learning skills.',
    tech: ['MERN'],
    link: '#'
  },
]

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
      <p className="mt-3 text-gray-700">A selection of work and prototypes.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-200" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a href={p.link} className="text-sm font-medium text-gray-900 hover:underline">View</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects


