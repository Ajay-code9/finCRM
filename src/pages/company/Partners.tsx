import { motion } from "motion/react";
import { Handshake, Zap, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const partners = [
  { name: "Axiom Markets" },
  { name: "Nova Liquidity" },
  { name: "PrimeFlow Tech" },
  { name: "Aurora Pay" },
  { name: "Vertex Data Systems" },
  { name: "BlueStone Capital" },
  { name: "Helix Connectivity" },
  { name: "Quantum Signals" },
];

export default function Partners() {
  const navigate = useNavigate();

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-slate-50 overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                Powered by <span className="text-purple-600">Industry Leaders</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We collaborate with top-tier unicorns and technology pioneers to deliver robust, innovative, and scalable solutions for your brokerage.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute w-full h-full bg-purple-400 rounded-full blur-3xl opacity-20"></div>
              <img src="/images/partnerarea1.jpg" alt="Abstract partner graphic" className="relative w-full max-w-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">Our Valued Partners</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              We are proud to partner with these leading companies to bring you the best-in-class solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-purple-100 hover:-translate-y-1 transition-all"
              >
                <span className="text-sm font-semibold text-slate-800 text-center">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Become a Partner</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Interested in partnering with us? We are always looking for new opportunities to collaborate and innovate. Join us in shaping the future of brokerage technology.
              </p>
              <Button
                className="bg-purple-600 text-white hover:bg-purple-700 rounded-xl px-8 py-3 text-lg"
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="/images/partnerarea2.jpg" alt="Partnership graphic" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
