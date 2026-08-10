// ScrollProgress: garis aksen 3px di tepi atas — progres membaca halaman.
// Signature detail: tipis, tidak mengganggu, hanya warna aksen.
// Nonaktif total untuk prefers-reduced-motion.
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const [reduce, setReduce] = useState(true);
  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  if (reduce) return null;
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}