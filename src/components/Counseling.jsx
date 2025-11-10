import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare } from 'lucide-react';

export default function Counseling() {
  return (
    <section id="counseling" className="relative bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pastoral Counseling</h2>
          <p className="mt-3 text-gray-600">We’re here to listen, pray, and walk with you. Choose a counseling option below.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.a
            id="counseling1"
            href="mailto:counseling1@church.org?subject=Counseling%20Request"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                <PhoneCall className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Counseling 1</h3>
                <p className="mt-1 text-sm text-gray-600">Book a call with one of our pastors. We’ll reach out to confirm the time.</p>
              </div>
            </div>
          </motion.a>

          <motion.a
            id="counseling2"
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Counseling 2</h3>
                <p className="mt-1 text-sm text-gray-600">Chat with our care team via WhatsApp and get support in real time.</p>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
