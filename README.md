# Innovance

Innovance is an independent digital business consultancy led by Wael Khayati, Digital Business Consultant. This single-page website introduces the consultancy, presents its five expertise pillars and six-phase Growth Framework, and documents two projects in Austria and Tunisia. English and French have separate, statically generated pages.

## Local development

Use Node.js 24 LTS and npm. Next.js fetches Inter and Montserrat through `next/font` on the first uncached build.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. English is the default. The language switcher keeps the current section in view and remembers the chosen language for future visits to the root URL.

## Build and deploy

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

When ready to publish, configure the verified assets and contact details below. Set `SITE_URL` to the final HTTPS origin in the host's build environment or in a local `.env.local` file based on `.env.example`. Rebuild after changing it. Use a host that supports the Next.js Node runtime or deploy behind an HTTPS reverse proxy using the commands above. The runtime supplies the root language redirect and Next.js image optimization. Both language pages, robots.txt and sitemap.xml are generated at build time.

After deployment, verify both language pages and contact links on the final origin. Check the canonical and hreflang tags, social preview, robots.txt and sitemap.xml. Keep any prelaunch environment behind the host's access controls.

## Repository structure

| Path | Purpose |
| --- | --- |
| `src/app/[locale]/` | Localized page composition, document language, fonts and metadata |
| `src/app/robots.ts` and `src/app/sitemap.ts` | Search crawler metadata |
| `src/proxy.ts` | Default and remembered language redirect |
| `src/components/` | Navigation, language controls and reusable case-study presentation |
| `src/content/copy.ts` | English and French page copy |
| `src/content/projects.ts` | Typed, bilingual case-study records |
| `src/content/consultant.ts` | Bilingual consultant profile, expertise, experience, education and credentials |
| `src/config/site.ts` | Brand identity, optional assets, domain and contact validation |
| `src/styles/globals.css` | Tailwind entry point, design tokens and responsive styles |
| `public/images/` | Carthage harbor reconstruction, social crop and consultant portrait |

Additional locales can be introduced through the locale registry, translated content and locale metadata. Future profiles can reuse the consultant section's presentation and separately configured content.

## Prelaunch checklist

- The header and footer pair a vector trace of the emblem from the supplied brand board with a typeset wordmark. To use an approved standalone emblem later, set `site.logo` to its public path and intrinsic dimensions. The browser favicon uses the same traced emblem on a navy tile.
- Put approved Urologe Khayati and Biling Media screenshots under `public/projects/` and fill in each project's `image` with its public path and intrinsic dimensions. Update the localized alternative text to describe the actual screenshot. The current case-study visuals are labeled development placeholders.
- Update `site.portrait` in `src/config/site.ts` if replacing the supplied consultant portrait. Add verified award wording, credential verification URLs and authentic badge paths to the relevant entries in `src/content/consultant.ts` when available.
- Add confirmed contact details in `src/config/site.ts`. Use a plain email address, a WhatsApp number in international E.164 format, an HTTPS LinkedIn personal profile URL and an HTTPS booking URL as available. Only validated entries appear in the contact section and footer.
- Set the verified `SITE_URL`. Until then, the sitemap contains no URLs and absolute canonical, hreflang and social image metadata are omitted.
- The hero and social preview use an AI-generated interpretation of ancient Carthage at sunset. The supplied reconstruction guided the harbor layout.

## Add a case study

Add a record in `src/content/projects.ts` with a unique stable ID, project name and complete English and French entries. Provide the industry, market, category, headline, context, challenge, approach, delivered solution, qualitative business value and any future opportunities in the corresponding fields. Use an approved screenshot and describe it in each locale. The section renders the records in array order.

## Verification

Run lint, type checking and a production build before shipping. For manual checks, use the keyboard to reach the skip link, open the mobile menu, switch languages and expand case studies. Check both locales on phone, tablet and desktop widths. Test the contact links after adding verified destinations. Automated accessibility scans cover a subset of WCAG 2.2 AA and should be supplemented by manual assistive technology review before launch.

The initial implementation passed npm installation, lint, strict type checking, and a production build. Local Edge and Playwright checks covered both locales at 320, 390, 768 and 1440 CSS pixels, with zero automated axe violations in the selected WCAG A and AA rules. Keyboard skip navigation, the mobile menu, language persistence, case-study disclosure, and optimized image serving passed. Canonical URLs, hreflang, structured data, social image metadata, and sitemap URLs were verified with a reserved test origin.
