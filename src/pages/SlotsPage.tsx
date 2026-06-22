import { PostCard } from "@/components/PostCard";
import type { PageKey } from "@/data/siteData";
import { posts } from "@/data/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SlotsPageProps {
  onNavigate: (page: PageKey) => void;
}

export function SlotsPage({ onNavigate }: SlotsPageProps) {
  useScrollReveal();

  const slotPosts = [
    posts[0],
    posts[1],
    posts[2],
    { img: "https://www.bettingguide.co.za/wp-content/uploads/2022/11/Spina-Zonke-Demo-Hollywoodbets-South-Africa.png", tag: "review" as const, tagLabel: "Review", title: "Spina Zonke Demo — Watch and Learn How To Play Popular Slots", date: "November 2024", read: "7 min", page: "slots" },
    { img: "https://www.bettingguide.co.za/wp-content/uploads/2022/11/Gates-of-Olympus-Bonus-Buy-Pragmatic-Play-South-Africa-1.jpg", tag: "tip" as const, tagLabel: "Tip", title: "How to Buy Features on Pragmatic Play Slots — Bonus Buy Guide", date: "October 2024", read: "6 min", page: "slots" },
    { img: "https://www.bettingguide.co.za/wp-content/uploads/2022/11/Old-School-Spina-Zonke-Games.png", tag: "review" as const, tagLabel: "Review", title: "Old School Spina Zonke Games | The Classic Slots That Started It All", date: "September 2024", read: "8 min", page: "slots" },
  ];

  return (
    <main className="animate-page-in">
      <div className="bg-navy-3 border-b border-brand-border py-10 pb-9">
        <div className="wrap flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="font-heading text-[11px] tracking-wide uppercase text-brand-dim mb-3">
              <button onClick={() => onNavigate("home")} className="text-brand-dim hover:text-gold transition-colors">
                Home
              </button>
              <span className="mx-1.5">›</span>Online Slots
            </div>
            <p className="eyebrow">🎰 Spina Zonke &amp; Online Slots SA</p>
            <h1 className="page-hero-title">
              Online <em>Slots</em> &amp; Spina
              <br />
              Zonke Guide 2025
            </h1>
            <p className="sec-desc">
              Everything about online slot games in SA — Spina Zonke, Betway Spins, Pragmatic Play,
              Habanero, NetEnt and more.
            </p>
          </div>
          <a
            href="https://bit.ly/hollyfree50gmb"
            target="_blank"
            rel="noopener sponsored"
            className="btn-gold btn-lg"
          >
            Play Spina Zonke Free →
          </a>
        </div>
      </div>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-8 items-start">
            <div>
              <div className="flex items-end justify-between gap-3 flex-wrap mb-5">
                <h2 className="sec-title">
                  Spina Zonke <span>Articles</span>
                </h2>
                <div className="flex items-center gap-1 flex-wrap">
                  {["All", "Reviews", "Tips"].map((tab, i) => (
                    <button
                      key={tab}
                      className={`font-heading text-[11px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-md border transition-all ${
                        i === 0
                          ? "bg-gold border-gold text-black"
                          : "bg-transparent border-brand-border text-brand-muted hover:border-brand-border-light"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {slotPosts.map((post, i) => (
                  <PostCard key={i} {...post} onNavigate={(p) => onNavigate(p as PageKey)} />
                ))}
              </div>
            </div>
            <aside className="flex flex-col gap-5">
              <div className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden">
                <div className="bg-navy-4 px-4 py-3 border-b border-brand-border">
                  <h3 className="font-heading text-xs font-bold tracking-wider uppercase text-brand-text">
                    🎯 Play Spina Zonke
                  </h3>
                </div>
                <div className="px-4 py-3">
                  <p className="text-[13px] text-brand-muted mb-3 leading-relaxed">
                    Access Spina Zonke at Hollywoodbets — SA&apos;s #1 Spina Zonke platform. Register
                    free and get 50 bonus spins.
                  </p>
                  <a
                    href="https://bit.ly/hollyfree50gmb"
                    target="_blank"
                    rel="noopener sponsored"
                    className="btn-gold btn-full btn-sm"
                  >
                    Play Now — 50 Free Spins →
                  </a>
                </div>
              </div>
              <div className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden">
                <div className="bg-navy-4 px-4 py-3 border-b border-brand-border">
                  <h3 className="font-heading text-xs font-bold tracking-wider uppercase text-brand-text">
                    🔢 Slot Stats
                  </h3>
                </div>
                <div className="px-4 py-3 grid grid-cols-2 gap-2.5">
                  {[
                    { num: "500+", label: "Games" },
                    { num: "96%", label: "Avg RTP" },
                    { num: "R0.10", label: "Min Bet" },
                    { num: "10,000×", label: "Max Win" },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-2.5 bg-navy-2 rounded-md">
                      <div className="font-heading text-[22px] font-bold text-gold">{s.num}</div>
                      <div className="font-heading text-[9px] uppercase tracking-wide text-brand-muted">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] font-bold uppercase tracking-wide text-brand-text mt-8 mb-3 pb-2 border-b border-brand-border">
              What is Spina Zonke?
            </h2>
            <p className="text-[15px] text-brand-muted leading-relaxed mb-3.5">
              Spina Zonke is the term used in South Africa for online slot games, particularly on
              the Hollywoodbets platform. The phrase comes from Zulu and loosely translates to &quot;spin
              everything&quot; — a fitting name for SA&apos;s most popular form of online gambling
              entertainment.
            </p>
            <div className="bg-gold-pale border-l-[3px] border-gold px-5 py-3.5 rounded-r-md my-5">
              <p className="text-sm text-brand-text">
                💡 <strong>Tip:</strong> The best time to try Spina Zonke is when you have a free bet
                or free spins bonus — explore different games without risking your own money first.
              </p>
            </div>
            <h2 className="font-heading text-[22px] font-bold uppercase tracking-wide text-brand-text mt-8 mb-3 pb-2 border-b border-brand-border">
              10 Spina Zonke Winning Strategies
            </h2>
            <ul className="mb-3.5">
              {[
                "Always check the RTP percentage before playing — aim for 96% or higher",
                "Understand volatility: high = bigger but rarer wins; low = smaller but more frequent wins",
                "Set a strict budget before you start and stick to it",
                "Use free spins and bonuses to explore new games first",
                "Try demo mode to learn each game's mechanics",
                "Set a win limit and a loss limit before playing",
                "Take regular breaks to stay clear-headed",
                "Choose games with bonus features (free spins, multipliers) for bigger potential payouts",
                "Never chase losses — if you've hit your limit, stop",
                "Play at licensed SA bookmakers only",
              ].map((tip, i) => (
                <li
                  key={i}
                  className="text-[15px] text-brand-muted leading-relaxed py-1 pl-5 relative"
                >
                  <span className="absolute left-0 text-gold text-xs top-2">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
