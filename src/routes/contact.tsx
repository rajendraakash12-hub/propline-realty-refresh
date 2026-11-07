import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { COMPANY, whatsappLink } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Site Visit — Propline Realty" },
      { name: "description", content: "Call +91 96200 47666, email proplinerealty@gmail.com or visit us in Koramangala, Bengaluru." },
      { property: "og:title", content: "Contact Propline Realty" },
      { property: "og:description", content: "Book a site visit or reach our Koramangala office." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });
  const field = "w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-gold focus:outline-none";
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hi Propline Realty, I'd like to book a site visit.\nName: ${form.name}\nPhone: ${form.phone}\nPreferred date: ${form.date || "Flexible"}\n${form.message}`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <SiteShell>
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl md:text-5xl">Book a site visit</h1>
          <p className="mt-4 text-muted-foreground">Share your details and we'll confirm your visit on WhatsApp.</p>
          <ul className="mt-10 space-y-6">
            <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 text-gold" /><a href={`tel:${COMPANY.phoneTel}`} className="text-lg hover:text-gold">{COMPANY.phoneDisplay}</a></li>
            <li className="flex gap-4"><Mail className="mt-1 h-5 w-5 text-gold" /><a href={`mailto:${COMPANY.email}`} className="text-lg hover:text-gold">{COMPANY.email}</a></li>
            <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" /><span className="text-muted-foreground">{COMPANY.address}</span></li>
          </ul>
          <iframe title="Office location" className="mt-10 h-64 w-full rounded-lg border border-border grayscale" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&output=embed`} />
        </div>
        <form onSubmit={submit} className="space-y-5 self-start rounded-lg border border-border bg-card p-8">
          <input aria-label="Your name" autoComplete="name" required className={field} placeholder="Your name" value={form.name} onChange={set("name")} />
          <input aria-label="Phone number" autoComplete="tel" required type="tel" className={field} placeholder="Phone number" value={form.phone} onChange={set("phone")} />
          <input aria-label="Preferred visit date" type="date" className={field} value={form.date} onChange={set("date")} />
          <textarea aria-label="Property or area of interest" rows={5} className={field} placeholder="Which property or area are you interested in?" value={form.message} onChange={set("message")} />
          <Button type="submit" size="lg" className="w-full">
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </Button>
          <p className="text-center text-xs text-muted-foreground">Or email us at <a className="text-gold" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
        </form>
      </section>
    </SiteShell>
  );
}
