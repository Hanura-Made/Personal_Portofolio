// ProjectThumb: thumbnail SVG gradien per kategori (dekoratif, aria-hidden).
// Data-driven: palet ditentukan dari kategori proyek; belum ada gambar asli,
// jadi thumbnail digenerate agar tetap konsisten (aspect 16:10 via CSS).
import { thumbColors } from '../lib/thumbPalettes';

export default function ProjectThumb({ project, index }) {
  const [from, to] = thumbColors(project.category);
  const gradId = `tg-${index}`;

  return (
    <div className="project-thumb" aria-hidden="true">
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill={`url(#${gradId})`} />

        {/* Dot grid halus sebagai tekstur */}
        {Array.from({ length: 24 }).map((_, i) => (
          <circle
            key={i}
            cx={((i % 6) + 0.5) * 66.6}
            cy={(Math.floor(i / 6) + 0.5) * 62.5}
            r="1.5"
            fill="rgba(255,255,255,0.07)"
          />
        ))}

        {/* Label kategori di pojok kiri-atas */}
        <text
          x="24"
          y="34"
          fontFamily="Geist Mono, monospace"
          fontSize="11"
          letterSpacing="2"
          fill="rgba(255,255,255,0.6)"
        >
          {project.category.toUpperCase()}
        </text>

        {/* Inisial besar di pojok kanan-bawah */}
        <text
          x="380"
          y="222"
          textAnchor="end"
          fontFamily="Geist, sans-serif"
          fontSize="110"
          fontWeight="700"
          letterSpacing="-6"
          fill="rgba(255,255,255,0.14)"
        >
          {project.title.charAt(0)}
        </text>
      </svg>

      {/* Overlay hover: nama, tahun, role, tools — duplikasi info (aria-hidden,
          info lengkap tetap ada di body kartu agar tetap terbaca AT) */}
      <div className="thumb-overlay" aria-hidden="true">
        <span className="n">{project.title}</span>
        <span className="m">
          {project.year} · {project.role}
        </span>
        <div className="opills">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}