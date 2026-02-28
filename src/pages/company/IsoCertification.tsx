import { motion } from "motion/react";
import { ShieldCheck, Lock, FileText, CheckCircle } from "lucide-react";
import { SectionParticles } from "@/components/common/SectionParticles";

export default function IsoCertification() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-12 lg:py-16 bg-slate-800 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/isocertification3.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ShieldCheck className="w-16 h-16 text-brand-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                ISO 27001:2022 <span className="text-brand-500">Certified</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Demonstrating our unwavering commitment to information security, data protection, and operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About ISO 27001:2022 */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-bold text-slate-900">What is ISO 27001:2022?</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                ISO 27001:2022 is the leading international standard for information security management systems (ISMS). It provides a systematic approach to managing sensitive company information, ensuring data confidentiality, integrity, and availability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="/images/isocertification2.jpg" alt="Security graphic" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-slate-900">Core Principles of Our Certification</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 bg-white rounded-2xl shadow-lg text-center">
                <Lock className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-800 text-xl mb-2">Confidentiality</h3>
                <p className="text-slate-500">Ensuring that information is not disclosed to unauthorized individuals, entities, or processes.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 bg-white rounded-2xl shadow-lg text-center">
                <CheckCircle className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-800 text-xl mb-2">Integrity</h3>
                <p className="text-slate-500">Maintaining the consistency, accuracy, and trustworthiness of information over its entire lifecycle.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="p-8 bg-white rounded-2xl shadow-lg text-center">
                <FileText className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-800 text-xl mb-2">Availability</h3>
                <p className="text-slate-500">Ensuring that information is accessible and usable upon demand by an authorized party.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Security */}
      <section className="py-20 bg-linear-to-r from-brand-700 via-brand-600 to-emerald-500 text-white relative overflow-hidden">
        <SectionParticles />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Our Commitment to Security</h2>
            <p className="text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Achieving ISO 27001:2022 certification is a testament to our dedication to implementing and maintaining the highest standards of information security. Our clients can be confident that their data is protected by a robust and certified security framework.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
