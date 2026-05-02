// Renders a small Q&A list. Used on per-service pages alongside FaqJsonLd
// to make the on-page content match the structured data exactly.

export type FaqEntry = { question: string; answer: string };

export default function ServiceFaq({ items }: { items: FaqEntry[] }) {
  return (
    <dl className="space-y-6">
      {items.map((item) => (
        <div key={item.question}>
          <dt className="text-base font-semibold text-ink-900">
            {item.question}
          </dt>
          <dd className="mt-2 text-ink-700">{item.answer}</dd>
        </div>
      ))}
    </dl>
  );
}
