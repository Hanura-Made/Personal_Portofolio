// useLenis: smooth scrolling ala awwwards + anchor nav yang halus.
// Otomatis NONAKTIF untuk pengguna prefers-reduced-motion (aksesibilitas).
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function useLenis() {
  useEffect(() => {
    // Hormati prefers-reduced-motion: kembali ke scroll native
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Anchor link (#tentang, #proyek, ...) digulir halus via Lenis
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href');
      if (hash === '#') {
        e.preventDefault();
        lenis.scrollTo(0);
      } else if (hash.length > 1) {
        const el = document.querySelector(hash);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el);
        }
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', onClick);
      lenis.destroy();
    };
  }, []);
}
