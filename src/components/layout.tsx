import Image from "next/image";
import { Menu } from "lucide-react";
import { site, type Locale } from "@/config/site";
import { copy } from "@/content/copy";
import { Languages } from "./languages";

const anchors = ["about", "expertise", "approach", "work", "consultant", "contact"];

export function Brand({ locale }: { locale: Locale }) {
  return <a className="brand" href={"/" + locale}>
    <Image {...site.logo} alt="" unoptimized />
    <span>innov<span>ance</span></span>
  </a>;
}

function Links({ locale, footer = false }: { locale: Locale; footer?: boolean }) {
  return <nav aria-label={copy[locale][footer ? "footer" : "navigation"]}>
    {copy[locale].nav.map((label, i) => <a key={anchors[i]} href={"#" + anchors[i]}>{label}</a>)}
  </nav>;
}

export function Header({ locale }: { locale: Locale }) {
  return <header className="header">
    <a href="#main" className="skip">{copy[locale].skip}</a>
    <div className="shell header-inner">
      <Brand locale={locale} />
      <div className="desktop-nav"><Links locale={locale} /><Languages locale={locale} /></div>
      <details className="mobile-nav">
        <summary><Menu size={20} aria-hidden="true" />{copy[locale].menu}</summary>
        <div><Links locale={locale} /><Languages locale={locale} /></div>
      </details>
    </div>
  </header>;
}

export function Footer({ locale, links }: { locale: Locale; links: React.ReactNode }) {
  return <footer className="footer dark">
    <div className="shell">
      <div className="footer-grid">
        <div><Brand locale={locale} /><p>{copy[locale].slogan}</p></div>
        <Links locale={locale} footer />
        <Languages locale={locale} />
      </div>
      {links}
      <p className="copyright">© {new Date().getUTCFullYear()} Innovance. {copy[locale].rights}</p>
    </div>
  </footer>;
}
