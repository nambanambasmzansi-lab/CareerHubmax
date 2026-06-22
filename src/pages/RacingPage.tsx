import type { PageKey } from "@/data/siteData";

interface RacingPageProps {
  onNavigate: (page: PageKey) => void;
}

export function RacingPage({ onNavigate }: RacingPageProps) {
  const steps = [
    { title: "Log in to Hollywoodbets", desc: "Go to the Hollywoodbets app and navigate to the Racing section." },
    { title: "Select Your Race and Bet Type", desc: "Choose from Win, Place, Each-Way, Exacta, Trifecta or Quartet pools." },
    { title: "Pick Your Horse(s)", desc: "Select the horse(s) you want to back. For exotic bets, select the correct finishing order." },
    { title: "Enter Stake and Confirm", desc: "Enter your stake, review your bet slip and confirm. Your bet is placed instantly." },
  ];

  return (
    <main className="animate-page-in">
      <div className="bg-navy-3 border-b border-brand-border py-10 pb-9">
        <div className="wrap">
          <div className="font-heading text-[11px] tracking-wide uppercase text-brand-dim mb-3">
            <button onClick={() => onNavigate("home")} className="text-brand-dim hover:text-gold transition-colors">
              Home
            </button>
            <span className="mx-1.5">›</span>Horse Racing
          </div>
          <p className="eyebrow">🏇 SA Horse Racing Betting Hub</p>
          <h1 className="page-hero-title">
            Horse <em>Racing Betting</em>
            <br />
            South Africa 2025
          </h1>
          <p className="sec-desc">
            Complete guide to horse racing in SA — tote betting, race cards, the Punters Challenge
            and more.
          </p>
        </div>
      </div>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] font-bold uppercase tracking-wide text-brand-text mt-8 mb-3 pb-2 border-b border-brand-border">
              Horse Racing in South Africa
            </h2>
            <p className="text-[15px] text-brand-muted leading-relaxed mb-3.5">
              South Africa has a rich horse racing tradition. Major venues include Greyville
              (Durban), Kenilworth (Cape Town), Turffontein (Johannesburg) and Fairview (Port
              Elizabeth). You can bet on SA and international races at multiple bookmakers.
            </p>
            <h2 className="font-heading text-[22px] font-bold uppercase tracking-wide text-brand-text mt-8 mb-3 pb-2 border-b border-brand-border">
              How to Place a Tote Bet on Hollywoodbets
            </h2>
            <div className="flex flex-col gap-3.5">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <div className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-heading text-sm font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-heading text-[13px] font-bold uppercase tracking-wide text-brand-text mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[13px] text-brand-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
