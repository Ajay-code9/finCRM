import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/utils/ScrollReveal";

export function CustomPlan() {
  return (
    <section className="section-normal bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <ScrollReveal className="w-full md:w-1/2">
            <img
              src="/images/customplan.jpg"
              alt="Custom Plan"
              className="max-w-md mx-auto rounded-xl shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) transition-shadow duration-300"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.12} className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Need a custom plan?
            </h2>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full px-10 py-3 text-base shadow-sm hover:shadow-[0_4px_14px_0_rgba(5,150,105,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact sales
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
