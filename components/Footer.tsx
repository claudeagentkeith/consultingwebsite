export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-prose flex flex-col items-start justify-between gap-3 py-8 text-sm text-ink-500 sm:flex-row sm:items-center">
        <div>
          &copy; {year} Hitmaker Engineering. San Francisco, CA.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:kdherrington@gmail.com"
            className="text-ink-600 no-underline transition hover:text-ink-900"
          >
            kdherrington@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/keith-herrington/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-600 no-underline transition hover:text-ink-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
