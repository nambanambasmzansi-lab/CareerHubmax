import { useState, useRef, useEffect, useCallback } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import { navItems, subnavItems } from "@/data/siteData";
import type { PageKey } from "@/data/siteData";
import { SearchOverlay } from "./SearchOverlay";

interface HeaderProps {
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const offcanvasRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeDropdowns = useCallback(() => setOpenDropdown(null), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-dropdown]")) closeDropdowns();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [closeDropdowns]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
        closeDropdowns();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeDropdowns]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen || searchOpen);
    return () => { document.body.classList.remove("no-scroll"); };
  }, [menuOpen, searchOpen]);

  const handleNav = (page: string) => {
    onNavigate(page as PageKey);
    closeMenu();
    closeDropdowns();
  };

  return (
    <>
      {/* Age Banner */}
      <AgeBanner />

      {/* Sponsor Ticker */}
      <Ticker />

      {/* Header */}
      <header
        id="site-header"
        className="sticky top-0 z-[900] bg-[rgba(8,15,30,.97)] backdrop-blur-sm border-b border-brand-border transition-shadow duration-200 [&.stuck]:shadow-[0_4px_24px_rgba(0,0,0,.6)]"
      >
        <div className="flex items-center justify-between h-[60px] gap-3.5 px-4 sm:px-6 lg:px-9 max-w-site mx-auto">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="font-heading text-xl font-bold tracking-wider uppercase text-white shrink-0"
          >
            BETTING<span className="text-gold">GUIDE</span>
            <sub className="text-[10px] text-brand-dim ml-1 align-middle">SA</sub>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map((item, i) =>
              "page" in item ? (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page!)}
                  className={`font-heading text-[11.5px] font-semibold tracking-wide uppercase px-2.5 h-[60px] flex items-center gap-1 bg-transparent border-none border-b-2 cursor-pointer whitespace-nowrap transition-colors ${
                    currentPage === item.page
                      ? "text-gold bg-gold-pale border-b-gold"
                      : "text-brand-muted border-b-transparent hover:text-gold hover:bg-gold-pale"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <div
                  key={i}
                  className="relative"
                  data-dropdown
                  onMouseEnter={() => setOpenDropdown(i)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  ref={(el) => { dropdownRefs.current[i] = el; }}
                >
                  <button
                    className={`font-heading text-[11.5px] font-semibold tracking-wide uppercase px-2.5 h-[60px] flex items-center gap-1 bg-transparent border-none border-b-2 cursor-pointer whitespace-nowrap transition-colors ${
                      openDropdown === i
                        ? "text-gold bg-gold-pale border-b-gold"
                        : "text-brand-muted border-b-transparent hover:text-gold hover:bg-gold-pale"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-2.5 h-2.5 text-brand-dim transition-transform ${
                        openDropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === i && item.dropdown && (
                    <div className="absolute top-full left-0 min-w-[230px] z-[1050] bg-navy-3 border border-brand-border-light rounded-b-xl shadow-[0_12px_40px_rgba(0,0,0,.55)] py-1.5 max-h-[480px] overflow-y-auto animate-fade-up">
                      {item.dropdown.map((d, di) =>
                        "header" in d ? (
                          <div key={di} className="font-heading text-[10px] tracking-wider uppercase text-brand-dim px-4 pt-2 pb-1">
                            {d.header}
                          </div>
                        ) : "divider" in d ? (
                          <div key={di} className="border-t border-brand-border my-1" />
                        ) : (
                          <button
                            key={di}
                            onClick={() => handleNav(d.page!)}
                            className="block w-full text-left font-heading text-xs font-medium tracking-wide uppercase text-brand-muted px-4 py-2 border-b border-[rgba(30,48,96,.4)] whitespace-normal leading-snug transition-all hover:bg-gold-pale hover:text-gold hover:pl-6 last:border-b-0"
                          >
                            {"highlight" in d && d.highlight ? (
                              <>
                                <span className="text-gold">{d.highlight}</span> —{" "}
                                {d.label!.replace(`${d.highlight} — `, "")}
                              </>
                            ) : (
                              d.label
                            )}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="bg-transparent border-none text-brand-muted p-2 rounded-md flex items-center transition-colors hover:text-gold hover:bg-gold-pale"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <a
              href="https://bit.ly/EasybetZA"
              target="_blank"
              rel="noopener sponsored"
              className="hidden lg:inline-flex btn-gold btn-sm"
            >
              🎁 Claim R50 Free
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden bg-transparent border-none flex flex-col gap-[5px] p-1 rounded-md ${
                menuOpen ? "[&_span]:bg-gold" : ""
              }`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="block w-[22px] h-0.5 bg-brand-muted rounded-sm transition-all" />
              <span className="block w-[22px] h-0.5 bg-brand-muted rounded-sm transition-all" />
              <span className="block w-[22px] h-0.5 bg-brand-muted rounded-sm transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Offcanvas */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/72 z-[990] transition-opacity ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
      {/* Menu */}
      <div
        ref={offcanvasRef}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 w-[min(340px,92vw)] bg-navy-3 border-l border-brand-border z-[991] flex flex-col overflow-hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-brand-border shrink-0">
          <span className="font-heading text-base font-bold tracking-wider uppercase text-white">
            BETTING<span className="text-gold">GUIDE</span>
          </span>
          <button
            onClick={closeMenu}
            className="bg-transparent border-none text-brand-muted p-1 transition-colors hover:text-gold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 py-3 border-b border-brand-border shrink-0">
          <div className="flex gap-2">
            <input
              type="search"
              placeholder="Search…"
              aria-label="Search site"
              className="flex-1 bg-navy-2 border border-brand-border-light rounded-md text-brand-text text-[13px] px-3 py-2 outline-none transition-colors focus:border-gold"
            />
            <button className="btn-gold btn-sm">Go</button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          <OffcanvasMenu onNavigate={handleNav} onClose={closeMenu} />
        </div>

        <div className="px-5 py-4 border-t border-brand-border shrink-0">
          <p className="text-[11px] text-brand-dim text-center leading-relaxed mb-3">
            18+ | Gamble Responsibly |{" "}
            <a
              href="http://www.responsiblegambling.co.za/"
              target="_blank"
              rel="noopener"
              className="text-brand-dim hover:text-gold transition-colors"
            >
              responsiblegambling.co.za
            </a>
          </p>
          <a
            href="https://bit.ly/EasybetZA"
            target="_blank"
            rel="noopener sponsored"
            className="btn-gold btn-full btn-sm"
          >
            🎁 Claim R50 Free — Easybet
          </a>
        </div>
      </div>

      {/* Subnav */}
      <nav
        className="bg-navy-3 border-t border-brand-border py-2.5 overflow-x-auto scrollbar-hide"
        aria-label="Quick category links"
      >
        <div className="flex items-center gap-0.5 px-4 sm:px-6 lg:px-9 w-max">
          {subnavItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.page)}
              className="flex flex-col items-center gap-1 px-3.5 py-1.5 rounded-xl text-brand-dim font-heading text-[10px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors hover:bg-gold-pale hover:text-gold"
            >
              <span className="text-xl">{item.emoji}</span>
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}

function AgeBanner() {
  const [visible, setVisible] = useState(() => {
    try { return !sessionStorage.getItem("age_bar"); } catch { return true; }
  });

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try { sessionStorage.setItem("age_bar", "1"); } catch {}
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      className="bg-brand-red py-1.5 px-4 sm:px-6 lg:px-9 text-center font-heading text-[11px] tracking-wide uppercase text-white flex items-center justify-center gap-4"
    >
      <span>⚠ 18+ Only — Please gamble responsibly. Winners know when to stop.</span>
      <button
        onClick={dismiss}
        aria-label="Close age banner"
        className="bg-transparent border border-white/50 text-white text-[10px] font-heading px-2.5 py-[3px] rounded-sm hover:bg-white/10 transition-colors"
      >
        ✕
      </button>
    </div>
  );
}

function Ticker() {
  const items = [
    { logo: "https://www.bettingguide.co.za/wp-content/uploads/2021/06/Betway-300x181-2.png", alt: "Betway", link: "https://bit.ly/betwaygmbcode" },
    { logo: "https://www.bettingguide.co.za/wp-content/uploads/2022/02/Hollywoodbets-new-logo-2022-1.png", alt: "Hollywoodbets", link: "https://bit.ly/hollyfree50gmb" },
    { logo: "https://www.bettingguide.co.za/wp-content/uploads/2023/08/Easybet-Logo-South-Africa-online-casino.jpg", alt: "Easybet", link: "https://bit.ly/EasybetZA" },
    { logo: "https://www.bettingguide.co.za/wp-content/uploads/2022/09/lulabet-south-africa-logo-lulabet.co_.za-colour-logo.png", alt: "Lulabet", link: "https://bit.ly/BGLulabetReg" },
    { logo: "https://www.bettingguide.co.za/wp-content/uploads/2024/03/jackpot-city-casino-logo-south-africa-JPC-300x93-1.png", alt: "Jackpot City", link: "https://bit.ly/Jackpotcityza" },
    { text: "YesPlay" },
    { text: "Gbets" },
    { text: "Sportingbet" },
  ];

  const doubled = [...items, ...items];

  return (
    <nav className="bg-navy-2 border-b border-brand-border overflow-hidden py-2" aria-label="Betting partners">
      <div className="flex items-center w-max animate-ticker animate-ticker-pause hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <a
            key={i}
            href={"link" in item && item.link ? item.link : "#"}
            target={"link" in item && item.link ? "_blank" : undefined}
            rel="noopener sponsored"
            className="flex items-center px-7 border-r border-brand-border"
          >
            {"logo" in item && item.logo ? (
              <img
                src={item.logo}
                alt={item.alt}
                width={110}
                height={36}
                className="h-9 w-auto max-w-[110px] object-contain brightness-80 hover:brightness-100 hover:scale-[1.07] transition-all"
                loading="eager"
              />
            ) : (
              <span className="font-heading text-[13px] font-bold tracking-wider uppercase text-brand-muted hover:text-brand-text transition-colors">
                {item.text}
              </span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}

function OffcanvasMenu({
  onNavigate,
}: {
  onNavigate: (page: string) => void;
  onClose: () => void;
}) {
  const [openAcc, setOpenAcc] = useState<number | null>(null);

  const menuItems = [
    { label: "Home", page: "home" },
    { label: "🎁 Best Bonuses", page: "bonuses" },
    {
      label: "Online Slots",
      children: [
        { label: "Spina Zonke Guide", page: "slots" },
        { label: "All Online Slots", page: "slots" },
        { label: "Winning Tips", page: "slots" },
        { label: "Full Game List", page: "slots" },
      ],
    },
    {
      label: "Sports Betting",
      children: [
        { label: "Soccer Betting", page: "sports" },
        { label: "Rugby Betting", page: "sports" },
        { label: "Cricket Betting", page: "sports" },
        { label: "Horse Racing", page: "racing" },
      ],
    },
    {
      label: "Casino & Live",
      children: [
        { label: "Casino Games", page: "casino" },
        { label: "Evolution Live Games", page: "casino" },
        { label: "Lightning Roulette", page: "casino" },
      ],
    },
    {
      label: "Free Bets & Bonuses",
      children: [
        { label: "All Welcome Bonuses", page: "bonuses" },
        { label: "Betway R2,000 Bonus", page: "bonuses" },
        { label: "Hollywoodbets R25 Free", page: "bonuses" },
      ],
    },
    { label: "🍀 Lucky Numbers", page: "lucky" },
    { label: "⭐ Bookmaker Reviews", page: "reviews" },
    { label: "🔥 Promotions", page: "promos" },
    { label: "📱 Betting Apps", page: "apps" },
    { label: "ℹ About Us", page: "about" },
  ];

  return (
    <ul role="menu">
      {menuItems.map((item, i) =>
        "children" in item ? (
          <li key={i} className={`border-b border-brand-border ${openAcc === i ? "open" : ""}`}>
            <button
              onClick={() => setOpenAcc(openAcc === i ? null : i)}
              className="flex items-center justify-between w-full px-5 py-3 font-heading text-xs font-semibold tracking-wide uppercase text-brand-text bg-transparent border-none text-left cursor-pointer transition-colors hover:text-gold hover:bg-gold-pale"
            >
              {item.label}
              <ChevronDown
                className={`w-3 h-3 text-brand-dim transition-transform ${
                  openAcc === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all bg-navy-2 ${
                openAcc === i ? "max-h-64" : "max-h-0"
              }`}
            >
              {item.children!.map((child, ci) => (
                <button
                  key={ci}
                  onClick={() => onNavigate(child.page)}
                  className="block w-full text-left px-5 py-2 pl-7 text-[13px] text-brand-muted transition-colors hover:text-gold hover:pl-8"
                >
                  {child.label}
                </button>
              ))}
            </div>
          </li>
        ) : (
          <li key={i} className="border-b border-brand-border">
            <button
              onClick={() => onNavigate(item.page!)}
              className="block w-full text-left px-5 py-3 font-heading text-xs font-semibold tracking-wide uppercase text-brand-text bg-transparent border-none cursor-pointer transition-colors hover:text-gold hover:bg-gold-pale"
            >
              {item.label}
            </button>
          </li>
        )
      )}
    </ul>
  );
}
