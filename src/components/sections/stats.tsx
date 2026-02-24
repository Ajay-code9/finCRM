import { motion } from "motion/react";

const stats = [
  { value: "2016", label: "Founded" },
  { value: "290+", label: "Payment Processors" },
  { value: "24/5", label: "Technical Support" },
  { value: "24/7", label: "Emergency Assistance" },
];

export function Stats() {
  return (
    <section className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-brand-300 mb-2">
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
