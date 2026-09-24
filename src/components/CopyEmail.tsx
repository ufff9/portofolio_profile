"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // kembali ke teks awal setelah 2 detik
    } catch {
      // Clipboard bisa ditolak browser. Abaikan, pengguna masih bisa klik link email.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="btn-cut inline-flex min-h-[48px] items-center bg-ink px-8 text-sm font-medium lowercase text-paper"
      aria-live="polite"
    >
      {copied ? "tersalin ✓" : "salin email"}
    </button>
  );
}