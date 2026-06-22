import { useEffect, useRef } from "react";

export function useScrollProgress() {
  const ticking = useRef(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    headerRef.current = document.getElementById("site-header");

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = Math.min((scrollTop / docHeight) * 100, 100);
        document.documentElement.style.setProperty("--progress", pct + "%");
        headerRef.current?.classList.toggle("stuck", scrollTop > 60);
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
