import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import SectionHead from './SectionHead';
import ProjectThumb from './ProjectThumb';

const categories = ['Semua', ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [active, setActive] = useState('Semua');
  const [selected, setSelected] = useState(null);

  const filtered =
    active === 'Semua'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="proyek">
      <div className="container">
        <SectionHead
          num="02"
          label="Portofolio"
          title="Proyek Pilihan"
          sub="Filter berdasarkan kategori - klik tombol case study untuk melihat detail project internal."
        />

        <div
          className="filter-row"
          role="group"
          aria-label="Filter proyek berdasarkan kategori"
        >
          {categories.map((c) => {
            const isActive = active === c;

            return (
              <button
                key={c}
                type="button"
                className={`filter-chip${isActive ? ' filter-chip--active' : ''}`}
                onClick={() => setActive(c)}
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-active"
                    className="filter-chip__bg"
                    transition={{
                      type: 'spring',
                      duration: 0.5,
                    }}
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
              const hasCaseStudy = Boolean(p.caseStudy);

              const motionProps = {
                initial: {
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
                exit: {
                  opacity: 0,
                  scale: 0.95,
                },
                transition: {
                  duration: 0.3,
                  delay: i * 0.04,
                },
              };

              return (
                <motion.article
                  className="project-card"
                  key={p.title}
                  {...motionProps}
                >
                  <ProjectThumb project={p} index={i} />

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

                      {hasCaseStudy && (
                        <button
                          type="button"
                          className="project-link project-link--case-study"
                          onClick={() => setSelected(p)}
                        >
                          Baca case study →
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="case-study-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="case-study-modal"
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
            >
              <button
                type="button"
                className="case-study-close"
                onClick={() => setSelected(null)}
                aria-label="Tutup case study"
              >
                ×
              </button>

              <span className="card-category">{selected.category}</span>

              <h3 id="case-study-title">{selected.title}</h3>

              <p className="case-study-role">
                {selected.role} · {selected.year}
              </p>

              {selected.caseStudy && (
                <div className="case-study-body">
                  <h4>Masalah</h4>
                  <p>{selected.caseStudy.problem}</p>

                  <h4>Solusi</h4>
                  <p>{selected.caseStudy.solution}</p>

                  {selected.caseStudy.challenges && (
                    <>
                      <h4>Tantangan Teknis</h4>

                      <ul>
                        {selected.caseStudy.challenges.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <h4>Dampak</h4>
                  <p>{selected.caseStudy.impact}</p>
                </div>
              )}

              <div className="project-tags">
                {selected.tags.map((t) => (
                  <span className="pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
