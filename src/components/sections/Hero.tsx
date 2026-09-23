import Image from "next/image";
import RoleMarquee from "@/components/RoleMarquee";
import { profile } from "@/data/content";

export default function Hero() {
  const [line1, line2, line3] = profile.nameLines;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-5 pb-10 pt-28 md:px-10"
    >
      {/* Pojok atas: lokasi + status */}
      <div className="absolute right-5 top-20 text-right text-xs leading-relaxed md:right-10">
        <p className="text-grey-mid">{profile.location}</p>
        {profile.available && (
          <p className="mt-1 flex items-center justify-end gap-2">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-paper" />
            available for work
          </p>
        )}
      </div>

      {/* Baris nama + foto: HP = bertumpuk, desktop = berdampingan */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
        {/* Nama raksasa, indent tiap baris berbeda (asimetris) */}
        <h1 className="min-w-0 font-display font-extrabold uppercase leading-[0.82] tracking-tighter text-[clamp(3rem,15vw,13rem)]">
          <span className="block">{line1}</span>
          <span className="block pl-[12vw]">{line2}</span>
          <span className="block">{line3}</span>
        </h1>

        {/* Foto hitam-putih di sisi kanan, sedikit miring */}
        <div className="relative order-first aspect-[3/4] w-[clamp(140px,40vw,180px)] shrink-0 self-end -rotate-3 overflow-hidden border border-paper/40 md:order-none md:mb-3 md:mr-[3vw] md:w-[clamp(180px,22vw,360px)]">
          <Image
            src="/profile.jpg"
            alt="Foto profil"
            fill
            sizes="(min-width: 768px) 22vw, 40vw"
            className="object-cover grayscale contrast-125"
            priority
          />
        </div>
      </div>

      {/* Strip role yang bergeser mengikuti scroll */}
      <RoleMarquee text={profile.role} />
    </section>
  );
}