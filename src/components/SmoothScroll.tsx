"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Fallback: pakai scroll bawaan browser untuk pengguna yang
    // meminta animasi dikurangi atau perangkat berspek rendah.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const lowEnd = (navigator.hardwareConcurrency ?? 8) <= 2;
    if (reduceMotion || lowEnd) return;

    const lenis = new Lenis({ anchors: true });

    // Setiap Lenis bergerak, beri tahu ScrollTrigger agar sinkron
    lenis.on("scroll", ScrollTrigger.update);

    // Satu "detak jantung" bersama: GSAP ticker menggerakkan Lenis
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}