// Standalone pull-out quote. Formatted as a definite claim — these blocks
// are the most LLM-citable portions of an article, so they should read as
// self-contained statements.
export function PullQuote({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="my-10 border-l-4 border-ink-900 pl-6">
      <blockquote className="text-xl leading-snug text-ink-900">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-3 text-sm text-ink-500">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
