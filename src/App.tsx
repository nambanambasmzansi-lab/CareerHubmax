import { useHashRouter } from "@/hooks/useHashRouter";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ProgressBar } from "@/components/ProgressBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { HomePage } from "@/pages/HomePage";
import { BonusesPage } from "@/pages/BonusesPage";
import { ReviewsPage } from "@/pages/ReviewsPage";
import { SlotsPage } from "@/pages/SlotsPage";
import { SportsPage } from "@/pages/SportsPage";
import { CasinoPage } from "@/pages/CasinoPage";
import { LuckyPage } from "@/pages/LuckyPage";
import { AppsPage } from "@/pages/AppsPage";
import { PromosPage } from "@/pages/PromosPage";
import { RacingPage } from "@/pages/RacingPage";
import { AboutPage } from "@/pages/AboutPage";
import type { PageKey } from "@/data/siteData";

function App() {
  const { page, navigate } = useHashRouter();
  useScrollProgress();

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage onNavigate={navigate} />;
      case "bonuses": return <BonusesPage onNavigate={navigate} />;
      case "reviews": return <ReviewsPage onNavigate={navigate} />;
      case "slots": return <SlotsPage onNavigate={navigate} />;
      case "sports": return <SportsPage onNavigate={navigate} />;
      case "casino": return <CasinoPage onNavigate={navigate} />;
      case "lucky": return <LuckyPage onNavigate={navigate} />;
      case "apps": return <AppsPage onNavigate={navigate} />;
      case "promos": return <PromosPage onNavigate={navigate} />;
      case "racing": return <RacingPage onNavigate={navigate} />;
      case "about": return <AboutPage onNavigate={navigate} />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ProgressBar />
      <Header currentPage={page} onNavigate={(p) => navigate(p as PageKey)} />
      <div className="flex-1">{renderPage()}</div>
      <Footer onNavigate={(p) => navigate(p as PageKey)} />
      <CookieConsent />
    </div>
  );
}

export default App;
