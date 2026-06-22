interface PostCardProps {
  img: string;
  tag: "tip" | "review" | "news";
  tagLabel: string;
  title: string;
  date: string;
  read: string;
  page: string;
  excerpt?: string;
  onNavigate: (page: string) => void;
}

export function PostCard({ img, tag, tagLabel, title, date, read, page, excerpt, onNavigate }: PostCardProps) {
  return (
    <article className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-card-sm hover:border-brand-border-light reveal flex flex-col">
      <div className="relative pt-[58%] overflow-hidden bg-navy-4 group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.07]"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,15,30,.65)] to-transparent" />
        <div className="absolute top-2.5 left-2.5">
          <span className={`tag tag-${tag}`}>{tagLabel}</span>
        </div>
      </div>
      <div className="p-3.5 pb-4 flex flex-col gap-2 flex-1">
        <button
          onClick={() => onNavigate(page)}
          className="font-heading text-sm font-semibold leading-snug text-brand-text text-left hover:text-gold transition-colors"
        >
          {title}
        </button>
        {excerpt && <p className="text-[13px] text-brand-muted leading-snug">{excerpt}</p>}
        <div className="text-[11px] text-brand-dim font-heading tracking-wide uppercase flex items-center gap-2.5 mt-auto">
          <span>{date}</span>
          <span>·</span>
          <span>{read} read</span>
        </div>
      </div>
    </article>
  );
}
