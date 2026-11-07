import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { CATEGORIES, CITIES, whatsappLink } from "@/lib/company";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Propline Realty" },
      { name: "description", content: "Apartments, villas, farm houses, plots, office spaces and showrooms across Bengaluru and major Indian cities." },
      { property: "og:title", content: "Properties — Propline Realty" },
      { property: "og:description", content: "Tell us what you need and we'll share verified options." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Properties,
});

const ALL = [...CATEGORIES.Residential, ...CATEGORIES.Commercial];

function Properties() {
  const [type, setType] = useState("");
  const [city, setCity] = useState(CITIES[0]);
  const [budget, setBudget] = useState("");
  const msg = `Hi Propline Realty, I'm looking for ${type || "a property"} in ${city}${budget ? ` with a budget of ${budget}` : ""}. Please share available options.`;
  const field = "w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-gold focus:outline-none";

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="eyebrow">Properties</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Tell us what you're looking for</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Our listings are shared directly by our team, so you only see verified, current options. Pick your preferences and we'll send matching properties on WhatsApp.
        </p>

        <div className="mt-12 grid gap-4 rounded-lg border border-border bg-card p-8 md:grid-cols-4">
          <label className="text-sm text-muted-foreground">Property type
            <select className={`${field} mt-2`} value={type} onChange={(e) => setType(e.target.value)}>
              <option value="" disabled>Select type</option>
              {ALL.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className="text-sm text-muted-foreground">City
            <select className={`${field} mt-2`} value={city} onChange={(e) => setCity(e.target.value)}>
              {CITIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label className="text-sm text-muted-foreground">Budget (optional)
            <input className={`${field} mt-2`} placeholder="e.g. ₹80 lakh" value={budget} onChange={(e) => setBudget(e.target.value)} />
          </label>
          <Button asChild size="lg" className="self-end"><a href={whatsappLink(msg)} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" /> Get options
          </a></Button>
        </div>

        {Object.entries(CATEGORIES).map(([group, items]) => (
          <div key={group} className="mt-16">
            <h2 className="text-3xl">{group}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((i) => (
                <Button variant="outline" key={i} aria-pressed={type === i} onClick={() => setType(i)} className={`h-auto min-h-36 flex-col items-start whitespace-normal rounded-lg border p-6 text-left transition-colors ${type === i ? "border-gold bg-accent" : "border-border bg-card hover:border-gold/60"}`}>
                  <span className="font-display text-xl">{i}</span>
                  <span className="mt-2 block text-sm text-muted-foreground">Enquire for {i.toLowerCase()}</span>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
