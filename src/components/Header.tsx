import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/photographie", label: "Photographie" },
  { to: "/creation-sites-web", label: "Web" },
  { to: "/a-propos", label: "À propos" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const showSolid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        showSolid
          ? "border-b border-border bg-background/85 text-foreground backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-black/55 via-black/25 to-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-display text-lg font-bold tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
          ann'art<span className={showSolid ? "text-accent" : "text-white"}>.</span>raw
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                showSolid
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/85 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
              }`}
              activeProps={{ className: showSolid ? "text-foreground font-semibold" : "text-white font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden rounded-full px-5 py-2 text-sm font-semibold transition-transform hover:scale-[1.03] md:inline-flex ${
            showSolid
              ? "bg-foreground text-background"
              : "bg-white text-black shadow-lg shadow-black/20"
          }`}
        >
          Me contacter
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${showSolid ? "text-foreground" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"}`}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground"
                activeProps={{ className: "text-accent font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}