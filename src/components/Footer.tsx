import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-bold">
              ann'art<span className="text-accent-bright">.</span>raw
            </p>
            <p className="mt-4 max-w-sm text-sm text-background/60">
              Photographie sportive & création de sites web modernes pour celles et
              ceux qui veulent se démarquer.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-background/40">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/" className="hover:text-accent-bright">Accueil</Link></li>
              <li><Link to="/photographie" className="hover:text-accent-bright">Photographie</Link></li>
              <li><Link to="/creation-sites-web" className="hover:text-accent-bright">Création de sites web</Link></li>
              <li><Link to="/a-propos" className="hover:text-accent-bright">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-accent-bright">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-background/40">
              Localisation
            </p>
            <p className="text-sm text-background/70">Valenciennes, Nord (59)</p>
            <p className="text-sm text-background/70">Hauts-de-France, France</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-background/40">
              Contact
            </p>
            <a
              href="mailto:annavtcq.contact@gmail.com"
              className="flex items-center gap-2 text-sm text-background/70 hover:text-accent-bright"
            >
              <Mail className="size-4" /> annavtcq.contact@gmail.com
            </a>
            <a
              href="https://www.instagram.com/annart.raw"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-background/70 hover:text-accent-bright"
            >
              <Instagram className="size-4" /> @annart.raw
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61581406613517"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-background/70 hover:text-accent-bright"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@annart.raw?lang=fr"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-background/70 hover:text-accent-bright"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.08 1.04-1.25 1.77-.04.23-.07.46-.06.7.06 1.17 1.06 2.23 2.24 2.37.92.1 1.86-.24 2.49-.89.55-.57.82-1.35.85-2.13.03-2.49.01-4.97.01-7.46-.01-1.49.01-2.98.02-4.47z"/></svg>
              TikTok
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-background/10 pt-6 text-xs text-background/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} ann'art.raw — Tous droits réservés.</span>
          <span>Conçu avec passion pour l'image.</span>
        </div>
      </div>
    </footer>
  );
}