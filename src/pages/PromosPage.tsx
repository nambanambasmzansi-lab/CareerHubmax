import { PromoCard } from "@/components/PromoCard";
import { promos } from "@/data/siteData";
import type { PageKey } from "@/data/siteData";

interface PromosPageProps {
  onNavigate: (page: PageKey) => void;
}

export function PromosPage({ onNavigate }: PromosPageProps) {
  return (
    <main className="animate-page-in">
      <div className="bg-navy-3 border-b border-brand-border py-10 pb-9">
        <div className="wrap">
          <div className="font-heading text-[11px] tracking-wide uppercase text-brand-dim mb-3">
            <button onClick={() => onNavigate("home")} className="text-brand-dim hover:text-gold transition-colors">
              Home
            </button>
            <span className="mx-1.5">›</span>Promotions
          </div>
          <p className="eyebrow">🔥 April 2025 — Updated Weekly</p>
          <h1 className="page-hero-title">
            Latest <em>Promotions</em>
            <br />
            &amp; Free Bet Offers
          </h1>
          <p className="sec-desc">
            Current promotions, reload bonuses and free bets from all major SA bookmakers.
          </p>
        </div>
      </div>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="flex gap-3.5 overflow-x-auto pb-1.5 snap-x snap-mandatory scrollbar-hide">
            {promos.map((p, i) => (
              <PromoCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
