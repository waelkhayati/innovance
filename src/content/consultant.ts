import type { Locale } from "@/config/site";

type Translation = Record<Locale, string>;

export const profile = {
  en: {
    heading: "The Person Behind Innovance",
    role: "Digital Business Consultant",
    tagline: "Business. Technology. Execution.",
    intro: "I help businesses turn strategy into digital solutions they can put to work. My background spans enterprise consulting, software engineering, product management and business analytics. You work directly with me from defining the problem through implementation.",
    expertise: "Core expertise",
    experience: "Professional experience",
    experienceIntro: "Selected experience from my professional roles.",
    education: "Academic background",
    certifications: "Professional certifications",
    verify: "Verify credential",
    international: "International experience",
  },
  fr: {
    heading: "La personne derrière Innovance",
    role: "Consultant en stratégie et transformation numérique",
    tagline: "Stratégie. Technologie. Mise en œuvre.",
    intro: "J’aide les entreprises à traduire leur stratégie en solutions numériques qu’elles peuvent réellement utiliser. Mon parcours associe conseil auprès des entreprises, ingénierie logicielle, gestion de produit et analyse de données métier. Vous travaillez directement avec moi, de la définition du besoin à la mise en œuvre.",
    expertise: "Domaines d’expertise",
    experience: "Expérience professionnelle",
    experienceIntro: "Quelques missions issues de mon parcours professionnel.",
    education: "Parcours académique",
    certifications: "Certifications professionnelles",
    verify: "Vérifier la certification",
    international: "Expérience internationale",
  },
};

export const expertise = [
  { id: "consulting", en: "Business and Functional Consulting", fr: "Conseil métier et fonctionnel" },
  { id: "implementation", en: "Enterprise Implementation Consulting", fr: "Conseil en déploiement de logiciels d’entreprise" },
  { id: "transformation", en: "Digital Transformation", fr: "Transformation numérique" },
  { id: "engineering", en: "Software Engineering", fr: "Ingénierie logicielle" },
  { id: "product", en: "Product Management", fr: "Gestion de produit" },
  { id: "analytics", en: "Business Analytics", fr: "Analyse de données métier" },
  { id: "innovation", en: "AI and Technological Innovation", fr: "IA et innovation technologique" },
  { id: "agile", en: "Agile Project Delivery", fr: "Conduite de projets agiles" },
] as const;

export const experience = [
  {
    name: "Planisware",
    focus: { en: "Technical, functional and implementation consulting", fr: "Conseil technique, fonctionnel et en déploiement" },
    description: {
      en: "Enterprise software implementation and direct collaboration with international clients.",
      fr: "Mise en œuvre de logiciels d’entreprise et collaboration directe avec des clients internationaux.",
    },
  },
  {
    name: "CodeCooperation GmbH",
    focus: { en: "Product ownership, full stack development and agile delivery", fr: "Pilotage produit, développement front-end et livraison agile" },
    description: {
      en: "Work across product priorities, interface development and delivery in an agile environment.",
      fr: "Définition des priorités produit, développement d’interfaces et livraison en environnement agile.",
    },
  },
];

type Education = { institution: string; study: Translation; verifiedAward?: Translation };

export const education: Education[] = [
  {
    institution: "Tunis Business School",
    study: {
      en: "Business Administration · Information Technology and Business Analytics",
      fr: "Administration des affaires · Technologies de l’information et analyse de données métier",
    },
  },
  { institution: "IT Business School", study: { en: "Software Engineering", fr: "Ingénierie logicielle" } },
];

type Certification = { name: string; verificationUrl?: `https://${string}`; badge?: { src: string; width: number; height: number } };

export const certifications: Certification[] = [
  { name: "Professional Scrum Product Owner I" },
  { name: "Six Sigma Yellow Belt" },
  { name: "Google Project Management Professional Certificate" },
  { name: "IBM Machine Learning Professional Certificate" },
  { name: "Scrum for Operations and DevOps Fundamentals" },
];

export const international = [
  {
    id: "tunisia", country: { en: "Tunisia", fr: "Tunisie" },
    description: { en: "Professional and entrepreneurial projects.", fr: "Projets professionnels et entrepreneuriaux." },
  },
  {
    id: "austria", country: { en: "Austria", fr: "Autriche" },
    description: { en: "Healthcare digitalization project through Innovance.", fr: "Projet de numérisation dans le secteur de la santé avec Innovance." },
    project: "urologe-khayati",
  },
  {
    id: "uae", country: { en: "United Arab Emirates", fr: "Émirats arabes unis" },
    description: { en: "On-site enterprise consulting mission.", fr: "Mission de conseil en entreprise sur site." },
  },
];
