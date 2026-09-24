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
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          mobile:
            "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
          desktop:
            "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduce, mobile } = context.conditions as Record<
            string,
            boolean
          >;

          // Pengguna minta animasi dikurangi: langsung terang, tanpa animasi
          if (reduce) {
            gsap.set(spans, { opacity: 1 });
            return;
          }

          // ===== ANIMASI SCROLL (ubah di sini) =====
          // HP: paragraf jadi lebih tinggi, jadi rentang scroll dipersingkat
          gsap.fromTo(
            spans,
            { opacity: 0.15 },
            {
              opacity: 1,
              ease: "none",
              duration: 3,
              stagger: 1,
              scrollTrigger: {
                trigger: el.current,
                start: mobile ? "top 85%" : "top 80%",
                end: mobile ? "bottom 60%" : "bottom 45%",
                scrub: true,
              },
            },
          );
        },
      );

      return () => mm.revert();
    },
    { scope: el, dependencies: [text] },
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
