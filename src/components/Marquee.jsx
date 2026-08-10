// Marquee: strip teks berjalan tanpa henti (identitas awwwards).
// Murni CSS keyframes; konten di-duplikasi agar loop seamless (-50%).
// aria-hidden: strip ini dekoratif, dilewati screen reader.
import { skills } from '../data/portfolio';

const words = [...skills.languages, ...skills.tools];

export default function Marquee() {
  const loop = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((w, i) => (
          <span key={i}>
            {w}
            <em>✦</em>
          </span>
        ))}
      </div>
    </div>
  );
}
