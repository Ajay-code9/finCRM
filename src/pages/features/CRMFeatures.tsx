import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  MessageSquare, 
  LayoutTemplate, 
  Wallet, 
  Calculator, 
  Zap, 
  Percent, 
  Network, 
  GitMerge, 
  Mail, 
  LogIn, 
  Mails, 
  MessageCircle, 
  Gift, 
  Trophy, 
  Crown, 
  Coins, 
  CalendarClock, 
  Scale, 
  Code, 
  Server, 
  Users, 
  Database, 
  Workflow, 
  Share2, 
  PieChart 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRequestDemo } from "@/context/RequestDemoContext";

// Define categories
const categories = [
  "Modules",
  "IB",
  "Marketing",
  "Rewards",
  "Reporting",
  "API",
  "Additional",
  "Brokeree"
];

// Define features data
const features = [
  // Modules
  {
    category: "Modules",
    title: "Live Chat Integration",
    description: "Boost client engagement with our seamless Instant Message Module. Integrate popular messaging platforms directly into your CRM to streamline communication and improve response times.",
    icon: MessageSquare,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  },
  {
    category: "Modules",
    title: "Dynamic Page Builder",
    description: "Unleash creativity with our Custom Pages Module. Build unique, dynamic landing pages within your client area to enhance user experience and drive specific marketing goals without coding.",
    icon: LayoutTemplate,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },
  {
    category: "Modules",
    title: "Local Payment Agent",
    description: "Facilitate global transactions with the Local Depositor Module. Assign trusted local agents to handle deposits and withdrawals, bridging the gap between traditional banking and your brokerage.",
    icon: Wallet,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },
  {
    category: "Modules",
    title: "Trade Estimator",
    description: "Empower traders with the Trading Calculator Module. Provide real-time calculations for margins, pip values, and spreads directly in the client dashboard, fully compatible with MT4/MT5.",
    icon: Calculator,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  },
  {
    category: "Modules",
    title: "Rapid Payouts",
    description: "Automate your financial flows with the Instant Withdrawals Module. Set custom limits and approval rules to offer lightning-fast fund access to your clients while maintaining security.",
    icon: Zap,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  },
  {
    category: "Modules",
    title: "Fee Management Engine",
    description: "Automate commission and fee deductions with precision. The Account Fees Rules module allows you to configure complex fee structures based on account types, volume, or specific client groups.",
    icon: Percent,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },

  // IB
  {
    category: "IB",
    title: "Multi-Level IB Network",
    description: "Revolutionize your partnership program with the Open Network IB Module. Configure flexible commission structures, multi-tier rebates, and allow clients to choose their preferred IB upon registration.",
    icon: Network,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  },
  {
    category: "IB",
    title: "Smart Campaign Routing",
    description: "Optimize affiliate performance with Automatic IB Campaign Allocation. Use dynamic tiering based on referrals, deposits, and volume to automatically assign clients to the most effective campaigns.",
    icon: GitMerge,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },

  // Marketing
  {
    category: "Marketing",
    title: "Email Integration",
    description: "Centralize your communications with the Mail Module. Link corporate mailboxes directly to the CRM to track all client correspondence, use templates, and ensure no lead is left behind.",
    icon: Mail,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  },
  {
    category: "Marketing",
    title: "Social Sign-On",
    description: "Reduce friction with the Social Media Login Module. Allow clients to register and log in instantly using their Google, Facebook, or Twitter accounts, boosting conversion rates.",
    icon: LogIn,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },
  {
    category: "Marketing",
    title: "Bulk Emailer",
    description: "Scale your outreach with the Mass Mail Module. Segment your audience using CRM data and send targeted email campaigns via reliable SMTP integration to drive retention and deposits.",
    icon: Mails,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },
  {
    category: "Marketing",
    title: "SMS Notifications",
    description: "Stay connected instantly with the SMS Module. Send automated alerts for deposits, margin calls, or promotions directly to clients' phones to ensure high visibility and engagement.",
    icon: MessageCircle,
    color: "bg-slate-900 border-slate-800 text-white"
  },

  // Rewards
  {
    category: "Rewards",
    title: "Auto-Bonus System",
    description: "Streamline incentives with the Automatic Bonus Module. Set precise conditions for deposit bonuses or welcome credits, automating the distribution process to reward loyal traders effortlessly.",
    icon: Gift,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  },
  {
    category: "Rewards",
    title: "Trading Competitions",
    description: "Gamify trading with the Contest Module. Launch exciting tournaments, track real-time leaderboards, and automate winner selection to boost trading volume and community engagement.",
    icon: Trophy,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },
  {
    category: "Rewards",
    title: "Trader Loyalty Rewards",
    description: "Build long-term relationships with the Loyalty Program Module. Reward traders with points for every trade, which can be redeemed for cash, prizes, or trading credits.",
    icon: Crown,
    color: "bg-slate-900 border-slate-800 text-white"
  },
  {
    category: "Rewards",
    title: "Rebate System",
    description: "Incentivize volume with the Cashback Module. Configure automated cashback rules based on trading activity, giving clients a tangible reason to keep trading with your brokerage.",
    icon: Coins,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  },

  // Reporting
  {
    category: "Reporting",
    title: "Automated Reporting",
    description: "Never miss a metric with the Scheduled Reports Module. Configure detailed financial and operational reports to be generated and emailed to stakeholders automatically on a schedule.",
    icon: CalendarClock,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },
  {
    category: "Reporting",
    title: "Compliance Manager",
    description: "Navigate regulations with ease using the Regulation Module. Generate specific reports for CySEC, FCA, or other bodies, including transaction reporting and risk categorization.",
    icon: Scale,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  },

  // API
  {
    category: "API",
    title: "Client Portal API",
    description: "Build a bespoke frontend with the Client API. Fully customize the look and feel of your client area while leveraging the robust backend logic of our CRM for a unique brand experience.",
    icon: Code,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },
  {
    category: "API",
    title: "Admin REST API",
    description: "Gain full control with the REST API Module. Integrate external systems, automate back-office tasks, and sync data across your entire infrastructure with our comprehensive API endpoints.",
    icon: Server,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  },

  // Additional
  {
    category: "Additional",
    title: "Team Expansion",
    description: "Scale your workforce with the Additional Managers module. Add more admin seats with granular permissions to distribute workload and enhance team collaboration.",
    icon: Users,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },
  {
    category: "Additional",
    title: "Server Scaling",
    description: "Grow your infrastructure with the Additional MT Live Server module. Connect multiple trading servers to a single CRM instance to support a growing client base.",
    icon: Database,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  },
  {
    category: "Additional",
    title: "Workflow Automation",
    description: "Optimize operations with Additional Automation Rules. Create custom logic triggers to handle complex workflows, reducing manual intervention and error rates.",
    icon: Workflow,
    color: "bg-slate-900 border-slate-800 text-white"
  },

  // Brokeree
  {
    category: "Brokeree",
    title: "Social Trading",
    description: "Enable copy trading with Brokeree Social Trading. Allow experienced traders to share strategies and beginners to copy them, creating a vibrant investment community.",
    icon: Share2,
    color: "bg-slate-100 border-slate-200 text-slate-700"
  },
  {
    category: "Brokeree",
    title: "PAMM Accounts",
    description: "Offer managed account services with Brokeree PAMM. Allow money managers to trade on behalf of investors with automated profit distribution and performance tracking.",
    icon: PieChart,
    color: "bg-purple-100 border-purple-200 text-purple-700"
  }
];

export default function CRMFeatures() {
  const [activeCategory, setActiveCategory] = useState("Modules");
  const { setIsDemoDialogOpen } = useRequestDemo();

  const filteredFeatures = features.filter(f => f.category === activeCategory);

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
                CRM <span className="text-purple-600">Features</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-light">
                Welcome to the most feature-rich CRM ecosystem on the market. Modular, scalable, and designed for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gap-2 bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20 text-lg px-8 h-14 rounded-xl"
                  onClick={() => setIsDemoDialogOpen(true)}
                >
                  Request a Demo <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex justify-center"
            >
              {/* Abstract 3D-like Illustration Placeholder */}
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border border-slate-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-400">dashboard.tsx</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-32 bg-slate-50 rounded-xl border border-slate-100 flex items-end p-4 gap-2">
                      <div className="w-1/5 h-[40%] bg-purple-200 rounded-t-md"></div>
                      <div className="w-1/5 h-[70%] bg-purple-300 rounded-t-md"></div>
                      <div className="w-1/5 h-[50%] bg-purple-400 rounded-t-md"></div>
                      <div className="w-1/5 h-[90%] bg-purple-500 rounded-t-md"></div>
                      <div className="w-1/5 h-[60%] bg-purple-600 rounded-t-md"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-slate-50 rounded-xl border border-slate-100 p-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div className="h-2 w-16 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="h-20 bg-slate-50 rounded-xl border border-slate-100 p-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                          <Users className="w-4 h-4" />
                        </div>
                        <div className="h-2 w-16 bg-slate-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -right-12 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Status</div>
                        <div className="font-bold text-slate-900">Active</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We work relentlessly to offer you the features you need to take your brokerage to the next level. Each of our tools was developed as a <span className="font-bold text-purple-600">module</span>, meaning they can be quickly and easily added to your CRM. This ensures you're not forced to pay for tools you don't use, while allowing you to scale effortlessly as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* Features Tabs & Grid */}
      <section className="py-12 pb-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="border border-slate-200 rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Tabs Header */}
            <div className="flex flex-wrap justify-center gap-2 p-6 bg-slate-50/80 border-b border-slate-100 backdrop-blur-sm sticky top-0 z-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-purple-600 text-white shadow-md transform scale-105"
                      : "bg-white text-slate-600 hover:bg-purple-50 hover:text-purple-600 border border-slate-200 hover:border-purple-200 shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="p-8 md:p-12 bg-white min-h-[400px]">
              <div className="grid md:grid-cols-2 gap-8">
                <AnimatePresence mode="wait">
                  {filteredFeatures.map((feature) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`p-8 rounded-3xl border ${feature.color} transition-all hover:shadow-lg bg-opacity-50`}
                    >
                      <div className="flex items-start gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                          feature.color.includes("bg-slate-900") ? "bg-white/10 text-white" : "bg-white"
                        }`}>
                          <feature.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                          <p className={`leading-relaxed ${
                            feature.color.includes("bg-slate-900") ? "text-slate-300" : "text-slate-600"
                          }`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100 overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Want to radically change <br/>
                <span className="text-purple-600">the way you do business?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Join hundreds of brokers who have scaled their operations with our modular CRM.
              </p>
            </div>
            <div className="relative z-10">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white text-xl px-10 py-8 h-auto rounded-2xl shadow-lg shadow-green-500/20 transition-transform hover:scale-105"
                onClick={() => setIsDemoDialogOpen(true)}
              >
                Request a demo
              </Button>
            </div>

            {/* Decor */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-50 to-transparent opacity-50 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { CheckCircle2 } from "lucide-react";
