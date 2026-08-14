// ============================================================
// DATA PORTOFOLIO
// ============================================================

export const profile = {
  name: 'Hanura',
  role: 'Computer Science Graduate',
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
    'Halo, Saya Hanura — Lulusan Informatika yang tertarik pada pengembangan perangkat lunak dan pengolahan data. Saya terbiasa bekerja dengan Python untuk otomasi, debugging sistematis, dan analisis data (CSV/Excel/pandas).',

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
  title: 'Sistem Digitalisasi Izin Keluar Karyawan',
  description:
    'Aplikasi digitalisasi proses izin keluar karyawan yang dikembangkan selama kegiatan internship. Sistem membantu menggantikan proses manual dengan alur digital untuk pengajuan, pencatatan, dan pengelolaan data izin sehingga proses administrasi menjadi lebih terstruktur dan mudah dipantau.',
  tags: ['Laravel', 'PHP', 'MySQL', 'Web Development'],
  category: 'Web',
  year: '2025',
  role: 'Intern — Full-stack',
  caseStudy: {
    problem:
      'Proses pengajuan izin keluar karyawan sebelumnya masih manual, sulit dipantau statusnya, dan minim jejak audit.',
    solution:
      'Membangun sistem full-stack: frontend React untuk pengajuan izin dengan data karyawan terisi otomatis, backend Laravel untuk validasi dan penentuan alur approval berdasarkan hierarki jabatan, notifikasi otomatis via Telegram Bot, serta pemrosesan asinkron menggunakan job queue.',
    challenges: [
      'Merancang logika penentuan approver berdasarkan hierarki jabatan multi-level',
      'Menjaga konsistensi status antar tabel relasional di tengah proses asinkron',
      'Menangani callback Telegram (edit pesan, hapus tombol aksi setelah keputusan)',
      'Mendistribusikan notifikasi ke beberapa atasan tanpa duplikasi',
    ],
    impact:
      'Proses izin yang sebelumnya manual menjadi terdigitalisasi penuh dengan jejak audit yang jelas, mempercepat respons approval, dan mengurangi beban administratif tim HR.',
  },
},
  {
    title: 'Personal Portfolio Website',
    description:
      'Website portfolio pribadi untuk menampilkan profil, pengalaman, keterampilan, dan berbagai proyek yang telah dikerjakan. Dibangun dengan frontend modern dan dirancang dengan fokus pada tampilan responsif, struktur komponen yang reusable, serta pengalaman pengguna yang sederhana.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    category: 'Web',
    year: '2025',
    role: 'Frontend Development',
    demo: 'https://hanuraporto90.vercel.app/',
  },
  {
    title: 'Klasifikasi dan Deteksi Kematangan Biji Kopi dengan Naive Bayes',
    description:
      'Proyek machine learning untuk mengklasifikasikan tingkat kematangan biji kopi berdasarkan karakteristik citra dan fitur yang diekstraksi dari biji kopi. Model menggunakan algoritma Naive Bayes untuk mempelajari pola pada data dan menentukan kategori kematangan.',
    tags: ['Python', 'Naive Bayes', 'Machine Learning', 'Computer Vision', 'Image Processing'],
    category: 'AI',
    year: '2024',
    role: 'Machine Learning',
    link: '#', 
  },
  {
    title: 'Klasifikasi Jenis Kelamin Berbasis Citra Mata dengan Vision Transformer',
    description:
      'Proyek skripsi untuk mengembangkan model klasifikasi jenis kelamin berdasarkan citra mata manusia menggunakan Vision Transformer (ViT). Model menggunakan ViT-B/16 pretrained dan fine-tuning pada dataset citra mata',
    tags: ['Python', 'PyTorch', 'ViT','Deep learning', 'Computer Vision'],
    category: 'AI',
    year: '2025',
    role: 'Skripsi — Computer Vision',
    demo: 'https://vit-eye-gender-classification-mpumsh4jmabrhrsadawrjp.streamlit.app/',
    repo: 'https://github.com/Hanura-Made/vit-eye-gender-classification',
  },
];

export const skills = {
  languages: ['Python', 'JavaScript', 'HTML/CSS', 'SQL', 'Bash'],
  tools: ['VS Code', 'Git & GitHub', 'pandas', 'Excel/CSV', 'React', 'Vite', 'Obsidian'],
};