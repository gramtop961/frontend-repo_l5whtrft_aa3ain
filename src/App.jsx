import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Counseling from './components/Counseling';
import Location from './components/Location';
import Gallery from './components/Gallery';

function Footer() {
  return (
    <footer className="border-t bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Grace Fellowship Church. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Counseling />
        <Location />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
