import { motion } from "motion/react";

const stats = [
  { value: "2016", label: "Founded" },
  { value: "290+", label: "Payment Processors" },
  { value: "24/5", label: "Technical Support" },
  { value: "24/7", label: "Emergency Assistance" },
];

const revealTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

export function Stats() {
  return (
    <section className="section-tight bg-brand-700 text-white relative overflow-hidden">
      <div className="iso-grid-layer" aria-hidden />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...revealTransition, delay: index * 0.08 }}
              className="py-2"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-brand-300 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-brand-100 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
