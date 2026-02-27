import { motion } from "motion/react";
import { Briefcase, Users, ArrowRight, Sparkles, Coffee, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobOpenings = [
  { title: "Senior Frontend Developer", location: "Remote", department: "Engineering" },
  { title: "Product Manager", location: "New York, NY", department: "Product" },
  { title: "Marketing Specialist", location: "London, UK", department: "Marketing" },
  { title: "Customer Support Representative", location: "Remote", department: "Support" },
];

const perks = [
  { icon: Sparkles, title: "Innovative Projects", description: "Work on cutting-edge solutions that shape the future of fintech." },
  { icon: Users, title: "Collaborative Culture", description: "Join a supportive team where your ideas are valued and heard." },
  { icon: Award, title: "Competitive Benefits", description: "We offer a comprehensive benefits package to support your well-being." },
  { icon: Coffee, title: "Vibrant Office Life", description: "Enjoy a modern workspace with all the perks and a great atmosphere." },
];

export default function Careers() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 bg-slate-800 bg-cover bg-center text-white min-h-[calc(100vh-5rem)] flex items-center"
        style={{ backgroundImage: "url('/images/techteambg.png')" }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Briefcase className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                Join Our <span className="text-purple-400">Dynamic Team</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Be a part of a passionate team that is dedicated to building innovative solutions and shaping the future of the brokerage industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/techteam.jpg" alt="Team photo" className="rounded-2xl shadow-xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Why Join Us?</h2>
              <div className="grid grid-cols-2 gap-8">
                {perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                      <perk.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{perk.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">Open Positions</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {jobOpenings.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white rounded-2xl shadow-lg flex items-center justify-between hover:shadow-purple-100 hover:-translate-y-1 transition-all"
                >
                  <div>
                    <h3 className="font-bold text-slate-800 text-xl mb-1">{job.title}</h3>
                    <p className="text-slate-500">{job.location} &bull; {job.department}</p>
                  </div>
                  <Button className="bg-purple-600 text-white hover:bg-purple-700 rounded-xl px-6 py-3">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
