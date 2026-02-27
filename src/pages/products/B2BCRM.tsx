import { motion } from "motion/react";
import { 
  ArrowRight, 
  Bell, 
  Mail, 
  Tags, 
  History, 
  FileText, 
  ArrowUpRight, 
  FileBarChart, 
  Target, 
  Send, 
  CheckCircle2,
  Users,
  Zap,
  Headphones,
  Layout,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRequestDemo } from "@/context/RequestDemoContext";
import { SectionParticles } from "@/components/common/SectionParticles";

export default function B2BCRM() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                B2B Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                The Best <span className="text-purple-600">B2B CRM</span> on the Market
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Streamline your internal operations and take your customer service to a new level. Manage customer relations, sales, and data processing with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20" onClick={() => setIsDemoDialogOpen(true)}>
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
                  src="/images/b2b1.jpg" 
                  alt="B2B CRM Dashboard" 
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
              Smart Solutions for B2B Success
            </h2>
            <p className="text-lg text-slate-600">
              Our B2B CRM allows businesses to understand their client base and their relationship with individual clients like never before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bell,
                title: "Instant Notifications",
                desc: "Get alerts whenever a new client registers or requests a callback. Quickly and easily reach out to potential leads."
              },
              {
                icon: Mail,
                title: "Automated Emails",
                desc: "Create a wide range of automated emails to efficiently contact clients when action is required or updates are needed."
              },
              {
                icon: Tags,
                title: "Client Categorization",
                desc: "Sort and filter clients with infinite parameters. Understand customer needs and potential for further sales instantly."
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

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Leverage Powerful Tools
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              Grow your business and improve your client relationships with our comprehensive feature set.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Client History",
                desc: "See your history with any client and their actions within the CRM to foresee their needs.",
                icon: History
              },
              {
                title: "Document Storage",
                desc: "Safely store client documents and get notifications when important files are expiring.",
                icon: FileText
              },
              {
                title: "Daily Monitoring",
                desc: "Easily monitor daily outgoings and incomings by filtering your home screen view.",
                icon: ArrowUpRight
              },
              {
                title: "Auto Reports",
                desc: "Automatically generate important financial reports for both internal and external use.",
                icon: FileBarChart
              },
              {
                title: "Targeted Marketing",
                desc: "Use built-in algorithms to create targeted campaigns and generate impactful messaging.",
                icon: Target
              },
              {
                title: "Mass Emails",
                desc: "Send mass and targeted emails or campaigns to select clients in just a few clicks.",
                icon: Send
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:border-purple-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose B2B CRM - Alternating Features */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Top Reasons to Choose Our B2B CRM
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
                  <img src="/images/b2b2.jpg" alt="Customer Service" className="rounded-xl w-full h-auto" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Enhance Customer Service</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Create a customer feedback loop to constantly improve your support quality.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Respond to customer queries quickly and efficiently, boosting satisfaction.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Increase sales and improve overall customer retention rates.</p>
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
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Operational Efficiency</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Increase efficiency amongst employees by automating everyday repetitive tasks.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Decrease your IT and development spending budget with our ready-to-use solution.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    </div>
                    <p className="text-slate-600 text-lg">Manage multiple businesses from one centralized system seamlessly.</p>
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 p-2">
                  <img src="/images/fincrmm5.jpg" alt="Operational Efficiency" className="rounded-xl w-full h-auto" />
                </div>
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
              Why FinCRM B2B?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Keep employees and clients happier by running your business more smoothly in general.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Task Management - Large Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-purple-100 rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Task Management</h3>
                <p className="text-slate-700 max-w-md">Create detailed, tailored accesses and permissions for tasks and requests across all your departments and offices worldwide.</p>
              </div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-purple-600" />
              </div>
            </motion.div>

            {/* Cost Effective - Dark */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden md:row-span-2 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Cost Effective</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Decrease sales and marketing costs by improving your sales cycle and automating processes.
                </p>
              </div>
              <div className="self-end mt-8 w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
            </motion.div>

            {/* Centralized - Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-purple-100 rounded-3xl p-8 relative"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Centralized</h3>
              <p className="text-slate-600 text-sm">Manage multiple businesses from one centralized system.</p>
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
              <p className="text-slate-600 text-sm">Create a customer feedback loop to improve customer support.</p>
            </motion.div>

            {/* Overview - Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-purple-100 rounded-3xl p-8 relative"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Full Overview</h3>
              <p className="text-slate-600 text-sm">Gain a full overview of your client base and benefit from excellent reporting tools.</p>
            </motion.div>

            {/* Satisfaction - Large Purple */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 bg-purple-100 rounded-3xl p-8 relative"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Satisfaction</h3>
                <p className="text-slate-700 max-w-md">Keep employees and clients happier by running your business more smoothly in general.</p>
                <div className="mt-6 inline-block px-4 py-2 bg-white/50 rounded-full text-purple-800 font-bold text-sm">
                  Improved Relationships
                </div>
              </div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-50 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <SectionParticles />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                Want to radically change the way you do business?
              </h2>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-purple-500/20"
                onClick={() => setIsDemoDialogOpen(true)}
              >
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
