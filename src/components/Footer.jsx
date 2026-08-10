// Footer: baris penutup — fade-up saat terlihat + micro-interaction ringan.
// Signature detail: panah "ke atas" bergeser naik saat hover.
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { fadeUp, VIEWPORT } from '../lib/motion';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp}
    >
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} — dibangun dengan Vite + React
        </p>
        <a href="#">
          Kembali ke atas <span className="footer-arrow" aria-hidden="true">↑</span>
        </a>
      </div>
    </motion.footer>
  );
}