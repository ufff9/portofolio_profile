"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const el = useRef<HTMLParagraphElement>(null);

  // 1) Pecah teks jadi array kata
  const words = text.split(" ");

  useGSAP(
    () => {
      const spans = gsap.utils.toArray<HTMLElement>(".reveal-word");

      // Pengguna yang meminta animasi dikurangi: langsung tampil terang
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(spans, { opacity: 1 });
        return;
      }

      // ===== ANIMASI SCROLL (ubah di sini) =====
      gsap.fromTo(
        spans,
        { opacity: 0.15 }, // kondisi awal: redup
        {
          opacity: 1,      // kondisi akhir: terang
          ease: "none",
          duration: 3,     // lama tiap kata (satuan relatif)
          stagger: 1,      // jeda antar kata. duration/stagger = 3
                           // -> sekitar 3 kata sedang "menyala" bersamaan
          scrollTrigger: {
            trigger: el.current,
            start: "top 80%",   // mulai saat atas paragraf di 80% tinggi layar
            end: "bottom 45%",  // selesai saat bawah paragraf di 45% tinggi layar
            scrub: true,        // terikat scroll, otomatis dua arah
          },
        }
      );
    },
    { scope: el, dependencies: [text] }
  );

  return (
    <p ref={el} className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="reveal-word">{word}</span>{" "}
        </span>
      ))}
    </p>
  );
}