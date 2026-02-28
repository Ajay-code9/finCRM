import { motion } from "motion/react";
import { 
  ArrowRight, 
  Trophy, 
  Coins, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Crown, 
  Target,
  BarChart3,
  Wallet,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRequestDemo } from "@/context/RequestDemoContext";

export default function LoyaltyProgram() {
  const { setIsDemoDialogOpen } = useRequestDemo();
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Retention Engine
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                Next-Gen <span className="text-brand-600">Tiered Loyalty</span> System
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Empower your traders, incentivize success, and drive revenue with our cutting-edge rewards ecosystem. Turn trading activity into tangible value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gap-2 bg-linear-to-r from-brand-600 via-brand-500 to-emerald-500 text-white shadow-lg shadow-[0_18px_45px_-20px_rgba(16,185,129,0.9)]"
                  onClick={() => setIsDemoDialogOpen(true)}
                >
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                <img 
                  src="/images/loyalityprogram.jpg" 
                  alt="Loyalty Program Dashboard" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Elevate Client Retention
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our loyalty engine redefines retention, setting you apart in the competitive Forex CRM landscape. We engineered this system to not just attract but deeply engage traders for the long haul.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                It's a scalable, gamified tiered structure that rewards frequency and volume. Traders aren't just numbers; they are participants in a rewarding journey where every trade brings them closer to real value.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                <Trophy className="w-10 h-10 text-brand-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gamified Growth</h3>
                <p className="text-slate-600">Turn trading into a game where progress is rewarded.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <Coins className="w-10 h-10 text-slate-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Real Value</h3>
                <p className="text-slate-600">Points convert to withdrawable cash or crypto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Who Benefits?
            </h2>
            <p className="text-lg text-slate-600">A win-win-win ecosystem for everyone involved.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Traders",
                icon: Users,
                desc: "Earn while you trade. Every position opens the door to points redeemable for fiat or crypto. Higher volume means higher rewards.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Brokerages",
                icon: TrendingUp,
                desc: "Acquire and retain with ease. Deploy a transparent reward loop that slashes churn and boosts lifetime value significantly.",
                color: "bg-brand-50 text-brand-600"
              },
              {
                title: "IBs",
                icon: Share2,
                desc: "Supercharge your offering. Give IBs a powerful value-add to attract a wider network of clients to your platform.",
                color: "bg-green-50 text-green-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              How It Works
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Accumulate",
                  desc: "Traders generate points with every execution. Volume drives velocity—climb the ladder to unlock better perks.",
                  icon: BarChart3
                },
                {
                  step: "02",
                  title: "Ascend",
                  desc: "Hit point milestones to level up. Evolve from 'Associate' to 'Trader' to 'Expert' status as you grow.",
                  icon: TrendingUp
                },
                {
                  step: "03",
                  title: "Multiply",
                  desc: "Status pays. Higher tiers unlock potent multipliers, ensuring your most active traders reap the biggest rewards.",
                  icon: Zap
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg text-center relative group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-16 h-16 mx-auto bg-brand-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-[0_18px_45px_-20px_rgba(16,185,129,0.9)]">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Unlock More Value
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real Money",
                desc: "Cash out points for real fiat or crypto currency directly to your wallet.",
                icon: Wallet
              },
              {
                title: "New Referrals",
                desc: "Viral growth. Traders earn extra points by bringing peers into the ecosystem.",
                icon: Users
              },
              {
                title: "Client Loyalty",
                desc: "Incentivize the best. Top performers are motivated to keep trading to maintain status.",
                icon: Crown
              },
              {
                title: "Stand Out",
                desc: "Unique selling point. Offer a modern retention tool that your competitors lack.",
                icon: Target
              },
              {
                title: "Full Branding",
                desc: "Your brand, your rules. Customize badges, tiers, thresholds, and names.",
                icon: ShieldCheck
              },
              {
                title: "Transparent & Safe",
                desc: "Fully admin-controlled, easy to audit, and entirely secure for peace of mind.",
                icon: ShieldCheck
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                Ready to revolutionize your retention strategy?
              </h2>
              <Button
                size="lg"
                className="bg-linear-to-r from-brand-600 via-brand-500 to-emerald-500 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-[0_18px_45px_-20px_rgba(16,185,129,0.9)]"
                onClick={() => setIsDemoDialogOpen(true)}
              >
                Request a Demo
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-30" />
               <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
