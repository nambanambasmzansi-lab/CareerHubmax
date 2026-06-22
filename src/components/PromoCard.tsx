interface PromoCardProps {
  book: string;
  amount: string;
  name: string;
  desc: string;
  expiry: string;
  link: string;
}

export function PromoCard({ book, amount, name, desc, expiry, link }: PromoCardProps) {
  return (
    <div className="bg-navy-3 border border-brand-border rounded-xl p-4 min-w-[270px] shrink-0 snap-start relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-gold group">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
      <div className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted mb-1.5">
        {book}
      </div>
      <div className="font-heading text-[28px] font-bold text-gold leading-none mb-1">
        {amount}
      </div>
      <div className="font-heading text-[13px] font-semibold text-brand-text mb-1.5">
        {name}
      </div>
      <p className="text-xs text-brand-muted leading-relaxed mb-3.5">{desc}</p>
      <div className="flex items-center justify-between pt-3 border-t border-brand-border">
        <span className="font-heading text-[10px] tracking-wide uppercase text-brand-dim">
          Ends: <strong className="text-brand-red">{expiry}</strong>
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener sponsored"
          className="btn-gold btn-sm"
        >
          Claim →
        </a>
      </div>
    </div>
  );
}
