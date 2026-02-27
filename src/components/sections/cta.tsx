import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useRequestDemo } from "@/context/RequestDemoContext";
import { ScrollReveal } from "@/components/utils/ScrollReveal";
import { SectionParticles } from "@/components/common/SectionParticles";

export function CTA() {
  const { setIsDemoDialogOpen } = useRequestDemo();
  const navigate = useNavigate();

  return (
    <section className="section-spacious bg-brand-700 text-white text-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-linear-to-b from-brand-800/40 to-transparent pointer-events-none"
        aria-hidden
      />
      <SectionParticles />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-display font-bold tracking-tight mb-5 text-white">
            Ready to Scale Your Brokerage?
          </h2>
          <p className="text-lg md:text-xl text-brand-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of leading brokers who trust FinCRM to streamline their operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-brand-700 hover:bg-white/95 hover:text-brand-800 font-semibold shadow-[0_4px_14px_0_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-200 min-w-[180px]"
              onClick={() => setIsDemoDialogOpen(true)}
            >
              Request a Demo
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white/15 text-white border border-white/30 hover:bg-white/25 hover:border-white/40 transition-all duration-200 hover:-translate-y-0.5 min-w-[160px]"
              onClick={() => navigate("/contact-us")}
            >
              Contact Sales
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
