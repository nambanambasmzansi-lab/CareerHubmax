import { AppCard } from "@/components/AppCard";
import { apps } from "@/data/siteData";
import type { PageKey } from "@/data/siteData";

interface AppsPageProps {
  onNavigate: (page: PageKey) => void;
}

export function AppsPage({ onNavigate }: AppsPageProps) {
  return (
    <main className="animate-page-in">
      <div className="bg-navy-3 border-b border-brand-border py-10 pb-9">
        <div className="wrap">
          <div className="font-heading text-[11px] tracking-wide uppercase text-brand-dim mb-3">
            <button onClick={() => onNavigate("home")} className="text-brand-dim hover:text-gold transition-colors">
              Home
            </button>
            <span className="mx-1.5">›</span>Betting Apps
          </div>
          <p className="eyebrow">📱 Download &amp; Bet Data-Free</p>
          <h1 className="page-hero-title">
            Best <em>Betting Apps</em>
            <br />
            South Africa 2025
          </h1>
          <p className="sec-desc">
            Compare and download the best SA betting apps. Many offer data-free browsing.
          </p>
        </div>
      </div>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {apps.map((app, i) => (
              <AppCard key={i} {...app} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
