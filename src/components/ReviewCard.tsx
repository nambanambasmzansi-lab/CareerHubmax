import type { bookmakers } from "@/data/siteData";

type Bookmaker = (typeof bookmakers)[number];

interface ReviewCardProps {
  bookmaker: Bookmaker;
}

export function ReviewCard({ bookmaker }: ReviewCardProps) {
  return (
    <div className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-brand-border-light hover:shadow-card-sm reveal">
      <div className="bg-navy-4 p-5 flex items-center gap-3.5 border-b border-brand-border">
        {bookmaker.logo ? (
          <img
            src={bookmaker.logo}
            alt={bookmaker.name}
            loading="lazy"
            width={110}
            height={36}
            className="h-9 w-auto max-w-[110px] object-contain"
          />
        ) : (
          <span className="font-heading text-lg font-bold uppercase tracking-wider text-brand-text">
            {bookmaker.logoText}
          </span>
        )}
        {bookmaker.badge && (
          <span className="tag tag-hot ml-2 text-[9px]">{bookmaker.badge}</span>
        )}
        <div className="ml-auto text-right">
          <div className="font-heading text-[26px] font-bold text-gold leading-none">
            {bookmaker.rating}/5
          </div>
          <div className="text-gold tracking-wider text-[13px]">★★★★★</div>
        </div>
      </div>
      <div className="p-4 px-5">
        <div className="font-heading text-lg font-bold text-gold mb-1">
          {bookmaker.bonus}
        </div>
        <p className="text-xs text-brand-muted mb-2.5">{bookmaker.bonusSub}</p>
        <div className="grid grid-cols-2 gap-3 mb-3.5">
          <div>
            <div className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted mb-1.5">
              ✅ Pros
            </div>
            {bookmaker.pros?.map((p, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-brand-muted mb-1 leading-snug">
                <span className="text-brand-green font-bold shrink-0">✓</span>
                {p}
              </div>
            ))}
          </div>
          <div>
            <div className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted mb-1.5">
              ❌ Cons
            </div>
            {bookmaker.cons?.map((c, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-brand-muted mb-1 leading-snug">
                <span className="text-brand-red font-bold shrink-0">✗</span>
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between pt-3.5 border-t border-brand-border flex-wrap gap-2.5">
          <span className="text-xs text-brand-muted font-heading uppercase tracking-wide">
            Min Deposit: <strong className="text-brand-text">R{bookmaker.minDeposit}</strong>
          </span>
          <a
            href={bookmaker.link}
            target="_blank"
            rel="noopener sponsored"
            className="btn-gold btn-sm"
          >
            Claim Bonus →
          </a>
        </div>
      </div>
    </div>
  );
}
