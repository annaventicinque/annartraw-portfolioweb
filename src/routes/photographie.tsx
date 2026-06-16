import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { gallery, galleryCategories } from "@/lib/data";

export const Route = createFileRoute("/photographie")({
  head: () => ({
    meta: [
      { title: "Photographie sportive — ann'art.raw" },
      {
        name: "description",
        content:
          "Galerie de photographie sportive : football, basketball, volleyball, équitation et plus. Intensité, émotion et moments forts capturés.",
      },
      { property: "og:title", content: "Photographie sportive — ann'art.raw" },
      {
        property: "og:description",
        content: "Une galerie immersive dédiée à l'intensité et l'émotion du sport.",
      },
    ],
  }),
  component: Photographie,
});

function Photographie() {
  const [cat, setCat] = useState<string>("Tous");
  const [active, setActive] = useState<number | null>(null);

  const items = gallery
    .map((g, i) => ({ ...g, i }))
    .filter((g) => cat === "Tous" || g.category === cat);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Photographie sportive</p>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-bold sm:text-6xl">
            L'intensité du sport, figée à l'instant juste.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Football, basketball, volleyball, équitation et bien d'autres : chaque image
            raconte l'effort, l'émotion et la passion.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                cat === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          <AnimatePresence>
            {items.map((g) => (
              <motion.button
                layout
                key={`${g.category}-${g.i}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActive(g.i)}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={g.src}
                  alt={`${g.title} — ${g.category}`}
                  width={g.w}
                  height={g.h}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-5 text-left text-background">
                    <span className="text-xs uppercase tracking-widest text-accent">{g.category}</span>
                    <p className="text-lg font-semibold">{g.title}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-secondary/60 p-8 sm:flex-row sm:items-center sm:p-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Un événement à immortaliser ?</h2>
              <p className="mt-2 text-muted-foreground">Réservez un shooting et offrez à votre sport des images à la hauteur.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Réserver un shooting <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur"
          >
            <button
              aria-label="Fermer"
              className="absolute right-5 top-5 text-background"
              onClick={() => setActive(null)}
            >
              <X className="size-7" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={gallery[active].src}
              alt={gallery[active].title}
              className="max-h-[88vh] w-auto rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
