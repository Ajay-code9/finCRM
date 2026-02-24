import { motion } from "motion/react";
import { 
  CreditCard, 
  Globe, 
  ShieldCheck, 
  Smartphone, 
  BarChart3, 
  Users 
} from "lucide-react";

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

export function Integrations() {
  return (
    <section id="integrations" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
          Seamlessly Integrated with <span className="text-brand-600">290+ Tools</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Connect FinCRM with MetaTrader 4/5, cTrader, payment processors, and KYC providers.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee [animation-duration:40s] sm:[animation-duration:25s] whitespace-nowrap flex gap-8 py-4">
          {[...integrations, ...integrations].map((integration, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-200 min-w-[200px]"
            >
              <integration.icon className="w-6 h-6 text-brand-600" />
              <span className="font-medium text-slate-900">{integration.name}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 py-4 ml-8">
           {/* Duplicate for seamless loop */}
           {[...integrations, ...integrations].map((integration, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-200 min-w-[200px]"
            >
              <integration.icon className="w-6 h-6 text-brand-600" />
              <span className="font-medium text-slate-900">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
