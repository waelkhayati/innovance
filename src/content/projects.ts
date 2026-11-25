import type { Locale } from "@/config/site";

type ProjectCopy = {
  industry: string; market: string; category: string; title: string;
  context: string; challenge: string; approach: string; delivered: string;
  value: string; future: string; alt: string;
};
type Project = {
  id: string;
  name: string;
  tone: "health" | "media";
  image?: { src: string; width: number; height: number };
  copy: Record<Locale, ProjectCopy>;
};

export const projects: Project[] = [
  {
    id: "urologe-khayati", name: "Urologe Khayati", tone: "health",
    copy: {
      en: {
        industry: "Healthcare", market: "Austria", category: "Healthcare digitalization",
        title: "Bringing a European medical practice into the digital landscape.",
        context: "A specialist urology practice based in Hausmannstätten, Austria.",
        challenge: "Give patients a clear and accessible way to find reliable information about the practice and its services.",
        approach: "Organized medical services and patient information around visitor needs and established a professional digital identity.",
        delivered: "A responsive platform with structured patient information, search engine optimization and structured data.",
        value: "Patients can more readily access practice information, and the practice can present its medical expertise through a professional digital presence.",
        future: "The platform provides a foundation for further practice digitalization.",
        alt: "Screenshot of the Urologe Khayati practice website",
      },
      fr: {
        industry: "Santé", market: "Autriche", category: "Numérisation des services de santé",
        title: "Accompagner un cabinet médical européen dans sa transition digitale.",
        context: "Un cabinet d’urologie situé à Hausmannstätten, en Autriche.",
        challenge: "Permettre aux patients de trouver facilement des informations fiables sur le cabinet et ses services.",
        approach: "Structurer les informations médicales et pratiques autour des besoins des patients et définir une identité digitale professionnelle.",
        delivered: "Une plateforme adaptée aux mobiles, avec des contenus structurés, des données structurées et un travail de référencement naturel.",
        value: "Les patients accèdent plus facilement aux informations du cabinet. Le cabinet dispose d’un espace professionnel pour présenter son expertise médicale.",
        future: "La plateforme pose les bases d’une numérisation plus large du cabinet.",
        alt: "Capture d’écran du site du cabinet Urologe Khayati",
      },
    },
  },
  {
    id: "biling-media", name: "Biling Media", tone: "media",
    copy: {
      en: {
        industry: "Media & entertainment", market: "Tunisia", category: "Digital business development",
        title: "Building the digital foundations of an independent media ecosystem.",
        context: "An emerging Tunisian media brand with an audience across social media and video channels.",
        challenge: "Create a digital destination the brand could develop independently of its existing distribution channels.",
        approach: "Identified expansion opportunities, organized the multimedia vision and designed a scalable platform architecture.",
        delivered: "An initial independent platform with editorial and multimedia content capabilities.",
        value: "The brand has a dedicated destination for its content and a foundation for future expansion.",
        future: "Audience engagement, community development, mobile expansion, sponsorship, new monetization channels and interactive entertainment.",
        alt: "Screenshot of the Biling Media platform",
      },
      fr: {
        industry: "Médias et divertissement", market: "Tunisie", category: "Développement d’activité digitale",
        title: "Poser les bases digitales d’un écosystème média indépendant.",
        context: "Une marque média tunisienne émergente, présente sur les réseaux sociaux et les plateformes vidéo.",
        challenge: "Créer un espace digitale que la marque puisse développer indépendamment de ses canaux de diffusion existants.",
        approach: "Identifier les pistes de croissance, structurer la vision multimédia et concevoir une architecture évolutive.",
        delivered: "Une première plateforme indépendante permettant de publier des contenus éditoriaux et multimédias.",
        value: "La marque dispose d’un espace dédié à ses contenus et d’une base pour développer son activité.",
        future: "Engagement du public, développement d’une communauté, expansion sur mobile, sponsoring, nouveaux revenus et divertissement interactif.",
        alt: "Capture d’écran de la plateforme Biling Media",
      },
    },
  },
];
