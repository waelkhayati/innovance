import Image from "next/image";
import { Activity, Clapperboard, Plus } from "lucide-react";
import { projects } from "@/content/projects";
import { copy } from "@/content/copy";
import type { Locale } from "@/config/site";

export function Work({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section id="work" className="section work">
    <div className="shell">
      <h2>{t.work}<span className="accent">.</span></h2>
      <div className="project-grid">
        {projects.map((project) => {
          const p = project.copy[locale];
          const Icon = project.tone === "health" ? Activity : Clapperboard;
          return <article key={project.id} id={project.id} className="project">
            {project.image ? <div className="project-image"><Image {...project.image} alt={p.alt} sizes="(max-width: 760px) 100vw, 50vw" /></div> :
              <div className={"project-image placeholder " + project.tone}>
                <Icon size={62} strokeWidth={1} aria-hidden="true" />
                <span>{t.placeholder}</span>
              </div>}
            <div className="project-body">
              <p className="eyebrow">{p.industry} · {p.market}</p>
              <h3>{project.name}</h3>
              <p className="category">{p.category}</p>
              <p className="project-title">{p.title}</p>
              <details>
                <summary>{t.details}<Plus size={18} aria-hidden="true" /></summary>
                <dl>{([p.context, p.challenge, p.approach, p.delivered, p.value, p.future]).map((item, i) => (
                  <div key={t.projectLabels[i]}><dt>{t.projectLabels[i]}</dt><dd>{item}</dd></div>
                ))}</dl>
              </details>
            </div>
          </article>;
        })}
      </div>
    </div>
  </section>;
}
