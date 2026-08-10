// Footer: baris penutup — fade-up saat terlihat
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
        <a href="#">Kembali ke atas ↑</a>
      </div>
    </motion.footer>
  );
}
