import Image from "next/image";
import { BarChart3, BriefcaseBusiness, Code2, Cpu, Globe2, Layers3, Plus, RefreshCw, Settings2, Target } from "lucide-react";
import { site, type Locale } from "@/config/site";
import { certifications, education, experience, expertise, international, profile } from "@/content/consultant";

const expertiseIcons = {
  consulting: BriefcaseBusiness,
  implementation: Settings2,
  transformation: Layers3,
  engineering: Code2,
  product: Target,
  analytics: BarChart3,
  innovation: Cpu,
  agile: RefreshCw,
};

export function Consultant({ locale }: { locale: Locale }) {
  const t = profile[locale];
  return <section className="section consultant" id="consultant" aria-labelledby="consultant-title">
    <div className="shell">
      <div className="consultant-layout">
        <div className="consultant-heading">
          <h2 id="consultant-title">{t.heading}</h2>
          <p className="consultant-name">{site.consultant}</p>
          <p className="role">{t.role}</p>
        </div>
        {site.portrait && <div className="consultant-portrait">
          <Image {...site.portrait} alt={site.consultant} sizes="(max-width: 390px) calc(100vw - 2rem), (max-width: 700px) 352px, (max-width: 1200px) 40vw, 464px" />
        </div>}
        <div className="consultant-bio">
          <p className="lead">{t.tagline}</p>
          <p>{t.intro}</p>
        </div>
      </div>

      <div className="profile-expertise">
        <h3>{t.expertise}</h3>
        <ul>{expertise.map(({ id, ...label }) => {
          const Icon = expertiseIcons[id];
          return <li key={id}><Icon size={22} strokeWidth={1.65} aria-hidden="true" /><span>{label[locale]}</span></li>;
        })}</ul>
      </div>

      <div className="profile-evidence">
        <details>
          <summary><h3>{t.experience}</h3><Plus size={20} aria-hidden="true" /></summary>
          <p>{t.experienceIntro}</p>
          <ul>{experience.map(({ name, focus, description }) => <li key={name}>
            <strong>{name}</strong><p>{focus[locale]}</p><p>{description[locale]}</p>
          </li>)}</ul>
        </details>
        <details>
          <summary><h3>{t.education}</h3><Plus size={20} aria-hidden="true" /></summary>
          <ul>{education.map(({ institution, study, verifiedAward }) => <li key={institution}>
            <strong>{institution}</strong><p>{study[locale]}</p>
            {verifiedAward && <p>{verifiedAward[locale]}</p>}
          </li>)}</ul>
        </details>
        <details>
          <summary><h3>{t.certifications}</h3><Plus size={20} aria-hidden="true" /></summary>
          <ul>{certifications.map(({ name, verificationUrl, badge }) => <li key={name}>
            {badge && <Image {...badge} alt="" />}
            <strong lang="en">{name}</strong>
            {verificationUrl && <p><a href={verificationUrl} aria-label={t.verify + " — " + name}>{t.verify}</a></p>}
          </li>)}</ul>
        </details>
      </div>

      <div className="profile-international">
        <h3><Globe2 size={22} aria-hidden="true" />{t.international}</h3>
        <ul>{international.map(({ id, country, description, project }) => <li key={id}>
          <strong>{country[locale]}</strong>
          <p>{project ? <a href={"#" + project}>{description[locale]}</a> : description[locale]}</p>
        </li>)}</ul>
      </div>
    </div>
  </section>;
}
