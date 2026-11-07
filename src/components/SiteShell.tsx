import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { COMPANY } from "@/lib/company";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const root = mainRef.current;
    if (!root || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    root.querySelectorAll('[data-reveal], section').forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight * .9) {
        element.classList.add('reveal-pending');
        observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, [pathname]);

  const navigateWithFade = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || leaving) return;
    const target = event.target instanceof Element ? event.target.closest('a') : null;
    const href = target?.getAttribute('href');
    if (!href || !NAV.some((item) => item.to === href) || href === pathname || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    event.preventDefault();
    setLeaving(true);
    window.setTimeout(() => {
      void router.navigate({ to: href }).finally(() => setLeaving(false));
    }, 140);
  };
  return (
    <div className="min-h-screen bg-background text-foreground" onClickCapture={navigateWithFade}>
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2.5 text-[11px] sm:text-xs">
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Koramangala, Bengaluru</span>
          <a href={`mailto:${COMPANY.email}`} className="hidden sm:block">{COMPANY.email}</a>
          <a href={`tel:${COMPANY.phoneTel}`} className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" />{COMPANY.phoneDisplay}</a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3">
            <BrandLogo className="h-16 w-auto max-w-[200px]" />
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-gold" activeProps={{ className: "text-gold" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/80 md:inline-flex"><Link to="/contact"><MessageCircle /> Let's talk</Link></Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        <div className={`mobile-menu md:hidden ${open ? 'is-open' : ''}`} inert={!open} id="mobile-navigation">
          <div className="overflow-hidden"><nav className="flex flex-col gap-4 border-t border-border px-6 py-6">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-lg">
                {n.label}
              </Link>
            ))}
            <a href={`tel:${COMPANY.phoneTel}`} className="text-gold">{COMPANY.phoneDisplay}</a>
          </nav></div>
        </div>
      </header>

      <main ref={mainRef} key={pathname} className={leaving ? 'route-leaving' : 'route-enter'}>{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
          <div>
            <BrandLogo className="h-24 w-auto max-w-[240px]" />
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

      {pathname !== '/contact' && pathname !== '/properties' && <Button asChild size="icon" className="fixed bottom-5 right-5 z-50 h-12 w-12 bg-primary text-primary-foreground shadow-lg">
      <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </a></Button>}
    </div>
  );
}
