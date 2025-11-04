import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

function Contact() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 60]);
  const y2 = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden bg-gradient-to-b from-[#f9f6ff] via-white to-[#f1f0ff]">
      {/* ✨ Parallax Background Glow */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-200/40 via-transparent to-indigo-100/40"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute rounded-full -top-24 -left-20 w-72 h-72 bg-purple-400/20 blur-3xl -z-10 animate-pulse"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute right-0 rounded-full -bottom-24 w-72 h-72 bg-indigo-400/20 blur-3xl -z-10 animate-pulse"
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
          Get in Touch
        </h2>
        <p className="mt-3 text-lg font-medium text-[#5A3AFF]/80 max-w-2xl mx-auto">
          I’d love to hear from you — whether it’s about collaboration, freelance work, or just a friendly chat.
        </p>
      </motion.div>

      {/* 🌸 Contact Form Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.3}
        className="w-full max-w-4xl rounded-3xl p-[1px] bg-gradient-to-br from-[#7F00FF]/20 to-[#3A0CA3]/10 shadow-2xl"
      >
        <div className="p-8 overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md md:p-12">
          <form
            action="https://formspree.io/f/your-form-id" // 👉 Replace with your Formspree or backend endpoint
            method="POST"
            className="flex flex-col gap-6"
          >
            {/* 🧑 Name */}
            <motion.div variants={fadeUp} custom={0.4} className="flex flex-col">
              <label className="text-sm font-semibold text-[#5A3AFF] mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="p-3 rounded-xl border border-purple-200 bg-white/70 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7209B7]/50 transition-all"
              />
            </motion.div>

            {/* 📧 Email */}
            <motion.div variants={fadeUp} custom={0.5} className="flex flex-col">
              <label className="text-sm font-semibold text-[#5A3AFF] mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="p-3 rounded-xl border border-purple-200 bg-white/70 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5A3AFF]/50 transition-all"
              />
            </motion.div>

            {/* 💬 Message */}
            <motion.div variants={fadeUp} custom={0.6} className="flex flex-col">
              <label className="text-sm font-semibold text-[#5A3AFF] mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Type your message..."
                className="p-3 rounded-xl border border-purple-200 bg-white/70 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4361EE]/50 transition-all"
              ></textarea>
            </motion.div>

            {/* 🚀 Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="mt-4 w-full md:w-auto self-center px-8 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-[#7209B7] via-[#5A3AFF] to-[#4361EE] shadow-md hover:shadow-lg transition-all"
            >
              Send Message ✉️
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* 🌐 Social Links */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.8}
        className="flex flex-wrap justify-center gap-6 mt-12"
      >
        {[
          { name: "GitHub", link: "https://github.com/Karthik9512" },
          { name: "LinkedIn", link: "www.linkedin.com/in/tkarthikachari-8a7b92344" },
          { name: "Email", link: "mailto:karthikachari780@gmail.com" },
        ].map((social) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="px-5 py-2.5 rounded-full bg-gradient-to-br from-[#E0C3FC]/70 to-[#8EC5FC]/70 border border-[#d1b3ff]/40 text-[#3A0CA3] font-semibold shadow-sm hover:shadow-md transition-all"
          >
            {social.name}
          </motion.a>
        ))}
      </motion.div>

      {/* 💫 Footer */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mt-16 text-sm text-center text-gray-500"
      >
        <div className="w-24 h-1 mx-auto mb-3 rounded-full bg-gradient-to-r from-[#7209B7] to-[#4361EE]" />
       
      </motion.footer>
    </section>
  );
}

export default Contact;
