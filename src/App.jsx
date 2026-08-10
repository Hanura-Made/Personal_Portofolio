// App: komposisi semua section portofolio
// MotionConfig reducedMotion="user" -> animasi transform otomatis
// dimatikan untuk pengguna yang memilih reduced-motion (aksesibilitas)
import { MotionConfig } from 'framer-motion';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useLenis(); // smooth scrolling (nonaktif otomatis utk reduced-motion)

  return (
    <MotionConfig reducedMotion="user">
      {/* Layer dekoratif background: dot grid + ambient glow (dekoratif, dilewati screen reader) */}
      <div className="bg-decor" aria-hidden="true" />
      <a className="skip-link" href="#konten">
        Langsung ke konten
      </a>
      <Navbar />
      <main id="konten">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
