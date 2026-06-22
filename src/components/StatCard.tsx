interface StatCardProps {
  num: string;
  label: string;
}

export function StatCard({ num, label }: StatCardProps) {
  return (
    <div className="bg-navy-3 border border-brand-border rounded-xl p-5 text-center reveal">
      <div className="font-heading text-4xl font-bold text-gold leading-none mb-1.5">{num}</div>
      <div className="font-heading text-[11px] font-semibold tracking-wider uppercase text-brand-muted">
        {label}
      </div>
    </div>
  );
}
