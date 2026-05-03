import { cn } from "@/lib/cn";

// Article-body typography wrapper. Tailwind doesn't ship the typography plugin
// here, so we hand-roll the prose styles in line with the rest of the site —
// generous spacing, calm hierarchy, no decoration.
export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose-article max-w-prose text-ink-700",
        // Base body
        "[&_p]:mt-5 [&_p]:leading-relaxed",
        // Headings
        "[&_h2]:mt-12 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink-900",
        "[&_h3]:mt-8 [&_h3]:scroll-mt-24 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-ink-900",
        "[&_h4]:mt-6 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:tracking-tight [&_h4]:text-ink-900",
        // Lists
        "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
        "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
        "[&_li]:leading-relaxed",
        "[&_li_p]:mt-2",
        // Inline emphasis
        "[&_strong]:font-semibold [&_strong]:text-ink-900",
        "[&_em]:italic",
        // Links
        "[&_a]:text-ink-900 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-accent-ink",
        // Code
        "[&_code]:rounded [&_code]:bg-ink-50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_code]:text-ink-800",
        "[&_pre]:mt-5 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-ink-100 [&_pre]:bg-ink-50 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-relaxed",
        "[&_pre_code]:bg-transparent [&_pre_code]:p-0",
        // Tables
        "[&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm",
        "[&_th]:border-b [&_th]:border-ink-200 [&_th]:py-2 [&_th]:pr-4 [&_th]:text-left [&_th]:font-semibold [&_th]:text-ink-900",
        "[&_td]:border-b [&_td]:border-ink-100 [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top",
        // Block quotes
        "[&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-ink-300 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-ink-700",
        // Horizontal rule
        "[&_hr]:my-10 [&_hr]:border-ink-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
