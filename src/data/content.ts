import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiNodedotjs,
  SiLaravel,
  SiFlutter,
  SiPython,
} from "react-icons/si";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

export const profile = {
  // Nama dipecah per baris supaya bisa ditata asimetris
  nameLines: ["Muhammad", "Rauf", "Putra"],
  role: "AI ENGINEER-MAHASISWA",
  location: "JAMBI, INDONESIA",
  available: true,
  initials: "RAUF",
};

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export const about = {
  intro:
    "Frontend developer dari Jambi, Indonesia. Suka mengubah desain menjadi antarmuka yang rapi, cepat, dan terasa hidup.",
  paragraph:
    "Halo, saya Rauf, frontend developer yang berbasis di Jambi. Saya membangun antarmuka web dengan React, Next.js, dan TypeScript, dengan perhatian pada hal-hal kecil: tipografi, jarak, dan ritme animasi. Bagi saya, desain yang baik sering terletak pada detail yang jarang disadari orang, tetapi terasa saat hilang. Saya terus belajar lewat membangun proyek nyata, dan saat ini terbuka untuk pekerjaan maupun kolaborasi.",
};

export const experiences = [
  {
    period: "2025 — sekarang",
    role: "Mahasiswa Semester Akhir",
    company: "Universitas Dinamika Bangsa",
    description:
      "Membuat projek yang lebih serius, Membuka Jasa Joki Projek seperti landing page, sistem informasi, dashboard, serta mempelajari AI .",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Laravel",
      "AI",
      "Tailwind",
      "Node.js",
      "Flutter",
      "python",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Mahasiswa Semester Menengah",
    company: "Universitas Dinamika Bangsa",
    description:
      "Memulai membangun proyek-proyek kecil dan belajar tentang pengembangan web dan aplikasi.",
    tags: ["JavaScript", "Tailwind", "flutter", "Node.js", "Laravel"],
  },
  {
    period: "2023 — 2024",
    role: "Mahasiswa Semester Awal",
    company: "Universitas Dinamika Bangsa",
    description:
      "Memulai perjalanan akademik di bidang komputer dan mempelajari dasar-dasar pemrograman.",
    tags: ["HTML", "CSS"],
  },
];

// x dan y = posisi ikon dalam persen dari lebar/tinggi area (0–100).
// Sengaja tidak simetris dan tidak lurus agar tidak terasa seperti grid kaku.
export const skills = [
  {
    id: "react",
    name: "React",
    note: "[CATATAN: komponen, hooks, state]",
    Icon: SiReact,
    color: "#61DAFB",
    x: 9,
    y: 10,
  },
  {
    id: "flutter",
    name: "Flutter",
    note: "[CATATAN: framework UI]",
    Icon: SiFlutter,
    color: "#02569B",
    x: 60,
    y: 0,
  },
  {
    id: "python",
    name: "Python",
    note: "[CATATAN: pemrograman berbasis objek]",
    Icon: SiPython,
    color: "#3776AB",
    x: 40,
    y: 0,
  },
  {
    id: "next",
    name: "Next.js",
    note: "[CATATAN: App Router, SSR]",
    Icon: SiNextdotjs,
    x: 17,
    y: 30,
  },
  {
    id: "ts",
    name: "TypeScript",
    note: "[CATATAN: tipe data, keamanan kode]",
    Icon: SiTypescript,
    color: "#3178C6",
    x: 7,
    y: 50,
  },
  {
    id: "js",
    name: "JavaScript",
    note: "[CATATAN: fondasi bahasa]",
    Icon: SiJavascript,
    color: "#F7DF1E",
    x: 15,
    y: 70,
  },
  {
    id: "tailwind",
    name: "Tailwind",
    note: "[CATATAN: styling utilitas]",
    Icon: SiTailwindcss,
    color: "#06B6D4",
    x: 40,
    y: 100,
  },
  {
    id: "html",
    name: "HTML5",
    note: "[CATATAN: struktur semantik]",
    Icon: SiHtml5,
    color: "#E34C26",
    x: 91,
    y: 12,
  },
  {
    id: "css",
    name: "CSS3",
    note: "[CATATAN: layout, animasi]",
    Icon: SiCss,
    color: "#1572B6",
    x: 83,
    y: 32,
  },
  {
    id: "git",
    name: "Git",
    note: "[CATATAN: versi & kolaborasi]",
    Icon: SiGit,
    color: "#F05032",
    x: 93,
    y: 52,
  },
  {
    id: "node",
    name: "Node.js",
    note: "[CATATAN: backend dasar]",
    Icon: SiNodedotjs,
    color: "#61DAFB",
    x: 85,
    y: 72,
  },
  {
    id: "laravel",
    name: "Laravel",
    note: "[CATATAN: framework PHP]",
    Icon: SiLaravel,
    color: "#FF2D20",
    x: 60,
    y: 100,
  },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  image: string | null; // path di folder public, mis. "/projects/nama.jpg"
  size: "featured" | "wide" | "small";
  device?: "browser" | "phone";
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Landing Page Rumah Tahfiz",
    year: "2026",
    description:
      "website landing page rumah tahfiz untuk menampilkan kegiatan, galeri, serta program dari rumah tahfiz.",
    stack: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/ufff9/yayasan-darul-mahani.git",
    live: "https://yayasan-darul-mahani.vercel.app/",
    image: "/project2.png",
    size: "featured",
  },
  {
    id: "p2",
    title: "Dashboard Prediksi Emas",
    year: "2026",
    description:
      "Menampilkan dashboard grafik prediksi harga emas dengan indikator teknikal, dengan menggunakan algoritma Linear Regression, Random Frest, dan XGBoost.",
    stack: ["Python", "Streamlit"],
    github: "https://github.com/ufff9/prediksiemas.git",
    live: "https://goldpredictionpp.streamlit.app",
    image: "/gold.png",
    size: "wide",
  },
  {
    id: "p3",
    title: "Aplikasi POS",
    year: "2026",
    description:
      "Aplikasi Point of Sale untuk toko ritel berbasis scan barcode.",
    stack: ["Flutter", "Dart", "SQLite"],
    github: "https://github.com/ufff9/app.adibahshop.git",
    live: "#",
    size: "small",
    device: "phone",
    image: "/pos.png",
  },
  {
    id: "p4",
    title: "[JUDUL_PROYEK_4]",
    year: "2024",
    description: "[DESKRIPSI_4] Satu-dua kalimat tentang proyek ini.",
    stack: ["React", "Tailwind"],
    github: "#",
    live: "#",
    image: null,
    size: "small",
  },
  {
    id: "p5",
    title: "[JUDUL_PROYEK_5]",
    year: "2024",
    description: "[DESKRIPSI_5] Satu-dua kalimat tentang proyek ini.",
    stack: ["Next.js", "GSAP"],
    github: "#",
    live: "#",
    image: null,
    size: "wide",
  },
  {
    id: "p6",
    title: "[JUDUL_PROYEK_6]",
    year: "2023",
    description: "[DESKRIPSI_6] Satu-dua kalimat tentang proyek ini.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
    image: null,
    size: "wide",
  },
  {
    id: "p7",
    title: "[JUDUL_PROYEK_7]",
    year: "2023",
    description: "[DESKRIPSI_7] Satu-dua kalimat tentang proyek ini.",
    stack: ["React"],
    github: "#",
    live: "#",
    image: null,
    size: "small",
  },
];

export const contact = {
  // Ganti dengan email aslimu. Tampilan email asli lebih panjang dari
  // placeholder, jadi cek ukurannya di HP setelah diganti.
  email: "muhammadraufputra@gmail.com",
  headline: ["Let's work", "together."],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/ufff9", Icon: FaGithub },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  {
    label: "Instagram",
    href: "https://instagram.com/@mhmd.rfptra",
    Icon: FaInstagram,
  },
  { label: "TikTok", href: "https://tiktok.com/@ufffpp", Icon: FaTiktok },
  { label: "X", href: "#", Icon: FaXTwitter },
];
