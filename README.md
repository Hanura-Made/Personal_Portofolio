# Portofolio Hanura

Portofolio pribadi — dibangun dengan **Vite + React** (JavaScript/JSX + CSS).

## Cara Menjalankan

```bash
npm install        # install dependency (cukup sekali)
npm run dev        # mode pengembangan → buka http://localhost:5173
npm run build      # build produksi → hasil di folder dist/
npm run preview    # pratinjau hasil build
npm run lint       # cek kualitas kode (oxlint)
```

## Struktur Proyek

```
portofolio_hanura/
|-- index.html              # entry HTML + font Geist
|-- src/
    |-- main.jsx            # pintu masuk React
    |-- App.jsx             # komposisi semua section
    |-- index.css           # design system (token, warna, komponen)
    |-- data/
    |   `-- portfolio.js    # <<< SEMUA KONTEN — edit file ini
    `-- components/
        |-- Navbar.jsx      # navigasi + menu mobile
        |-- Hero.jsx        # bagian pembuka
        |-- About.jsx       # tentang saya + fakta
        |-- Projects.jsx    # grid proyek
        |-- Skills.jsx      # skill & tools
        |-- Contact.jsx     # email + sosial media
        `-- Footer.jsx      # penutup
```

## Cara Update Konten

Buka `src/data/portfolio.js`. Semua teks website ada di sana:

- `profile`      → nama, role, email, link GitHub/LinkedIn
- `about`        → paragraf cerita + daftar fakta
- `projects`     → tambah/hapus objek proyek (title, description, tags, **category**, link).
  Category menentukan filter: gunakan nilai yang konsisten (mis. Python / Web / Data).
  Variasi panjang `description` membuat efek masonry lebih terlihat.
- `skills`       → daftar bahasa & tools

Cari tanda `TODO:` di file tersebut untuk bagian yang harus diisi.

## Deploy

Hasil `npm run build` (folder `dist/`) bisa di-host gratis di:

- GitHub Pages
- Netlify
- Vercel
