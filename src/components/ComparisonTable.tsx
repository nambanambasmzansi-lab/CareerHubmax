import { bookmakers } from "@/data/siteData";

export function ComparisonTable() {
  return (
    <div className="mt-7 overflow-x-auto rounded-xl border border-brand-border">
      <table className="w-full border-collapse min-w-[680px] text-[13px]">
        <thead>
          <tr className="bg-navy-4">
            <th className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted px-3.5 py-3 text-left border-b border-brand-border whitespace-nowrap">
              Bookmaker
            </th>
            <th className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted px-3.5 py-3 text-left border-b border-brand-border whitespace-nowrap">
              Welcome Bonus
            </th>
            <th className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted px-3.5 py-3 text-left border-b border-brand-border whitespace-nowrap">
              Rating
            </th>
            <th className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted px-3.5 py-3 text-left border-b border-brand-border whitespace-nowrap">
              Slots
            </th>
            <th className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted px-3.5 py-3 text-left border-b border-brand-border whitespace-nowrap">
              Live
            </th>
            <th className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted px-3.5 py-3 text-left border-b border-brand-border whitespace-nowrap">
              App
            </th>
            <th className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted px-3.5 py-3 text-left border-b border-brand-border whitespace-nowrap">
              Min Dep
            </th>
            <th className="font-heading text-[10px] font-bold tracking-wider uppercase text-brand-muted px-3.5 py-3 text-left border-b border-brand-border whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {bookmakers.map((b, i) => (
            <tr
              key={b.id}
              className={`border-b border-brand-border transition-colors hover:bg-navy-3 ${
                i === 0 ? "bg-[rgba(200,149,42,.06)]" : ""
              }`}
            >
              <td className="px-3.5 py-3.5 align-middle">
                {b.logo ? (
                  <div className="flex items-center gap-1.5">
                    <img
                      src={b.logo}
                      alt={b.name}
                      loading="lazy"
                      width={95}
                      height={26}
                      className="h-[26px] w-auto max-w-[95px] object-contain"
                    />
                    {b.badge && (
                      <span className="font-heading text-[9px] font-bold tracking-wider uppercase bg-brand-red text-white px-1.5 py-[3px] rounded-sm">
                        {b.badge}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="font-heading text-[13px] font-bold uppercase text-brand-text">
                    {b.logoText}
                  </div>
                )}
              </td>
              <td className="px-3.5 py-3.5 align-middle">
                <div className="font-heading text-base font-bold text-gold">{b.bonus}</div>
                <div className="text-[10px] text-brand-muted font-heading uppercase tracking-wide mt-0.5">
                  {b.bonusSub}
                </div>
              </td>
              <td className="px-3.5 py-3.5 align-middle">
                <div className="text-gold tracking-wider text-xs">{b.stars}</div>
                <div className="text-[10px] text-brand-muted mt-0.5 font-heading">
                  {b.rating}/5
                </div>
              </td>
              <td className="px-3.5 py-3.5 align-middle">
                <span
                  className={`inline-block font-heading text-[9px] font-bold tracking-wider uppercase px-1.5 py-[3px] rounded-sm ${
                    b.hasSlots ? "bg-brand-green text-white" : "bg-brand-border text-brand-dim"
                  }`}
                >
                  {b.hasSlots ? "Yes" : "No"}
                </span>
              </td>
              <td className="px-3.5 py-3.5 align-middle">
                <span
                  className={`inline-block font-heading text-[9px] font-bold tracking-wider uppercase px-1.5 py-[3px] rounded-sm ${
                    b.hasLive ? "bg-brand-green text-white" : "bg-brand-border text-brand-dim"
                  }`}
                >
                  {b.hasLive ? "Yes" : "No"}
                </span>
              </td>
              <td className="px-3.5 py-3.5 align-middle">
                <span
                  className={`inline-block font-heading text-[9px] font-bold tracking-wider uppercase px-1.5 py-[3px] rounded-sm ${
                    b.app === "Web Only" ? "bg-brand-border text-brand-dim" : "bg-brand-green text-white"
                  }`}
                >
                  {b.app}
                </span>
              </td>
              <td className="px-3.5 py-3.5 align-middle text-brand-text">{b.minDeposit}</td>
              <td className="px-3.5 py-3.5 align-middle">
                <a
                  href={b.link}
                  target="_blank"
                  rel="noopener sponsored"
                  className="btn-gold btn-sm"
                >
                  Claim →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
