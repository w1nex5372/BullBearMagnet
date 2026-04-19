import { cn } from "@/lib/utils";

const badgeVariants = {
  default: "border-white/10 bg-white/[0.04] text-white/70",
  accent: "border-cyan-400/16 bg-cyan-400/10 text-cyan-100",
  subtle: "border-white/8 bg-white/[0.025] text-white/58",
};

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof badgeVariants;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em]",
        badgeVariants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
