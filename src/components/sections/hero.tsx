import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RequestDemoContext } from "@/context/RequestDemoContext";

export function Hero() {
  const navigate = useNavigate();
  const { setIsDemoDialogOpen } = useContext(RequestDemoContext)!;

  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              New: AI-Powered Risk Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
              Specialized CRM & Back-Office for <span className="text-brand-600">Forex Brokers</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Streamline your brokerage operations with FinCRM. An all-in-one system featuring client area, partner area, and integrated mobile app for managing trading accounts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2"
                onClick={() => navigate("/pricing")}
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => setIsDemoDialogOpen(true)}
              >
                View Live Demo
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Founded in 2016</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>290+ Payment Processors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>24/5 Technical Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="absolute top-0 left-0 right-0 h-11 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="pt-11">
                <img
                  src="public\images\fincrm6.jpg"
                  alt="FinCRM Dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px] hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    $
                  </div>
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
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px] hidden md:block"
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
            
            {/* Background Decor */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/10 blur-3xl rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
