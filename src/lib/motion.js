// ============================================================
// VARIANTS ANIMASI (Framer Motion)
// Gaya: subtle & elegan — fade + geser ringan, sekali jalan.
// Semua durasi/jarak terpusat di sini agar konsisten.
// ============================================================

// Easing halus (easeOutQuint-style) — berhenti dengan lembut
export const EASE = [0.22, 1, 0.36, 1];

// Trigger scroll: sekali jalan, mulai saat elemen masuk ~80px viewport
export const VIEWPORT = { once: true, margin: '0px 0px -80px 0px' };

// Fade-up standar untuk blok (header section, paragraf, CTA)
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Kontainer stagger: anak-anak muncul bergiliran
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Item di dalam kontainer stagger
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};
