import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-prose flex flex-col items-start justify-between gap-3 py-8 text-sm text-ink-500 sm:flex-row sm:items-center">
        <div>
          &copy; {year} Hitmaker Engineering. San Francisco, CA.
        </div>
        <div className="flex items-center gap-4">
          {/*
            TODO: re-add hello@hitmakerengineering.com once Resend domain
            verification for hitmakerengineering.com is live AND Cloudflare
            Email Routing alias hello@ → kdherrington@gmail.com is wired.
            See backlog: branded Resend domain verification.
          */}
          <Link
            href="/contact"
            className="text-ink-600 no-underline transition hover:text-ink-900"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
