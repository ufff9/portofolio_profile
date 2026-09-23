import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Sans,
  Instrument_Serif,
} from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--f-display",
});

const body = IBM_Plex_Sans({
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
  title: "[NAMA_LENGKAP] — [ROLE/JABATAN]",
  description: "Portofolio [NAMA_LENGKAP]",
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
