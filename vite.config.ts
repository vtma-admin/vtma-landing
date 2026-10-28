// @lovable.dev/vite-tanstack-config already includes the following. Do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Served from a custom subdomain (landing.vtmacoretrust.com) via GitHub
    // Pages, so the site lives at the root path.
    base: "/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender the routes to static HTML at build time so the site can be
    // hosted on GitHub Pages (no server runtime). The 404 page is written to
    // 404.html at the site root, which GitHub Pages serves for unknown URLs.
    prerender: {
      enabled: true,
      crawlLinks: false,
    },
    pages: [
      {
        path: "/404",
        // autoSubfolderIndex off writes the file as /404.html, which GitHub
        // Pages serves for unknown URLs.
        prerender: { enabled: true, autoSubfolderIndex: false },
      },
    ],
  },
});
