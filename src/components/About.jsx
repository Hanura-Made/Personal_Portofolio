// About: cerita singkat (kiri) + fakta ringkas (kanan) — animasi saat scroll
import { motion } from 'framer-motion';
import { about } from '../data/portfolio';
import SectionHead from './SectionHead';
import { staggerContainer, staggerItem, VIEWPORT } from '../lib/motion';

export default function About() {
  return (
    <section id="tentang">
      <div className="container about-grid">
        <div>
          <SectionHead label="Tentang Saya" title="Siapa di balik layar ini?" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {about.paragraphs.map((p, i) => (
              <motion.p key={i} variants={staggerItem}>
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.ul
          className="about-facts"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {about.facts.map((f) => (
            <motion.li key={f.k} variants={staggerItem}>
              <span className="k">{f.k}</span>
              <span className="v">{f.v}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
