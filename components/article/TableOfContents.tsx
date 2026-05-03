// Static table of contents. We pass entries in explicitly per article rather
// than parsing headings at runtime — keeps it deterministic and avoids any
// reliance on a headless heading library.

export type TocEntry = { id: string; label: string };

export function TableOfContents({ entries }: { entries: readonly TocEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <nav
      aria-label="On this page"
      className="my-10 rounded-xl border border-ink-100 bg-white p-5"
    >
      <p className="eyebrow">On this page</p>
      <ol className="mt-4 space-y-2 text-sm">
        {entries.map((entry, i) => (
          <li key={entry.id} className="flex gap-3">
            <span className="text-ink-400">{(i + 1).toString().padStart(2, "0")}</span>
            <a
              href={`#${entry.id}`}
              className="text-ink-700 no-underline hover:text-ink-900 hover:underline"
            >
              {entry.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
