import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRequestDemo } from "@/context/RequestDemoContext";
import { HeroParticles } from "@/components/sections/hero-particles";

export function Hero() {
  const navigate = useNavigate();
  const { setIsDemoDialogOpen } = useRequestDemo();

  return (
    <section className="relative pt-24 pb-24 lg:pt-32 lg:pb-36 overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
      {/* Animated purple gradient mesh background + particles */}
      <div className="absolute inset-0 -z-10 bg-slate-50" aria-hidden />
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="hero-bg-layer">
          <div
            className="hero-mesh opacity-90"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 70% 40%, rgba(109, 40, 217, 0.24) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 24% 70%, rgba(124, 58, 237, 0.2) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 50% 10%, rgba(139, 92, 246, 0.22) 0%, transparent 55%)",
            }}
          />
          <div className="hero-blob hero-blob--left" />
          <div className="hero-blob hero-blob--right" />
          <div className="hero-blob hero-blob--center" />
        </div>
        <HeroParticles />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
              </span>
              New: AI-Powered Risk Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.25rem] font-display font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">
              Specialized CRM & Back-Office for <span className="text-brand-600">Forex Brokers</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-9 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Streamline your brokerage operations with FinCRM. An all-in-one system featuring client area, partner area, and integrated mobile app for managing trading accounts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-11">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 transition-all duration-200 hover:shadow-[0_4px_14px_0_rgba(147,51,234,0.25)] hover:-translate-y-0.5"
                onClick={() => navigate("/pricing")}
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5"
                onClick={() => setIsDemoDialogOpen(true)}
              >
                View Live Demo
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Founded in 2016</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>290+ Payment Processors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>24/5 Technical Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_8px_32px_-8px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12),0_16px_48px_-16px_rgba(0,0,0,0.08)]">
              <div className="absolute top-0 left-0 right-0 h-11 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="pt-11">
                <img
                  src="/images/fincrmm6.jpg"
                  alt="FinCRM Dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border border-slate-100 shadow-(--shadow-card-hover) max-w-[200px] hidden md:block transition-shadow duration-200 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">$</div>
                  <div>
                    <div className="text-xs text-slate-500">Total Revenue</div>
                    <div className="text-sm font-bold text-slate-900">$124,500</div>
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-[75%]" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl border border-slate-100 shadow-(--shadow-card-hover) max-w-[200px] hidden md:block transition-shadow duration-200 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Active Traders</div>
                    <div className="text-sm font-bold text-slate-900">2,450</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
