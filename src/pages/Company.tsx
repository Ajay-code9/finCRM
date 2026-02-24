import { motion } from "motion/react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Company() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                Empowering the Future of <span className="text-brand-600">Fintech</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                FinCRM was founded with a simple mission: to provide forex brokers with the technology they need to compete on a global scale. We combine deep industry expertise with cutting-edge software engineering.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/office/800/600" 
                alt="FinCRM Office" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <p className="font-display font-bold text-4xl text-brand-600 mb-1">10+</p>
                <p className="text-slate-600 font-medium">Years of Innovation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every decision we make.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Client First", desc: "Your success is our success. We build features that solve real problems for your business." },
              { title: "Radical Transparency", desc: "No hidden fees, no black boxes. We believe in open communication and clear pricing." },
              { title: "Continuous Innovation", desc: "The fintech landscape moves fast. We ship updates weekly to keep you ahead of the curve." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center group">
                <div className="mb-4 relative overflow-hidden rounded-2xl">
                  <img 
                    src={`https://picsum.photos/seed/person${i}/400/400`} 
                    alt="Team Member" 
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Alex Morgan</h3>
                <p className="text-brand-600 font-medium">Co-Founder & CEO</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
              <p className="text-brand-100 mb-8 text-lg">
                Have questions about FinCRM? Our team is ready to help you find the right solution for your brokerage.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Headquarters</h3>
                    <p className="text-brand-100">123 Fintech Blvd, Suite 500<br/>London, UK EC2A 4BX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-brand-100">hello@fincrm.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-brand-100">+44 20 7123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Support Hours</h3>
                    <p className="text-brand-100">24/5 Global Support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-slate-900">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none"></textarea>
                </div>
                <Button className="w-full" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
