import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Handshake, Home, Search, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-skyline.jpg";
import { SiteShell } from "@/components/SiteShell";
import { CATEGORIES, CITIES, COMPANY } from "@/lib/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Propline Realty — Find Your Dream Home in Bengaluru" },
      { name: "description", content: "Propline Realty Services Pvt. Ltd., Koramangala, Bengaluru. Apartments, villas, plots and commercial spaces — simple and hassle-free." },
      { property: "og:title", content: "Propline Realty — Find Your Dream Home" },
      { property: "og:description", content: "Residential and commercial property advisory from Koramangala, Bengaluru." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEPS = [
  { icon: Search, title: "Search your perfect property", text: "Tell us your city, budget and needs — we shortlist options that genuinely fit." },
  { icon: ShieldCheck, title: "Expert guidance & support", text: "Site visits, documentation checks and honest advice at every step." },
  { icon: Handshake, title: "Negotiate the best deal", text: "We represent your interests to close at the right price, on clear terms." },
];

function Index() {
  return (
    <SiteShell>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img src={hero} alt="Bengaluru skyline at dusk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <p className="eyebrow fade-up">Welcome to Propline Realty</p>
          <h1 className="fade-up mt-6 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Find your dream home, <span className="text-gold-gradient italic">simple</span> and hassle-free.
          </h1>
          <p className="fade-up mt-6 max-w-xl text-lg text-muted-foreground">
            Apartments, villas, plots and commercial spaces across India's leading cities — guided by a team based in Koramangala, Bengaluru.
          </p>
          <div className="fade-up mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-7 py-4 font-semibold text-primary-foreground">
              Book a site visit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/properties" className="inline-flex items-center gap-2 rounded-sm border border-gold/50 px-7 py-4 font-semibold text-gold hover:bg-accent">
              Explore properties
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow">What we offer</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Residential & commercial</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {Object.entries(CATEGORIES).map(([group, items]) => (
            <div key={group} className="rounded-sm border border-border bg-card p-10">
              {group === "Residential" ? <Home className="h-8 w-8 text-gold" /> : <Building2 className="h-8 w-8 text-gold" />}
              <h3 className="mt-6 text-3xl">{group}</h3>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                {items.map((i) => <li key={i} className="border-l border-gold/40 pl-3">{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Your home, with ease</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.title}>
                <span className="font-display text-6xl text-gold-gradient">0{i + 1}</span>
                <s.icon className="mt-4 h-6 w-6 text-gold" />
                <h3 className="mt-4 text-2xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow">Cities we serve</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {CITIES.map((c) => (
            <span key={c} className="rounded-full border border-border px-6 py-3 text-lg font-display hover:border-gold hover:text-gold">{c}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-24 max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 rounded-sm bg-gold-gradient p-12 text-primary-foreground md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl">Ready to find your property?</h2>
            <p className="mt-2 opacity-80">Call us or drop a message — we respond quickly.</p>
          </div>
          <a href={`tel:${COMPANY.phoneTel}`} className="rounded-sm bg-background px-8 py-4 font-semibold text-gold">{COMPANY.phoneDisplay}</a>
        </div>
      </section>
    </SiteShell>
  );
}
