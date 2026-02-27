import { motion } from "motion/react";
import { 
  ArrowRight, 
  Trophy, 
  Target, 
  TrendingUp, 
  Settings, 
  ShieldAlert, 
  BarChart2, 
  Layers, 
  Users,
  Code,
  Zap,
  Headphones,
  Maximize,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRequestDemo } from "@/context/RequestDemoContext";

export default function PropTradingCRM() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Prop Trading Solution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                Launch Your Own <span className="text-purple-600">Prop Trading Firm</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Set up multi-step challenges, manage clients with ease, and offer an innovative funding system. Revolutionize the way you do business with our turnkey solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 bg-purple-600 hover:bg-purple-700 text-white" onClick={() => setIsDemoDialogOpen(true)}>
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
                  src="/images/proptrading1.jpg" 
                  alt="Prop Trading Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Step into the world of proprietary trading with confidence
            </h2>
            <p className="text-lg text-slate-600">
              Streamline challenges, automate trader management, and track real-time performance with ease.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Unlimited Challenges",
                desc: "Design multi-stage challenges with customizable trading conditions tailored to your firm's strategy."
              },
              {
                icon: Target,
                title: "Goals and Limitations",
                desc: "Choose unlimited trading goals and risk parameters to accurately tackle the challenge requirements."
              },
              {
                icon: TrendingUp,
                title: "Stream Revenue",
                desc: "Set up free and paid challenges with no hassle. Monetize your expertise and grow your capital."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6 mx-auto">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              How Prop Trading Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Registration & Setup",
                desc: "Traders sign up, choose a trading challenge, and participate in simulated or live environments. You set the benchmarks.",
                img: "/images/proptrading2.jpg"
              },
              {
                step: "2",
                title: "Skill Evaluation",
                desc: "Participants must meet your firm's predefined requirements, such as profit targets or risk management criteria.",
                img: "/images/proptrading3.jpg"
              },
              {
                step: "3",
                title: "Funded Accounts",
                desc: "Successful traders receive a funded account. They earn a share of profits, incentivizing performance while boosting your capital.",
                img: "/images/proptrading4.jpg"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-900 font-bold text-xl flex items-center justify-center mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <div className="mb-6 rounded-xl overflow-hidden w-full aspect-video bg-slate-50">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FinCRM - Alternating Features */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Why Choose FinCRM Prop Trading?
            </h2>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 p-2">
                  <img src="/images/proptrading5.jpg" alt="Centralized Management" className="rounded-xl w-full h-auto" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Centralized Management</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Effortlessly manage traders, profiles, and trading activities in one powerful, centralized dashboard.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Keep a close eye on trader performance, oversee accounts, and optimize trading strategies with ease.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Elevate your business with streamlined management solutions designed for growth.</p>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Advanced Risk Management</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Equip your firm with cutting-edge risk management tools. Monitor risk parameters across all challenges in real-time.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Seamlessly set flexible thresholds and 'read only' status for accounts that fail specified objectives.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Instantly access detailed reports on trading activity, profitability, and risk exposure.</p>
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 p-2">
                  <img src="/images/proptrading6.jpg" alt="Risk Management" className="rounded-xl w-full h-auto" />
                </div>
              </motion.div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 p-2">
                  <img src="/images/proptrading7.jpg" alt="Seamless Integration" className="rounded-xl w-full h-auto" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Seamless Integration</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Integrates with leading trading platforms like MetaTrader, cTrader, and more.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Enjoy smooth data flow and synchronization that minimizes operational hassles.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Supports multi-currency accounts, flexible leverage options, and seamless onboarding.</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid - What makes it stand out */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              What makes it stand out
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We have been working in forex for 10+ years, and know exactly what you need from prop CRM software to thrive!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Automation - Large Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-purple-100 rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Automation</h3>
                <p className="text-slate-700 max-w-md">Automate challenges effortlessly to save up on time and money. Streamline your entire workflow.</p>
              </div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
            </motion.div>

            {/* Strong IT - Dark */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden md:row-span-2 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Strong IT Department</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Equipped with a team of dedicated IT professionals ready to develop tailored solutions quickly and efficiently.
                </p>
              </div>
              <div className="self-end mt-8 w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-slate-900" />
              </div>
            </motion.div>

            {/* Scalability - Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-purple-100 rounded-3xl p-8 relative"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Scalability</h3>
              <p className="text-slate-600 text-sm">Access a wide range of tools and integrations, scalable to your prop trading challenges.</p>
            </motion.div>

            {/* Support - Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-purple-100 rounded-3xl p-8 relative"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Support</h3>
              <p className="text-slate-600 text-sm">Technical support 24/5 and emergency support 24/7.</p>
            </motion.div>

            {/* Flexibility - Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-purple-100 rounded-3xl p-8 relative"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Flexibility</h3>
              <p className="text-slate-600 text-sm">Customizable to build your challenges exactly how you envision them.</p>
            </motion.div>

            {/* Stability - Large Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 bg-purple-100 rounded-3xl p-8 relative"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Stability</h3>
                <p className="text-slate-700 max-w-md">A trusted name in the industry, FinCRM Prop Trading is one of the longest-standing and most advanced solutions.</p>
                <div className="mt-6 inline-block px-4 py-2 bg-white/50 rounded-full text-purple-800 font-bold text-sm">
                  15+ Years Expertise
                </div>
              </div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-purple-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-50 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                Ready to elevate your prop trading operations?
              </h2>
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-purple-500/20" onClick={() => setIsDemoDialogOpen(true)}>
                Request a Demo
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <img 
                 src="https://picsum.photos/seed/coins/400/400" 
                 className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 object-contain opacity-50" 
                 alt="Coins"
               />
               <img 
                 src="/images/proptrading8.jpg" 
                 className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 object-contain opacity-50" 
                 alt="Trophy"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
