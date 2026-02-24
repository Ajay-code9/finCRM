import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Clients } from "@/components/sections/clients";
import { CustomPlan } from "@/components/sections/custom-plan";
import { useNavigate } from "react-router-dom";

const pricingData = {
  plans: [
    {
      name: "Standard",
      price: "€ 2,500",
      description: "For small brokers and startups up to 12 managers",
      features: {
        "Client Area": true,
        "Partner Area": true,
        "Emergency Support": true,
        "Helpdesk": true,
        "Custom Development": true,
        "PSPs": "5",
        "Brokeree PAMM or Social Trading": false,
        "Rest & Client API": false,
        "Automatic KYC": false,
      },
      highlight: false,
      top: false,
    },
    {
      name: "Unlimited",
      price: "€ 10,000",
      description: "For large brokers with unlimited managers",
      features: {
        "Client Area": true,
        "Partner Area": true,
        "Emergency Support": true,
        "Helpdesk": true,
        "Custom Development": true,
        "PSPs": "10",
        "Brokeree PAMM or Social Trading": true,
        "Rest & Client API": true,
        "Automatic KYC": true,
      },
      highlight: true,
      top: true,
    },
  ],
};

const allFeatures = [
  "Client Area",
  "Partner Area",
  "Emergency Support",
  "Helpdesk",
  "Custom Development",
  "PSPs",
  "Brokeree PAMM or Social Trading",
  "Rest & Client API",
  "Automatic KYC",
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Pricing plans
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Our pricing plans are designed to be affordable, flexible and unique tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 items-center p-6 bg-slate-50/50">
              <div className="text-lg font-bold text-slate-900"></div>
              {pricingData.plans.map((plan, index) => (
                <div key={index} className={`text-center relative px-6 py-4 rounded-lg ${plan.highlight ? 'bg-green-50' : ''}`}>
                  {plan.top && (
                    <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg transform translate-y-[-1px] translate-x-[1px]">
                      ★ TOP
                    </div>
                  )}
                  <h3 className={`text-xl font-bold ${plan.highlight ? 'text-green-600' : 'text-slate-900'}`}>{plan.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{plan.description}</p>
                </div>
              ))}
            </div>

            {allFeatures.map((feature, featureIndex) => (
              <div key={featureIndex} className="grid grid-cols-3 items-center p-6 border-t border-slate-200">
                <div className="text-sm font-medium text-slate-700">{feature}</div>
                {pricingData.plans.map((plan, planIndex) => (
                  <div key={planIndex} className="text-center">
                    {typeof plan.features[feature] === 'boolean' ? (
                      plan.features[feature] ? 
                        <Check className="w-6 h-6 text-green-500 mx-auto" /> : 
                        <X className="w-6 h-6 text-slate-400 mx-auto" />
                    ) : (
                      <span className="text-sm font-bold text-slate-900">{plan.features[feature]}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}

            <div className="grid grid-cols-3 items-center p-6 border-t border-slate-200">
              <div></div>
              {pricingData.plans.map((plan, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{plan.price}<span className="text-sm font-normal text-slate-500">/mo</span></div>
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-10 py-3 text-base"
                    onClick={() => navigate("/contact-us")}
                  >
                    Talk to us
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-8">*The cost shown does not include the required one-time setup fee for onboarding</p>
        </div>
      </section>

      <Clients />
      <CustomPlan />
    </div>
  );
}
