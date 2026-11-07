import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import logo from "@/assets/propline-logo.png.asset.json";
import { COMPANY } from "@/lib/company";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="Propline Realty logo" className="h-12 w-auto" />
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-gold" activeProps={{ className: "text-gold" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <a href={`tel:${COMPANY.phoneTel}`} className="hidden items-center gap-2 rounded-sm bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground md:inline-flex">
            <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-border px-6 py-6 md:hidden">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-lg">
                {n.label}
              </Link>
            ))}
            <a href={`tel:${COMPANY.phoneTel}`} className="text-gold">{COMPANY.phoneDisplay}</a>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
          <div>
            <img src={logo.url} alt="Propline Realty" className="h-20 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Helping families and businesses find the right home, plot or commercial space — simple and hassle-free.
            </p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} className="text-muted-foreground hover:text-gold">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Get in touch</p>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" /><a href={`tel:${COMPANY.phoneTel}`} className="hover:text-gold">{COMPANY.phoneDisplay}</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" /><a href={`mailto:${COMPANY.email}`} className="hover:text-gold">{COMPANY.email}</a></li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" />{COMPANY.address}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </footer>

      <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-lg transition-transform hover:scale-110">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
