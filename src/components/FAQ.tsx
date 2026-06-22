import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border border-brand-border rounded-md overflow-hidden mb-2">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className={`flex items-center justify-between w-full px-4 py-3.5 font-heading text-[13px] font-semibold tracking-wide uppercase text-left transition-colors ${
              openIndex === i ? "text-gold bg-navy-3" : "text-brand-text bg-navy-3 hover:bg-navy-4"
            }`}
          >
            {item.q}
            <ChevronRight
              className={`w-3 h-3 text-brand-muted transition-transform duration-250 shrink-0 ${
                openIndex === i ? "rotate-90" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-4 py-3.5 text-sm text-brand-muted leading-relaxed bg-navy-2 border-t border-brand-border">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
