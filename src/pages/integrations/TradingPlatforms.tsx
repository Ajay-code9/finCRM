import { motion } from "motion/react";
import { 
  ArrowRight, 
  Monitor, 
  Smartphone, 
  Globe, 
  Zap, 
  BarChart2, 
  Layers, 
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRequestDemo } from "@/context/RequestDemoContext";

export default function TradingPlatforms() {
  const { setIsDemoDialogOpen } = useRequestDemo();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                3 Premium Integrations Available
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                Seamless <span className="text-purple-600">Trading Platform</span> Integrations
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                As a premier Forex CRM solution, seamless integration with top-tier trading platforms is our priority. Our system connects effortlessly with industry-standard platforms, rigorously tested to ensure flawless synchronization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Match-Trader */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 bg-slate-50 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center z-10">
                  <Monitor className="w-10 h-10 text-slate-700" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Match-Trader</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  An award-winning platform celebrated for its user-friendly interface and robust native features. Offers a progressive web app experience, ensuring trading is always accessible on mobile devices directly through the browser.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Intuitive Interface</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>PWA Mobile Technology</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Built-in Copy Trading</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 mt-auto">
                <Button
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-xl"
                  onClick={() => setIsDemoDialogOpen(true)}
                >
                  Get Connected
                </Button>
                <Button variant="outline" className="flex-1 border-slate-200 hover:bg-slate-50 rounded-xl">
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* MetaTrader 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 bg-slate-50 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center z-10">
                  <BarChart2 className="w-10 h-10 text-slate-700" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">MetaTrader 4</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  The global standard in trading platforms. Available in 39 languages and packed with expert analytical tools, custom indicators, and support for Expert Advisors (EAs).
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Industry Standard</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Huge EA Marketplace</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Advanced Charting</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 mt-auto">
                <Button
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-xl"
                  onClick={() => setIsDemoDialogOpen(true)}
                >
                  Get Connected
                </Button>
                <Button variant="outline" className="flex-1 border-slate-200 hover:bg-slate-50 rounded-xl">
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* MetaTrader 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 bg-slate-50 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center z-10">
                  <Layers className="w-10 h-10 text-slate-700" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">MetaTrader 5</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Built by the same legendary developers with a familiar UI but powered by next-generation technology. MT5 represents the pinnacle of advanced trading capabilities and asset diversity.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Multi-Asset Trading</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>More Timeframes</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Built-in Economic Calendar</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 mt-auto">
                <Button
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-xl"
                  onClick={() => setIsDemoDialogOpen(true)}
                >
                  Get Connected
                </Button>
                <Button variant="outline" className="flex-1 border-slate-200 hover:bg-slate-50 rounded-xl">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Why Integrate With Us?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just connect you; we optimize the connection. Our infrastructure is built to handle high-frequency data transmission with minimal latency, ensuring your traders get the best execution possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Zero Latency</h4>
                    <p className="text-slate-600">Direct fiber connections to major liquidity providers and platform servers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Global Reach</h4>
                    <p className="text-slate-600">Servers strategically located in key financial hubs worldwide.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Mobile Optimized</h4>
                    <p className="text-slate-600">Full support for mobile trading apps and responsive web interfaces.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-700">MT5 Server</span>
                    </div>
                    <span className="text-green-600 font-mono text-sm">Connected</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-700">MT4 Bridge</span>
                    </div>
                    <span className="text-green-600 font-mono text-sm">Connected</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-700">Match-Trader</span>
                    </div>
                    <span className="text-green-600 font-mono text-sm">Connected</span>
                  </div>
                  
                  <div className="mt-8 p-6 bg-slate-900 rounded-2xl text-white text-center">
                    <p className="text-slate-400 text-sm mb-2">System Status</p>
                    <div className="text-3xl font-bold text-green-400">100% Uptime</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                Ready to connect your platform?
              </h2>
              <p className="text-slate-300 text-lg mb-10">
                Provide us with your credentials for a seamless connection to the platform of your choice.
              </p>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-purple-500/20"
                onClick={() => setIsDemoDialogOpen(true)}
              >
                Get Connected Now
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-30" />
               <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
