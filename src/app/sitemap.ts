import type { MetadataRoute } from "next";
import { locales, site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  const languages = { en: site.url + "/en", fr: site.url + "/fr", "x-default": site.url + "/en" };
  return locales.map((locale) => ({ url: languages[locale], alternates: { languages } }));
}
