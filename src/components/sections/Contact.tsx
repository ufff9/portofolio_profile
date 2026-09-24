import CopyEmail from "@/components/CopyEmail";
import Reveal from "@/components/Reveal";
import { contact, profile } from "@/data/content";

export default function Contact() {
  const mailHref = "mailto:" + contact.email;

  return (
    <section
      id="contact"
      className="relative bg-paper px-5 pb-[10vh] pt-[15vh] text-ink md:px-10"
    >
      <div className="mb-16 flex items-baseline justify-between border-t border-ink/25 pt-4 text-xs text-ink/60">
        <span>(05)</span>
        <span>contact</span>
      </div>

      <Reveal>
        <p className="font-display text-[clamp(2.5rem,9vw,8rem)] font-extrabold uppercase leading-[0.85] tracking-tighter">
          {contact.headline[0]}
          <br />
          <span className="font-accent font-normal normal-case italic">
            {contact.headline[1]}
          </span>
        </p>
      </Reveal>

      <Reveal className="mt-16 md:mt-24">
        <a
          href={mailHref}
          className="group relative inline-block break-all font-display text-[clamp(1.75rem,6.5vw,6.5rem)] font-bold leading-none tracking-tight"
        >
          {contact.email}
          <span className="mt-2 block h-[3px] w-full origin-left scale-x-[0.15] bg-ink transition-transform duration-500 group-hover:scale-x-100" />
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <CopyEmail email={contact.email} />
          <p className="text-sm text-ink/60">
            {profile.location} ·{" "}
            {profile.available ? "open for work" : "currently busy"}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
