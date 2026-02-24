import { motion } from "motion/react";
import { 
  ArrowRight, 
  LifeBuoy, 
  MessageSquare, 
  Users, 
  Globe, 
  Shield, 
  FileText, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Search, 
  Lock,
  MessageCircle,
  HelpCircle,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceDesk() {
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
                Customer Support Solution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                Service Desk: <span className="text-purple-600">Support Your Customers</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Quickly and easily handle your customer’s enquiries, issues, and requests with a customizable system designed for B2B needs.
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
                  src="https://picsum.photos/seed/servicedesk/800/600" 
                  alt="Service Desk Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro / Origin Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Battle-Tested Software Refined Over <span className="text-purple-600">8+ Years</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We initially developed our Service Desk for our own internal use, and it became indispensable to our operations. That's why we're sharing it with all our B2B clients who need to resolve large volumes of enquiries rapidly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: "High Volume Management",
                desc: "Effortlessly manage huge numbers of customer enquiries without losing track."
              },
              {
                icon: Globe,
                title: "Global Collaboration",
                desc: "Work together from anywhere and solve problems in one centralized place."
              },
              {
                icon: Search,
                title: "Powerful Categorization",
                desc: "Advanced tools to instantly locate the information you need."
              },
              {
                icon: Lock,
                title: "Granular Permissions",
                desc: "Limit who has access to what with specialized permission settings."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:border-purple-200 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leading Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
                Core Functionality
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Track Customer Enquiries & Issues
              </h2>
              <ul className="space-y-4">
                {[
                  "Enable clients to create ticket requests effortlessly.",
                  "Control ticket priorities so your team tackles critical tasks first.",
                  "Assign statuses to keep everyone informed of completion progress.",
                  "Attach images or videos for better understanding of issues.",
                  "Securely add important documents or contracts directly to tickets."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                    <p className="text-slate-700 text-lg">{item}</p>
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
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
                <img src="https://picsum.photos/seed/tickets/800/600" alt="Ticket Management" className="rounded-xl w-full h-auto" />
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
                <img src="https://picsum.photos/seed/chat/800/600" alt="Integrated Communications" className="rounded-xl w-full h-auto" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
                Communication
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Integrated Communications
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Live Chat & Ticketing</h4>
                    <p className="text-slate-600">Communicate with clients in one place and eliminate the need for scattered emails.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">FAQ Section</h4>
                    <p className="text-slate-600">Add a comprehensive FAQ section for your clients to reduce common repetitive enquiries.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Secret Chat</h4>
                    <p className="text-slate-600">Add internal comments to tickets without the client's knowledge for team collaboration.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cross Department Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Cross-Department & Inter-Office Connectivity
              </h2>
              <p className="text-slate-300 text-lg">
                Unify your entire organization. Allow all global offices and employees to work together in one centralized platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  icon: Users,
                  title: "Multi-Department",
                  desc: "Add different departments to the Service Desk to streamline workflows across the company."
                },
                {
                  icon: Lock,
                  title: "Granular Permissions",
                  desc: "Give separate permissions to different departments and people to ensure data security."
                },
                {
                  icon: Share2,
                  title: "Global Collaboration",
                  desc: "Enable seamless collaboration between international offices and remote teams."
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl text-center">
                  <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mx-auto mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
                Want to radically change the way you do business?
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
