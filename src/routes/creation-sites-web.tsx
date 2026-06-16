import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Search, ShieldCheck, LayoutGrid, Send, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import webBeautyAsset from "@/assets/web-beauty.png.asset.json";
import webBusinessAsset from "@/assets/web-business.png.asset.json";
const webBeauty = webBeautyAsset.url;
const webBusiness = webBusinessAsset.url;

export const Route = createFileRoute("/creation-sites-web")({
  head: () => ({
    meta: [
      { title: "Création de sites web — ann'art.raw" },
      {
        name: "description",
        content:
          "Des sites web modernes pensés comme des solutions : être trouvé sur Google, inspirer confiance, présenter ses services et générer des contacts.",
      },
      { property: "og:title", content: "Création de sites web — ann'art.raw" },
      {
        property: "og:description",
        content: "Des sites pensés comme des solutions, pas comme des produits.",
      },
    ],
  }),
  component: WebPage,
});

const outcomes = [
  { icon: Search, title: "Être trouvé sur Google", desc: "Une base technique saine et un contenu pensé pour le référencement local." },
  { icon: ShieldCheck, title: "Inspirer confiance", desc: "Un design soigné qui rassure dès la première seconde." },
  { icon: LayoutGrid, title: "Présenter ses services", desc: "Une mise en avant claire de ce que vous proposez." },
  { icon: Send, title: "Générer des contacts", desc: "Des appels à l'action et formulaires qui convertissent." },
  { icon: TrendingUp, title: "Développer son activité", desc: "Un outil qui travaille pour vous, 24h/24." },
];

const cases = [
  {
    img: webBeauty,
    tag: "Institut de beauté",
    title: "Une vitrine élégante qui transforme les visiteurs en clientes",
    desc: "Pour les professionnelles de la beauté, un site qui reflète le soin et le raffinement de leurs prestations.",
    points: ["Inspirer confiance", "Présenter ses services", "Générer des contacts"],
  },
  {
    img: webBusiness,
    tag: "Commerce & entreprise locale",
    title: "Être visible et crédible là où ça compte vraiment",
    desc: "Pour les commerces et indépendants, une présence en ligne qui attire et fidélise une clientèle de proximité.",
    points: ["Être trouvé sur Google", "Développer son activité", "Générer des contacts"],
  },
];

const segments = ["Professionnels de la beauté", "Freelances & indépendants", "Commerces locaux", "Portfolios créatifs"];

function WebPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Création de sites web</p>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-bold sm:text-6xl">
            Un site web n'est pas un produit. C'est une solution.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Je conçois des sites modernes qui répondent à un vrai objectif : faire grandir
            votre activité, gagner en visibilité et inspirer confiance.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {segments.map((s) => (
            <span key={s} className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i % 3}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <o.icon className="size-7 text-accent" />
                <h2 className="mt-5 text-lg font-semibold">{o.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-5 py-14 sm:px-8">
        {cases.map((c, i) => (
          <Reveal key={c.title}>
            <article className={`grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2 ${i % 2 ? "lg:[&>figure]:order-2" : ""}`}>
              <figure className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="p-8 sm:p-10">
                <span className="text-xs font-medium uppercase tracking-widest text-accent">{c.tag}</span>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{c.title}</h2>
                <p className="mt-3 text-muted-foreground">{c.desc}</p>
                <ul className="mt-6 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-accent" /> {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://demo-annartraw.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline underline-offset-4 transition-colors hover:text-accent/80"
                >
                  Voir un exemple en ligne <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-foreground p-8 text-background sm:flex-row sm:items-center sm:p-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Un projet de site web en tête ?</h2>
              <p className="mt-2 text-background/70">Discutons de vos objectifs et construisons la solution idéale.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Demander un site web <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
