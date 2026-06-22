import { Check } from "lucide-react";

export function Newsletter() {
  return (
    <div className="py-14 bg-gradient-to-br from-navy-3 to-navy-4 border-t border-b border-brand-border">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">Join 100,000+ SA Bettors</p>
            <h2 className="font-heading text-[clamp(22px,3.5vw,36px)] font-bold leading-tight text-white mb-3">
              Get <em className="text-gold not-italic">Bonus Alerts</em>
              <br />
              Before Everyone Else
            </h2>
            <p className="text-[15px] text-brand-muted">
              Weekly email with the latest free bets, free spins and exclusive promotions.
            </p>
            <div className="mt-4 flex flex-col gap-1.5">
              {["Exclusive bonus codes", "Weekly Spina Zonke tips", "Lucky Numbers results every draw day"].map((perk) => (
                <div key={perk} className="flex items-center gap-2.5 text-[13px] text-brand-muted">
                  <span className="w-[22px] h-[22px] bg-gold-pale rounded-full flex items-center justify-center text-[11px] shrink-0">
                    <Check className="w-3 h-3 text-gold" />
                  </span>
                  {perk}
                </div>
              ))}
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="First name"
              aria-label="First name"
              className="w-full bg-navy-2 border border-brand-border-light rounded-md text-brand-text text-[15px] px-4 py-3 outline-none mb-2.5 transition-colors focus:border-gold"
            />
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="w-full bg-navy-2 border border-brand-border-light rounded-md text-brand-text text-[15px] px-4 py-3 outline-none mb-2.5 transition-colors focus:border-gold"
            />
            <button className="btn-gold btn-lg btn-full">🔔 Subscribe — It&apos;s Free</button>
            <p className="text-[11px] text-brand-dim text-center mt-1">
              No spam. Unsubscribe anytime.{" "}
              <a href="#about" className="text-brand-dim hover:text-gold transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
