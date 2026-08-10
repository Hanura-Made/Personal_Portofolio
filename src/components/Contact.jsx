// Contact: ajakan terakhir — email + link sosial, fade-up saat scroll
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import SectionHead from './SectionHead';
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '../lib/motion';

export default function Contact() {
  return (
    <section id="kontak">
      <div className="container contact">
        <SectionHead
          label="Kontak"
          title="Mari terhubung."
          sub="Punya pertanyaan, tawaran kolaborasi, atau sekadar ingin menyapa? Kirim email atau temukan saya di platform lain."
        />

        <motion.a
          className="contact-email"
          href={`mailto:${profile.email}`}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          {profile.email}
        </motion.a>

        <motion.div
          className="social-links"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.a
            className="btn btn-ghost"
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            variants={staggerItem}
          >
            GitHub
          </motion.a>
          <motion.a
            className="btn btn-ghost"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            variants={staggerItem}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
