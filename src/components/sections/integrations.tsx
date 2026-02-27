import { motion } from "motion/react";
import { 
  CreditCard, 
  Globe, 
  ShieldCheck, 
  Smartphone, 
  BarChart3, 
  Users 
} from "lucide-react";
import { TechGridParticles } from "@/components/common/TechGridParticles";

const integrations = [
  { name: "MetaTrader 4", icon: BarChart3 },
  { name: "MetaTrader 5", icon: BarChart3 },
  { name: "cTrader", icon: BarChart3 },
  { name: "Stripe", icon: CreditCard },
  { name: "PayPal", icon: CreditCard },
  { name: "SumSub", icon: ShieldCheck },
  { name: "Salesforce", icon: Users },
  { name: "HubSpot", icon: Users },
  { name: "Slack", icon: Smartphone },
  { name: "Zoom", icon: Globe },
];

const revealTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

const integrationCardClass =
  "flex items-center gap-3 px-6 py-3.5 bg-white rounded-xl border border-slate-200/90 shadow-(--shadow-card) min-w-[200px] transition-all duration-300 hover:shadow-(--shadow-card-hover) hover:border-slate-200 hover:-translate-y-0.5";

export function Integrations() {
  return (
    <section id="integrations" className="section-normal bg-slate-50 bg-grid-soft overflow-hidden relative">
      <TechGridParticles />
      <div className="container mx-auto px-4 md:px-6 mb-14 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={revealTransition}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">
            Seamlessly Integrated with <span className="text-brand-600">290+ Tools</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connect FinCRM with MetaTrader 4/5, cTrader, payment processors, and KYC providers.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden group relative z-10">
        <div className="animate-marquee [animation-duration:40s] sm:[animation-duration:25s] whitespace-nowrap flex gap-8 py-4">
          {[...integrations, ...integrations].map((integration, index) => (
            <div key={index} className={integrationCardClass}>
              <integration.icon className="w-6 h-6 text-brand-600 shrink-0" />
              <span className="font-medium text-slate-900">{integration.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 py-4 ml-8">
          {[...integrations, ...integrations].map((integration, index) => (
            <div key={`dup-${index}`} className={integrationCardClass}>
              <integration.icon className="w-6 h-6 text-brand-600 shrink-0" />
              <span className="font-medium text-slate-900">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
