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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">
          250+ satisfied clients are already using our CRM
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img src={logo.src} alt={logo.alt} className="h-12 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
