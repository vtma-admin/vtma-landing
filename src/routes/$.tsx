import { createFileRoute } from "@tanstack/react-router";
import { PageNotFound } from "@/components/not-found";

// Catch-all route: any unmatched URL (including the ones GitHub Pages serves
// 404.html for) renders the styled 404 page through the normal route pipeline,
// so client-side rendering stays consistent with the prerendered HTML.
export const Route = createFileRoute("/$")({
  component: PageNotFound,
});
