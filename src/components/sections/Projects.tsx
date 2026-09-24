"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

const INITIAL = 3; // jumlah proyek awal
const STEP = 2; // tambahan tiap klik "Load more"

// Class UTUH, bukan disusun dari variabel (lihat penjelasan Tailwind di atas)
const spans: Record<Project["size"], string> = {
  featured: "md:col-span-12",
  wide: "md:col-span-7",
  small: "md:col-span-5",
};

export default function Projects() {
  const [visible, setVisible] = useState(INITIAL);
  const shown = projects.slice(0, visible);
  const remaining = projects.length - visible;

  // Tinggi halaman bertambah -> hitung ulang posisi semua ScrollTrigger
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [visible]);

  return (
    <section id="projects" className="relative px-5 py-[15vh] md:px-10">
      <div className="mb-16 flex items-baseline justify-between border-t border-grey-dark pt-4 text-xs text-grey-mid">
        <span>(04)</span>
        <span>projects</span>
      </div>

      <h2 className="mb-14 font-display text-[clamp(2.5rem,8vw,7rem)] font-extrabold uppercase leading-[0.85] tracking-tighter">
        Recent
        <br />
        <span className="font-accent font-normal normal-case italic">projects</span>
      </h2>

      {/* Bento grid: 1 kolom di HP, 12 kolom di desktop */}
      <div className="grid gap-4 md:grid-cols-12 md:gap-6">
        {shown.map((p, i) => (
          <Reveal key={p.id} className={spans[p.size]}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => Math.min(v + STEP, projects.length))}
            className="btn-cut group inline-flex min-h-[48px] items-center gap-4 bg-paper px-8 text-sm font-medium lowercase text-ink"
          >
            load more ({remaining})
            <span className="transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </button>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const featured = p.size === "featured";

  return (
    <article
      className={`group flex h-full flex-col gap-8 border border-grey-dark p-5 md:p-8 ${
        featured ? "md:flex-row md:items-end md:gap-12" : ""
      }`}
    >
      {/* Teks */}
      <div className={featured ? "md:w-2/5" : ""}>
        <div className="flex items-baseline justify-between text-xs text-grey-mid">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{p.year}</span>
        </div>

        <h3
          className={`mt-6 font-display font-bold leading-[0.95] tracking-tight ${
            featured
              ? "text-[clamp(2rem,4.5vw,4.5rem)]"
              : "text-[clamp(1.5rem,2.6vw,2.5rem)]"
          }`}
        >
          {p.title}
        </h3>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-grey-mid">
          {p.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2 text-xs">
          {p.stack.map((s) => (
            <li key={s} className="border border-grey-dark px-3 py-1 lowercase">
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-6 text-sm">
          <a href={p.github} target="_blank" rel="noreferrer" className="link-draw">
            github ↗
          </a>
          <a href={p.live} target="_blank" rel="noreferrer" className="link-draw">
            live demo ↗
          </a>
        </div>
      </div>

      {/* Mockup browser */}
      <div
        className={`overflow-hidden border border-grey-dark bg-ink transition-transform duration-500 group-hover:-translate-y-1 ${
          featured ? "md:w-3/5" : "mt-auto"
        }`}
      >
        <div className="flex items-center gap-1.5 border-b border-grey-dark px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-grey-dark" />
          <span className="h-2 w-2 rounded-full bg-grey-dark" />
          <span className="h-2 w-2 rounded-full bg-grey-dark" />
          <span className="ml-3 truncate text-[10px] text-grey-mid">
            {p.live === "#" ? "localhost" : p.live.replace(/^https?:\/\//, "")}
          </span>
        </div>

        <div className="relative aspect-[16/10] w-full">
          {p.image ? (
            <Image
              src={p.image}
              alt={`Tampilan ${p.title}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-grey-mid [background:repeating-linear-gradient(135deg,transparent_0_10px,#1a1a1a_10px_11px)]">
              [SCREENSHOT]
            </div>
          )}
        </div>
      </div>
    </article>
  );
}