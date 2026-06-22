import { ReviewCard } from "@/components/ReviewCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { bookmakers } from "@/data/siteData";
import type { PageKey } from "@/data/siteData";

interface ReviewsPageProps {
  onNavigate: (page: PageKey) => void;
}

export function ReviewsPage({ onNavigate }: ReviewsPageProps) {
  return (
    <main className="animate-page-in">
      <div className="bg-navy-3 border-b border-brand-border py-10 pb-9">
        <div className="wrap">
          <div className="font-heading text-[11px] tracking-wide uppercase text-brand-dim mb-3">
            <button onClick={() => onNavigate("home")} className="text-brand-dim hover:text-gold transition-colors">
              Home
            </button>
            <span className="mx-1.5">›</span>Bookmaker Reviews
          </div>
          <p className="eyebrow">⭐ Expert Reviews — April 2025</p>
          <h1 className="page-hero-title">
            Best <em>Online Betting Sites</em>
            <br />
            in South Africa
          </h1>
          <p className="sec-desc">
            Independent ratings based on bonuses, odds, game selection, mobile experience and
            withdrawal speed.
          </p>
        </div>
      </div>

      <ComparisonTable />

      <section className="sec">
        <div className="wrap">
          <h2 className="sec-title mb-7">
            Detailed <span>Reviews</span>
          </h2>
          <div className="flex flex-col gap-5">
            {bookmakers.slice(0, 3).map((b) => (
              <ReviewCard key={b.id} bookmaker={b} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
