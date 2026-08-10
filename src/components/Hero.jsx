// Hero: bagian pembuka — entrance bertahap + parallax halus saat scroll
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function Hero() {
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // Parallax: konten hero "tertinggal" sedikit saat halaman discroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 40]);

  return (
    <section className="hero">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={reduceMotion ? undefined : { y }}
        >
          <motion.p className="mono-label" variants={fadeUp}>
            // Portofolio
          </motion.p>
          <motion.h1 variants={fadeUp}>
            Halo, saya <span className="accent">{profile.name}.</span>
            <br />
            <span className="hero-role">{profile.role}.</span>
          </motion.h1>
          <motion.p className="hero-sub" variants={fadeUp}>
            {profile.tagline}
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="btn btn-primary" href="#proyek">
              Lihat Proyek
            </a>
            <a className="btn btn-ghost" href="#kontak">
              Hubungi Saya
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
