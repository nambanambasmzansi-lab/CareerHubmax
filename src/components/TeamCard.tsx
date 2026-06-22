interface TeamCardProps {
  avatar: string;
  name: string;
  role: string;
  bio: string;
}

export function TeamCard({ avatar, name, role, bio }: TeamCardProps) {
  return (
    <div className="bg-navy-3 border border-brand-border rounded-xl p-6 text-center reveal">
      <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-gold-pale to-navy-4 border-2 border-gold mx-auto mb-3.5 flex items-center justify-center text-[28px]">
        {avatar}
      </div>
      <div className="font-heading text-[15px] font-bold uppercase tracking-wide text-brand-text mb-1">
        {name}
      </div>
      <div className="text-xs text-gold font-heading uppercase tracking-wider mb-2.5">{role}</div>
      <p className="text-[13px] text-brand-muted leading-relaxed">{bio}</p>
    </div>
  );
}
