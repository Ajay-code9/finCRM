import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MenuPromoCardProps {
  imageSrc: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  /** When set, CTA opens the request-demo popup instead of navigating */
  onCtaClick?: () => void;
}

export function MenuPromoCard({
  imageSrc,
  title,
  description,
  ctaText,
  ctaLink = "#",
  onCtaClick,
}: MenuPromoCardProps) {
  const buttonClass =
    "w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg px-5 py-1.5 h-auto shadow-sm text-sm transition-all duration-200 hover:shadow-[0_4px_12px_-2px_rgba(147,51,234,0.3)] hover:-translate-y-0.5";

  return (
    <div className="flex flex-col h-full transition-shadow duration-300 hover:shadow-(--shadow-card-hover) rounded-xl p-1 -m-1">
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Explore</div>
      <div className="rounded-xl overflow-hidden mb-3 bg-slate-100 transition-transform duration-500 hover:scale-[1.02]">
        <img src={imageSrc} alt={title} className="w-full h-32 object-cover" />
      </div>
      <h3 className="font-bold text-base text-slate-900 mb-1 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-xs mb-4 leading-relaxed">{description}</p>
      {onCtaClick ? (
        <Button className={buttonClass} onClick={onCtaClick}>
          {ctaText}
        </Button>
      ) : (
        <Button asChild className={buttonClass}>
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      )}
    </div>
  );
}
