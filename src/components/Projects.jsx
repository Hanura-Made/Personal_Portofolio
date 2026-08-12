// Projects: grid 2 kolom (aspek rasio thumbnail konsisten) + filter kategori.
// - Filter chips: indikator aktif "geser" antar chip (layoutId)
// - Kartu masuk/keluar dengan fade+scale via AnimatePresence
// - Thumbnail SVG data-driven + overlay info saat hover (lihat ProjectThumb)
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import SectionHead from './SectionHead';
import ProjectThumb from './ProjectThumb';

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
          num="02"
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

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const hasLinks = Boolean(p.demo || p.repo);
              const motionProps = {
                initial: { opacity: 0, y: 20, scale: 0.97 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                transition: { duration: 0.3, delay: i * 0.04 },
              };
              const body = (
                <div className="card-body">
                  <div className="card-meta">
                    <span className="card-category">{p.category}</span>
                    <span className="card-year">{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {hasLinks ? (
                    <div className="project-actions">
                      {p.demo && (
                        <a
                          className="project-link project-link--primary"
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lihat live →
                        </a>
                      )}
                      {p.repo && (
                        <a
                          className="project-link project-link--ghost"
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source code
                        </a>
                      )}
                    </div>
                  ) : (
                    <span className="project-link">Lihat proyek →</span>
                  )}
                </div>
              );
              return hasLinks ? (
                <motion.article className="project-card" key={p.title} {...motionProps}>
                  <ProjectThumb project={p} index={i} />
                  {body}
                </motion.article>
              ) : (
                <motion.a
                  className="project-card"
                  key={p.title}
                  href={p.link}
                  {...motionProps}
                >
                  <ProjectThumb project={p} index={i} />
                  {body}
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}