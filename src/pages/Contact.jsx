import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Replace this with your real submit endpoint or email handler
    try {
      await new Promise((r) => setTimeout(r, 700))
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-white">
      {/* Centered heading */}
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-center md:text-5xl" style={{ fontFamily: 'Poppins, Inter, system-ui' }}>
        Contact
      </h1>

      {/* Background gradient glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6A0DAD]/10 via-transparent to-[#C3AED6]/05" />
      </div>

      {/* Split card */}
      <div className="w-full max-w-5xl rounded-2xl p-1 bg-gradient-to-br from-[#F8F5FF]/30 to-white/30 shadow-xl">
        <div className="flex flex-col overflow-hidden md:flex-row rounded-2xl backdrop-blur-md bg-white/60 md:gap-0">
          {/* Left: contact details */}
          <div className="flex flex-col justify-center gap-6 p-8 md:w-1/2 md:p-12">
            <div className="text-sm font-medium tracking-wide text-purple-700 uppercase">Get in touch</div>
            <p className="max-w-lg text-gray-700">
              I’m open to collaborations, freelance work, and interesting projects. Reach out via email or connect on GitHub/LinkedIn.
            </p>

            <div className="mt-4 space-y-3">
              <ContactItem label="Email" 
              value="karthikachari780@gmail.com" 
              href="mailto:karthikachari780@gmail.com" />

              <ContactItem label="Phone" 
              value="+91 6304865771" 
              href="tel:+916304865771" />

              <ContactItem label="GitHub" 
              value="Karthik9512" 
              href="https://github.com/Karthik9512?tab=repositories" 
              external />

              <ContactItem label="LinkedIn" 
              value="tkarthikachari-8a7b92344" 
              href="www.linkedin.com/in/tkarthikachari-8a7b92344" 
              external />

            </div>
          </div>

          {/* Right: form */}
          <div className="flex items-center p-6 md:w-1/2 md:p-12">
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 transition border rounded-xl bg-white/70 backdrop-blur-sm border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@domain.com"
                  required
                  className="w-full px-4 py-3 transition border rounded-xl bg-white/70 backdrop-blur-sm border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 transition border resize-none rounded-xl bg-white/70 backdrop-blur-sm border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] shadow-lg hover:scale-[1.02] transform transition-all duration-200"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                {status === 'sent' && (
                  <span className="text-sm text-green-600">Message sent — I’ll reply soon.</span>
                )}
                {status === 'error' && (
                  <span className="text-sm text-red-600">Sending failed. Try again.</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-[#B0B0B0] w-full max-w-5xl">
        <div className="mx-auto w-24 h-1 rounded-full mb-3 bg-gradient-to-r from-[#7F00FF] to-[#E100FF] opacity-80" />
        © {new Date().getFullYear()} Omesh — Built with care.
      </footer>
    </section>
  )
}

function ContactItem({ label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="flex items-center gap-3 px-3 py-2 transition group w-max rounded-xl hover:bg-white/50"
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#7F00FF]/20 to-[#E100FF]/10 text-[#7F00FF] group-hover:scale-105 transform transition-shadow duration-200">
        {/* simple generic icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <div className="text-left">
        <div className="text-sm text-gray-600">{label}</div>
        <div className="text-sm font-medium text-gray-900">{value}</div>
      </div>
    </a>
  )
}

export default Contact


