"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // ===== ANIMASI SCROLL DUA ARAH (ubah di sini) =====
    // Observer dipanggil setiap elemen MASUK atau KELUAR layar.
    // classList.toggle(nama, true/false) -> tambah atau hapus class.
    // Tidak ada unobserve, jadi efek terulang tiap scroll naik-turun.
    const observer = new IntersectionObserver(
      ([entry]) => node.classList.toggle("is-in", entry.isIntersecting),
      { threshold: 0.6 }, // aktif saat 15% elemen terlihat
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
