import { useState, useEffect, useCallback } from "react";
import type { PageKey } from "@/data/siteData";
import { pageTitles } from "@/data/siteData";

export function useHashRouter() {
  const getPage = useCallback((): PageKey => {
    const hash = location.hash.replace("#", "");
    return (hash && pageTitles[hash as PageKey]) ? (hash as PageKey) : "home";
  }, []);

  const [page, setPage] = useState<PageKey>(getPage);

  useEffect(() => {
    const onHashChange = () => {
      const newPage = getPage();
      setPage(newPage);
      document.title = `${pageTitles[newPage]} | Betting Guide SA`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    document.title = `${pageTitles[getPage()]} | Betting Guide SA`;
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [getPage]);

  const navigate = useCallback((target: PageKey) => {
    if (location.hash.replace("#", "") !== target) {
      location.hash = target;
    } else {
      setPage(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return { page, navigate };
}
