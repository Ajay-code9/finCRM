import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MenuPromoCardProps {
  imageSrc: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
}

export function MenuPromoCard({ 
  imageSrc, 
  title, 
  description, 
  ctaText, 
  ctaLink = "#" 
}: MenuPromoCardProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Explore</div>
      <div className="rounded-xl overflow-hidden mb-3 bg-slate-100">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="font-bold text-base text-slate-900 mb-1">{title}</h3>
      <p className="text-slate-500 text-xs mb-4 leading-relaxed">{description}</p>
      <Button asChild className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg px-5 py-1.5 h-auto shadow-sm text-sm">
        <Link to={ctaLink}>
          {ctaText}
        </Link>
      </Button>
    </div>
  );
}
