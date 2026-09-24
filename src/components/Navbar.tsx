"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Saat menu terbuka: kunci scroll halaman dan izinkan tombol Escape untuk menutup
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))] mix-blend-difference md:px-10 md:pt-4">
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="flex min-h-[44px] items-center font-display text-lg font-extrabold tracking-tight"
        >
          {profile.initials}
        </a>

        {/* Desktop: link berjajar */}
        <nav className="hidden gap-8 text-sm lowercase md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link-draw">
              {link.label}
            </a>
          ))}
        </nav>

        {/* HP: tombol menu */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex min-h-[44px] min-w-[44px] items-center justify-end text-sm lowercase md:hidden"
        >
          {open ? "close" : "menu"}
        </button>
      </header>

      {/* Panel menu layar penuh, hanya untuk HP */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-end bg-ink px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul>
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="border-t border-grey-dark last:border-b"
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[64px] items-center justify-between font-display text-4xl font-bold uppercase tracking-tight"
              >
                <span>{link.label}</span>
                <span className="font-body text-xs font-normal text-grey-mid">
                  0{i + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
