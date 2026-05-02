import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  bordered = false,
}: {
  className?: string;
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        bordered && "border-t border-ink-100",
        className,
      )}
    >
      <div className="container-prose">{children}</div>
    </section>
  );
}
