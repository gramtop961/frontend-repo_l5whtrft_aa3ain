import { useState } from 'react';
import { Menu, X, Play, MapPin, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home', img: 'https://images.unsplash.com/photo-1546379753-abb7fd8cf0d5?q=80&w=1200&auto=format&fit=crop' },
  { id: 'location', label: 'Location', img: 'https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1200&auto=format&fit=crop' },
  { id: 'gallery', label: 'Sunday Docs', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/60"
        >
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-3"
            aria-label="Go to Home"
          >
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=200&auto=format&fit=crop"
              alt="Church Logo"
              className="h-10 w-10 rounded-xl object-cover ring-2 ring-indigo-500/40"
            />
            <div className="text-left">
              <span className="block text-sm font-semibold tracking-tight text-gray-900">
                Grace Fellowship
              </span>
              <span className="block text-xs text-gray-500 -mt-0.5">
                A place to belong
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50"
            >
              <Play className="h-4 w-4" /> YouTube
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-gray-800 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              exit={{ y: -30 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              className="mx-auto mt-24 w-full max-w-md px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollToSection(item.id), 50);
                    }}
                    className="group overflow-hidden rounded-2xl bg-white shadow-lg"
                  >
                    <div className="relative h-32 w-full">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 flex items-center gap-2 text-white">
                        {item.id === 'home' && <ImageIcon className="h-4 w-4" />}
                        {item.id === 'location' && <MapPin className="h-4 w-4" />}
                        <span className="text-sm font-semibold">{item.label}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 font-semibold text-white shadow-lg"
              >
                <Play className="h-5 w-5" /> Watch on YouTube
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
