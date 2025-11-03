import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm tracking-wider text-gray-500 uppercase">Welcome</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Hey, I’m Karthik 👋
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Aspiring Data Scientist & AI Enthusiast skilled in Python, Power BI, Machine Learning, and Data Analytics — passionate about turning data into intelligent, real-world solutions.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-black/90 transition">
              View Projects
            </Link>
            <a href="mailto:karthikachari780@gmail.com" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition">
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="shadow-inner aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200" />
        </div>
      </div>
    </section>
  )
}

export default Home


