// Navbar: navigasi sticky + menu mobile + shadow halus saat halaman discroll
import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Tambah class navbar-scrolled saat scroll melewati 8px
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 8);
  });

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
              <a href={l.href} onClick={() => setOpen(false)}>
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
