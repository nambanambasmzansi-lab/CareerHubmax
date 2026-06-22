interface SportCardProps {
  emoji: string;
  title: string;
  desc: string;
  link: string;
  page: string;
  onNavigate: (page: string) => void;
}

export function SportCard({ emoji, title, desc, page, onNavigate }: SportCardProps) {
  return (
    <div className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-brand-border-light hover:shadow-card-sm reveal cursor-pointer group">
      <div className="h-[140px] bg-gradient-to-br from-navy-3 to-navy-4 relative bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,15,30,.8)] to-transparent" />
        <div className="absolute bottom-3 left-4 text-[32px]">{emoji}</div>
      </div>
      <div className="p-4">
        <div className="font-heading text-base font-bold uppercase tracking-wide text-brand-text mb-2">
          {title}
        </div>
        <p className="text-[13px] text-brand-muted leading-snug mb-3.5">{desc}</p>
        <button
          onClick={() => onNavigate(page)}
          className="btn-outline btn-sm btn-full"
        >
          View Guides →
        </button>
      </div>
    </div>
  );
}
