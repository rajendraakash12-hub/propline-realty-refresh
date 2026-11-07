import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, MapPin, Search, ShieldCheck } from "lucide-react";
import apartments from "@/assets/residential-apartments.jpg";
import villa from "@/assets/residential-villa.jpg";
import plots from "@/assets/land-plots.jpg";
import commercial from "@/assets/commercial-spaces.jpg";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { CITIES, COMPANY } from "@/lib/company";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Propline Realty — Homes, Plots & Commercial Spaces" },
    { name: "description", content: "Find apartments, villas, plots and commercial spaces with Propline Realty Services Pvt. Ltd., Koramangala, Bengaluru." },
    { property: "og:title", content: "Propline Realty — Find Your Next Space" },
    { property: "og:description", content: "Residential and commercial property advisory from Koramangala, Bengaluru." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const COLLECTIONS = [
  { title: "Apartments", detail: "A place to call your own", image: apartments, alt: "Illustrative contemporary apartment architecture" },
  { title: "Homes & villas", detail: "More room for your life", image: villa, alt: "Illustrative villa with a landscaped garden" },
  { title: "Plots & land", detail: "Space for new possibilities", image: plots, alt: "Illustrative green land and tree-lined landscape" },
  { title: "Commercial spaces", detail: "Your business, next chapter", image: commercial, alt: "Illustrative contemporary commercial building" },
];
const STEPS = [
  { icon: Search, title: "Find your fit", text: "Tell us your city, budget and needs — we shortlist options that genuinely fit." },
  { icon: ShieldCheck, title: "See it for yourself", text: "Site visits, documentation checks and honest advice at every step." },
  { icon: Handshake, title: "Make your move", text: "We represent your interests to close at the right price, on clear terms." },
];

function Index() {
  return <SiteShell>
    <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 md:pb-16 md:pt-16">
      <div className="fade-up flex items-center gap-2 text-xs font-medium text-muted-foreground"><MapPin className="h-4 w-4 text-accent-foreground" /> Bengaluru roots. New possibilities.</div>
      <div className="mt-4 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <h1 className="fade-up text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">Propline Realty.<br />Find your <span className="editorial italic">next space.</span></h1>
          <p className="fade-up mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">A home to grow in. A place to build on. A space for your business. Find the right property, simply and without hassle.</p>
        </div>
        <Button asChild size="lg" className="fade-up shrink-0"><Link to="/properties">Explore properties <ArrowRight /></Link></Button>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {COLLECTIONS.map((item, index) => <Link key={item.title} to="/properties" className="property-card group relative isolate block aspect-[4/5] overflow-hidden rounded-lg bg-muted" aria-label={`Explore ${item.title.toLowerCase()}`}>
          <img src={item.image} alt={item.alt} width={768} height={1024} loading={index < 2 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-image-shade/65 via-image-shade/5 to-image-shade/40" />
          <div className="absolute inset-x-0 top-0 p-4 text-on-image sm:p-6"><h2 className="text-base font-semibold sm:text-xl">{item.title}</h2><p className="mt-1.5 hidden text-xs text-on-image/90 sm:block">{item.detail}</p></div>
          <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground sm:bottom-6 sm:left-6"><ArrowRight className="card-arrow h-5 w-5" /></span>
        </Link>)}
      </div>
      <p className="mt-3 text-[11px] text-muted-foreground">Category images are illustrative. Contact our team for available properties.</p>
    </section>

    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-5 text-xs font-medium sm:text-sm">
        <span className="flex items-center gap-2"><Search className="h-4 w-4" /> Thoughtful shortlisting</span>
        <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Guidance at every step</span>
        <span className="flex items-center gap-2"><Handshake className="h-4 w-4" /> Simple & hassle-free</span>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">A better way to find property</p><h2 className="mt-3 text-3xl md:text-4xl">Your move. <span className="editorial italic">Our guidance.</span></h2></div><Button asChild variant="outline"><Link to="/about">Meet Propline <ArrowRight /></Link></Button></div>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {STEPS.map((step, index) => <div key={step.title} data-reveal className="border-t border-border pt-6"><div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">0{index + 1}</span><step.icon className="h-6 w-6" /></div><h3 className="mt-6 text-xl">{step.title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">{step.text}</p></div>)}
      </div>
    </section>

    <section className="border-y border-border bg-muted py-16">
      <div className="mx-auto max-w-7xl px-6"><p className="eyebrow">Cities we serve</p><h2 className="mt-3 text-3xl">Find your place, <span className="editorial italic">wherever life takes you.</span></h2><div className="mt-8 flex flex-wrap gap-3">{CITIES.map(city => <span key={city} className="rounded-full border border-border bg-background px-5 py-2.5 text-sm">{city}</span>)}</div></div>
    </section>

    <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:py-24">
      <div><p className="eyebrow">Let's find your next space</p><h2 className="mt-3 text-3xl md:text-4xl">Good things start <span className="editorial italic">with a conversation.</span></h2></div>
      <Button asChild size="lg"><a href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phoneDisplay} <ArrowRight /></a></Button>
    </section>
  </SiteShell>;
}
