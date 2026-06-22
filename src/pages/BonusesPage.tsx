import { OfferCard } from "@/components/OfferCard";
import { FAQ } from "@/components/FAQ";
import { StatCard } from "@/components/StatCard";
import { bookmakers, faqItems } from "@/data/siteData";
import type { PageKey } from "@/data/siteData";

interface BonusesPageProps {
  onNavigate: (page: PageKey) => void;
}

export function BonusesPage({ onNavigate }: BonusesPageProps) {
  return (
    <main className="animate-page-in">
      <div className="bg-navy-3 border-b border-brand-border py-10 pb-9">
        <div className="wrap flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="font-heading text-[11px] tracking-wide uppercase text-brand-dim mb-3">
              <button onClick={() => onNavigate("home")} className="text-brand-dim hover:text-gold transition-colors">
                Home
              </button>
              <span className="mx-1.5">›</span>Best Bonuses
            </div>
            <p className="eyebrow">🎁 April 2025 — Updated Weekly</p>
            <h1 className="page-hero-title">
              Best <em>Welcome Bonuses</em>
              <br />
              in South Africa
            </h1>
            <p className="sec-desc">
              All bonuses independently verified. We only list bookmakers licensed in South Africa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 max-w-[280px]">
            <StatCard num="11" label="Listed" />
            <StatCard num="R25k+" label="Total Value" />
          </div>
        </div>
      </div>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="bg-gold-pale border border-[rgba(200,149,42,.3)] rounded-md px-5 py-4 my-5">
            <p className="text-sm text-brand-text leading-relaxed">
              💡 <strong className="text-gold">How we rate bonuses:</strong> We assess bonus amount,
              wagering requirements, validity, eligible games, and ease of claiming. T&amp;Cs always
              apply.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookmakers.map((b) => (
              <OfferCard
                key={b.id}
                bookmaker={b}
                featured={b.id === "betway"}
                badge={
                  b.id === "betway"
                    ? "Editor's Pick"
                    : b.id === "easybet" || b.id === "hollywoodbets"
                    ? "No Deposit!"
                    : undefined
                }
              />
            ))}
          </div>
          <p className="text-[11px] text-brand-dim text-center mt-6">
            T&amp;Cs apply to all bonuses. 18+ only.{" "}
            <button onClick={() => onNavigate("about")} className="text-gold hover:underline">
              How we rate bonuses →
            </button>
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="sec-title mb-5">
            Bonus <span>FAQ</span>
          </h2>
          <FAQ items={faqItems.bonuses} />
        </div>
      </section>
    </main>
  );
}
