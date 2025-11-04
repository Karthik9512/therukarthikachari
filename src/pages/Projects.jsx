const projects = [
  {
    title: 'FinTech!',
    description: 'AI-powered personal finance tracker with analytics and bill reminders',
    tech: ['React Native', 'Node.js'],
    link: '#'
  },
  {
    title: 'Retail Sales Forecasting',
    description: 'Predicts future sales using regression models and visualizes insights with Power BI.',
    tech: ['Python','Pandas','scikit-learn', 'Power BI'],
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
    <section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
      <p className="mt-3 text-gray-700">A selection of work and prototypes.</p>

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="overflow-hidden transition bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md">
            <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-200" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
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


