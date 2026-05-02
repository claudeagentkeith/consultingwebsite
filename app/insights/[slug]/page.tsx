import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { findInsight, insights } from "@/lib/insights";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const insight = findInsight(params.slug);
  if (!insight) return {};

  const slug = `/insights/${insight.slug}`;
  const isDraft = insight.status === "draft";

  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: slug },
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.description,
      url: slug,
      publishedTime: insight.publishedAt,
      modifiedTime: insight.updatedAt ?? insight.publishedAt,
    },
    robots: isDraft
      ? {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        }
      : undefined,
  };
}

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function ArticleJsonLd({
  insight,
}: {
  insight: ReturnType<typeof findInsight>;
}) {
  if (!insight) return null;
  const slug = `/insights/${insight.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.description,
    url: `https://hitmakerengineering.com${slug}`,
    datePublished: insight.publishedAt,
    dateModified: insight.updatedAt ?? insight.publishedAt,
    inLanguage: "en-US",
    author: { "@id": "https://hitmakerengineering.com/#organization" },
    publisher: { "@id": "https://hitmakerengineering.com/#organization" },
    mainEntityOfPage: `https://hitmakerengineering.com${slug}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function InsightPage({ params }: { params: Params }) {
  const insight = findInsight(params.slug);
  if (!insight) notFound();

  const isDraft = insight.status === "draft";
  const slug = `/insights/${insight.slug}`;
  const date = new Date(insight.publishedAt);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights" },
          { name: insight.title, url: slug },
        ]}
      />
      {!isDraft && <ArticleJsonLd insight={insight} />}

      <Section className="pt-20">
        <p className="eyebrow">
          Insights · {insight.topic}
          {isDraft ? <span> · Coming soon</span> : null}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">{insight.title}</h1>
        <p className="mt-4 text-sm text-ink-500">
          <time dateTime={insight.publishedAt}>
            {DATE_FORMATTER.format(date)}
          </time>
        </p>

        <div className="mt-10 max-w-prose space-y-5 text-ink-700">
          {isDraft ? (
            <>
              <p className="rounded-md border border-ink-200 bg-ink-50 p-4 text-sm text-ink-700">
                <span className="font-semibold text-ink-900">Coming soon.</span>{" "}
                A full version of this piece is in draft. The summary below is
                a teaser; the published article will replace it.
              </p>
              <p>{insight.excerpt}</p>
            </>
          ) : (
            <p>{insight.excerpt}</p>
          )}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-ink-100 pt-8 text-sm">
          <Link
            href="/insights"
            className="text-ink-700 no-underline hover:underline"
          >
            ← All insights
          </Link>
          <Link
            href="/contact"
            className="text-ink-700 no-underline hover:underline"
          >
            Start a conversation →
          </Link>
        </div>
      </Section>
    </>
  );
}
