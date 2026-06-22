import { useState, useCallback } from "react";
import { DrawCard } from "@/components/DrawCard";
import { PostCard } from "@/components/PostCard";
import { draws, drawSchedule } from "@/data/siteData";
import type { PageKey } from "@/data/siteData";

interface LuckyPageProps {
  onNavigate: (page: PageKey) => void;
}

export function LuckyPage({ onNavigate }: LuckyPageProps) {
  const [luckyNums, setLuckyNums] = useState<number[]>([]);
  const [luckyBonus, setLuckyBonus] = useState<number | null>(null);

  const generateNumbers = useCallback(() => {
    const nums = new Set<number>();
    while (nums.size < 6) nums.add(Math.floor(Math.random() * 49) + 1);
    setLuckyNums([...nums].sort((a, b) => a - b));
    setLuckyBonus(Math.floor(Math.random() * 20) + 1);
  }, []);

  return (
    <main className="animate-page-in">
      <div className="bg-navy-3 border-b border-brand-border py-10 pb-9">
        <div className="wrap">
          <div className="font-heading text-[11px] tracking-wide uppercase text-brand-dim mb-3">
            <button onClick={() => onNavigate("home")} className="text-brand-dim hover:text-gold transition-colors">
              Home
            </button>
            <span className="mx-1.5">›</span>Lucky Numbers
          </div>
          <p className="eyebrow">🍀 Lotteries &amp; Lucky Numbers SA</p>
          <h1 className="page-hero-title">
            <em>Lucky Numbers</em> &amp; Lotto
            <br />
            Guide South Africa
          </h1>
          <p className="sec-desc">
            Lucky numbers, Fafi, Daily Lotto, Powerball, UK 49&apos;s and international lotteries.
            Results, guides and predictions.
          </p>
        </div>
      </div>

      <section className="sec sec-alt">
        <div className="wrap">
          <p className="eyebrow">🎯 Today&apos;s Draws</p>
          <h2 className="sec-title mb-6">
            Latest <span>Draw Results</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {draws.map((d, i) => (
              <DrawCard key={i} {...d} />
            ))}
          </div>
          <p className="text-xs text-brand-dim mt-3.5 text-center">
            ⚠ Example numbers shown for illustration only. Always verify at your bookmaker. T&amp;Cs
            apply.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-8 items-start">
            <div>
              <h2 className="sec-title mb-5">
                Lucky Numbers <span>Guides</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <PostCard
                  img="https://www.bettingguide.co.za/wp-content/uploads/2021/07/betting-guide-footer-lucky-numbers-and-lotto-icon.png"
                  tag="tip"
                  tagLabel="Guide"
                  title="Lucky Numbers &amp; Fafi Dream Guide — Every Number Explained"
                  date="April 2025"
                  read="15 min"
                  page="lucky"
                  onNavigate={(p) => onNavigate(p as PageKey)}
                />
                <PostCard
                  img="https://www.bettingguide.co.za/wp-content/uploads/2021/07/betting-guide-footer-lucky-numbers-and-lotto-icon.png"
                  tag="tip"
                  tagLabel="Tip"
                  title="How to Make Lucky Numbers Predictions — Expert Strategies"
                  date="March 2025"
                  read="8 min"
                  page="lucky"
                  onNavigate={(p) => onNavigate(p as PageKey)}
                />
                <PostCard
                  img="https://www.bettingguide.co.za/wp-content/uploads/2022/02/Hollywoodbets-new-logo-2022-1.png"
                  tag="review"
                  tagLabel="Review"
                  title="Hollywoodbets Dream Guide — Every Number &amp; Its Meaning"
                  date="February 2025"
                  read="20 min"
                  page="lucky"
                  onNavigate={(p) => onNavigate(p as PageKey)}
                />
              </div>
            </div>
            <aside className="flex flex-col gap-5">
              {/* Lucky Numbers Generator */}
              <div className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden">
                <div className="bg-navy-4 px-4 py-3 border-b border-brand-border">
                  <h3 className="font-heading text-xs font-bold tracking-wider uppercase text-brand-text">
                    🎯 Lucky Numbers Generator
                  </h3>
                </div>
                <div className="px-4 py-3">
                  <p className="text-[13px] text-brand-muted mb-3.5 leading-relaxed">
                    Generate random lucky numbers. For entertainment only.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3.5" aria-live="polite">
                    {luckyNums.map((n, i) => (
                      <div
                        key={i}
                        className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-heading text-sm font-bold text-black"
                      >
                        {n}
                      </div>
                    ))}
                    {luckyBonus !== null && (
                      <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-brand-red to-[#f06070] flex items-center justify-center font-heading text-sm font-bold text-white">
                        {luckyBonus}
                      </div>
                    )}
                  </div>
                  <button onClick={generateNumbers} className="btn-gold btn-full btn-sm">
                    🎲 Generate Lucky Numbers
                  </button>
                  <p className="text-[10px] text-brand-dim text-center mt-2">
                    For entertainment only. Results are always random.
                  </p>
                </div>
              </div>

              {/* Draw Schedule */}
              <div className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden">
                <div className="bg-navy-4 px-4 py-3 border-b border-brand-border">
                  <h3 className="font-heading text-xs font-bold tracking-wider uppercase text-brand-text">
                    📅 Draw Schedule
                  </h3>
                </div>
                <div className="px-4 py-3 flex flex-col">
                  {drawSchedule.map((d) => (
                    <div
                      key={d.name}
                      className="py-2 border-b border-brand-border last:border-b-0 text-sm text-brand-text"
                    >
                      {d.name} — <span className="text-gold">{d.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
