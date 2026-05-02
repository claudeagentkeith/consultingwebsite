import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { allInsightsForListing } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Working notes on regulated medical-device engineering — combination products, risk management, design controls, and human factors.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights · Hitmaker Engineering",
    description:
      "Working notes on regulated medical-device engineering — combination products, risk management, design controls, and human factors.",
    url: "/insights",
    type: "website",
  },
};

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export default function InsightsIndexPage() {
  const items = allInsightsForListing();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights" },
        ]}
      />

      <Section className="pt-20">
        <p className="eyebrow">Insights</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Working notes on regulated medical-device engineering.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Short pieces on combination products, risk management, design
          controls, and human factors — written for working RA, QA, and R&amp;D
          leaders.
        </p>
      </Section>

      <Section bordered>
        {items.length === 0 ? (
          <p className="text-ink-600">First articles coming soon.</p>
        ) : (
          <ul className="divide-y divide-ink-100">
            {items.map((item) => {
              const isDraft = item.status === "draft";
              const date = new Date(item.publishedAt);
              return (
                <li key={item.slug} className="py-8 first:pt-0 last:pb-0">
                  <p className="eyebrow">
                    {item.topic}
                    {isDraft ? <span> · Coming soon</span> : null}
                  </p>
                  <h2 className="mt-3 text-2xl">
                    {isDraft ? (
                      <span className="text-ink-700">{item.title}</span>
                    ) : (
                      <Link
                        href={`/insights/${item.slug}`}
                        className="text-ink-900 no-underline hover:underline"
                      >
                        {item.title}
                      </Link>
                    )}
                  </h2>
                  <p className="mt-3 text-ink-600">{item.description}</p>
                  <p className="mt-3 text-sm text-ink-500">
                    <time dateTime={item.publishedAt}>
                      {DATE_FORMATTER.format(date)}
                    </time>
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </Section>

      <Section bordered>
        <p className="text-sm text-ink-500">
          Subscribe via{" "}
          <Link
            href="/feed.xml"
            className="text-ink-700 no-underline hover:underline"
          >
            RSS
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
