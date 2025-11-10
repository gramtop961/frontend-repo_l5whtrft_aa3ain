import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Location from './components/Location';
import Counseling from './components/Counseling';
import Gallery from './components/Gallery';

function Footer() {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Grace Fellowship Church. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#location" className="hover:text-indigo-600">Location</a>
            <a href="#gallery" className="hover:text-indigo-600">Sunday Docs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Counseling />
        <Location />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
