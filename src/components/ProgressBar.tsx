export function ProgressBar() {
  return (
    <div
      id="rp"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 z-[10000] h-[3px] bg-gradient-to-r from-gold to-gold-light transition-[width] duration-100"
      style={{ width: "var(--progress)" }}
    />
  );
}
