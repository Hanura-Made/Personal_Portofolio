// Skills: dua grup pill badges — muncul bergiliran saat scroll
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import SectionHead from './SectionHead';
import { staggerContainer, staggerItem, VIEWPORT } from '../lib/motion';

export default function Skills() {
  const groups = [
    { title: 'Bahasa & Teknologi', items: skills.languages },
    { title: 'Tools & Workflow', items: skills.tools },
  ];

  return (
    <section id="skill">
      <div className="container">
        <SectionHead
          num="03"
          label="Kemampuan"
          title="Skill & Tools"
          sub="Teknologi yang saya pakai untuk belajar dan mengerjakan proyek."
        />

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {groups.map((g) => (
            <motion.div className="skills-group" key={g.title} variants={staggerItem}>
              <h3>{g.title}</h3>
              <ul className="skills-list">
                {g.items.map((s) => (
                  <li key={s}>
                    <span className="pill">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
