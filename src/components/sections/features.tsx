import { 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Smartphone, 
  CreditCard, 
  Globe 
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Users,
    title: "Comprehensive CRM",
    description: "Complete tools for lead management, partner tracking, sales, and compliance. Streamline your entire brokerage operation.",
  },
  {
    icon: BarChart3,
    title: "Prop Trading Solution",
    description: "Specialized software for prop firms featuring real-time risk monitoring, challenge tracking, and automated account management.",
  },
  {
    icon: Globe,
    title: "Client & Partner Area",
    description: "All-in-one portal for managing trading accounts, deposits, and KYC documents. Empower your IBs with real-time tracking.",
  },
  {
    icon: Smartphone,
    title: "Integrated Mobile App",
    description: "Give your clients full control with a branded mobile app. Manage accounts, deposits, and documents on the go.",
  },
  {
    icon: CreditCard,
    title: "Extensive Integrations",
    description: "Seamlessly connect with MetaTrader 4/5, cTrader, over 290+ payment processors, and leading KYC providers.",
  },
  {
    icon: ShieldCheck,
    title: "Support & Security",
    description: "24/5 technical support with 24/7 emergency assistance. Enterprise-grade data protection to keep your business secure.",
  },
];

export function Features() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Tailored Solutions for <span className="text-brand-600">Forex Brokers</span>
          </h2>
          <p className="text-lg text-slate-600">
            FinCRM is designed to improve operational efficiency and client engagement with a fully customizable, automated environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
