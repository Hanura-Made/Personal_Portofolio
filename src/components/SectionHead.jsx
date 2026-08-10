// SectionHead: label mono + judul (+ sub judul) dengan animasi fade-up.
// Dipakai oleh semua section agar markup header konsisten (DRY).
import { motion } from 'framer-motion';
import { fadeUp, VIEWPORT } from '../lib/motion';

export default function SectionHead({ label, title, sub }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp}
    >
      <p className="mono-label">{label}</p>
      <h2 className="section-title section-head">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </motion.div>
  );
}
