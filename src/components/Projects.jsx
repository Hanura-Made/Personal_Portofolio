// Projects: masonry (CSS columns) + filter kategori dengan transisi halus.
// - Filter chips: indikator aktif "geser" antar chip (layoutId)
// - Kartu masuk/keluar dengan fade+scale via AnimatePresence
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import SectionHead from './SectionHead';

// Kategori unik dari data + "Semua" di depan
const categories = ['Semua', ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [active, setActive] = useState('Semua');
  const filtered =
    active === 'Semua' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="proyek">
      <div className="container">
        <SectionHead
          label="Portofolio"
          title="Proyek Pilihan"
          sub="Filter berdasarkan kategori — klik kartu untuk melihat detail atau kode sumbernya."
        />

        <div className="filter-row" role="group" aria-label="Filter proyek berdasarkan kategori">
          {categories.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                className={`filter-chip${isActive ? ' filter-chip--active' : ''}`}
                onClick={() => setActive(c)}
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-active"
                    className="filter-chip__bg"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="filter-chip__text">{c}</span>
              </button>
            );
          })}
        </div>

        <div className="projects-masonry">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                className="project-card"
                key={p.title}
                href={p.link}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <span className="card-category">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="project-link">Lihat proyek →</span>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
