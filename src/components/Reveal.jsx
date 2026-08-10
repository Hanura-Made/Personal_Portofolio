// Reveal: fade-in/slide-up halus saat section masuk viewport.
// Murni Intersection Observer (permintaan user) + CSS transition.
// - Sekali jalan: disconnect setelah terlihat.
// - prefers-reduced-motion: langsung tampil tanpa animasi.
import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Aksesibilitas: user yang menonaktifkan animasi langsung lihat konten
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect(); // cukup sekali
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -64px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}