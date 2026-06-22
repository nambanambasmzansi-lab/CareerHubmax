import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open]);

  const chips = [
    "Spina Zonke tips",
    "Betway R2000 bonus",
    "Gates of Olympus",
    "Free spins SA",
    "Soccer betting",
    "Lucky numbers today",
  ];

  return (
    <div
      role="dialog"
      aria-label="Search site"
      aria-modal="true"
      className={`fixed inset-0 z-[1100] bg-[rgba(4,8,18,.97)] flex flex-col items-start justify-start pt-24 transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-4 sm:right-6 lg:right-9 bg-transparent border-none text-brand-muted p-1.5 transition-colors hover:text-gold"
        aria-label="Close search"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="w-full max-w-[640px] mx-auto px-4 sm:px-6">
        <label htmlFor="s-input" className="block font-heading text-[11px] tracking-wider uppercase text-brand-muted mb-3.5">
          Search articles, reviews &amp; tips
        </label>
        <input
          ref={inputRef}
          id="s-input"
          type="search"
          placeholder="e.g. Spina Zonke tips, Betway bonus…"
          autoComplete="off"
          className="w-full bg-navy-3 border-2 border-brand-border-light rounded-md text-brand-text text-lg px-4 py-3.5 outline-none transition-colors focus:border-gold"
        />
        <div className="mt-3.5 flex flex-wrap gap-2" role="list" aria-label="Suggested searches">
          {chips.map((chip) => (
            <button
              key={chip}
              role="listitem"
              onClick={() => { if (inputRef.current) inputRef.current.value = chip; inputRef.current?.focus(); }}
              className="font-heading text-[11px] font-semibold tracking-wide uppercase px-3.5 py-1.5 rounded-full border border-brand-border-light text-brand-muted bg-transparent transition-colors hover:border-gold hover:text-gold"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
