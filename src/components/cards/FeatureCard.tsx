import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const revealTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

export function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={revealTransition}
      className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 ease-out group ${className}`}
    >
      <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

