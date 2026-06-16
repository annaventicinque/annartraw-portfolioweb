import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Camera, Code2, Heart, MessageCircle, Sparkles, Zap, UserCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroAsset from "@/assets/hero-equestrian.jpg.asset.json";
import { featuredGallery } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ann'art.raw — Photographie sportive & création de sites web" },
      {
        name: "description",
        content:
          "Votre image mérite mieux qu'un simple profil Instagram. Photographie sportive et sites web modernes pour clubs, athlètes, indépendants et entreprises.",
      },
      { property: "og:title", content: "ann'art.raw — Photographie sportive & sites web" },
      {
        property: "og:description",
        content:
          "Photographie sportive et création de sites web modernes pour celles et ceux qui veulent se démarquer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <CeQueJeFais />
      <FeaturedGallery />
      <PourquoiMoi />
      <FinalCta />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-end overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={heroAsset.url}
          alt="Photographie équestre — portrait élégant à cheval"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/55 to-foreground/20" />
      </motion.div>

      <motion.div style={{ opacity }} className="mx-auto w-full max-w-7xl px-5 pb-20 pt-32 text-background sm:px-8 sm:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur"
        >
          <Sparkles className="size-3.5 text-accent-bright" /> Photographie &amp; Web · Freelance
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl"
        >
          Votre image mérite mieux qu'un simple profil{" "}
          <span className="text-accent-bright">Instagram.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-2xl text-base text-background/75 sm:text-lg"
        >
          Photographie sportive et création de sites web modernes pour les
          indépendants, associations, clubs et entreprises qui veulent se démarquer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link
            to="/photographie"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Voir mes réalisations
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/5 px-6 py-3 text-sm font-semibold text-background backdrop-blur transition-colors hover:bg-background/15"
          >
            Me contacter
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function CeQueJeFais() {
  const blocks = [
    {
      emoji: "📸",
      title: "Photographie sportive",
      desc: "Capturer l'intensité, l'émotion et les moments forts du sport.",
      to: "/photographie",
      cta: "Découvrir la galerie",
    },
    {
      emoji: "💻",
      title: "Création de sites web",
      desc: "Créer une présence en ligne moderne, professionnelle et efficace.",
      to: "/creation-sites-web",
      cta: "Voir les projets",
    },
  ] as const;

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Ce que je fais</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-5xl">
          Deux savoir-faire, une seule obsession : votre image.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={i}>
            <Link
              to={b.to}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-2xl sm:p-10"
            >
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <span className="text-4xl">{b.emoji}</span>
                <h3 className="mt-6 text-2xl font-bold sm:text-3xl">{b.title}</h3>
                <p className="mt-3 max-w-md text-muted-foreground">{b.desc}</p>
              </div>
              <span className="relative mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                {b.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PourquoiMoi() {
  const items = [
    { icon: UserCheck, title: "Approche personnalisée", desc: "Chaque projet est unique, jamais de modèle générique." },
    { icon: Sparkles, title: "Design moderne", desc: "Une esthétique actuelle, premium et mémorable." },
    { icon: MessageCircle, title: "Communication simple", desc: "Des échanges clairs, sans jargon technique." },
    { icon: Zap, title: "Réactivité", desc: "Des réponses rapides et un suivi sérieux." },
    { icon: Camera, title: "Passion pour l'image", desc: "Un vrai regard, au service de votre histoire." },
    { icon: Heart, title: "Accompagnement humain", desc: "Un partenaire à vos côtés, du début à la fin." },
  ];

  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Pourquoi travailler avec moi ?</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-5xl">
            Plus qu'un prestataire, un véritable partenaire de votre image.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i % 3} className="bg-background">
              <div className="h-full p-8">
                <it.icon className="size-7 text-accent" />
                <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function FeaturedGallery() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">Sélection</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-5xl">
                Quelques instants figés à l'instant juste.
              </h2>
            </div>
            <Link
              to="/photographie"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-bright"
            >
              Voir toute la galerie
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-[14rem] grid-cols-2 gap-4 sm:auto-rows-[18rem] lg:grid-cols-4">
          {featuredGallery.map((g, i) => (
            <Reveal
              key={`${g.title}-${i}`}
              delay={i % 4}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <Link
                to="/photographie"
                className="group relative block h-full w-full overflow-hidden rounded-2xl bg-background/10"
              >
                <img
                  src={g.src}
                  alt={`${g.title} — ${g.category}`}
                  width={g.w}
                  height={g.h}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-5 text-left">
                    <span className="text-xs uppercase tracking-widest text-accent-bright">{g.category}</span>
                    <p className="text-lg font-semibold">{g.title}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-8 py-16 text-background sm:px-16 sm:py-24">
          <div className="absolute -right-20 -top-20 size-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-5xl">
              Prêt·e à donner une vraie image à votre projet ?
            </h2>
            <p className="mt-4 text-background/70">
              Parlons de votre sport, votre marque ou votre activité. Je vous réponds
              rapidement et personnellement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Me contacter <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/photographie"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
              >
                Voir mes réalisations
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
