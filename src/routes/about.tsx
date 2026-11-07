import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/propline-logo-black.png.asset.json";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Propline Realty Services Pvt. Ltd." },
      { name: "description", content: "Propline Realty is a Bengaluru real-estate firm based in Koramangala, helping buyers find homes and commercial spaces." },
      { property: "og:title", content: "About Propline Realty" },
      { property: "og:description", content: "A Koramangala, Bengaluru real-estate firm focused on simple, hassle-free property buying." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  { t: "Honest advice", d: "Clear recommendations based on your needs, not on commissions." },
  { t: "End-to-end support", d: "From shortlisting and site visits to paperwork and handover." },
  { t: "Local expertise", d: "Rooted in Bengaluru, with reach across major Indian cities." },
];

function About() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="eyebrow">About us</p>
          <h1 className="mt-4 text-5xl md:text-6xl">{COMPANY.name}</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Propline Realty helps families, investors and businesses find the right residential and commercial property — simply and without hassle. From our office in Koramangala, Bengaluru, we guide clients through search, site visits, negotiation and closing.
          </p>
          <Button asChild size="lg" className="mt-10"><Link to="/contact">Talk to our team</Link></Button>
        </div>
        <div className="flex justify-center p-10">
          <img src={logo.url} alt="Propline Realty logo" className="w-full max-w-md" />
        </div>
      </section>
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.t} className="border-l border-gold pl-6">
              <h3 className="text-2xl">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
