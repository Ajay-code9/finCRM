import { motion } from "motion/react";
import { 
  ArrowRight, 
  ShieldCheck, 
  Layout, 
  Zap, 
  UserPlus, 
  Wallet, 
  MessageSquare, 
  Smartphone,
  Globe,
  CheckCircle2,
  Layers,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ClientArea() {
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
                Next-Gen Client Portal
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                The Ultimate <span className="text-purple-600">Client Experience</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Serve your clients with an intuitive, secure, and fully customizable portal. Deliver a professional interface that builds trust and simplifies operations 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 bg-purple-600 hover:bg-purple-700 text-white">
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
                  src="\images\clientarea5.jpg" 
                  alt="Client Area Dashboard" 
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
              Intuitive, Secure, Flexible
            </h2>
            <p className="text-lg text-slate-600">
              Present a professional, reliable, and intuitive interface to each and every client.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Uncompromised Security",
                desc: "Bank-grade security protocols ensuring your client data is protected 24/7. Reliability you can count on."
              },
              {
                icon: Layout,
                title: "Fully Customizable",
                desc: "Every element can be branded to match your identity. Tailor workflows and interfaces to meet your specific business needs."
              },
              {
                icon: Zap,
                title: "Intuitive Design",
                desc: "A user-friendly interface that requires no explanation. Quick, easy, and efficient for clients of all experience levels."
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

      {/* Leading Features - Alternating */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Leading Features
            </h2>
          </div>

          <div className="space-y-24">
            {/* Feature 1: Automation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
                  <img src="\images\clientarea2.jpg" alt="Automation" className="rounded-xl w-full h-auto" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Automation & Acceleration</h3>
                <ul className="space-y-4">
                  {[
                    "Instant notifications for client actions",
                    "Automated email sequences during registration",
                    "Built-in calls to action to drive engagement",
                    "Easy access to essential client reports"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                      <p className="text-slate-600 text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Feature 2: Onboarding */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                  <UserPlus className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Intuitive Onboarding</h3>
                <ul className="space-y-4">
                  {[
                    "Customizable multi-step onboarding workflows",
                    "Simplified registration with full KYC integration",
                    "Built-in appropriateness tests and questionnaires",
                    "Automatic scoring logic with variable outcomes"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                      <p className="text-slate-600 text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
                  <img src="\images\clientarea2.jpg" alt="Onboarding" className="rounded-xl w-full h-auto" />
                </div>
              </motion.div>
            </div>

            {/* Feature 3: Accounts & Funds */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
                  <img src="\images\clientarea3.jpg" alt="Funds Management" className="rounded-xl w-full h-auto" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Account & Funds Workflow</h3>
                <ul className="space-y-4">
                  {[
                    "Unlimited deposit and withdrawal functionality",
                    "Clear, concise display of account information",
                    "Secure storage of sensitive client data",
                    "Downloadable transaction history and statements"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                      <p className="text-slate-600 text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Feature 4: Support & Marketing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Support & Marketing Tools</h3>
                <ul className="space-y-4">
                  {[
                    "Integrated live chat functionality",
                    "Multi-language support for global reach",
                    "Referral system for client-driven growth",
                    "Marketing tools: banners, links, and statistics"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                      <p className="text-slate-600 text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
                  <img src="\images\clientarea4.jpg" alt="Marketing Tools" className="rounded-xl w-full h-auto" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              A Contemporary, Powerful Client Area
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              With over 10 years of experience building CRMs for brokers, we know exactly what your clients need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Industry Leading - Large Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-purple-50 rounded-3xl p-8 relative overflow-hidden group border border-purple-100"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Industry Leading</h3>
                <p className="text-slate-700 max-w-md">We continuously innovate, creating tools and features that ensure our CRM and Client Area remain at the forefront of the industry.</p>
              </div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Layers className="w-8 h-8 text-purple-600" />
              </div>
            </motion.div>

            {/* Reliability - Dark */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden md:row-span-2 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Reliability</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Clean, tested, and secure code. Our solutions operate 24/7, 365 days a year with minimal issues, guaranteeing uptime for your business.
                </p>
              </div>
              <div className="self-end mt-8 w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-slate-900" />
              </div>
            </motion.div>

            {/* Flexibility - Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-purple-50 rounded-3xl p-8 relative border border-purple-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Flexibility</h3>
              <p className="text-slate-600 text-sm">Customizable from the ground up. Integrates seamlessly with a huge variety of third-party solutions.</p>
            </motion.div>

            {/* Personal Touch - Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-purple-50 rounded-3xl p-8 relative border border-purple-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personal Touch</h3>
              <p className="text-slate-600 text-sm">Every element can be customized to fit your company's unique branding and color scheme.</p>
            </motion.div>

            {/* Unrivalled Support - Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-purple-50 rounded-3xl p-8 relative border border-purple-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Unrivalled Support</h3>
              <p className="text-slate-600 text-sm">Our experienced development teams offer clever, customized solutions delivered fast.</p>
            </motion.div>

             {/* Mobile App Promo - Large Purple */}
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 bg-purple-600 rounded-3xl p-8 relative overflow-hidden text-white"
            >
              <div className="relative z-10 max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/50 text-white text-xs font-medium mb-4 border border-purple-400">
                  <Smartphone className="w-3 h-3" /> Mobile App
                </div>
                <h3 className="text-2xl font-bold mb-4">Work on the go</h3>
                <p className="text-purple-100 mb-6">Get seamless access on the go with our Client Area mobile app. Always available, anytime, anywhere. Stay connected effortlessly!</p>
                <Button variant="secondary" className="gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 rounded-full opacity-50 blur-3xl"></div>
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
