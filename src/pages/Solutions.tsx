import { motion } from "motion/react";
import { CheckCircle2, Server, Shield, Zap, Globe, Users, BarChart3, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    title: "Comprehensive CRM",
    description: "A specialized CRM designed for forex brokers. Offers tools for lead management, partner tracking, sales, and compliance to streamline operations.",
    icon: Users,
    features: ["Lead Management", "Partner Tracking", "Sales Automation", "Compliance Tools"],
    link: "/products/back-office"
  },
  {
    title: "Prop Trading Solution",
    description: "Specialized software for managing prop trading firms. Features real-time risk monitoring and challenge tracking.",
    icon: Shield,
    features: ["Real-time Risk Monitoring", "Challenge Tracking", "Account Management", "Automated Rules"],
    link: "/products/prop-trading-crm"
  },
  {
    title: "Client Area",
    description: "An all-in-one self-service portal for your traders. Manage trading accounts, deposits, and KYC documents effortlessly.",
    icon: Globe,
    features: ["Account Management", "Deposit & Withdrawal", "KYC Document Upload", "Multi-language Support"],
    link: "/products/client-area"
  },
  {
    title: "Partner Area",
    description: "Empower your IBs with a dedicated portal. Real-time tracking and seamless commission management to grow your network.",
    icon: BarChart3,
    features: ["Real-time Tracking", "Commission Management", "Marketing Assets", "Multi-tier Rebates"],
    link: "/products/partner-area"
  },
  {
    title: "Integrated Mobile App",
    description: "Give your clients a seamless, intuitive mobile trading experience. Integrated mobile app for managing accounts on the go.",
    icon: Smartphone,
    features: ["Branded UI", "Account Management", "Push Notifications", "Secure Login"],
    link: "/products/client-area"
  },
  {
    title: "Extensive Integrations",
    description: "Connects with MetaTrader 4/5, cTrader, over 290+ payment processors, and KYC providers for a unified ecosystem.",
    icon: Server,
    features: ["MetaTrader 4/5", "cTrader", "290+ Payment Processors", "KYC Providers"],
    link: "/integrations"
  }
];

export default function Solutions() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Comprehensive <span className="text-brand-600">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Built specifically for the financial services industry, our suite of tools covers every aspect of your brokerage operations.
          </motion.p>
        </div>
      </section>

      {/* Detailed Solutions List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12">
            {solutions.map((solution, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-600 mb-6">
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{solution.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      variant="outline"
                      onClick={() => navigate(solution.link)}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video rounded-2xl bg-slate-100 border border-slate-200 shadow-xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-500/5 group-hover:opacity-0 transition-opacity" />
                    <img 
                      src={`https://picsum.photos/seed/${index}/800/600`} 
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Infrastructure */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Built on Enterprise Infrastructure</h2>
            <p className="text-slate-400 text-lg">
              Reliability, speed, and security are at the core of our technology stack.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <Zap className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Low Latency</h3>
              <p className="text-slate-400">
                Optimized for high-frequency trading environments with sub-millisecond execution times.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <Shield className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Bank-Grade Security</h3>
              <p className="text-slate-400">
                ISO 27001 certified infrastructure with DDoS protection and end-to-end encryption.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <Server className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">99.99% Uptime</h3>
              <p className="text-slate-400">
                Redundant server clusters across multiple geographic regions ensure your business never stops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
