import { motion } from "motion/react";
import { 
  ArrowRight, 
  Handshake, 
  FileSignature, 
  Coins, 
  Users, 
  BarChart2, 
  Layers, 
  Bell, 
  FileText, 
  Settings, 
  Megaphone,
  CheckCircle2,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartnerArea() {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Partner Area
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                Empower Your <span className="text-purple-600">IB Partners</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Equip your Introducing Brokers with the tools they need to generate business and massively expand your brokerage's reach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20">
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
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <img 
                  src="\images\partnerarea1.jpg" 
                  alt="Partner Area Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Support your IBs, <span className="text-purple-600">Elevate your Business</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                While competitive commissions and good relationships are standard, true growth comes from equipping partners with the right tools.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our Partner Area automates workflows, simplifies campaign management, and provides transparent commission tracking—all within an intuitive interface that requires zero training.
              </p>
              <ul className="space-y-4">
                {[
                  "Automate daily administrative processes",
                  "Create and manage marketing campaigns instantly",
                  "Track referrals and volume in real-time",
                  "Transparent commission visibility"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                    <p className="text-slate-700">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 p-2">
                <img src="\images\partnerarea2.jpg" alt="IB Dashboard" className="rounded-xl w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section: As simple as 1, 2, 3 */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              As Simple as "1, 2, 3"
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Streamline your partnership workflow with our structured approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Handshake,
                title: "Attract Partners",
                desc: "Leverage integrated marketing assets to recruit top-tier IBs effortlessly."
              },
              {
                step: "2",
                icon: FileSignature,
                title: "Define Terms",
                desc: "Set flexible commission structures and payout rules tailored to each partner."
              },
              {
                step: "3",
                icon: Coins,
                title: "Automate Payouts",
                desc: "Instant, accurate commission calculations and distributions after every trade."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 bg-purple-100 w-16 h-16 rounded-bl-3xl flex items-center justify-center text-purple-600 font-bold text-xl">
                  {item.step}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ultimate IB Toolkit */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              The Ultimate <span className="text-purple-600">IB Toolkit</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Offer your partners an incredibly powerful tool, allowing them to grow their business and find new clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: "Multi-Account Support", desc: "Enable flexibility with multiple IB account requests." },
              { icon: Bell, title: "Status Tracking", desc: "Real-time monitoring of application progress." },
              { icon: FileText, title: "Document Vault", desc: "Secure storage and instant access to all agreements." },
              { icon: Settings, title: "Profile Management", desc: "Self-service tools for IBs to update their details." },
              { icon: BarChart2, title: "Advanced Analytics", desc: "Deep insights into performance and statistical data." },
              { icon: Users, title: "Campaign Monitoring", desc: "Comprehensive tracking of clicks, leads, and conversions." },
              { icon: Megaphone, title: "Marketing Assets", desc: "Unlimited banner hosting for partner campaigns." },
              { icon: Zap, title: "Instant Alerts", desc: "Real-time notifications for rapid administrative action." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:border-purple-200 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Reap the benefits of a powerful forex partner program
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Build Stronger Partnerships",
                    desc: "Foster trust and collaboration with your affiliate network through transparent operations."
                  },
                  {
                    title: "Professional Ecosystem",
                    desc: "Provide a cutting-edge, tech-savvy environment that helps partners thrive."
                  },
                  {
                    title: "Instant Onboarding",
                    desc: "A user-friendly interface ensures immediate productivity with no learning curve."
                  },
                  {
                    title: "Smart Automation",
                    desc: "Efficiency-boosting tools allow partners to focus on growth rather than admin."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-purple-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src="\images\partnerarea3.jpg" 
                alt="Partner Benefits" 
                className="relative rounded-3xl shadow-2xl border border-slate-700 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-50 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                Ready to transform your brokerage operations?
              </h2>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-purple-500/20">
                Request a Demo
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50" />
               <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
