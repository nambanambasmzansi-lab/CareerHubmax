interface DrawCardProps {
  name: string;
  time: string;
  balls: number[];
  bonus: number | null;
  desc: string;
}

export function DrawCard({ name, time, balls, bonus, desc }: DrawCardProps) {
  return (
    <div className="bg-navy-3 border border-brand-border rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-border-light reveal">
      <div className="font-heading text-[15px] font-bold uppercase tracking-wide text-brand-text mb-1.5">
        {name}
      </div>
      <div className="text-xs text-brand-muted font-heading uppercase tracking-wide mb-3">
        ⏰ {time}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3.5">
        {balls.map((b, i) => (
          <div
            key={i}
            className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-heading text-sm font-bold text-black"
          >
            {b}
          </div>
        ))}
        {bonus !== null && (
          <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-brand-red to-[#f06070] flex items-center justify-center font-heading text-sm font-bold text-white">
            {bonus}
          </div>
        )}
      </div>
      <p className="text-xs text-brand-muted leading-relaxed mb-4">{desc}</p>
      <a
        href="https://bit.ly/hollyfree50gmb"
        target="_blank"
        rel="noopener sponsored"
        className="btn-gold btn-full btn-sm"
      >
        Play Lucky Numbers →
      </a>
    </div>
  );
}
