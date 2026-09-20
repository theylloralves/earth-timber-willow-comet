import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/games" as const, label: "Catalog" },
  { to: "/picks" as const, label: "Picks" },
  { to: "/compare" as const, label: "Compare" },
  { to: "/math" as const, label: "Math" },
  { to: "/shelf" as const, label: "Shelf" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <Link to="/" className="font-display text-xl tracking-tight">
            Receipt
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-[var(--radius-sm)] px-3 py-2 text-sm text-muted transition-colors duration-[var(--motion-quick)] hover:text-fg",
                  pathname === item.to && "text-fg",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden px-2"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
        {open ? (
          <nav className="border-t border-line px-4 py-3 md:hidden">
            <div className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-[var(--radius-sm)] px-2 py-3 text-base text-muted",
                    pathname === item.to && "text-fg",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:px-6">
          <p className="font-display text-base text-fg">No faces. No hype. Just the math.</p>
          <p>
            Street prices are typical US numbers, not a live store. Hours are typical
            playthroughs. Buy links go to public search results.
          </p>
        </div>
      </footer>
    </div>
  );
}
