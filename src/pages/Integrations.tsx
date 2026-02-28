import { motion } from "motion/react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Trading Platforms", "Payment Gateways", "KYC/AML", "Marketing", "VoIP"];

const integrations = [
  { name: "MetaTrader 4", category: "Trading Platforms", logo: "MT4" },
  { name: "MetaTrader 5", category: "Trading Platforms", logo: "MT5" },
  { name: "cTrader", category: "Trading Platforms", logo: "CT" },
  { name: "Match-Trader", category: "Trading Platforms", logo: "M-T" },
  { name: "Stripe", category: "Payment Gateways", logo: "S" },
  { name: "PayPal", category: "Payment Gateways", logo: "PP" },
  { name: "Skrill", category: "Payment Gateways", logo: "Sk" },
  { name: "Neteller", category: "Payment Gateways", logo: "Nt" },
  { name: "SumSub", category: "KYC/AML", logo: "SS" },
  { name: "Shufti Pro", category: "KYC/AML", logo: "SP" },
  { name: "Salesforce", category: "Marketing", logo: "SF" },
  { name: "HubSpot", category: "Marketing", logo: "HS" },
  { name: "Twilio", category: "VoIP", logo: "Tw" },
  { name: "RingCentral", category: "VoIP", logo: "RC" },
  { name: "Google Analytics", category: "Marketing", logo: "GA" },
  { name: "Facebook Pixel", category: "Marketing", logo: "FB" },
];

export default function Integrations() {
  const navigate = useNavigate();

  const handleCategoryClick = (cat: string) => {
    switch (cat) {
      case "All":
        navigate("/integrations");
        break;
      case "Trading Platforms":
        navigate("/integrations/trading-platforms");
        break;
      case "Payment Gateways":
        navigate("/integrations/payment-providers");
        break;
      case "KYC/AML":
        navigate("/integrations/kyc-providers");
        break;
      case "VoIP":
        navigate("/integrations/voip-providers");
        break;
      case "Marketing":
        navigate("/features/loyalty-program");
        break;
      default:
        break;
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Connect with <span className="text-brand-400">290+ Tools</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-100 max-w-3xl mx-auto mb-8"
          >
            FinCRM integrates seamlessly with MetaTrader 4/5, cTrader, and over 290+ payment processors, creating a unified ecosystem for your brokerage.
          </motion.p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search integrations..." 
              className="w-full pl-10 pr-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-slate-200 sticky top-[72px] bg-white/80 backdrop-blur-md z-40">
        <div className="container mx-auto px-4 md:px-6 overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-2">
            {categories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => handleCategoryClick(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {integrations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 rounded-xl border border-slate-200 hover:border-brand-300 hover:shadow-lg transition-all bg-white group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 font-bold mb-4 group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">
                  {item.logo}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.category}</p>
              </motion.div>
            ))}
            
            {/* Call to Action Card */}
            <div className="p-6 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-2">Missing something?</h3>
              <p className="text-sm text-slate-500 mb-4">We build custom integrations on request.</p>
              <Button
                variant="link"
                className="text-brand-600 p-0 h-auto gap-1"
                onClick={() => navigate("/contact-us")}
              >
                Contact Developers <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Developer-First <span className="text-brand-600">API</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Build your own custom workflows with our robust REST API. Full documentation, webhooks, and sandbox environment included.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-slate-700 font-medium">RESTful Architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-slate-700 font-medium">Comprehensive Documentation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-slate-700 font-medium">99.99% Availability</span>
                </li>
              </ul>
              <Button onClick={() => navigate("/contact-us")}>View API Docs</Button>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl overflow-hidden font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-slate-500 text-xs">bash — 80x24</span>
              </div>
              <div className="text-green-400">
                <span className="text-emerald-400">curl</span> -X POST https://api.fincrm.com/v1/clients \<br/>
                &nbsp;&nbsp;-H <span className="text-yellow-300">"Authorization: Bearer YOUR_API_KEY"</span> \<br/>
                &nbsp;&nbsp;-H <span className="text-yellow-300">"Content-Type: application/json"</span> \<br/>
                &nbsp;&nbsp;-d <span className="text-yellow-300">'{'{'}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"email"</span>: <span className="text-yellow-300">"new.client@example.com"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"first_name"</span>: <span className="text-yellow-300">"John"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"last_name"</span>: <span className="text-yellow-300">"Doe"</span><br/>
                &nbsp;&nbsp;<span className="text-yellow-300">{'}'}'</span>
              </div>
              <div className="mt-4 text-slate-400">
                {`{`}
                <br/>
                &nbsp;&nbsp;"id": "cli_123456789",
                <br/>
                &nbsp;&nbsp;"status": "created",
                <br/>
                &nbsp;&nbsp;"created_at": "2023-10-27T10:00:00Z"
                <br/>
                {`}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
