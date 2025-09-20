'use client'

import type { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Home, Search, Bell, CircleUserRound } from "lucide-react";
import Link from "next/link";

type Item = {
  href: string;
  label: string;
  Icon: LucideIcon;
  badge?: number;
};

const items: Item[] = [
  { href: "/home", label: "Início", Icon: Home },
  { href: "/search", label: "Buscar", Icon: Search },
  { href: "/notifications", label: "Avisos", Icon: Bell },
  { href: "/profile", label: "Perfil", Icon: CircleUserRound, badge: 3 },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      role="navigation"
      aria-label="Navegação principal"
      className="fixed bottom-0 z-50 bg-blue-600 md:hidden min-w-full"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {items.map(({ href, label, Icon, badge }) => {
          const active = pathname === href || pathname.startsWith(href + "/");

          return (
            <li key={href} className="flex">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative flex h-14 w-full flex-col items-center justify-center gap-1 text-[11px]",
                  active ? "text-white" : "text-white/50",
                ].join(" ")}
              >
                <Icon className="h-6 w-6" aria-hidden />
                <span className="leading-none">{label}</span>

                {badge && badge > 0 && (
                  <>
                    <span className="absolute top-1 right-[22%] inline-flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                    </span>
                    <span className="absolute top-1 right-[22%] inline-flex min-w-[18px] items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-semibold text-white leading-4 ring-2 ring-background">
                      {badge}
                    </span>
                  </>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
