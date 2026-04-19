import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  compact = false,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  compact?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        compact && "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-5 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-lg leading-8 text-white/64">{description}</p> : null}
    </div>
  );
}
