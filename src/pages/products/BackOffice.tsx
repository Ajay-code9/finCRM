import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Database,
  Settings,
  Zap,
  Users,
  Globe,
  Code,
  FileText,
  Mail,
  Shield,
  BarChart3,
  Layers,
  Headphones,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { useRequestDemo } from "@/context/RequestDemoContext";
import { SectionParticles } from "@/components/common/SectionParticles";

export default function BackOffice() {
  const { setIsDemoDialogOpen } = useRequestDemo();
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="product-hero-layer" aria-hidden />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Industry Leading Solution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                Enterprise-Grade <span className="text-brand-600">Back Office CRM</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                A premier ecosystem designed to streamline workflows, enhance client satisfaction, and drive revenue growth through intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2" onClick={() => setIsDemoDialogOpen(true)}>
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Features
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="/images/fincrmm5.jpg" 
                  alt="Back Office Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is it for? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Why Choose Our Back Office?
            </h2>
            <p className="text-lg text-slate-600">
              Designed for brokerages that demand sophisticated customization and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Centralized Data Hub",
                desc: "Securely manage and access comprehensive client profiles, including documentation, contact info, and trading history in one place.",
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Tailored Customization",
                desc: "Perfect for companies requiring specialized workflows and bespoke configurations to match their unique business model.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Sales Empowerment",
                desc: "Equip your sales team with the tools to respond instantly to client needs, boosting conversion and retention rates.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Operational Efficiency",
                desc: "Free up valuable employee time by automating routine daily tasks and reducing manual intervention steps.",
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Low-Code Environment",
                desc: "Reduce reliance on heavy IT infrastructure. Our system is designed to be managed with minimal developer intervention.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Collaboration",
                desc: "Unify all your departments and international offices, allowing them to work seamlessly together on a single platform.",
              },
            ].map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included - Features */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-900" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/20 blur-xl"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: Math.random() * 300 + 100 + "px",
                height: Math.random() * 300 + 100 + "px",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Comprehensive Feature Set
            </h2>
            <p className="text-slate-400 text-lg">
              Everything you need to manage clients, documents, and automation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Client Management */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Client Management</h3>
              <ul className="space-y-4">
                {[
                  "Instant registration alerts & callback requests",
                  "Advanced client segmentation & categorization",
                  "Real-time & historical trading transaction logs",
                  "Seamless IB & Affiliate network management",
                  "Targeted mass email marketing campaigns"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Document Control */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Document Control</h3>
              <ul className="space-y-4">
                {[
                  "Bank-grade secure document storage",
                  "Automated expiration & renewal notifications",
                  "Daily incoming/outgoing document reports",
                  "Intuitive UI for pending document review",
                  "GDPR & regulatory compliance tools"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Automation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Smart Automation</h3>
              <ul className="space-y-4">
                {[
                  "Algorithmic marketing campaign targeting",
                  "Auto-generation of CySEC & financial reports",
                  "Automated email notification systems",
                  "Multi-language website & campaign translation",
                  "Cross-departmental task & access management"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why it is valued */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Why Industry Leaders Value Us
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With over a decade of experience in the forex industry, we understand exactly what brokerages need to thrive. Our solution is built on a foundation of stability, flexibility, and expert support.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold">
                    10+
                  </div>
                  <span className="font-medium text-slate-900">Years Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold">
                    250+
                  </div>
                  <span className="font-medium text-slate-900">Satisfied Clients</span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Flexibility", desc: "Fully customizable to fit companies of all sizes." },
                { title: "Expert IT Team", desc: "Rapid development of custom solutions." },
                { title: "Automation", desc: "Save time and money on back-office tasks." },
                { title: "Scalability", desc: "Tools designed for remote & growing teams." },
                { title: "24/7 Support", desc: "Round-the-clock technical assistance." },
                { title: "Stability", desc: "A proven, long-standing market solution." }
              ].map((val, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-sm text-slate-500">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-brand-600 text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-linear-to-b from-brand-800/40 to-transparent pointer-events-none"
          aria-hidden
        />
        <SectionParticles />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Want to radically change the way you do business?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of brokers who have transformed their operations with FinCRM.
          </p>
          <Button size="lg" variant="secondary" className="gap-2" onClick={() => setIsDemoDialogOpen(true)}>
            Request a Callback <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
