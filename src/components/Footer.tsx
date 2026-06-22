import { useState } from "react";
import type { PageKey } from "@/data/siteData";

interface FooterProps {
  onNavigate: (page: PageKey) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [showMobileCta, setShowMobileCta] = useState(true);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer role="contentinfo">
        <div className="bg-navy-4 border-t border-brand-border py-10">
          <div className="wrap">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="font-heading text-lg font-bold tracking-wider uppercase text-white mb-3">
                  BETTING<span className="text-gold">GUIDE</span> SA
                </div>
                <p className="text-[13px] text-brand-muted leading-relaxed">
                  South Africa&apos;s #1 independent resource for sports betting, online slots and
                  casino reviews. Helping SA bettors since 2019.
                </p>
                <div className="mt-3.5 flex gap-2 flex-wrap">
                  <button onClick={() => onNavigate("about")} className="btn-outline btn-sm">
                    About Us
                  </button>
                  <button onClick={() => onNavigate("about")} className="btn-outline btn-sm">
                    Contact
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-[11px] font-bold tracking-[1.5px] uppercase text-brand-muted mb-3 pb-2.5 border-b border-brand-border">
                  Online Slots
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {[
                    "Spina Zonke Guide",
                    "Best Spina Zonke Games",
                    "10 Winning Strategies",
                    "Gates of Olympus Review",
                    "Betway Slots Guide",
                    "How to Buy Slot Features",
                  ].map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => onNavigate("slots")}
                        className="text-[13px] text-brand-muted hover:text-gold hover:pl-1 transition-all text-left"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-[11px] font-bold tracking-[1.5px] uppercase text-brand-muted mb-3 pb-2.5 border-b border-brand-border">
                  Sports Betting
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {[
                    "Best Betting Sites SA",
                    "How to Bet on Soccer",
                    "How to Bet on Rugby",
                    "How to Bet on Cricket",
                    "Best Multibet Bonuses",
                    "Horse Racing Betting",
                  ].map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => onNavigate(link.includes("Horse") ? "racing" : "sports")}
                        className="text-[13px] text-brand-muted hover:text-gold hover:pl-1 transition-all text-left"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-[11px] font-bold tracking-[1.5px] uppercase text-brand-muted mb-3 pb-2.5 border-b border-brand-border">
                  Bonuses &amp; More
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {[
                    "All Welcome Bonuses",
                    "Betway R2,000 Bonus",
                    "Hollywoodbets Free Spins",
                    "Lucky Numbers Results",
                    "Fafi Dream Guide",
                    "Betting Apps SA",
                  ].map((link) => (
                    <li key={link}>
                      <button
                        onClick={() =>
                          onNavigate(
                            link.includes("Lucky") || link.includes("Fafi")
                              ? "lucky"
                              : link.includes("Apps")
                              ? "apps"
                              : "bonuses"
                          )
                        }
                        className="text-[13px] text-brand-muted hover:text-gold hover:pl-1 transition-all text-left"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy-2 border-t border-brand-border py-4">
          <div className="wrap flex items-center justify-between gap-3.5 flex-wrap">
            <p className="text-xs text-brand-dim leading-relaxed">
              For more information visit{" "}
              <a
                href="http://www.responsiblegambling.co.za/"
                target="_blank"
                rel="noopener"
                className="text-brand-dim underline hover:text-gold transition-colors"
              >
                responsiblegambling.co.za
              </a>{" "}
              |{" "}
              <a href="tel:0800006008" className="text-brand-dim underline hover:text-gold transition-colors">
                0800 006 008
              </a>{" "}
              | National Gambling Board
            </p>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="bg-navy-3 border border-brand-border rounded-md px-2.5 py-1 font-heading text-[9px] font-bold tracking-wider uppercase text-brand-dim">
                18+ Only
              </span>
              <span className="bg-navy-3 border border-brand-border rounded-md px-2.5 py-1 font-heading text-[9px] font-bold tracking-wider uppercase text-brand-dim">
                🎗 Gamble Responsibly
              </span>
              <span className="bg-navy-3 border border-brand-border rounded-md px-2.5 py-1 font-heading text-[9px] font-bold tracking-wider uppercase text-brand-dim">
                Licensed SA
              </span>
              <button
                onClick={scrollToTop}
                className="bg-transparent border-none text-brand-dim font-heading text-[11px] tracking-wide uppercase flex items-center gap-1 hover:text-gold transition-colors"
              >
                ↑ Back to Top
              </button>
            </div>
          </div>
        </div>

        <div className="bg-navy border-t border-brand-border py-3 text-center">
          <p className="text-[11px] text-brand-dim font-heading tracking-wide">
            Copyright &copy; {new Date().getFullYear()} Betting Guide SA — All Rights Reserved
            <button onClick={() => onNavigate("about")} className="text-brand-dim mx-1.5 hover:text-gold transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate("about")} className="text-brand-dim mx-1.5 hover:text-gold transition-colors">
              Terms &amp; Conditions
            </button>
            <button onClick={() => onNavigate("about")} className="text-brand-dim mx-1.5 hover:text-gold transition-colors">
              Responsible Gambling
            </button>
          </p>
        </div>
      </footer>

      {/* Mobile CTA */}
      {showMobileCta && (
        <div
          className="md:hidden fixed bottom-0 left-0 right-0 z-[800] bg-navy-4 border-t border-brand-border px-4 py-2.5 flex items-center gap-2.5"
          role="complementary"
          aria-label="Current best offer"
        >
          <div className="flex-1 min-w-0">
            <div className="font-heading text-[10px] tracking-wide uppercase text-brand-muted">
              🔥 Best Offer Right Now
            </div>
            <div className="font-heading text-[15px] font-bold text-gold leading-none">
              Easybet — R50 FREE (No Deposit)
            </div>
          </div>
          <a
            href="https://bit.ly/EasybetZA"
            target="_blank"
            rel="noopener sponsored"
            className="btn-gold btn-sm shrink-0"
          >
            Claim →
          </a>
          <button
            onClick={() => setShowMobileCta(false)}
            className="bg-transparent border-none text-brand-dim text-lg shrink-0"
            aria-label="Dismiss offer"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
