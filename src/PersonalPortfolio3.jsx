import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PersonalPortfolio3() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const projects = [
    {
      id: 1,
      title: "EcoCart - Smart Grocery",
      desc: "A PWA that reduces food waste with recipe suggestions based on expiry dates.",
      tags: ["PWA", "React", "IndexedDB"],
      live: "#",
      source: "#",
    },
    {
      id: 2,
      title: "PulsePay Dashboard",
      desc: "Realtime payments dashboard with WebSocket updates and analytics charts.",
      tags: ["Next.js", "Socket.IO", "Charts"],
      live: "#",
      source: "#",
    },
    {
      id: 3,
      title: "Classroom CBT Portal",
      desc: "Secure CBT exam platform with timed sessions and automatic grading.",
      tags: ["Express", "Auth", "Postgres"],
      live: "#",
      source: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1020] text-gray-900 dark:text-gray-100 transition-colors duration-300 font-inter">
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-400 shadow-xl ring-1 ring-white/10"></div>
          <div>
            <h1 className="text-lg font-semibold tracking-wide">Abdul-Ghaniy</h1>
            <p className="text-xs opacity-70">Frontend Developer — Vibe Coding</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="relative inline-flex items-center gap-2 py-2 px-3 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm hover:scale-105 transform transition"
            aria-label="Toggle theme"
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-800 to-gray-700"
                  : "bg-yellow-100"
              }`}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </div>
            <span className="text-sm opacity-80">{theme === "dark" ? "Dark" : "Light"}</span>
          </button>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 py-2 px-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg hover:scale-105 focus:outline-none transition"
          >
            <span className="text-sm font-semibold">Let’s talk</span>
            <span className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-60" />
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20">
        {/* HERO */}
        <AnimatePresence>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 rounded-3xl p-8 backdrop-blur-sm bg-gradient-to-b from-gray-100/50 to-white/50 dark:from-white/5 dark:to-transparent"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <motion.h2
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-extrabold tracking-tight"
                >
                  Abdul-Ghaniy{" "}
                  <span className="ml-3 inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 to-indigo-500 text-black/90 shadow-inner">
                    Frontend
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="mt-4 max-w-xl leading-7 text-gray-700 dark:text-gray-300"
                >
                  I build polished, accessible interfaces with delightful micro-interactions and reliable architecture. Currently focused on React, performant UI, and designing for real user needs.
                </motion.p>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <a
                    href="#projects"
                    className="px-5 py-2 rounded-full font-semibold shadow-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:scale-105 hover:shadow-2xl transition"
                  >
                    View projects
                  </a>

                  <a
                    href="#contact"
                    className="px-5 py-2 rounded-full font-semibold border border-white/10 hover:border-transparent hover:bg-white/5 transition"
                    role="button"
                  >
                    Contact me
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="w-44 h-44 rounded-2xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">👋</div>
                  <div className="text-xs opacity-80">Let’s build vibes</div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </AnimatePresence>

        {/* ABOUT */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl bg-gray-50/60 dark:bg-white/5"
        >
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
            I’m a frontend developer who enjoys turning vague product goals into clean, maintainable interfaces. I focus on performance, accessibility, and joyful details — the small things that make products feel alive.
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard label="Experience" value="4+ yrs" />
            <StatCard label="Main stack" value="React • Tailwind" />
            <StatCard label="Design" value="Figma" />
            <StatCard label="Location" value="Nigeria" />
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="text-sm opacity-70">Selected work — focused on impact</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="rounded-xl p-4 backdrop-blur-sm bg-gray-50/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 hover:scale-[1.02] transform transition shadow-md"
              >
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm opacity-80">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-gray-200/80 dark:bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-black shadow-sm hover:shadow-lg transition"
                  >
                    Live
                  </a>
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 rounded-full border border-white/10 hover:bg-white/5 transition"
                  >
                    Source
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl bg-gray-50/60 dark:bg-white/5"
        >
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-sm opacity-80">
            Want to collaborate? Fill the form and I’ll get back within a few days.
          </p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Name"
              className="p-3 rounded-lg bg-transparent border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="p-3 rounded-lg bg-transparent border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
            <textarea
              placeholder="Message"
              className="md:col-span-2 p-3 rounded-lg bg-transparent border border-gray-300 dark:border-white/10 h-32 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            ></textarea>

            <div className="md:col-span-2 flex items-center gap-3 flex-wrap">
              <button
                type="submit"
                className="px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:scale-105 transition shadow-lg"
              >
                Send message
              </button>

              <a
                href="/cv.pdf"
                download
                className="px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition"
              >
                Download CV
              </a>

              <div className="ml-auto text-sm opacity-70">
                Or email:{" "}
                <a
                  href="mailto:you@example.com"
                  className="underline hover:text-indigo-400"
                >
                  you@example.com
                </a>
              </div>
            </div>
          </form>
        </motion.section>

        <footer className="mt-12 text-center opacity-70 text-sm">
          Made with ✨ — Built for vibe coding practice
        </footer>
      </main>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="p-3 rounded-lg backdrop-blur-sm bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
      <div className="text-xs opacity-80">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}
