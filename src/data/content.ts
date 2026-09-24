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
    "[INTRO_SINGKAT] — satu-dua kalimat pengantar, tampil kecil di kolom kiri.",
  // GANTI dengan paragraf aslimu. Makin panjang, makin terasa efek revealnya.
  paragraph:
    "[PARAGRAF_ABOUT] Halo, saya seorang developer yang suka membangun antarmuka web yang terasa hidup. Saya percaya desain yang baik lahir dari detail kecil: jarak huruf, ritme animasi, dan keputusan yang tidak terlihat. Saya belajar secara mandiri, dan setiap proyek adalah kesempatan untuk memahami sesuatu lebih dalam.",
};

export const experiences = [
  {
    period: "2024 — sekarang",
    role: "[POSISI_1]",
    company: "[PERUSAHAAN_1]",
    description:
      "[DESKRIPSI_1] Jelaskan apa yang kamu bangun dan dampaknya, dua sampai tiga kalimat.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    period: "2023 — 2024",
    role: "[POSISI_2]",
    company: "[PERUSAHAAN_2]",
    description:
      "[DESKRIPSI_2] Fokus pada tanggung jawab utama dan hasil yang bisa diukur.",
    tags: ["JavaScript", "Tailwind"],
  },
  {
    period: "2022 — 2023",
    role: "[POSISI_3]",
    company: "[PERUSAHAAN_3]",
    description:
      "[DESKRIPSI_3] Pengalaman awal, magang, atau proyek freelance.",
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
    x: 9,
    y: 10,
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
    x: 7,
    y: 50,
  },
  {
    id: "js",
    name: "JavaScript",
    note: "[CATATAN: fondasi bahasa]",
    Icon: SiJavascript,
    x: 15,
    y: 70,
  },
  {
    id: "tailwind",
    name: "Tailwind",
    note: "[CATATAN: styling utilitas]",
    Icon: SiTailwindcss,
    x: 10,
    y: 90,
  },
  {
    id: "html",
    name: "HTML5",
    note: "[CATATAN: struktur semantik]",
    Icon: SiHtml5,
    x: 91,
    y: 12,
  },
  {
    id: "css",
    name: "CSS3",
    note: "[CATATAN: layout, animasi]",
    Icon: SiCss,
    x: 83,
    y: 32,
  },
  {
    id: "git",
    name: "Git",
    note: "[CATATAN: versi & kolaborasi]",
    Icon: SiGit,
    x: 93,
    y: 52,
  },
  {
    id: "node",
    name: "Node.js",
    note: "[CATATAN: backend dasar]",
    Icon: SiNodedotjs,
    x: 85,
    y: 72,
  },
  {
    id: "laravel",
    name: "Laravel",
    note: "[CATATAN: framework PHP]",
    Icon: SiLaravel,
    x: 90,
    y: 90,
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
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "[JUDUL_PROYEK_1]",
    year: "2026",
    description:
      "[DESKRIPSI_1] Proyek unggulan. Jelaskan masalah yang dipecahkan, peranmu, dan hasilnya.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
    image: null,
    size: "featured",
  },
  {
    id: "p2",
    title: "[JUDUL_PROYEK_2]",
    year: "2025",
    description: "[DESKRIPSI_2] Satu-dua kalimat tentang proyek ini.",
    stack: ["React", "Node.js"],
    github: "#",
    live: "#",
    image: null,
    size: "wide",
  },
  {
    id: "p3",
    title: "[JUDUL_PROYEK_3]",
    year: "2025",
    description: "[DESKRIPSI_3] Satu-dua kalimat tentang proyek ini.",
    stack: ["JavaScript", "CSS"],
    github: "#",
    live: "#",
    image: null,
    size: "small",
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
  email: "[EMAIL]",
  headline: ["Let's work", "together."],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/ufff9", Icon: FaGithub },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "TikTok", href: "#", Icon: FaTiktok },
  { label: "X", href: "#", Icon: FaXTwitter },
];