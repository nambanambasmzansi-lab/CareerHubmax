import { CasinoCard } from "@/components/CasinoCard";
import { casinoGames } from "@/data/siteData";
import type { PageKey } from "@/data/siteData";

interface CasinoPageProps {
  onNavigate: (page: PageKey) => void;
}

export function CasinoPage({ onNavigate }: CasinoPageProps) {
  return (
    <main className="animate-page-in">
      <div className="bg-navy-3 border-b border-brand-border py-10 pb-9">
        <div className="wrap">
          <div className="font-heading text-[11px] tracking-wide uppercase text-brand-dim mb-3">
            <button onClick={() => onNavigate("home")} className="text-brand-dim hover:text-gold transition-colors">
              Home
            </button>
            <span className="mx-1.5">›</span>Casino &amp; Live
          </div>
          <p className="eyebrow">🃏 Casino &amp; Live Dealer Games SA</p>
          <h1 className="page-hero-title">
            <em>Casino</em> &amp; Live Games
            <br />
            Guide South Africa
          </h1>
          <p className="sec-desc">
            Reviews of the best online casino games in SA — live dealer tables, Evolution games, and
            more.
          </p>
        </div>
      </div>

      <section className="sec sec-alt">
        <div className="wrap">
          <h2 className="sec-title mb-6">
            Evolution <span>Live Games</span>
          </h2>
          <div className="bg-gold-pale border border-[rgba(200,149,42,.3)] rounded-md px-5 py-4 mb-6">
            <p className="text-sm text-brand-text leading-relaxed">
              🃏 <strong>What are Live Casino Games?</strong> Real casino table games streamed live
              from a studio. Place bets on your phone in real time. Available at Betway,
              Hollywoodbets, YesPlay and more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {casinoGames.map((g, i) => (
              <CasinoCard key={i} {...g} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
