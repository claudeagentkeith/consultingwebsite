export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-prose flex flex-col gap-6 py-10 text-sm text-ink-500">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            &copy; {year} Hitmaker Engineering. San Francisco, CA.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@hitmakerengineering.com"
              className="text-ink-600 no-underline transition hover:text-ink-900"
            >
              hello@hitmakerengineering.com
            </a>
          </div>
        </div>
        <p className="max-w-3xl text-xs leading-relaxed text-ink-500">
          Because we work in regulated product development, some engagements
          may require a conflict check and NDA before detailed technical
          information is reviewed.
        </p>
      </div>
    </footer>
  );
}
