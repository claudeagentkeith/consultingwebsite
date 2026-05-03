import { cn } from "@/lib/cn";

type CalloutKind = "note" | "pitfall" | "regulatory";

const STYLES: Record<CalloutKind, { ring: string; tag: string; label: string }> = {
  note: {
    ring: "border-ink-200 bg-ink-50",
    tag: "text-ink-700",
    label: "Practitioner note",
  },
  pitfall: {
    ring: "border-amber-200 bg-amber-50",
    tag: "text-amber-800",
    label: "Common pitfall",
  },
  regulatory: {
    ring: "border-accent/30 bg-accent/5",
    tag: "text-accent-ink",
    label: "Regulatory anchor",
  },
};

export function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: CalloutKind;
  title?: string;
  children: React.ReactNode;
}) {
  const style = STYLES[kind];
  return (
    <aside
      className={cn(
        "my-8 rounded-xl border p-5",
        style.ring,
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.16em]",
          style.tag,
        )}
      >
        {title ?? style.label}
      </p>
      <div className="mt-2 text-ink-800 [&_p]:mt-2 first:[&_p]:mt-0 [&_p]:leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
