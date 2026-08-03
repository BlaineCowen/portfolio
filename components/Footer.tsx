import Link from "next/link";

const LINKS = [
  { href: "https://github.com/BlaineCowen", label: "GitHub" },
  { href: "mailto:Blaine.Cowen@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row md:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
          &copy; {new Date().getFullYear()} Blaine Cowen
        </p>
        <div className="flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
