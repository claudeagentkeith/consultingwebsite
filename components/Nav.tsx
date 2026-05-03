import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-ink-100 bg-white/80 backdrop-blur">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-ink-900 no-underline"
          aria-label="Hitmaker Engineering home"
        >
          <Logo />
          <span className="text-sm font-semibold tracking-tight">
            Hitmaker Engineering
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-ink-700 no-underline transition hover:bg-ink-50 hover:text-ink-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Logo() {
  // Compact wordmark glyph: a solid square with a stepped notch — "H" + step.
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="20" height="20" rx="4" className="fill-ink-900" />
      <path
        d="M6 6h2.4v4h5.2V6H16v10h-2.4v-4H8.4v4H6z"
        className="fill-white"
      />
    </svg>
  );
}
