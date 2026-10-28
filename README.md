# VTMA Landing Link In Bio

Create a clean, ultra-professional, and modern mobile-first link-in-bio / intermediary landing page for "VTMA Coretrust" (vtmacoretrust.com), a high-end audit, compliance, and reporting advisory firm. 

Design Guidelines:

- Aesthetic: Corporate, elite, trustworthy, minimalist, and sleek (think high-end fintech or Big Four consulting aesthetic). Use a refined color palette (e.g., deep navy or charcoal slate background/accents, crisp white or light neutral card containers, and subtle gold, platinum, or vibrant blue highlights for interactive elements).

- Header: Prominently feature our uploaded company logo at the top, followed by the company name "VTMA Coretrust" and a professional tagline like "Audit Analytics, Compliance & Reporting Systems".

- Layout: A single-column list of polished, full-width or rounded pill-style interactive buttons with smooth hover/tap animations and subtle icons.

Button List to Include:

1. Visit Website (vtmacoretrust.com)

2. Office Location (Interactive map or address link)

3. Connect on LinkedIn

4. Follow on Facebook

5. Send an Email (mailto link)

6. WhatsApp Business / Direct Call

7. Book a Consultation / Meeting

8. Save Contact (vCard (.vcf) download)

Footer:

- Add a subtle, professional copyright notice for VTMA Coretrust and a "Powered by Digital Hub" or minimalist footer note.

- Ensure the code is fully responsive, loads instantly on mobile devices, and uses clean Tailwind CSS.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vt-test-contact-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/64b1a897-2a7c-4dc0-8624-474fe44559f9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deployment (GitHub Pages)

This site is a static single page, prerendered to HTML at build time. It deploys to GitHub Pages via the [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow.

**Setup (once):**

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Custom domain: in **Settings → Pages**, enter `landing.vtmacoretrust.com` under **Custom domain** and save. At your DNS provider, add a `CNAME` record:
   - `landing` → `vtma-admin.github.io`
   - (a plain `CNAME` is enough for subdomains; no `A` records needed)

The `public/CNAME` file ships with the deploy so the setting survives rebuilds. Wait for the DNS check to go green, and enable **Enforce HTTPS** once the certificate is issued.

**URL:** the site is served from the root of a custom subdomain, so `vite.config.ts` uses `base: "/"`. If you ever switch back to the default `https://vtma-admin.github.io/vtma-landing/` URL, change the base to `"/vtma-landing/"` instead.

**Local preview of the production build:**

```sh
npm run build
npx vite preview   # serves at http://localhost:4173/
```
