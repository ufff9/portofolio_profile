import ScrollReveal from "@/components/ScrollReveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="relative px-5 py-[20vh] md:px-10">
      {/* Garis pembatas + label kecil bergaya editorial */}
      <div className="mb-12 flex items-baseline justify-between border-t border-grey-dark pt-4 text-xs text-grey-mid">
        <span>(01)</span>
        <span>about</span>
      </div>

      {/* Dua kolom asimetris: kiri sempit, kanan lebar, ada celah di antaranya */}
      <div className="grid gap-10 md:grid-cols-12">
        <p className="text-sm leading-relaxed text-grey-mid md:col-span-3">
          {about.intro}
        </p>

        <ScrollReveal
          text={about.paragraph}
          className="font-display text-[clamp(1.5rem,3.6vw,3.5rem)] font-bold leading-[1.1] tracking-tight md:col-span-8 md:col-start-5"
        />
      </div>
    </section>
  );
}