import { StatCard } from "@/components/StatCard";
import { TeamCard } from "@/components/TeamCard";
import { FAQ } from "@/components/FAQ";
import { team, faqItems } from "@/data/siteData";
import type { PageKey } from "@/data/siteData";

interface AboutPageProps {
  onNavigate: (page: PageKey) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <main className="animate-page-in">
      <div className="bg-navy-3 border-b border-brand-border py-10 pb-9">
        <div className="wrap">
          <div className="font-heading text-[11px] tracking-wide uppercase text-brand-dim mb-3">
            <button onClick={() => onNavigate("home")} className="text-brand-dim hover:text-gold transition-colors">
              Home
            </button>
            <span className="mx-1.5">›</span>About Us
          </div>
          <p className="eyebrow">ℹ Who We Are</p>
          <h1 className="page-hero-title">
            About <em>Betting Guide SA</em>
          </h1>
          <p className="sec-desc">
            South Africa&apos;s most trusted independent betting resource since 2019.
          </p>
        </div>
      </div>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <StatCard num="100k+" label="Monthly Readers" />
            <StatCard num="500+" label="Articles" />
            <StatCard num="11" label="Bookmakers" />
            <StatCard num="6yr" label="In Operation" />
          </div>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] font-bold uppercase tracking-wide text-brand-text mt-8 mb-3 pb-2 border-b border-brand-border">
              Our Mission
            </h2>
            <p className="text-[15px] text-brand-muted leading-relaxed mb-3.5">
              Betting Guide SA is South Africa&apos;s #1 independent betting resource. Our mission is
              to help SA bettors make better, more informed decisions about where to bet and how to
              bet safely.
            </p>
            <p className="text-[15px] text-brand-muted leading-relaxed mb-3.5">
              We are not owned by or affiliated with any bookmaker. All reviews and ratings are
              conducted independently.
            </p>
            <h2 className="font-heading text-[22px] font-bold uppercase tracking-wide text-brand-text mt-8 mb-3 pb-2 border-b border-brand-border">
              Responsible Gambling
            </h2>
            <p className="text-[15px] text-brand-muted leading-relaxed mb-3.5">
              Gambling should be entertainment, never a way to make money. If gambling is affecting
              your life, please reach out:
            </p>
            <ul className="mb-3.5">
              <li className="text-[15px] text-brand-muted leading-relaxed py-1 pl-5 relative">
                <span className="absolute left-0 text-gold text-xs top-2">→</span>
                <strong className="text-brand-text">National Responsible Gambling Programme:</strong>{" "}
                0800 006 008 (24/7 free helpline)
              </li>
              <li className="text-[15px] text-brand-muted leading-relaxed py-1 pl-5 relative">
                <span className="absolute left-0 text-gold text-xs top-2">→</span>
                <strong className="text-brand-text">Website:</strong>{" "}
                <a
                  href="http://www.responsiblegambling.co.za/"
                  target="_blank"
                  rel="noopener"
                  className="text-gold hover:underline"
                >
                  www.responsiblegambling.co.za
                </a>
              </li>
            </ul>
            <div className="bg-gold-pale border-l-[3px] border-gold px-5 py-3.5 rounded-r-md my-5">
              <p className="text-sm text-brand-text">
                ⚠ <strong>Important:</strong> All content on Betting Guide SA is for informational
                and entertainment purposes only. 18+ only. Please gamble responsibly.
              </p>
            </div>

            <h2 className="font-heading text-[22px] font-bold uppercase tracking-wide text-brand-text mt-8 mb-5 pb-2 border-b border-brand-border">
              Common <span className="text-gold">Questions</span>
            </h2>
            <FAQ items={faqItems.general} />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="sec-title mb-7">
            Meet Our <span>Experts</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
