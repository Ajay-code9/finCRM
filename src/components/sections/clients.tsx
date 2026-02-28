import { motion } from "motion/react";

const clientLogos = [
  { src: "/assets/logos/instalorex.png", alt: "Instalorex" },
  { src: "/assets/logos/squaredfinancial.png", alt: "Squared Financial" },
  { src: "/assets/logos/m4markets.png", alt: "M4Markets" },
  { src: "/assets/logos/kcmtrade.png", alt: "KCM Trade" },
  { src: "/assets/logos/quicktrade.png", alt: "QuickTrade" },
  { src: "/assets/logos/traders-trust.png", alt: "Traders Trust" },
];

export function Clients() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
            Trusted by leading brokers
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clientLogos.map((logo) => (
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
