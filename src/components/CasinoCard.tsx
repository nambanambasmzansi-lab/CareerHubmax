interface CasinoCardProps {
  emoji: string;
  name: string;
  provider: string;
  desc: string;
  rtp: string;
}

export function CasinoCard({ emoji, name, provider, desc, rtp }: CasinoCardProps) {
  return (
    <div className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-brand-border-light hover:shadow-card-sm reveal">
      <div className="h-[140px] bg-gradient-to-br from-navy-3 to-navy-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,15,30,.8)] to-transparent" />
        <div className="absolute bottom-3 left-4 text-[32px]">{emoji}</div>
      </div>
      <div className="p-4">
        <div className="font-heading text-base font-bold uppercase tracking-wide text-brand-text mb-1">
          {name}
        </div>
        <p className="text-[11px] text-brand-muted font-heading uppercase tracking-wider mb-2">
          {provider} · RTP: <span className="text-gold">{rtp}</span>
        </p>
        <p className="text-[13px] text-brand-muted leading-snug mb-3.5">{desc}</p>
        <button className="btn-outline btn-sm btn-full">Learn More →</button>
      </div>
    </div>
  );
}
