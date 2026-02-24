import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function CustomPlan() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <img src="/assets/images/custom-plan.png" alt="Custom Plan" className="max-w-md mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Need a custom plan?
            </h2>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-10 py-3 text-base">
              Contact sales
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
