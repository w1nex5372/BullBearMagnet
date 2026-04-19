import { cn } from "@/lib/utils";

const sizeClasses = {
  default: "max-w-7xl",
  wide: "max-w-[90rem]",
  narrow: "max-w-5xl",
};

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof sizeClasses;
}) {
  return <div className={cn("mx-auto w-full px-6 sm:px-8 lg:px-10", sizeClasses[size], className)}>{children}</div>;
}
