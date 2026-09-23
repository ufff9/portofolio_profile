import { navLinks, profile } from "@/data/content";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 mix-blend-difference md:px-10">
      <a href="#hero" className="font-display text-lg font-extrabold tracking-tight">
        {profile.initials}
      </a>

      <nav className="flex gap-5 text-sm lowercase md:gap-8">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="link-draw">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}