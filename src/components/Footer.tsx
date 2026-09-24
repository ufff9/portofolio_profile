import { profile, socials } from "@/data/content";

export default function Footer() {
  return (
    <footer className="px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-16 md:px-10">
      {/* Garis pembatas + label kecil, konsisten dengan section lain */}
      <div className="mb-10 flex items-baseline justify-between border-t border-grey-dark pt-4 text-xs text-grey-mid">
        <span>(06)</span>
        <span>find me on</span>
      </div>

      <div className="grid gap-12 md:grid-cols-12 md:items-end">
        {/* Deretan logo: kotak bersudut tajam, berbalik warna saat hover/tap */}
        <ul className="flex flex-wrap gap-3 md:col-span-7">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="social-tile flex h-14 w-14 items-center justify-center border border-grey-dark text-xl md:h-16 md:w-16 md:text-2xl"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-8 text-grey-mid md:col-span-4 md:col-start-9 md:items-end">
          <a href="#hero" className="link-draw text-sm text-paper">
            back to top ↑
          </a>
          <p className="text-xs md:text-right">
            © {new Date().getFullYear()} {profile.nameLines.join(" ")}
            <br />
            dibuat dengan Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
