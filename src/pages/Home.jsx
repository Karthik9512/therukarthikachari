import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500">Welcome</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">
            Hey, I’m Karthik 👋
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Full Stack Developer and aspiring entrepreneur. Skilled in JavaScript, React, Node.js, and databases. Passionate about building scalable, impactful solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-black/90 transition">
              View Projects
            </Link>
            <a href="mailto:karthikachari780@gmail.com" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition">
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner" />
        </div>
      </div>
    </section>
  )
}

export default Home


