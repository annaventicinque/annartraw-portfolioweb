import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Camera, Code2, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { sendForm } from "@/lib/sendForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ann'art.raw" },
      {
        name: "description",
        content:
          "Photographe sportive & créatrice de sites web à Valenciennes (Nord 59). Réservez un shooting ou demandez votre site web. Réponse rapide et personnalisée.",
      },
      { property: "og:title", content: "Contact — ann'art.raw" },
      {
        property: "og:description",
        content: "Réservez un shooting ou demandez votre site web. Basée à Valenciennes, Nord 59.",
      },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "ann'art.raw",
        description: "Photographie sportive et création de sites web à Valenciennes, Nord 59.",
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
  component: Contact,
});

type Status = "idle" | "loading" | "success" | "error";

function Contact() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-32 sm:px-8 sm:pt-40">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold sm:text-6xl">
            Parlons de votre projet.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Choisissez le formulaire adapté à votre besoin. Je vous réponds personnellement
            dans les plus brefs délais.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-28 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <ShootingForm />
        </Reveal>
        <Reveal delay={1}>
          <WebForm />
        </Reveal>
      </section>
    </>
  );
}

function FormShell({
  icon,
  title,
  status,
  onSubmit,
  children,
}: {
  icon: ReactNode;
  title: string;
  status: Status;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 sm:p-9">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent">
          {icon}
        </span>
        <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
      </div>

      {status === "success" ? (
        <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
          <CheckCircle2 className="size-14 text-accent" />
          <p className="mt-5 text-lg font-semibold">Demande envoyée !</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Votre demande a bien été envoyée. Je vous répondrai dès que possible.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-1 flex-col gap-4">
          {children}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle className="size-4" /> Une erreur est survenue. Réessayez ou écrivez à annavtcq.contact@gmail.com.
            </p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {status === "loading" ? <Loader2 className="size-4 animate-spin" /> : null}
            {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
  textarea = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const base =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-foreground/80">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} placeholder={placeholder} className={base} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}

function useFormSubmit(subject: string) {
  const [status, setStatus] = useState<Status>("idle");
  const handle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((v, k) => (data[k] = String(v)));
    try {
      await sendForm(subject, data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  return { status, handle };
}

function ShootingForm() {
  const { status, handle } = useFormSubmit("Nouvelle demande de shooting photo — ann'art.raw");
  return (
    <FormShell icon={<Camera className="size-5" />} title="📸 Réserver un shooting photo" status={status} onSubmit={handle}>
      <Field label="Nom complet" name="Nom complet" />
      <Field label="Adresse e-mail" name="Email" type="email" />
      <Field label="Téléphone" name="Téléphone" type="tel" />
      <Field label="Sport concerné" name="Sport concerné" placeholder="Football, basketball…" />
      <Field label="Date de l'événement" name="Date de l'événement" type="date" />
      <Field label="Lieu" name="Lieu" />
      <Field label="Message" name="Message" textarea placeholder="Décrivez votre événement…" />
    </FormShell>
  );
}

function WebForm() {
  const { status, handle } = useFormSubmit("Nouvelle demande de site web — ann'art.raw");
  return (
    <FormShell icon={<Code2 className="size-5" />} title="💻 Demander un site web" status={status} onSubmit={handle}>
      <Field label="Nom complet" name="Nom complet" />
      <Field label="Nom de l'entreprise" name="Nom de l'entreprise" required={false} />
      <Field label="Adresse e-mail" name="Email" type="email" />
      <Field label="Téléphone" name="Téléphone" type="tel" />
      <Field label="Activité" name="Activité" placeholder="Esthétique, commerce, sport…" />
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-foreground/80">
          Possédez-vous déjà un site web ? <span className="text-accent">*</span>
        </span>
        <select
          name="Site web existant"
          required
          defaultValue=""
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        >
          <option value="" disabled>Choisir…</option>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </select>
      </label>
      <Field label="Décrivez votre projet" name="Description du projet" textarea placeholder="Vos objectifs, votre style…" />
      <Field label="Message" name="Message" textarea required={false} placeholder="Une précision à ajouter ?" />
    </FormShell>
  );
}
