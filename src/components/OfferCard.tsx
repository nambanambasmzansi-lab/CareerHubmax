import type { bookmakers } from "@/data/siteData";

type Bookmaker = (typeof bookmakers)[number];

interface OfferCardProps {
  bookmaker: Bookmaker;
  featured?: boolean;
  badge?: string;
}

export function OfferCard({ bookmaker, featured = false, badge }: OfferCardProps) {
  return (
    <div
      className={`gold-gradient-top bg-navy-3 border border-brand-border rounded-xl p-5 flex flex-col gap-2.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-sm hover:border-gold reveal ${
        featured ? "!border-[rgba(217,53,69,.35)] before:!bg-gradient-to-r before:!from-brand-red before:!to-[#ff6b6b]" : ""
      }`}
    >
      {badge && (
        <span className="absolute top-3.5 right-3.5 bg-brand-red text-white font-heading text-[9px] font-bold tracking-wider uppercase px-2 py-[3px] rounded-sm z-10">
          {badge}
        </span>
      )}
      <div className="h-9 flex items-center">
        {bookmaker.logo ? (
          <img
            src={bookmaker.logo}
            alt={bookmaker.name}
            loading="lazy"
            width={110}
            height={32}
            className="h-8 w-auto max-w-[110px] object-contain"
          />
        ) : (
          <span className="font-heading text-base font-bold uppercase tracking-wider text-brand-text">
            {bookmaker.logoText}
          </span>
        )}
      </div>
      <div className="font-heading text-[clamp(22px,3vw,28px)] font-bold text-gold leading-none">
        {bookmaker.bonus}
      </div>
      <div className="text-[11px] text-brand-muted font-heading tracking-wide uppercase -mt-1">
        {bookmaker.bonusSub}
      </div>
      <p className="text-[13px] text-brand-muted leading-snug flex-1">
        {bookmaker.description}
      </p>
      <div className="flex items-center justify-between pt-2.5 border-t border-brand-border mt-auto">
        <div>
          <div className="text-gold text-[13px] tracking-wider">{bookmaker.stars}</div>
          <div className="font-heading text-[11px] text-brand-muted mt-0.5">
            {bookmaker.rating}/5
          </div>
        </div>
        <a
          href={bookmaker.link}
          target="_blank"
          rel="noopener sponsored"
          className="btn-gold btn-sm"
        >
          Claim Now →
        </a>
      </div>
      <p className="text-[10px] text-brand-dim text-center">T&Cs apply. 18+ only.</p>
    </div>
  );
}
