import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Sans,
  Instrument_Serif,
  Nunito_Sans,
} from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--f-display",
});

const body = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--f-body",
});

const accent = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--f-accent",
});

export const metadata: Metadata = {
  title: "Muhammad Rauf Putra — Frontend Developer",
  description:
    "Portofolio Muhammad Rauf Putra: proyek, pengalaman, dan kontak.",
  openGraph: {
    title: "Muhammad Rauf Putra — Frontend Developer",
    description: "Portofolio, proyek, dan kontak.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // konten boleh meluas sampai ke bawah poni
  themeColor: "#0a0a0a", // bar browser di HP ikut hitam
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${display.variable} ${body.variable} ${accent.variable}`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
