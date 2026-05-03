import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
  HowToJsonLd,
} from "@/components/JsonLd";
import { TableOfContents } from "@/components/article/TableOfContents";
import {
  findArticle,
  findInsight,
  insights,
  relatedInsights,
} from "@/lib/insights";

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
    keywords: insight.keywords ? [...insight.keywords] : undefined,
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

export default function InsightPage({ params }: { params: Params }) {
  const article = findArticle(params.slug);
  if (!article) notFound();

  const insight = article.meta;
  const isDraft = insight.status === "draft";
  const slug = `/insights/${insight.slug}`;
  const date = new Date(insight.publishedAt);
  const Body = article.Body;
  const related = relatedInsights(insight.slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights" },
          { name: insight.title, url: slug },
        ]}
      />
      {!isDraft && (
        <ArticleJsonLd
          headline={insight.title}
          description={insight.description}
          slug={slug}
          datePublished={insight.publishedAt}
          dateModified={insight.updatedAt}
          keywords={insight.keywords}
          articleSection={insight.topic}
          speakable={{
            cssSelector: ["#article-summary", "#faq"],
          }}
        />
      )}
      {!isDraft && article.faqs && article.faqs.length > 0 && (
        <FaqJsonLd
          items={[...article.faqs]}
          speakable={{ cssSelector: ["#faq"] }}
        />
      )}
      {!isDraft && article.howTo && (
        <HowToJsonLd
          name={article.howTo.name}
          description={article.howTo.description}
          steps={article.howTo.steps}
          totalTime={article.howTo.totalTime}
        />
      )}

      <Section className="pt-20">
        <p className="eyebrow">
          Insights · {insight.topic}
          {isDraft ? <span> · Coming soon</span> : null}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">{insight.title}</h1>
        <p
          id="article-summary"
          className="mt-6 max-w-3xl text-lg text-ink-700"
        >
          {insight.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-500">
          <time dateTime={insight.publishedAt}>
            {DATE_FORMATTER.format(date)}
          </time>
          {insight.readingMinutes ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{insight.readingMinutes} min read</span>
            </>
          ) : null}
          <span aria-hidden="true">·</span>
          <span>By Hitmaker Engineering</span>
        </div>
      </Section>

      <Section bordered>
        {isDraft ? (
          <div className="max-w-prose">
            <p className="rounded-md border border-ink-200 bg-ink-50 p-4 text-sm text-ink-700">
              <span className="font-semibold text-ink-900">Coming soon.</span>{" "}
              A full version of this piece is in draft. The summary below is a
              teaser; the published article will replace it.
            </p>
            <p className="mt-5 text-ink-700">{insight.excerpt}</p>
          </div>
        ) : (
          <div>
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <TableOfContents entries={article.tableOfContents} />
            )}
            <Body />
            {article.faqs && article.faqs.length > 0 && (
              <FaqSection faqs={[...article.faqs]} />
            )}
          </div>
        )}
      </Section>

      {!isDraft && related.length > 0 ? (
        <Section bordered>
          <p className="eyebrow">Related insights</p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/insights/${r.slug}`}
                  className="text-ink-900 no-underline hover:underline"
                >
                  {r.title} →
                </Link>
                <p className="mt-1 text-sm text-ink-600">{r.description}</p>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section bordered>
        <div className="flex flex-wrap gap-4 text-sm">
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
            Start a product development conversation →
          </Link>
        </div>
      </Section>
    </>
  );
}

function FaqSection({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section id="faq" className="mt-16 max-w-prose">
      <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight text-ink-900">
        Frequently asked questions
      </h2>
      <dl className="mt-6 space-y-6">
        {faqs.map((item) => (
          <div key={item.question}>
            <dt className="text-base font-semibold text-ink-900">
              {item.question}
            </dt>
            <dd className="mt-2 leading-relaxed text-ink-700">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
