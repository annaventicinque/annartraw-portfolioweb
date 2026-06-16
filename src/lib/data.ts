import football from "@/assets/football.jpg";
import basketball from "@/assets/basketball.jpg";
import volleyball from "@/assets/volleyball.jpg";
import basket01Asset from "@/assets/basket-01.jpg.asset.json";
import basket02Asset from "@/assets/basket-02.jpg.asset.json";
import basket03Asset from "@/assets/basket-03.jpg.asset.json";
import basket04Asset from "@/assets/basket-04.jpg.asset.json";
import volley01Asset from "@/assets/volley-01.jpg.asset.json";
import volley02Asset from "@/assets/volley-02.jpg.asset.json";
import volley03Asset from "@/assets/volley-03.jpg.asset.json";
import volley04Asset from "@/assets/volley-04.jpg.asset.json";
import foot01Asset from "@/assets/foot-01.jpg.asset.json";
import foot02Asset from "@/assets/foot-02.jpg.asset.json";
import foot03Asset from "@/assets/foot-03.jpg.asset.json";
import foot04Asset from "@/assets/foot-04.jpg.asset.json";
import foot05Asset from "@/assets/foot-05.jpg.asset.json";
import equitation01Asset from "@/assets/equitation-01.jpg.asset.json";
import equitation02Asset from "@/assets/equitation-02.jpg.asset.json";
import equitation03Asset from "@/assets/equitation-03.jpg.asset.json";

const basket01 = basket01Asset.url;
const basket02 = basket02Asset.url;
const basket03 = basket03Asset.url;
const basket04 = basket04Asset.url;
const volley01 = volley01Asset.url;
const volley02 = volley02Asset.url;
const volley03 = volley03Asset.url;
const volley04 = volley04Asset.url;
const foot01 = foot01Asset.url;
const foot02 = foot02Asset.url;
const foot03 = foot03Asset.url;
const foot04 = foot04Asset.url;
const foot05 = foot05Asset.url;
const equitation01 = equitation01Asset.url;
const equitation02 = equitation02Asset.url;
const equitation03 = equitation03Asset.url;

// =====================================================================
// EMPLACEMENTS PHOTOS — 16 slots prêts pour vos propres images.
// Pour utiliser vos photos : remplacez chaque "src" ci-dessous par
// l'import de votre fichier (ex: import g01 from "@/assets/gallery-01.jpg").
// En attendant, les images de démonstration servent de repères visuels.
// =====================================================================

export type GalleryItem = {
  src: string;
  category: string;
  title: string;
  w: number;
  h: number;
  featured?: boolean;
};

export const galleryCategories = [
  "Tous",
  "Football",
  "Basketball",
  "Volleyball",
  "Équitation",
] as const;

// Dimensions par défaut : "p" = portrait (vertical), "c" = carré
const P = { w: 1024, h: 1280 };
const C = { w: 1024, h: 1024 };

export const gallery: GalleryItem[] = [
  // slot 01
  { src: foot01, category: "Football", title: "Frappe décisive", ...P, featured: true },
  // slot 02
  { src: basket01, category: "Basketball", title: "Protection du ballon", ...C, featured: true },
  // slot 03
  { src: volley01, category: "Volleyball", title: "Au filet", ...P, featured: true },
  // slot 04
  { src: equitation01, category: "Équitation", title: "Saut d'obstacle", ...C, featured: true },
  // slot 05
  { src: foot02, category: "Football", title: "Sprint final", ...P },
  // slot 06
  { src: basket02, category: "Basketball", title: "Suspension", ...C },
  // slot 07
  { src: foot03, category: "Football", title: "Sous les projecteurs", ...P },
  // slot 08
  { src: equitation02, category: "Équitation", title: "Complicité", ...C },
  // slot 09
  { src: basket03, category: "Basketball", title: "L'effort", ...P },
  // slot 10
  { src: volley02, category: "Volleyball", title: "Réception", ...P },
  // slot 11
  { src: foot04, category: "Football", title: "Duel aérien", ...C },
  // slot 12
  { src: basket04, category: "Basketball", title: "Pénétration", ...P },
  // slot 13
  { src: volley03, category: "Volleyball", title: "Contre gagnant", ...C },
  // slot 14
  { src: equitation03, category: "Équitation", title: "Galop", ...P },
  // slot 15
  { src: volley04, category: "Volleyball", title: "Concentration", ...C },
  // slot 16
  { src: foot05, category: "Football", title: "Célébration", ...P },
];

export const featuredGallery = gallery.filter((g) => g.featured);

export const testimonials = [
  {
    name: "Camille R.",
    role: "Présidente, club de volley",
    type: "Photographie",
    quote:
      "Les photos de nos matchs sont devenues notre meilleur outil de communication. L'énergie est incroyable, on revit chaque action.",
  },
  {
    name: "Léa M.",
    role: "Esthéticienne indépendante",
    type: "Site web",
    quote:
      "Mon nouveau site m'a fait gagner en crédibilité. Mes clientes me trouvent enfin sur Google et réservent directement en ligne.",
  },
  {
    name: "Thomas D.",
    role: "Athlète, sprint",
    type: "Photographie",
    quote:
      "Un regard unique sur le sport. Les images sortent du lot et m'ont aidé à attirer mes premiers partenaires.",
  },
  {
    name: "Sarah B.",
    role: "Gérante, salon de beauté",
    type: "Site web",
    quote:
      "Communication simple, design moderne et un accompagnement humain du début à la fin. Je recommande les yeux fermés.",
  },
  {
    name: "Karim Z.",
    role: "Coach, club de football",
    type: "Photographie",
    quote:
      "Réactivité parfaite et un vrai œil de photographe. Les familles et sponsors adorent les galeries après chaque match.",
  },
  {
    name: "Julie P.",
    role: "Thérapeute indépendante",
    type: "Site web",
    quote:
      "Un site clair qui inspire confiance. J'ai doublé mes demandes de rendez-vous en quelques semaines.",
  },
];

export const webProjects = [
  {
    img: "beauty",
    tag: "Institut de beauté",
    title: "Une vitrine qui inspire confiance",
    outcome: "Présenter ses services & générer des réservations",
    points: ["Inspirer confiance", "Présenter ses services", "Générer des contacts"],
  },
  {
    img: "business",
    tag: "Commerce local",
    title: "Être visible là où ça compte",
    outcome: "Être trouvé sur Google & développer son activité",
    points: ["Être trouvé sur Google", "Développer son activité", "Générer des contacts"],
  },
];