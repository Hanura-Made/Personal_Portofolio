// Navbar: navigasi sticky + menu mobile + shadow halus saat discroll.
// Scrollspy ringan (IntersectionObserver): link section aktif di-highlight aksen.
import { useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const { scrollY } = useScroll();

  // Tambah class navbar-scrolled saat scroll melewati 8px
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 8);
  });

  // Scrollspy: tandai link sesuai section yang sedang terlihat
  useEffect(() => {
    const ids = ['tentang', 'proyek', 'skill', 'kontak'];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const links = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Skill', href: '#skill' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <nav className="container navbar-inner" aria-label="Navigasi utama">
        <a className="logo" href="#">
          {profile.name.toLowerCase()}
          <span>.</span>
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'active' : ''}
                aria-current={active === l.href ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a className="nav-cta" href="#kontak" onClick={() => setOpen(false)}>
              Hubungi Saya
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}