import { createFileRoute } from "@tanstack/react-router";
import {
  Globe,
  MapPin,
  Linkedin,
  Facebook,
  Mail,
  MessageCircle,
  CalendarCheck,
  UserPlus,
  ChevronRight,
  Landmark,
} from "lucide-react";
import logo from "@/assets/vtma-logo.png.asset.json";

// Contact details — replace with real values.
const CONTACT = {
  website: "https://vtmacoretrust.com",
  address: "VTMA Coretrust Office",
  linkedin: "https://www.linkedin.com/company/vtmacoretrust",
  facebook: "https://www.facebook.com/vtmacoretrust",
  email: "info@vtmacoretrust.com",
  phone: "+10000000000",
  booking: "https://vtmacoretrust.com/contact",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VTMA CoreTrust Advisory Ltd — Audit, Compliance & Reporting" },
      {
        name: "description",
        content: "Connect with VTMA CoreTrust Advisory Ltd: audit analytics, compliance and reporting systems advisory.",
      },
      { property: "og:title", content: "VTMA CoreTrust Advisory Ltd — Audit, Compliance & Reporting" },
      {
        property: "og:description",
        content: "Audit Analytics, Compliance & Reporting Systems. Website, contact and consultations in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function downloadVCard() {
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:VTMA CoreTrust Advisory Ltd",
    "ORG:VTMA CoreTrust Advisory Ltd",
    "TITLE:Audit Analytics, Compliance & Reporting Systems",
    `TEL;TYPE=WORK,VOICE:${CONTACT.phone}`,
    `EMAIL;TYPE=WORK:${CONTACT.email}`,
    `URL:${CONTACT.website}`,
    `ADR;TYPE=WORK:;;${CONTACT.address};;;;`,
    "END:VCARD",
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([vcf], { type: "text/vcard;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "VTMA-CoreTrust-Advisory.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

type Item = { label: string; sub: string; icon: typeof Globe; href?: string; onClick?: () => void; primary?: boolean };

const items: Item[] = [
  { label: "Visit Website", sub: "vtmacoretrust.com", icon: Globe, href: CONTACT.website, primary: true },
  { label: "Book a Consultation", sub: "Schedule a meeting with our advisors", icon: CalendarCheck, href: CONTACT.booking },
  { label: "Office Location", sub: "Open in Google Maps", icon: MapPin, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}` },
  { label: "Connect on LinkedIn", sub: "Insights & firm updates", icon: Linkedin, href: CONTACT.linkedin },
  { label: "Follow on Facebook", sub: "News & announcements", icon: Facebook, href: CONTACT.facebook },
  { label: "Send an Email", sub: CONTACT.email, icon: Mail, href: `mailto:${CONTACT.email}` },
  { label: "WhatsApp / Direct Call", sub: "Speak with our team", icon: MessageCircle, href: `https://wa.me/${CONTACT.phone.replace(/\D/g, "")}` },
  { label: "Save Contact", sub: "Download vCard (.vcf)", icon: UserPlus, onClick: downloadVCard },
];

function Index() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_at_top,var(--glow),transparent_70%)]" />
      <main className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col justify-between gap-4 px-4 py-5">
        <header className="flex flex-col items-center text-center">
          <div className="w-full rounded-2xl bg-card px-6 py-3.5 shadow-[var(--shadow-card)]">
            <img src={logo.url} alt="VTMA CoreTrust Advisory Ltd logo" className="mx-auto h-10 w-auto" />
          </div>
          <h1 className="mt-4 text-lg font-semibold leading-tight tracking-tight">VTMA CoreTrust Advisory Ltd</h1>
          <p className="mt-1 text-xs text-muted-foreground">Audit Analytics, Compliance &amp; Reporting Systems</p>
          <div className="mt-3 flex items-center gap-2.5 text-gold">
            <span className="h-px w-6 bg-gold/50" />
            <Landmark className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="text-[9px] font-medium uppercase tracking-[0.3em]">Trusted Advisory</span>
            <span className="h-px w-6 bg-gold/50" />
          </div>
        </header>

        <nav className="grid grid-cols-2 gap-2">
          {items.map((it, i) => {
            const Icon = it.icon;
            const full = i === 0 || i === items.length - 1;
            const cls = `group flex min-w-0 items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all duration-200 active:scale-[0.97] hover:-translate-y-0.5 ${
              full ? "col-span-2" : ""
            } ${
              it.primary
                ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                : "border-border bg-secondary text-secondary-foreground hover:border-primary/60 hover:bg-accent"
            }`;
            const body = (
              <>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${it.primary ? "bg-primary-foreground/15" : "bg-primary/15 text-primary"}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-semibold leading-tight">{it.label}</span>
                  {full && (
                    <span className={`block truncate text-[11px] ${it.primary ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{it.sub}</span>
                  )}
                </span>
                {full && <ChevronRight className="h-4 w-4 shrink-0 opacity-50 transition-transform group-hover:translate-x-1" />}
              </>
            );
            return it.onClick ? (
              <button key={it.label} type="button" onClick={it.onClick} className={cls}>{body}</button>
            ) : (
              <a key={it.label} href={it.href} target={it.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>{body}</a>
            );
          })}
        </nav>

        <footer className="text-center text-[10px] text-muted-foreground">
          <p>© {new Date().getFullYear()} VTMA CoreTrust Advisory Ltd. All rights reserved.</p>
          <p className="mt-0.5 opacity-70">Powered by Digital Hub</p>
        </footer>
      </main>
    </div>
  );
}
