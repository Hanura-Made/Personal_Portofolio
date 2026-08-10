// ============================================================
// PALET THUMBNAIL — gradien gelap per kategori proyek (SVG)
// Data-driven: tambah kategori baru di sini jika perlu.
// ============================================================

const PALETTES = {
  Python: ['#1d4ed8', '#0f172a'], // biru → slate gelap
  Web: ['#4f46e5', '#0f172a'], // indigo → slate gelap
  AI: ['#0e7490', '#0f172a'], // cyan → slate gelap
};

const FALLBACK = ['#334155', '#0f172a'];

export function thumbColors(category) {
  return PALETTES[category] || FALLBACK;
}

// Dipakai untuk assertion ringan di komponen (biar import tidak mubazir)
export const categories = Object.keys(PALETTES);