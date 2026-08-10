// ============================================================
// DATA PORTOFOLIO
// ============================================================

export const profile = {
  name: 'Hanura',
  role: 'Lulusan Informatika',
  tagline:
    'Membangun perangkat lunak yang rapi, teruji, dan punya dampak nyata.',
  location: 'Indonesia',
  email: 'Hanuramade@gmail.com',
  socials: {
    github: 'https://github.com/Hanura-Made', 
    linkedin: 'https://www.linkedin.com/in/username-kamu',
  },
};

export const about = {
  paragraphs: [
    'Halo, saya Hanura — Lulusan Informatika yang tertarik pada pengembangan perangkat lunak dan pengolahan data. Saya terbiasa bekerja dengan Python untuk otomasi, debugging sistematis, dan analisis data (CSV/Excel/pandas).',

    'Saya percaya kode yang baik adalah kode yang bisa dibaca manusia lain, punya pengujian yang jelas, dan diselesaikan dengan pendekatan langkah demi langkah yang bisa diverifikasi.',
  ],
  facts: [
    { k: 'Nama', v: 'Hanura' },
    { k: 'Status', v: 'Lulusan Teknik Informatika (computer science) GPA 3.8' },
    { k: 'Bahasa', v: 'Indonesia, Inggris' },
    { k: 'Lokasi', v: 'Indonesia' },
    { k: 'Fokus', v: 'Python, Data, Web' },
    { k: 'Still Learning', v: 'Ai Agents, AI' },
  ],
};

export const projects = [
  {
    title: 'Sistem Long-Term Memory (Obsidian)',
    description:
      'Sistem memori jangka panjang berbasis Markdown + Obsidian: struktur vault, aturan baca/tulis, dan pencarian lintas catatan — tanpa cloud database.',
    tags: ['Obsidian', 'Markdown', 'Organisasi'],
    category: 'Data',
    link: '#', // TODO: ganti dengan URL demo/repo
  },
  {
    title: 'Proyek Python — contoh',
    description:
      'Ganti dengan proyek nyatamu. Deskripsi yang lebih panjang membuat kartu ini lebih tinggi di masonry, memberi ritme visual yang menarik saat difilter. Ceritakan masalah yang kamu selesaikan, pendekatannya, dan hasil yang dicapai.',
    tags: ['Python', 'pandas'],
    category: 'Python',
    link: '#', 
  },
 {
    title: 'Sistem Digitalisasi Izin Keluar Karyawan',
    description:
      'Aplikasi digitalisasi proses izin keluar karyawan yang dikembangkan selama kegiatan internship. Sistem membantu menggantikan proses manual dengan alur digital untuk pengajuan, pencatatan, dan pengelolaan data izin sehingga proses administrasi menjadi lebih terstruktur dan mudah dipantau.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Web Development'],
    category: 'Web',
    link: '#', 
  },
  {
    title: 'Proyek Python 2 — contoh',
    description: 'Ganti dengan proyek otomasi atau pengolahan data-mu.',
    tags: ['Python', 'CSV'],
    category: 'Python',
    link: '#', 
  },
  {
    title: 'Proyek Web 2 — contoh',
    description:
      'Deskripsi panjang untuk variasi tinggi kartu: ceritakan arsitektur, fitur utama, tantangan teknis yang dihadapi, dan bagaimana kamu menyelesaikannya dengan pendekatan yang sistematis dan teruji.',
    tags: ['React', 'API'],
    category: 'Web',
    link: '#', // TODO: ganti
  },
{
  title: 'Klasifikasi dan Deteksi Kematangan Biji Kopi dengan Naive Bayes',
  description:
    'Proyek machine learning untuk mengklasifikasikan tingkat kematangan biji kopi berdasarkan karakteristik citra dan fitur yang diekstraksi dari biji kopi. Model menggunakan algoritma Naive Bayes untuk mempelajari pola pada data dan menentukan kategori kematangan.',
  tags: ['Python', 'Naive Bayes', 'Machine Learning', 'Computer Vision', 'Image Processing'],
  category: 'AI',
  link: '#', 
},
{
  title: 'Klasifikasi Jenis Kelamin Berbasis Citra Mata dengan Vision Transformer',
  description:
    'Proyek skripsi untuk mengembangkan model klasifikasi jenis kelamin berdasarkan citra mata manusia menggunakan Vision Transformer (ViT). Model menggunakan ViT-B/16 pretrained dan fine-tuning pada dataset citra mata',
  tags: ['Python', 'PyTorch', 'ViT','Deep learning', 'Computer Vision'],
  category: 'AI',
  link: '#',
},
];

export const skills = {
  languages: ['Python', 'JavaScript', 'HTML/CSS', 'SQL', 'Bash'],
  tools: ['VS Code', 'Git & GitHub', 'pandas', 'Excel/CSV', 'React', 'Vite', 'Obsidian'],
};
