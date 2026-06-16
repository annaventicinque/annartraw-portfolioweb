import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import portraitAsset from "@/assets/portrait.jpg.asset.json";


export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — ann'art.raw" },
      {
        name: "description",
        content:
          "ann'art.raw, freelance créative basée à Valenciennes (Nord 59). Photographie sportive et création de sites web en région Hauts-de-France.",
      },
      { property: "og:title", content: "À propos — ann'art.raw" },
      {
        property: "og:description",
        content: "Une créative passionnée par l'image, le sport et le design moderne. Basée à Valenciennes, Nord 59.",
      },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "ann'art.raw",
        description: "Photographie sportive et création de sites web. Freelance basée à Valenciennes, Nord 59.",
        url: "https://annart-portfolio.lovable.app",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valenciennes",
          addressRegion: "Hauts-de-France",
          postalCode: "59300",
          addressCountry: "FR",
        },
        areaServed: {
          "@type": "City",
          name: "Valenciennes",
        },
      }),
    }],
  }),
  component: APropos,
});

const values = [
  { k: "Authenticité", v: "Pas de filtres inutiles. Une image qui vous ressemble vraiment." },
  { k: "Créativité", v: "Un regard qui cherche l'angle, la lumière et le moment justes." },
  { k: "Passion", v: "Le sport et le design ne sont pas un métier, c'est une vocation." },
  { k: "Proximité", v: "Un accompagnement humain, simple et à votre écoute." },
];

function APropos() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">À propos</p>
            <h1 className="mt-3 text-balance text-4xl font-bold sm:text-6xl">
              Aider chacun à se démarquer, par l'image.
            </h1>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
              Je suis <span className="text-foreground">Anna Venticinque</span>, aussi appelée&nbsp;<span className="font-bold text-accent">ann'art.raw</span>, freelance
                créative animée par une conviction simple : tout le monde mérite une image à la
                hauteur de ce qu'il vit, de ce qu'il crée et de ce qu'il propose.
              </p>
              <p>
                Basée à Valenciennes, dans le Nord (59), je travaille partout en France et en région
                Hauts-de-France, de Lille à Douai en passant par la Belgique voisine. Que vous soyez
                un club sportif local, un indépendant ou une entreprise, je me déplace pour vous
                accompagner au plus près.
              </p>
              <p>
                Du bord d'un terrain à l'écran d'un ordinateur, je passe de l'objectif au design avec
                la même énergie. La photographie sportive, c'est ma passion brute : capturer l'effort,
                l'émotion et ces dixièmes de seconde qui font basculer un match.
              </p>
              <p>
                La création de sites web, c'est le prolongement naturel de ce regard : donner aux
                indépendants, clubs et entreprises une présence en ligne aussi forte que leur talent.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              Travaillons ensemble <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={1} className="flex">
            <div className="relative mx-auto h-[24rem] max-w-[18rem] overflow-hidden rounded-2xl border-4 border-border bg-card p-2 shadow-xl">
              <img
                src={portraitAsset.url}
                alt="Anna Venticinque — ann'art.raw"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, i) => (
            <Reveal key={val.k} delay={i % 4}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <p className="font-display text-xl font-bold text-accent">{val.k}</p>
                <p className="mt-3 text-sm text-muted-foreground">{val.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
