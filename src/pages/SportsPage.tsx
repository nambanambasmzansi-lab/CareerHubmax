import { SportCard } from "@/components/SportCard";
import { sports } from "@/data/siteData";
import type { PageKey } from "@/data/siteData";

interface SportsPageProps {
  onNavigate: (page: PageKey) => void;
}

export function SportsPage({ onNavigate }: SportsPageProps) {
  return (
    <main className="animate-page-in">
      <div className="bg-navy-3 border-b border-brand-border py-10 pb-9">
        <div className="wrap">
          <div className="font-heading text-[11px] tracking-wide uppercase text-brand-dim mb-3">
            <button onClick={() => onNavigate("home")} className="text-brand-dim hover:text-gold transition-colors">
              Home
            </button>
            <span className="mx-1.5">›</span>Sports Betting
          </div>
          <p className="eyebrow">⚽ Your Complete SA Betting Hub</p>
          <h1 className="page-hero-title">
            Online <em>Sports Betting</em>
            <br />
            in South Africa 2025
          </h1>
          <p className="sec-desc">
            Tips, guides and reviews for soccer, rugby, cricket, tennis and horse racing.
          </p>
        </div>
      </div>

      <section className="sec sec-alt">
        <div className="wrap">
          <h2 className="sec-title mb-6">
            Browse by <span>Sport</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sports.map((s, i) => (
              <SportCard key={i} {...s} onNavigate={(p) => onNavigate(p as PageKey)} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
