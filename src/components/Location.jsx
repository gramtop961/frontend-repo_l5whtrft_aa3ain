import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <MapPin className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find Us</h2>
          <p className="mt-3 text-gray-600">Join us every Sunday. We’re located in the heart of the city with easy parking and public transport access.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
        >
          <div className="aspect-[16/9] w-full">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509825!2d144.95565181531582!3d-37.817327979751744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0fdf3%3A0x5045675218ce6e0!2sSt%20Paul%27s%20Cathedral!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
