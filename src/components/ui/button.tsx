import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  icon: Icon,
  iconPosition = "right",
  fullWidth = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-0",
    fullWidth && "w-full",
    size === "sm" && "px-4 py-2 text-sm font-medium",
    size === "default" && "px-6 py-3.5 text-sm font-semibold",
    size === "lg" && "px-7 py-4 text-base font-semibold",
    variant === "primary" &&
      "bg-white text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:bg-cyan-50",
    variant === "secondary" &&
      "border border-white/12 bg-white/[0.04] text-white/84 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-white/[0.08]",
    variant === "ghost" &&
      "border border-white/10 bg-transparent text-white/74 hover:border-white/16 hover:bg-white/[0.05] hover:text-white",
    className,
  );

  const content = (
    <>
      {Icon && iconPosition === "left" ? <Icon className="h-4 w-4" /> : null}
      {children}
      {Icon && iconPosition === "right" ? <Icon className="h-4 w-4" /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}
