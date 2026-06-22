export const bookmakers = [
  {
    id: "betway",
    name: "Betway",
    logo: "https://www.bettingguide.co.za/wp-content/uploads/2021/06/Betway-300x181-2.png",
    bonus: "R2,000",
    bonusSub: "100% Deposit Match",
    rating: 4.9,
    stars: "★★★★★",
    hasSlots: true,
    hasLive: true,
    app: "iOS & Android",
    minDeposit: "R25",
    link: "https://bit.ly/betwaygmbcode",
    badge: "Best Overall",
    featured: true,
    description: "Matched deposit bonus on your first deposit. Valid for sports and slots. Min deposit R25. Wagering requirements apply.",
    pros: ["Largest sports betting platform in SA", "Excellent Betway Spins slots", "Live streaming of events", "Fast withdrawals"],
    cons: ["Wagering requirements on bonus", "Limited lucky numbers markets"],
  },
  {
    id: "hollywoodbets",
    name: "Hollywoodbets",
    logo: "https://www.bettingguide.co.za/wp-content/uploads/2022/02/Hollywoodbets-new-logo-2022-1.png",
    bonus: "R25 Free",
    bonusSub: "+ 50 Spina Zonke Spins",
    rating: 4.8,
    stars: "★★★★★",
    hasSlots: true,
    hasLive: true,
    app: "iOS & Android",
    minDeposit: "R10",
    link: "https://bit.ly/hollyfree50gmb",
    badge: "Best for Slots",
    description: "Register and get R25 free bet plus 50 free spins on selected Spina Zonke slots. No deposit needed.",
    pros: ["SA-born brand", "Exclusive Spina Zonke platform", "Data-free betting", "R10 minimum deposit"],
    cons: ["Spina Zonke only on Hollywoodbets", "Desktop site can feel dated"],
  },
  {
    id: "easybet",
    name: "Easybet",
    logo: "https://www.bettingguide.co.za/wp-content/uploads/2023/08/Easybet-Logo-South-Africa-online-casino.jpg",
    bonus: "R50 Free",
    bonusSub: "No Deposit Needed",
    rating: 4.7,
    stars: "★★★★½",
    hasSlots: true,
    hasLive: true,
    app: "Android",
    minDeposit: "R10",
    link: "https://bit.ly/EasybetZA",
    badge: "Best No Deposit",
    description: "Sign up and get R50 free. Includes free bets and spins on top slots.",
    pros: ["R50 free — no deposit required", "Clean simple interface", "Quick registration", "Growing slot library"],
    cons: ["Smaller sports markets", "Limited live betting"],
  },
  {
    id: "lulabet",
    name: "Lulabet",
    logo: "https://www.bettingguide.co.za/wp-content/uploads/2022/09/lulabet-south-africa-logo-lulabet.co_.za-colour-logo.png",
    bonus: "R250",
    bonusSub: "Free Bet OR 100 Spins",
    rating: 4.5,
    stars: "★★★★☆",
    hasSlots: true,
    hasLive: true,
    app: "Android",
    minDeposit: "R50",
    link: "https://bit.ly/BGLulabetReg",
    description: "Choose between a R250 sports free bet or 100 free spins on your favourite slot games.",
    pros: ["Great welcome choice", "Good slot selection", "Responsive support"],
    cons: ["Higher min deposit", "No iOS app"],
  },
  {
    id: "yesplay",
    name: "YesPlay",
    logo: "",
    logoText: "YesPlay",
    bonus: "R3,000",
    bonusSub: "100% Deposit Match",
    rating: 4.4,
    stars: "★★★★☆",
    hasSlots: true,
    hasLive: true,
    app: "Web Only",
    minDeposit: "R20",
    link: "#",
    description: "Double your first deposit up to R3,000. Valid for sports and casino. Min deposit R20.",
    pros: ["Large bonus amount", "Good casino selection"],
    cons: ["No dedicated app", "Web-only experience"],
  },
  {
    id: "jackpotcity",
    name: "Jackpot City",
    logo: "https://www.bettingguide.co.za/wp-content/uploads/2024/03/jackpot-city-casino-logo-south-africa-JPC-300x93-1.png",
    bonus: "R10,000",
    bonusSub: "4× Matched Deposits",
    rating: 4.4,
    stars: "★★★★☆",
    hasSlots: true,
    hasLive: true,
    app: "iOS & Android",
    minDeposit: "R30",
    link: "https://bit.ly/Jackpotcityza",
    description: "Up to R10,000 across your first four deposits at Jackpot City Casino.",
    pros: ["Massive total bonus", "Premium casino brand", "Great mobile apps"],
    cons: ["Higher min deposit", "Focus on casino not sports"],
  },
];

export const promos = [
  { book: "Betway", amount: "R2,000", name: "First Deposit Bonus", desc: "100% matched deposit on your first bet. Sports and slots eligible.", expiry: "30 Apr 2025", link: "https://bit.ly/betwaygmbcode" },
  { book: "Hollywoodbets", amount: "50 Spins", name: "Spina Zonke Free Spins", desc: "50 free spins on selected Spina Zonke slots on registration.", expiry: "Ongoing", link: "https://bit.ly/hollyfree50gmb" },
  { book: "Easybet", amount: "R50", name: "No Deposit Bonus", desc: "Get R50 free when you sign up — no deposit required.", expiry: "Ongoing", link: "https://bit.ly/EasybetZA" },
  { book: "Lulabet", amount: "R250", name: "Welcome Free Bet", desc: "R250 sports free bet OR 100 free spins — your choice.", expiry: "31 May 2025", link: "https://bit.ly/BGLulabetReg" },
  { book: "YesPlay", amount: "R3,000", name: "Deposit Match Bonus", desc: "Double your first deposit up to R3,000.", expiry: "Ongoing", link: "#" },
  { book: "Jackpot City", amount: "R10,000", name: "4× Deposit Package", desc: "Up to R10,000 across your first four deposits.", expiry: "Ongoing", link: "https://bit.ly/Jackpotcityza" },
];

export const posts = [
  { img: "https://www.bettingguide.co.za/wp-content/uploads/2023/04/What-is-the-Best-Time-to-Play-Online-Slots-in-South-Africa.jpg", tag: "tip" as const, tagLabel: "Tip", title: "What is the Best Time to Play Online Slots in South Africa?", date: "April 2025", read: "8 min", page: "slots" },
  { img: "https://www.bettingguide.co.za/wp-content/uploads/2023/04/Gates-of-Olympus-Slot-Scatters-South-Africa.png", tag: "review" as const, tagLabel: "Review", title: "Gates of Olympus Slot Review — Is It Worth Playing in SA?", date: "March 2025", read: "10 min", page: "slots" },
  { img: "https://www.bettingguide.co.za/wp-content/uploads/2023/02/How-To-Win-Big-Playing-Online-Slots-in-South-Africa.jpg", tag: "tip" as const, tagLabel: "Tip", title: "How to Win Big Playing Online Slots in South Africa", date: "February 2025", read: "12 min", page: "slots" },
  { img: "https://www.bettingguide.co.za/wp-content/uploads/2023/01/Hollywoodbets-Free-Spins-R25-Sign-Up-Bonus-300x250-1.gif", tag: "news" as const, tagLabel: "News", title: "Hollywoodbets Free Spins | Get 50 Spina Zonke Spins When You Register", date: "January 2025", read: "5 min", page: "bonuses" },
  { img: "https://www.bettingguide.co.za/wp-content/uploads/2022/01/Hollywoodbets-Spina-Zonke-Dead-or-Alive-Game-NetEnt.png", tag: "tip" as const, tagLabel: "Tip", title: "How to Play Online Slots in SA | A Quick Guide For Beginners", date: "December 2024", read: "9 min", page: "slots" },
  { img: "https://www.bettingguide.co.za/wp-content/uploads/2022/11/Gates-of-Olympus-Bonus-Buy-Pragmatic-Play-South-Africa-1.jpg", tag: "tip" as const, tagLabel: "Tip", title: "How to Buy Features on Pragmatic Play Slots | Bonus Buy Guide", date: "October 2024", read: "6 min", page: "slots" },
];

export const trendingPosts = [
  { num: "01", title: "10 Spina Zonke Winning Strategies That Actually Work", tag: "tip" as const, page: "slots" },
  { num: "02", title: "Which Spina Zonke Game is Easiest to Win?", tag: "tip" as const, page: "slots" },
  { num: "03", title: "Betway R2,000 Deposit Bonus — Full Claim Guide", tag: "review" as const, page: "bonuses" },
];

export const sports = [
  { emoji: "⚽", title: "Soccer Betting", desc: "PSL, EPL, Champions League tips, market guides and best bookmakers for soccer.", link: "#sports", page: "sports" },
  { emoji: "🏉", title: "Rugby Betting", desc: "Super Rugby, Currie Cup and international Tests. Best rugby betting odds in SA.", link: "#sports", page: "sports" },
  { emoji: "🏏", title: "Cricket Betting", desc: "Proteas, IPL and international cricket markets explained.", link: "#sports", page: "sports" },
  { emoji: "🎾", title: "Tennis Betting", desc: "ATP, WTA and Grand Slam betting tips and strategies.", link: "#sports", page: "sports" },
  { emoji: "🏇", title: "Horse Racing", desc: "SA horse racing tips, tote betting and the Punters Challenge guide.", link: "#racing", page: "racing" },
  { emoji: "🥊", title: "MMA & Boxing", desc: "UFC, Bellator and boxing betting with the best SA bookmakers.", link: "#sports", page: "sports" },
];

export const casinoGames = [
  { emoji: "⚡", name: "Lightning Roulette", provider: "Evolution Gaming", desc: "European roulette with random Lightning multipliers up to 500x on straight-up bets. SA's most popular live game.", rtp: "97.3%" },
  { emoji: "🎡", name: "Crazy Time", provider: "Evolution Gaming", desc: "Iconic live money wheel with four exciting bonus games. One of the highest-paying live games available.", rtp: "96.08%" },
  { emoji: "💰", name: "Mega Ball 100×", provider: "Evolution Gaming", desc: "Lottery-style live game where multipliers can reach 100x on winning cards.", rtp: "95.4%" },
  { emoji: "🃏", name: "Lightning Blackjack", provider: "Evolution Gaming", desc: "Classic blackjack with Lightning multipliers on natural blackjacks — up to 2500x.", rtp: "99.56%" },
  { emoji: "🎩", name: "Monopoly Live", provider: "Evolution Gaming", desc: "Live money wheel with 3D Monopoly bonus round. Huge multiplier potential in the bonus game.", rtp: "96.23%" },
  { emoji: "🎲", name: "Lightning Dice", provider: "Evolution Gaming", desc: "Three dice game with Lightning multipliers. Simple to learn with multiplied wins on specific numbers.", rtp: "96.1%" },
];

export const draws = [
  { name: "SA Daily Lotto", time: "Today at 21:00", balls: [7, 13, 22, 31, 44], bonus: null, desc: "5 from 36 numbers. R2 per board. Daily drawings. Available at all SA bookmakers." },
  { name: "SA Powerball", time: "Tuesday & Friday at 21:00", balls: [3, 15, 29, 38, 49], bonus: 12, desc: "5 from 50 numbers + Powerball from 20. R5 per board. Jackpots roll over until won." },
  { name: "UK 49's (Teatime)", time: "Today at 17:49", balls: [2, 11, 18, 24, 36, 41], bonus: 7, desc: "6 from 49 + booster. Popular in SA. Available at Hollywoodbets, Betway and more." },
  { name: "Greece Powerball", time: "Today at 21:30", balls: [4, 19, 27, 33, 42], bonus: 6, desc: "5 from 45 numbers + Powerball from 20. Popular Greek lottery available at SA bookmakers." },
  { name: "Russia Gosloto 6/45", time: "Multiple draws daily", balls: [8, 16, 24, 31, 40, 45], bonus: null, desc: "6 from 45 numbers. Multiple daily draws with good frequency for SA players." },
  { name: "USA Mega Millions", time: "Tuesday & Friday", balls: [5, 20, 32, 48, 63], bonus: 15, desc: "5 from 70 + Mega Ball from 25. Massive international jackpots. Play online in SA." },
];

export const apps = [
  { icon: "🎰", name: "Hollywoodbets App", developer: "Hollywoodbets", rating: 4.8, android: true, ios: true, dataFree: true, features: ["Spina Zonke Slots", "Lucky Numbers", "Live Betting", "Data Free"], desc: "SA's favourite betting app. Spina Zonke slots, sports, lucky numbers and live casino — all in one. The data-free option is a game changer.", link: "https://hollywoodmedia.hollywoodbets.net/downloads/hollywoodbets-1-0.apk" },
  { icon: "⚽", name: "Betway SA App", developer: "Betway Sports", rating: 4.7, android: true, ios: true, dataFree: true, features: ["Betway Spins Slots", "Sports Betting", "Live Streaming", "Live Casino"], desc: "Fully-featured mobile app with excellent sports markets and Betway Spins slots. Data-free on selected SA networks.", link: "https://bit.ly/BWDataFreeApp" },
  { icon: "🎁", name: "Easybet App", developer: "Easybet", rating: 4.5, android: true, ios: false, dataFree: false, features: ["R50 Free on Install", "Slot Games", "Sports Betting", "Quick Signup"], desc: "Simple fast app for SA players. Claim R50 free on registration and enjoy sports and slots with a clean interface.", link: "#" },
  { icon: "🏆", name: "Gbets App", developer: "Gbets", rating: 4.3, android: true, ios: false, dataFree: false, features: ["Soccer Betting", "Casino Games", "Live Betting", "Lucky Numbers"], desc: "Solid Android app with good PSL soccer odds and decent slot selection. Download directly from their website.", link: "https://gblog.co.za/wp-content/uploads/2022/03/Gbets-1.apk" },
];

export const team = [
  { avatar: "👨‍💼", name: "Thabo M.", role: "Editor in Chief", bio: "10 years in SA sports journalism. Specialises in soccer and rugby betting." },
  { avatar: "👩‍🔬", name: "Lerato K.", role: "Casino & Slots Analyst", bio: "Certified iGaming professional. 8 years reviewing online casino games across African markets." },
  { avatar: "👨‍💻", name: "Sipho D.", role: "RG Advocate", bio: "Former NGB researcher. Ensures all content meets responsible gambling standards." },
];

export const faqItems = {
  bonuses: [
    { q: "What is a welcome bonus?", a: "A welcome bonus is a promotional offer for new players when they register. It can be a matched deposit, free bets, free spins, or a combination." },
    { q: "Do I need to deposit to claim a bonus?", a: "Not always. Hollywoodbets and Easybet offer no-deposit bonuses on registration. Larger bonuses like Betway's R2,000 require a minimum deposit." },
    { q: "What are wagering requirements?", a: "Wagering requirements determine how many times you must bet your bonus before you can withdraw. A 5× requirement on R25 means placing R125 in bets first." },
    { q: "Can I claim bonuses on mobile?", a: "Yes. All SA bookmakers listed here are mobile-friendly and bonuses can be claimed via mobile browser or app." },
  ],
  general: [
    { q: "Is online betting legal in South Africa?", a: "Yes, online sports betting is legal and regulated in South Africa through licensed bookmakers. All sites listed on Betting Guide SA are fully licensed." },
    { q: "How do I know these bookmakers are safe?", a: "All bookmakers we list hold valid licenses from the Western Cape Gambling Board or other recognised SA regulatory bodies." },
    { q: "What is the minimum age for betting in SA?", a: "You must be 18 years or older to legally place bets in South Africa." },
    { q: "How do I deposit money?", a: "SA bookmakers accept deposits via bank transfer, credit/debit card, OTT Voucher, 1Voucher, Blu Voucher, and various EFT options." },
  ],
};

export const tickerItems = [
  { logo: "https://www.bettingguide.co.za/wp-content/uploads/2021/06/Betway-300x181-2.png", alt: "Betway", link: "https://bit.ly/betwaygmbcode" },
  { logo: "https://www.bettingguide.co.za/wp-content/uploads/2022/02/Hollywoodbets-new-logo-2022-1.png", alt: "Hollywoodbets", link: "https://bit.ly/hollyfree50gmb" },
  { logo: "https://www.bettingguide.co.za/wp-content/uploads/2023/08/Easybet-Logo-South-Africa-online-casino.jpg", alt: "Easybet", link: "https://bit.ly/EasybetZA" },
  { logo: "https://www.bettingguide.co.za/wp-content/uploads/2022/09/lulabet-south-africa-logo-lulabet.co_.za-colour-logo.png", alt: "Lulabet", link: "https://bit.ly/BGLulabetReg" },
  { logo: "https://www.bettingguide.co.za/wp-content/uploads/2024/03/jackpot-city-casino-logo-south-africa-JPC-300x93-1.png", alt: "Jackpot City", link: "https://bit.ly/Jackpotcityza" },
  { text: "YesPlay" },
  { text: "Gbets" },
  { text: "Sportingbet" },
];

export const drawSchedule = [
  { name: "SA Daily Lotto", time: "Daily 21:00" },
  { name: "SA Powerball", time: "Tue & Fri 21:00" },
  { name: "UK 49's Lunchtime", time: "Daily 13:49" },
  { name: "UK 49's Teatime", time: "Daily 17:49" },
  { name: "Greece Powerball", time: "Daily 21:30" },
];

export const navItems = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Best Sites SA", page: "reviews" },
  {
    label: "Play Slots",
    dropdown: [
      { header: "Choose Your Platform" },
      { label: "Hollywoodbets Spina Zonke", page: "slots" },
      { label: "Betway Slots", page: "slots" },
      { label: "Lulabet Slots", page: "slots" },
    ],
  },
  {
    label: "Free Bets & Bonuses",
    dropdown: [
      { header: "Welcome Offers" },
      { label: "Best Welcome Bonuses in SA", page: "bonuses" },
      { divider: true },
      { header: "By Bookmaker" },
      { label: "R2,000 — Betway Deposit Bonus", page: "bonuses", highlight: "R2,000" },
      { label: "R25 + 50 Spins — Hollywoodbets", page: "bonuses", highlight: "R25 + 50 Spins" },
      { label: "R50 Free — Easybet (No Deposit)", page: "bonuses", highlight: "R50 Free" },
      { label: "R250 — Lulabet Free Bet / 100 Spins", page: "bonuses", highlight: "R250" },
      { label: "R3,000 — YesPlay Deposit Bonus", page: "bonuses", highlight: "R3,000" },
    ],
  },
  {
    label: "Spina Zonke",
    dropdown: [
      { header: "Guides & Tips" },
      { label: "Full Game List", page: "slots" },
      { label: "10 Winning Strategies", page: "slots" },
      { label: "Spina Zonke FAQ", page: "slots" },
      { label: "Best Games to Win", page: "slots" },
      { label: "Aviator Tips & Guide", page: "slots" },
    ],
  },
  {
    label: "Sports Betting",
    dropdown: [
      { header: "By Sport" },
      { label: "⚽ Soccer Betting", page: "sports" },
      { label: "🏉 Rugby Betting", page: "sports" },
      { label: "🏏 Cricket Betting", page: "sports" },
      { label: "🎾 Tennis Betting", page: "sports" },
      { label: "🏇 Horse Racing", page: "racing" },
    ],
  },
  {
    label: "Lucky Numbers",
    dropdown: [
      { header: "Lotteries & Results" },
      { label: "Today's Results", page: "lucky" },
      { label: "Lucky Numbers Generator", page: "lucky" },
      { label: "Fafi Dream Guide", page: "lucky" },
      { divider: true },
      { header: "By Lottery" },
      { label: "SA Daily Lotto", page: "lucky" },
      { label: "SA Powerball", page: "lucky" },
      { label: "UK 49's in SA", page: "lucky" },
    ],
  },
  { label: "Casino & Live", page: "casino" },
  { label: "📱 Apps", page: "apps" },
  { label: "🔥 Promos", page: "promos" },
];

export const subnavItems = [
  { emoji: "⚽", label: "Soccer", page: "sports" },
  { emoji: "🏉", label: "Rugby", page: "sports" },
  { emoji: "🃏", label: "Casino", page: "casino" },
  { emoji: "🎾", label: "Tennis", page: "sports" },
  { emoji: "🏇", label: "Racing", page: "racing" },
  { emoji: "⭐", label: "Reviews", page: "reviews" },
  { emoji: "🍀", label: "Lotto", page: "lucky" },
  { emoji: "🎁", label: "Promos", page: "promos" },
  { emoji: "📱", label: "Apps", page: "apps" },
  { emoji: "🏏", label: "Cricket", page: "sports" },
  { emoji: "🎰", label: "Slots", page: "slots" },
  { emoji: "🎯", label: "Spina Zonke", page: "slots" },
];

export type PageKey = "home" | "about" | "reviews" | "slots" | "sports" | "casino" | "lucky" | "apps" | "promos" | "racing" | "bonuses";

export const pageTitles: Record<PageKey, string> = {
  home: "Home",
  bonuses: "Best Bonuses",
  reviews: "Bookmaker Reviews",
  slots: "Online Slots",
  sports: "Sports Betting",
  casino: "Casino & Live",
  lucky: "Lucky Numbers",
  apps: "Betting Apps",
  promos: "Promotions",
  racing: "Horse Racing",
  about: "About Us",
};
