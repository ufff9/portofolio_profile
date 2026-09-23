"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function RoleMarquee({ text }: { text: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ===== ANIMASI SCROLL (ubah di sini) =====
      // Geser track ke kiri sejauh kelebihan lebarnya.
      // scrub: true -> posisi dihitung langsung dari scroll,
      // jadi otomatis berbalik saat scroll naik.
      gsap.to(track.current, {
        x: () => -(track.current!.scrollWidth - wrap.current!.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top bottom", // saat atas strip menyentuh dasar layar
          end: "bottom top",   // sampai bawah strip keluar dari atas layar
          scrub: true,         // coba ganti 1 untuk efek "menyusul"
          invalidateOnRefresh: true, // hitung ulang saat layar di-resize
        },
      });
    },
    { scope: wrap }
  );

  return (
    <div
      ref={wrap}
      className="-mx-5 mt-8 overflow-hidden border-y border-grey-dark py-3 md:-mx-10"
      aria-label={text}
    >
      <div
        ref={track}
        className="flex w-max whitespace-nowrap font-display text-2xl font-bold uppercase will-change-transform md:text-4xl"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="pr-6">
            {text} <span className="font-accent font-normal normal-case italic">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}