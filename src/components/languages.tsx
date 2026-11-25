"use client";

import { locales, type Locale } from "@/config/site";
import { copy } from "@/content/copy";

export function Languages({ locale }: { locale: Locale }) {
  return <div role="group" className="languages" aria-label={copy[locale].language}>
    {locales.map((language) => (
      <a key={language} href={"/" + language} hrefLang={language} lang={language}
        aria-current={language === locale ? "page" : undefined}
        onClick={(event) => {
          document.cookie = "innovance-locale=" + language + "; Path=/; Max-Age=31536000; SameSite=Lax" +
            (location.protocol === "https:" ? "; Secure" : "");
          event.currentTarget.hash = location.hash;
        }}>{language === "en" ? "English" : "Français"}</a>
    ))}
  </div>;
}
