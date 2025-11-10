import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          Welcome to Grace Fellowship Church
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg"
        >
          A Christ-centered community to worship, grow, and serve together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-red-500"
          >
            Watch on YouTube
          </a>
          <a
            href="#counseling1"
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500"
          >
            Counseling 1
          </a>
          <a
            href="#counseling2"
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-violet-500"
          >
            Counseling 2
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {["Worship","Community","Teaching","Serving"].map((item) => (
            <div key={item} className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-gray-100">
              <p className="text-sm font-semibold text-gray-700">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
