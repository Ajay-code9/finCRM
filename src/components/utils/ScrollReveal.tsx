import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  as?: "section" | "div";
  className?: string;
  delay?: number;
}

const revealTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

export function ScrollReveal({
  children,
  as = "div",
  className,
  delay = 0,
}: ScrollRevealProps) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...revealTransition, delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

