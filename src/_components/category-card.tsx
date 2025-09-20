import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/_lib/utils";
import Link from "next/link";

type Variant = "red" | "blue" | "green" | "yellow" | "purple" | "pink";

const tone: Record<Variant, string> = {
  red: "bg-gradient-to-r from-red-500 via-rose-600 to-pink-700",
  blue: "bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-700",
  green: "bg-gradient-to-r from-green-500 to-emerald-700",
  yellow: "bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500",
  purple: "bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-600",
  pink: "bg-gradient-to-r from-pink-400 to-fuchsia-700",
};

export type CategoryCardProps = {
  title: string;
  href: string
  Icon: LucideIcon;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
  "aria-label"?: string;
};

export default function CategoryCard({
  title,
  href,
  Icon,
  variant = "blue",
  className,
  disabled,
  ...props
}: CategoryCardProps) {
  const card = (
    <Card
      role="link"
      aria-disabled={disabled || undefined}
      className={cn(
        "group h-28 w-full select-none rounded-3xl transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        disabled && "pointer-events-none opacity-60",
        tone[variant],
        className
      )}
      {...props}
    >
      <CardContent className="flex flex-col h-full items-center justify-center gap-2 text-white">
        <Icon className="h-8 w-8" aria-hidden />
        <span className="text-md font-medium">{title}</span>
      </CardContent>
    </Card>
  );

  return disabled ? (
    <div>{card}</div>
  ) : (
    <Link href={href} aria-label={props["aria-label"] ?? title}>
      {card}
    </Link>
  );
}
