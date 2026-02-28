import { motion } from "motion/react";
import { ShieldCheck, Lock, FileText, CheckCircle2, Trophy, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRequestDemo } from "@/context/RequestDemoContext";
import { useNavigate } from "react-router-dom";

const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

export function HomeLoyaltySecurity() {
  const { setIsDemoDialogOpen } = useRequestDemo();
  const navigate = useNavigate();

  return (
    <section className="section-spacious bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-[1.1fr,0.9fr] items-start">
          {/* Loyalty Program highlight */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transition}
            className="relative rounded-3xl bg-linear-to-br from-brand-700 via-brand-600 to-emerald-500 shadow-[0_32px_90px_-40px_rgba(15,23,42,0.9)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.35),transparent_60%)] opacity-80" />
            <div className="relative p-8 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-[0.18em] mb-5">
                Loyalty Program
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Next‑Gen Tiered Loyalty System
              </h2>
              <p className="text-sm md:text-base text-emerald-100 max-w-xl mb-6">
                Empower your traders, incentivize success, and drive revenue with our cutting-edge rewards ecosystem. Turn trading activity into tangible value.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mb-7">
                <div className="rounded-2xl bg-white/10 border border-white/15 p-5 flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-yellow-300 shrink-0">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Gamified Growth</h3>
                    <p className="text-xs md:text-sm text-emerald-100/90">
                      Turn trading into a game where every position helps clients climb tiers and unlock better perks.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/15 p-5 flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-emerald-300 shrink-0">
                    <Coins className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Real Value</h3>
                    <p className="text-xs md:text-sm text-emerald-100/90">
                      Points convert to withdrawable cash or crypto, aligned with your brokerage rules.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                size="lg"
                className="bg-white text-brand-700 hover:bg-brand-50 font-semibold shadow-[0_16px_40px_-24px_rgba(15,23,42,0.95)]"
                onClick={() => setIsDemoDialogOpen(true)}
                >
                  Request a Loyalty Demo
                </Button>
                <button
                  type="button"
                  onClick={() => navigate("/features/loyalty-program")}
                  className="text-sm font-semibold text-emerald-50 hover:text-white inline-flex items-center gap-1.5"
                >
                  View full loyalty program
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Security & compliance + payments/KYC */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...transition, delay: 0.08 }}
            className="space-y-6"
          >
            <div className="rounded-3xl bg-slate-900/70 border border-slate-700/80 p-7 sm:p-8 shadow-[0_24px_70px_-40px_rgba(15,23,42,1)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-300 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
                    Security & Compliance
                  </p>
                  <h3 className="text-lg md:text-xl font-display font-semibold">
                    ISO 27001:2022 Certified
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-200 mb-5 leading-relaxed">
                Demonstrating our unwavering commitment to information security, data protection, and operational excellence.
              </p>
              <ul className="space-y-3 text-xs md:text-sm text-slate-200/90">
                <li className="flex gap-3 items-start">
                  <Lock className="w-4 h-4 mt-0.5 text-emerald-300 shrink-0" />
                  <span>
                    <strong>Confidentiality</strong> – ensuring information is not disclosed to unauthorized individuals, entities, or processes.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <FileText className="w-4 h-4 mt-0.5 text-emerald-300 shrink-0" />
                  <span>
                    <strong>Integrity</strong> – maintaining consistency, accuracy, and trustworthiness of information over its entire lifecycle.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-300 shrink-0" />
                  <span>
                    <strong>Availability</strong> – ensuring that information is accessible and usable on demand by authorized parties.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-900/60 border border-slate-700/80 p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                    Payments & KYC Integrations
                  </p>
                  <h3 className="text-lg md:text-xl font-display font-semibold">
                    340+ PSPs & Top‑Tier KYC Providers
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-200 mb-4 leading-relaxed">
                Access the most popular PSPs on the market and top‑tier KYC providers, fully integrated into FinCRM.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-200/90 mb-5">
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-300 shrink-0" />
                  <span>340+ payment integrations across cards, wallets, banks, and crypto.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-300 shrink-0" />
                  <span>
                    Integrated KYC providers like Muinmos, Sumsub, and Shuftipro for fast onboarding.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-300 shrink-0" />
                  <span>Regulatory‑grade verification flows available directly inside the CRM.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-300 shrink-0" />
                  <span>Support for global regions across deposits, withdrawals, and cashiers.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-100 hover:border-cyan-400 hover:text-cyan-100 rounded-full px-4 py-2 text-xs"
                  onClick={() => navigate("/integrations/payment-providers")}
                >
                  View all payment providers
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-100 hover:border-cyan-400 hover:text-cyan-100 rounded-full px-4 py-2 text-xs"
                  onClick={() => navigate("/integrations/kyc-providers")}
                >
                  Explore KYC providers
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

