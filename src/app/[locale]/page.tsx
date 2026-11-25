import type { Metadata } from "next";
import Image from "next/image";
import { BarChart3, CalendarDays, Cpu, Layers3, BriefcaseBusiness, Mail, MessageCircle, Monitor, Target } from "lucide-react";
import { contactLinks, site, type Locale } from "@/config/site";
import { copy } from "@/content/copy";
import { Footer, Header } from "@/components/layout";
import { Work } from "@/components/work";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[locale];
  const title = "Innovance | " + t.descriptor;
  return {
    title, description: t.description,
    alternates: site.url ? { canonical: "/" + locale, languages: { en: "/en", fr: "/fr", "x-default": "/en" } } : undefined,
    openGraph: {
      title, description: t.description, siteName: site.name, type: "website",
      locale: locale === "en" ? "en_US" : "fr_FR", alternateLocale: locale === "en" ? "fr_FR" : "en_US",
      url: site.url ? "/" + locale : undefined,
      images: site.url ? [{ url: "/images/social-carthage-wireframe.jpg", width: 1200, height: 630, alt: locale === "fr" ? "Reconstitution du port punique de Carthage" : "Reconstruction of the Punic harbor of Carthage" }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description: t.description, images: site.url ? ["/images/social-carthage-wireframe.jpg"] : undefined },
  };
}

const pillars = [Layers3, Target, Monitor, Cpu, BarChart3];
const icons = { email: Mail, whatsapp: MessageCircle, linkedin: BriefcaseBusiness, meeting: CalendarDays };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const t = copy[locale];
  const channels = contactLinks();
  const links = (Object.keys(channels) as (keyof typeof channels)[]).flatMap((key) => {
    const href = channels[key];
    const Icon = icons[key];
    return href ? [<a key={key} href={href}><Icon size={18} aria-hidden="true" />{t.channels[key]}</a>] : [];
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "#innovance", name: site.name, url: site.url, slogan: t.slogan, description: t.description },
      { "@type": "Person", "@id": "#consultant", name: site.consultant, jobTitle: t.role, worksFor: { "@id": "#innovance" }, sameAs: channels.linkedin ? [channels.linkedin] : undefined },
    ],
  };
  return <>
    <Header locale={locale} />
    <main id="main" tabIndex={-1}>
      <section className="hero dark">
        <div className="hero-visual" aria-hidden="true"><Image src="/images/carthage-harbor-wireframe.webp" alt="" fill preload sizes="(max-width: 700px) 100vw, 68vw" /></div>
        <div className="shell hero-inner">
          <p className="eyebrow">{t.descriptor}</p>
          <h1>{t.hero[0]}<br /><span>{t.hero[1]}</span></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="actions"><a className="button primary" href="#contact">{t.discuss}</a><a className="button outline" href="#work">{t.explore}</a></div>
        </div>
      </section>
      <section className="section about" id="about">
        <div className="shell split">
          <div><p className="eyebrow">{t.nav[0]} / Innovance</p><h2>{t.about}</h2></div>
          <div><p className="lead">{t.positioning}</p><p>{t.aboutBody}</p><p className="origin">{t.origin}</p></div>
        </div>
      </section>
      <section className="section expertise" id="expertise">
        <div className="shell">
          <p className="eyebrow">{t.nav[1]}</p><h2>{t.expertise}</h2>
          <div className="pillar-grid">{t.pillars.map(([label, description], i) => {
            const Icon = pillars[i];
            return <article key={label}><Icon size={30} strokeWidth={1.6} aria-hidden="true" /><h3>{label}</h3><p>{description}</p></article>;
          })}</div>
        </div>
      </section>
      <section className="section framework dark" id="approach">
        <div className="shell">
          <p className="eyebrow">{t.framework}</p><h2>{t.approach}</h2>
          <ol>{t.steps.map(([label, description], i) => <li key={label}>
            <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{description}</p>
          </li>)}</ol>
        </div>
      </section>
      <Work locale={locale} />
      <section className="section consultant" id="consultant">
        <div className="shell consultant-layout">
          <div className="consultant-heading"><p className="eyebrow">{t.consultant}</p><h2>{site.consultant}</h2><p className="role">{t.role}</p></div>
          {site.portrait && <div className="consultant-portrait">
            <Image {...site.portrait} alt={site.consultant} sizes="(max-width: 390px) calc(100vw - 2rem), (max-width: 700px) 352px, (max-width: 1200px) 40vw, 464px" />
          </div>}
          <div className="consultant-bio"><p className="lead">{t.bio}</p><p>{t.bioMore}</p></div>
        </div>
      </section>
      <section className="section contact dark" id="contact">
        <div className="shell split"><div><p className="eyebrow">{t.nav[5]}</p><h2>{t.contact}</h2></div>
          <div><p>{t.contactBody}</p>{links.length ? <div className="contact-links">{links}</div> : <p className="pending">{t.pending}</p>}</div>
        </div>
      </section>
    </main>
    <Footer locale={locale} links={links.length ? <div className="contact-links">{links}</div> : null} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}

