import Image from "next/image";
import RoleMarquee from "@/components/RoleMarquee";
import { profile } from "@/data/content";

export default function Hero() {
  const [line1, line2, line3] = profile.nameLines;

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden px-5 pb-10 pt-28 md:px-10"
    >
      {/* Pojok atas: lokasi + status */}
      <div className="absolute right-5 top-20 text-right text-xs leading-relaxed md:right-10">
        <p className="text-grey-mid">{profile.location}</p>
        {profile.available && (
          <p className="mt-1 flex items-center justify-end gap-2">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-paper" />
            open for freelance projects
          </p>
        )}
      </div>

      {/* Ruang tengah: mengisi sisa tinggi, isinya dipusatkan vertikal */}
      <div className="flex flex-1 items-center">
        <div className="flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <h1 className="min-w-0 font-display font-extrabold uppercase leading-[0.82] tracking-tighter text-[clamp(3rem,13vw,11rem)]">
            <span className="block">{line1}</span>
            <span className="block pl-[10vw]">{line2}</span>
            <span className="block">{line3}</span>
          </h1>

          <div className="relative order-first aspect-[3/4] w-[clamp(140px,40vw,180px)] shrink-0 self-end -rotate-3 overflow-hidden border border-paper/40 md:order-none md:mr-[3vw] md:self-auto md:w-[clamp(180px,20vw,320px)]">
            <Image
              src="/profile.jpg"
              alt="Foto profil"
              fill
              sizes="(min-width: 768px) 20vw, 40vw"
              className="object-cover grayscale contrast-125"
              priority
            />
          </div>
        </div>
      </div>

      {/* Strip role tetap di dasar */}
      <RoleMarquee text={profile.role} />
    </section>
  );
}
