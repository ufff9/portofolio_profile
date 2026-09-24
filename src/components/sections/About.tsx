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
          className="font-body text-[clamp(1.125rem,2.2vw,1.875rem)] font-light leading-[1.4] tracking-normal md:col-span-8 md:col-start-5"
        />
      </div>
    </section>
  );
}
