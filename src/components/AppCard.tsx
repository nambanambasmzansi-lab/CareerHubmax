interface AppCardProps {
  icon: string;
  name: string;
  developer: string;
  rating: number;
  android: boolean;
  ios: boolean;
  dataFree: boolean;
  features: string[];
  desc: string;
  link: string;
}

export function AppCard({ icon, name, developer, rating, android, ios, dataFree, features, desc, link }: AppCardProps) {
  return (
    <div className="bg-navy-3 border border-brand-border rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-brand-border-light reveal">
      <div className="flex items-center gap-3.5">
        <div className="w-[52px] h-[52px] rounded-xl bg-navy-4 flex items-center justify-center text-2xl shrink-0 border border-brand-border">
          {icon}
        </div>
        <div>
          <div className="font-heading text-[15px] font-bold uppercase tracking-wide text-brand-text">
            {name}{" "}
            {dataFree && (
              <span className="tag tag-new text-[9px] align-middle">Data-Free</span>
            )}
          </div>
          <div className="text-xs text-brand-muted">{developer}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gold text-[13px]">★★★★★</span>
        <span className="font-heading text-xs text-brand-muted">{rating}/5</span>
      </div>
      <p className="text-[13px] text-brand-muted leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {features.map((f, i) => (
          <span key={i} className="bg-navy-4 border border-brand-border rounded-sm font-heading text-[9px] font-bold tracking-wide uppercase text-brand-muted px-2 py-[3px]">
            {f}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        {android && (
          <span className="font-heading text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded border border-brand-green text-brand-green">
            📱 Android
          </span>
        )}
        {ios ? (
          <span className="font-heading text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded border border-brand-blue text-brand-blue">
            🍎 iOS
          </span>
        ) : (
          <span className="font-heading text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded border border-brand-border text-brand-muted">
            No iOS
          </span>
        )}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener"
        className="btn-gold btn-full btn-sm mt-auto"
      >
        Download App →
      </a>
    </div>
  );
}
