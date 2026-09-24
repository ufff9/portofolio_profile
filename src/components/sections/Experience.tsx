import Reveal from "@/components/Reveal";
import { experiences } from "@/data/content";
import GithubGraph from "@/components/GithubGraph";

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-[15vh] md:px-10">
      {/* Label section */}
      <div className="mb-16 flex items-baseline justify-between border-t border-grey-dark pt-4 text-xs text-grey-mid">
        <span>(02)</span>
        <span>experience</span>
      </div>

      <div>
        {experiences.map((exp) => (
          <Reveal
            key={exp.period + exp.company}
            className="grid gap-4 border-t border-grey-dark py-10 md:grid-cols-12 md:gap-10 md:py-14"
          >
            {/* Kiri: tanggal, kecil */}
            <p className="text-xs text-grey-mid md:col-span-3 md:pt-3">
              {exp.period}
            </p>

            {/* Kanan: konten besar, dengan garis vertikal + titik */}
            <div className="relative md:col-span-8 md:col-start-5 md:border-l md:border-grey-dark md:pl-10">
              <span className="absolute -left-[5px] top-3 hidden h-[9px] w-[9px] rounded-full bg-paper md:block" />

              <h3 className="font-display text-[clamp(1.5rem,3vw,2.75rem)] font-semibold leading-tight tracking-tight">
                {exp.role}
              </h3>
              <p className="mt-1 font-accent text-xl italic text-grey-mid">
                {exp.company}
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-grey-mid md:text-base">
                {exp.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2 text-xs">
                {exp.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-grey-dark px-3 py-1 lowercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      
      <div className="mt-16 border-t border-grey-dark pt-10">
        <GithubGraph username="[ufff9]" />
      </div>
    </section>
  );
}
