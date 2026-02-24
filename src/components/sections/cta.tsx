import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="py-20 bg-brand-600 text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Scale Your Brokerage?
          </h2>
          <p className="text-lg md:text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of leading brokers who trust FinCRM to streamline their operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Request a Demo
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white/20 text-white hover:bg-white/30">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
