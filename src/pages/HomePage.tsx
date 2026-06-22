import { OfferCard } from "@/components/OfferCard";
import { PostCard } from "@/components/PostCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PromoCard } from "@/components/PromoCard";
import { Newsletter } from "@/components/Newsletter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { bookmakers, posts, promos, trendingPosts } from "@/data/siteData";
import type { PageKey } from "@/data/siteData";

interface HomePageProps {
  onNavigate: (page: PageKey) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  useScrollReveal();

  const featuredBookmakers = bookmakers.slice(0, 4);

  return (
    <main className="animate-page-in">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[460px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/hero-bg.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,15,30,.97)] via-[rgba(8,15,30,.82)] to-[rgba(8,15,30,.25)]" />
        </div>
        <div className="wrap relative z-[1] py-14">
          <div className="max-w-[700px] animate-fade-up">
            <p className="eyebrow">⭐ South Africa&apos;s #1 Betting Resource</p>
            <h1 className="page-hero-title">
              Best Online Betting Sites,
              <br />
              <em>Bonuses &amp; Slots</em> in SA — 2025
            </h1>
            <p className="text-base text-[rgba(221,228,240,.8)] mb-6 max-w-lg leading-relaxed">
              Compare bookmakers, claim the best welcome bonuses and read expert reviews of Spina
              Zonke slots, live casino and sports betting markets. Updated weekly.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => onNavigate("bonuses")} className="btn-gold btn-lg">
                Compare All Bonuses
              </button>
              <button onClick={() => onNavigate("reviews")} className="btn-outline">
                View Bookmakers
              </button>
            </div>
            <div className="flex items-center gap-4 mt-4 font-heading text-[11px] tracking-wide uppercase text-brand-dim flex-wrap">
              <span>📅 Updated April 2025</span>
              <span>🇿🇦 South Africa</span>
              <span>100k+ Monthly Readers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-navy-3 border-t border-b border-brand-border py-2.5">
        <div className="wrap flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
          {["🛡 Licensed & Regulated", "🕐 Updated Weekly", "👥 100k+ Monthly Readers"].map(
            (item, i, arr) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-heading text-[11px] tracking-wide uppercase text-brand-muted whitespace-nowrap">
                  {item}
                </span>
                {i < arr.length - 1 && <div className="w-px h-4 bg-brand-border" />}
              </div>
            )
          )}
          <div className="w-px h-4 bg-brand-border" />
          <span className="font-heading text-[11px] tracking-wide uppercase text-brand-red whitespace-nowrap">
            ⚠ 18+ Only
          </span>
          <div className="w-px h-4 bg-brand-border" />
          <span className="font-heading text-[11px] tracking-wide uppercase text-brand-muted whitespace-nowrap">
            ✅ Honest Independent Reviews
          </span>
        </div>
      </div>

      {/* Best Welcome Bonuses */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div className="flex items-end justify-between gap-3 flex-wrap mb-6">
            <div>
              <p className="eyebrow">🔥 Live Right Now</p>
              <h2 className="sec-title">
                Best <span>Welcome Bonuses</span> in SA
              </h2>
            </div>
            <button onClick={() => onNavigate("bonuses")} className="btn-outline btn-sm">
              See All Bonuses →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredBookmakers.map((b) => (
              <OfferCard
                key={b.id}
                bookmaker={b}
                featured={b.id === "betway"}
                badge={b.id === "betway" ? "Editor's Pick" : b.id === "easybet" ? "No Deposit!" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Link Strip */}
      <div className="overflow-x-auto scrollbar-hide border-b border-brand-border bg-navy">
        <div className="flex items-center gap-2 px-4 sm:px-6 lg:px-9 py-3.5 w-max">
          {["🎰 All Content", "⭐ Reviews", "💡 Tips", "📰 News", "🎯 Spina Zonke", "⚽ Soccer", "🃏 Casino", "🍀 Lucky Numbers"].map(
            (chip, i) => (
              <button
                key={chip}
                className={`font-heading text-[11px] font-semibold tracking-wide uppercase rounded-full px-4 py-2 whitespace-nowrap transition-all border ${
                  i === 0
                    ? "bg-gold-pale border-gold text-gold"
                    : "bg-navy-3 border-brand-border text-brand-muted hover:bg-gold-pale hover:border-gold hover:text-gold"
                }`}
              >
                {chip}
              </button>
            )
          )}
        </div>
      </div>

      {/* Articles + Sidebar */}
      <section className="sec">
        <div className="wrap">
          <div className="flex items-end justify-between gap-3 flex-wrap mb-6">
            <div>
              <p className="eyebrow">Latest Articles</p>
              <h2 className="sec-title">
                Spina Zonke <span>Reviews &amp; Tips</span>
              </h2>
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              {["All", "Reviews", "Tips", "News"].map((tab, i) => (
                <button
                  key={tab}
                  className={`font-heading text-[11px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-md border transition-all ${
                    i === 0
                      ? "bg-gold border-gold text-black"
                      : "bg-transparent border-brand-border text-brand-muted hover:border-brand-border-light hover:text-brand-text"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-8 items-start">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {posts.map((post, i) => (
                  <PostCard key={i} {...post} onNavigate={(p) => onNavigate(p as PageKey)} />
                ))}
              </div>
              <nav className="mt-9 flex justify-center items-center gap-1 flex-wrap" aria-label="Article pages">
                <span className="inline-flex items-center justify-center min-w-[40px] h-[40px] px-2.5 rounded-md border border-gold bg-gold text-black font-heading text-xs font-semibold">
                  1
                </span>
                {[2, 3].map((p) => (
                  <button
                    key={p}
                    onClick={() => onNavigate("slots")}
                    className="inline-flex items-center justify-center min-w-[40px] h-[40px] px-2.5 rounded-md border border-brand-border bg-navy-3 text-brand-muted font-heading text-xs font-semibold transition-colors hover:bg-gold hover:border-gold hover:text-black"
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => onNavigate("slots")}
                  className="inline-flex items-center justify-center min-w-[40px] h-[40px] px-2.5 rounded-md border border-brand-border bg-navy-3 text-brand-muted font-heading text-xs font-semibold transition-colors hover:bg-gold hover:border-gold hover:text-black"
                >
                  Next →
                </button>
              </nav>
            </div>
            <Sidebar onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Promo Scroll */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div className="flex items-end justify-between gap-3 flex-wrap mb-5">
            <div>
              <p className="eyebrow">Don&apos;t Miss Out</p>
              <h2 className="sec-title">
                Latest <span>Promotions</span>
              </h2>
            </div>
            <button onClick={() => onNavigate("promos")} className="btn-outline btn-sm">
              All Promos →
            </button>
          </div>
          <div className="flex gap-3.5 overflow-x-auto pb-1.5 snap-x snap-mandatory scrollbar-hide">
            {promos.map((p, i) => (
              <PromoCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}

function Sidebar({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  const topBookies = bookmakers.slice(0, 4);

  return (
    <aside className="flex flex-col gap-5">
      {/* Trending */}
      <div className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden">
        <div className="bg-navy-4 px-4 py-3 border-b border-brand-border">
          <h3 className="font-heading text-xs font-bold tracking-wider uppercase text-brand-text">
            🔥 Trending Now
          </h3>
        </div>
        <div className="px-4 py-3">
          {trendingPosts.map((post) => (
            <div key={post.num} className="flex items-center gap-3 py-2.5 border-b border-brand-border last:border-b-0">
              <div className="font-heading text-2xl text-brand-text w-7 shrink-0">{post.num}</div>
              <div>
                <button
                  onClick={() => onNavigate(post.page as PageKey)}
                  className="block text-brand-text text-xs font-heading leading-snug hover:text-gold transition-colors text-left"
                >
                  {post.title}
                </button>
                <span className={`tag tag-${post.tag} mt-1 text-[9px]`}>
                  {post.tag === "tip" ? "Tip" : "Review"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Bookmakers */}
      <div className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden">
        <div className="bg-navy-4 px-4 py-3 border-b border-brand-border">
          <h3 className="font-heading text-xs font-bold tracking-wider uppercase text-brand-text">
            🏆 Top Bookmakers
          </h3>
        </div>
        <div className="px-4 py-3">
          {topBookies.map((b) => (
            <div key={b.id} className="flex items-center gap-3 py-2.5 border-b border-brand-border last:border-b-0">
              {b.logo ? (
                <img
                  src={b.logo}
                  alt={b.name}
                  loading="lazy"
                  width={68}
                  height={28}
                  className="w-[68px] h-7 object-contain bg-white/5 rounded p-0.5 shrink-0"
                />
              ) : (
                <div className="font-heading text-xs font-bold uppercase text-brand-text w-[68px] shrink-0">
                  {b.name.substring(0, 3)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="font-heading text-[11px] font-bold uppercase text-brand-text truncate">
                  {b.name}
                </div>
                <div className="text-[11px] text-gold truncate">{b.bonus}</div>
              </div>
              <a
                href={b.link}
                target="_blank"
                rel="noopener sponsored"
                className="btn-gold btn-sm text-[10px] px-2.5 py-1 shrink-0"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Bonus Alerts */}
      <div className="bg-navy-3 border border-brand-border rounded-xl overflow-hidden">
        <div className="bg-navy-4 px-4 py-3 border-b border-brand-border">
          <h3 className="font-heading text-xs font-bold tracking-wider uppercase text-brand-text">
            📬 Bonus Alerts
          </h3>
        </div>
        <div className="px-4 py-3">
          <p className="text-[13px] text-brand-muted mb-2.5 leading-relaxed">
            Get the latest free bets and spin deals first.
          </p>
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email for bonus alerts"
            className="w-full bg-navy-2 border border-brand-border-light rounded-md text-brand-text text-[13px] px-3 py-2 outline-none mb-2 transition-colors focus:border-gold"
          />
          <button className="btn-gold btn-full btn-sm">Subscribe Free</button>
          <p className="text-[10px] text-brand-dim text-center mt-1.5">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </aside>
  );
}
