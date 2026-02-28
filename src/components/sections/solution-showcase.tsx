import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

type FeatureKey =
  | "backOffice"
  | "clientArea"
  | "partnerArea"
  | "mobileApp"
  | "propTrading";

interface FeatureConfig {
  key: FeatureKey;
  name: string;
  caption: string;
  route: string;
  image: string;
  meta: string;
  bullets: string[];
}

const FEATURES: FeatureConfig[] = [
  {
    key: "backOffice",
    name: "Back Office",
    caption: "Central command for your brokerage operations.",
    route: "/products/back-office",
    image: "/images/fincrmm5.jpg",
    meta: "Operations · Compliance · Reporting",
    bullets: [
      "Single source of truth for clients, accounts & documents.",
      "Powerful segmentation, workflows and automation rules.",
      "Designed for multi‑desk teams and distributed operations.",
    ],
  },
  {
    key: "clientArea",
    name: "Client Area",
    caption: "The retention engine for every trader you onboard.",
    route: "/products/client-area",
    image: "/images/clientarea5.jpg",
    meta: "Self‑service · Funding · KYC",
    bullets: [
      "Clean UX for deposits, withdrawals and account actions.",
      "Deep integration with trading platforms and PSPs.",
      "Multi‑language, mobile‑friendly experience.",
    ],
  },
  {
    key: "partnerArea",
    name: "Partner Area",
    caption: "A modern partner workspace for IBs and affiliates.",
    route: "/products/partner-area",
    image: "/images/partnerarea1.jpg",
    meta: "IB network · Rebates · Campaigns",
    bullets: [
      "Real‑time views of referrals, commission ladders and KPIs.",
      "Self‑service campaign links, creatives and tracking.",
      "Built to scale from a handful of IBs to global networks.",
    ],
  },
  {
    key: "mobileApp",
    name: "Mobile App",
    caption: "Give traders a fully branded FinCRM experience on the go.",
    route: "/products/client-area",
    image: "/images/clientarea4.jpg",
    meta: "iOS · Android · Push notifications",
    bullets: [
      "Account overview, funding and documents from any device.",
      "Secure auth flows tuned for regulated brokers.",
      "Consistent design system across web and mobile.",
    ],
  },
  {
    key: "propTrading",
    name: "Prop Trading CRM",
    caption: "Purpose‑built for multi‑stage challenges and funded accounts.",
    route: "/products/prop-trading-crm",
    image: "/images/proptrading1.jpg",
    meta: "Challenges · Risk · Payouts",
    bullets: [
      "Design, launch and monitor complex challenge structures.",
      "Real‑time risk views across traders and funded accounts.",
      "Automated rules for scaling, payouts and access control.",
    ],
  },
];

const revealTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

export function SolutionShowcase() {
  const [activeKey, setActiveKey] = useState<FeatureKey>("backOffice");
  const active = FEATURES.find((f) => f.key === activeKey) ?? FEATURES[0];
  const navigate = useNavigate();

  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={revealTransition}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500 mb-3">
            Product suite
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            An all‑in‑one <span className="text-brand-600">forex CRM</span>{" "}
            solution
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Switch between modules to see how FinCRM connects back office,
            client experience, partners and prop trading into one purple
            fintech‑ready platform.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 md:flex-row md:items-stretch lg:gap-8">
          {/* Left column: vertical feature tabs (≈30%) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={revealTransition}
            className="bg-white/80 rounded-3xl border border-slate-200 shadow-(--shadow-card) p-3 sm:p-4 md:basis-[30%] md:max-w-sm md:self-stretch"
          >
            <div className="flex flex-col gap-2">
              {FEATURES.map((feature, index) => {
                const isActive = feature.key === activeKey;
                return (
                  <button
                    key={feature.key}
                    type="button"
                    onClick={() => setActiveKey(feature.key)}
                  className={[
                    "flex items-center justify-between w-full rounded-2xl px-4 py-3 text-left border transition-all duration-300 ease-out transform",
                    isActive
                      ? "bg-brand-600 border-brand-600 text-white shadow-(--shadow-card-hover)"
                      : "bg-slate-50 border-slate-200 text-slate-800 shadow-(--shadow-card) hover:bg-brand-50 hover:border-brand-200 hover:text-brand-900 hover:shadow-(--shadow-card-hover) hover:-translate-y-0.5",
                  ].join(" ")}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {feature.name}
                      </span>
                      <span
                        className={[
                          "text-xs",
                          isActive ? "text-brand-100" : "text-slate-500",
                        ].join(" ")}
                      >
                        {feature.meta}
                      </span>
                    </div>
                    <span
                      className={[
                        "inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold",
                        isActive
                          ? "border-white/40 bg-white/10"
                          : "border-slate-200 bg-white text-slate-500",
                      ].join(" ")}
                    >
                      {index + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right column: visual dashboard preview (≈70%) */}
          <div className="md:basis-[70%] md:min-w-0 flex items-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[2.25rem] bg-white border border-slate-200 shadow-(--shadow-card) overflow-hidden p-4 sm:p-6 w-full"
              >
              {/* Soft purple background wash */}
              <div className="absolute inset-0 bg-linear-to-br from-brand-500/10 via-emerald-500/8 to-slate-900/5 pointer-events-none" />

              {/* Main content */}
              <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] items-center">
                {/* Text + bullets + CTA */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-100 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {active.meta}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                    {active.name}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600">
                    {active.caption}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {active.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-brand-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    type="button"
                    size="lg"
                    onClick={() => navigate(active.route)}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-(--shadow-card-hover)"
                  >
                    Open {active.name}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Visual mockup */}
                <div className="relative">
                  {/* Base window */}
                  <div className="rounded-3xl bg-white border border-slate-200 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.6)] overflow-hidden max-h-[240px] md:max-h-[300px]">
                    <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-500">
                        {active.name} · FinCRM
                      </span>
                      <span className="h-4 w-12 rounded-full bg-slate-200/80" />
                    </div>
                    <div className="bg-slate-900/3">
                      <img
                        src={active.image}
                        alt={`${active.name} preview`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Floating stat card */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="absolute -bottom-6 -left-4 w-40 rounded-2xl bg-white/95 border border-slate-200 shadow-(--shadow-card-hover) p-3 text-xs text-slate-700"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold text-slate-900">
                        Live accounts
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        +18%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-500 to-emerald-500" />
                    </div>
                    <p className="mt-2 text-[10px] text-slate-500">
                      Month‑over‑month growth across all segments.
                    </p>
                  </motion.div>

                  {/* Floating metric pill */}
                  <motion.div
                    initial={{ opacity: 0, y: -8, x: 8 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="absolute -top-4 right-0 rounded-2xl bg-slate-900 text-[11px] text-slate-50 px-3 py-2 shadow-[0_12px_30px_-16px_rgba(15,23,42,0.9)]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="font-semibold">99.99% uptime</span>
                    </div>
                    <p className="mt-1 text-[10px] text-slate-300">
                      Enterprise infrastructure for regulated fintech.
                    </p>
                  </motion.div>
                </div>
              </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

