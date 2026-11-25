export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const site = {
  name: "Innovance",
  consultant: "Wael Khayati",
  url: parseSiteUrl(process.env.SITE_URL),
  logo: { src: "/brand/innovance-mark.svg", width: 204, height: 190 },
  portrait: { src: "/images/mohamed-wael-khayati-headshot.webp", width: 960, height: 960 },
  contacts: { email: "", whatsapp: "", linkedin: "", meeting: "" },
};

export function parseSiteUrl(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password ? url.origin : undefined;
  } catch {
    return undefined;
  }
}

function httpsLink(value: string, host?: string) {
  try {
    const url = new URL(value);
    if (url.protocol === "https:" && !url.username && !url.password && (!host || url.hostname === host || url.hostname === "www." + host)) return url;
  } catch {
    return undefined;
  }
}

export function contactLinks() {
  const { email, whatsapp, linkedin, meeting } = site.contacts;
  const profile = httpsLink(linkedin, "linkedin.com");
  return {
    email: /^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i.test(email) ? "mailto:" + email : undefined,
    whatsapp: /^\+[1-9]\d{7,14}$/.test(whatsapp) ? "https://wa.me/" + whatsapp.slice(1) : undefined,
    linkedin: profile && /^\/in\/[^/]+\/?$/.test(profile.pathname) ? profile.href : undefined,
    meeting: httpsLink(meeting)?.href,
  };
}
