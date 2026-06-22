import { useState } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(() => {
    try { return !localStorage.getItem("cookie_consent"); } catch { return true; }
  });

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try { localStorage.setItem("cookie_consent", "1"); } catch {}
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-[60px] left-4 right-4 z-[850] bg-navy-3 border border-brand-border rounded-xl px-4 py-4 shadow-card flex items-center gap-3.5 flex-wrap max-w-[660px] mx-auto"
    >
      <p className="flex-1 min-w-[180px] text-xs text-brand-muted leading-relaxed">
        We use cookies to personalise content and improve your experience. By continuing, you agree
        to our{" "}
        <a href="#about" className="text-gold hover:underline">
          Privacy Policy
        </a>
        .
      </p>
      <div className="flex gap-2 shrink-0">
        <button onClick={dismiss} className="btn-outline btn-sm">
          Decline
        </button>
        <button onClick={dismiss} className="btn-gold btn-sm">
          Accept All
        </button>
      </div>
    </div>
  );
}
