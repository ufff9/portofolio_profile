"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/content";

export default function Skills() {
  const box = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const node = box.current;
    if (!node) return;

    // Ukur kotak, dan ukur ulang setiap ukurannya berubah
    const measure = () => setSize({ w: node.clientWidth, h: node.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);

    // ===== ANIMASI MUNCUL DUA ARAH =====
    // Class "is-in" ditambah/dihapus tiap masuk/keluar layar,
    // sehingga garis "digambar ulang" setiap kali section terlihat lagi.
    const io = new IntersectionObserver(
      ([entry]) => node.classList.toggle("is-in", entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(node);

    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  const current = skills.find((s) => s.id === active);

  return (
    <section id="skills" className="relative px-5 py-[15vh] md:px-10">
      <div className="mb-16 flex items-baseline justify-between border-t border-grey-dark pt-4 text-xs text-grey-mid">
        <span>(03)</span>
        <span>skills</span>
      </div>

      {/* Area utama. Klik area kosong = hapus sorotan (berguna di HP) */}
      <div
        ref={box}
        onClick={() => setActive(null)}
        className="relative h-[440px] w-full md:h-[600px]"
      >
        {/* Garis melengkung dari tiap ikon ke pusat */}
        {size.w > 0 && (
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${size.w} ${size.h}`}
            aria-hidden="true"
          >
            {skills.map((s, i) => {
              const x = (s.x / 100) * size.w;
              const y = (s.y / 100) * size.h;
              const cx = size.w / 2;
              const cy = size.h / 2;
              const mx = (x + cx) / 2;
              // M = pindah ke titik awal, C = kurva bezier (2 titik kendali + titik akhir)
              const d = `M ${x} ${y} C ${mx} ${y}, ${mx} ${cy}, ${cx} ${cy}`;
              return (
                <path
                  key={s.id}
                  d={d}
                  pathLength={1}
                  strokeWidth={active === s.id ? 1.5 : 1}
                  className={`skill-line fill-none ${
                    active === s.id ? "stroke-paper" : "stroke-grey-dark"
                  }`}
                  // urutan delay = [gambar garis, ganti warna]
                  style={{ transitionDelay: `${i * 80}ms, 0ms` }}
                />
              );
            })}
          </svg>
        )}

        {/* Kotak pusat: judul "Skills", berubah jadi detail saat ikon aktif */}
        <div className="absolute left-1/2 top-1/2 z-10 w-[min(44vw,220px)] -translate-x-1/2 -translate-y-1/2 border border-grey-dark bg-ink px-4 py-5 text-center">
          <p className="font-display text-2xl font-bold tracking-tight md:text-4xl">
            {current ? current.name : "Skills"}
          </p>
          <p className="mt-2 min-h-[3em] text-xs leading-relaxed text-grey-mid">
            {current ? current.note : "hover / tap ikon"}
          </p>
        </div>

        {/* Ikon-ikon */}
        {skills.map(({ id, name, Icon, x, y }) => (
          <button
            key={id}
            type="button"
            aria-label={name}
            aria-pressed={active === id}
            onMouseEnter={() => setActive(id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(id)}
            onBlur={() => setActive(null)}
            onClick={(e) => {
              e.stopPropagation(); // jangan ikut memicu "hapus sorotan"
              setActive(id);
            }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className={`skill-node absolute z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border bg-ink text-xl md:h-14 md:w-14 md:text-2xl ${
              active === id
                ? "border-paper text-paper"
                : "border-grey-dark text-grey-mid"
            }`}
          >
            <Icon />
          </button>
        ))}
      </div>
    </section>
  );
}