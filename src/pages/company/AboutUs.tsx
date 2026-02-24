import { motion } from "motion/react";
import { Users, Target, Award, Briefcase, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10+", label: "years of proven forex experience" },
  { value: "6", label: "valuable high-quality products" },
  { value: "250+", label: "satisfied clients from around the world" },
  { value: "50+", label: "talented employees in the team" },
];

const testimonials = [
  {
    name: "M4Markets",
    quote: "FXBO has been instrumental to our success as we’ve been growing with it since day 1. We love how easy it is to use and how it evolves with us as a growing broker. The CRM is easily customizable, and it is user friendly which me...",
    logo: "https://picsum.photos/seed/m4/40/40",
  },
  {
    name: "Instaforex",
    quote: "We have been working with FX Back Office since 2018. The CRM works great; it’s very easy to use, customize the IB and affiliate programs, run reports. As a system it’s convenient, stable, flexible (customizable to the needs of the com...",
    logo: "https://picsum.photos/seed/insta/40/40",
  },
  {
    name: "Kohle Capital",
    quote: "FXBO is a great SAAS provider, we have been working with them for almost 2 years now. Their service is very stable and efficient, the customer support is top of the line. As a rapidly growing business, we are constantly looking fo...",
    logo: "https://picsum.photos/seed/kohle/40/40",
  },
];

export default function AboutUs() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                About us
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We create smart solutions, tools, and features that help forex companies do their jobs quickly and more efficiently.
              </p>
              <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-slate-500">Certified by:</span>
                  <img src="https://picsum.photos/seed/tuv/80/40" alt="TUV Austria" className="h-8" />
                  <img src="https://picsum.photos/seed/wallarm/80/40" alt="Wallarm" className="h-8" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute w-full h-full bg-purple-400 rounded-full blur-3xl opacity-20"></div>
              <img src="https://picsum.photos/seed/abstract/500/500" alt="Abstract purple graphic" className="relative w-full max-w-md rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://picsum.photos/seed/dashboard/600/400" alt="Dashboard screenshot" className="rounded-2xl shadow-xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-slate-600 leading-relaxed">
                FX Back Office began as a pipe dream held by a few friends who knew they could revolutionize the day to day running of the FX brokerage businesses by creating a Forex CRM System like no other.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Our founding partners have vast experience in the support, sales, dealing, compliance, and IT sectors of the forex industry, and have been involved in FX since 2007. Pooling our expertise, we created a team and a product that changed the way forex brokerages do business today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Prop Banner */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              We don’t just aim to support your day-to-day operations, we aim to add massive value to your brokerage by creating user friendly conversion tools, simple partnership management programs and a CRM and Client Area like no other.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Where we are now */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Where we are now</h2>
            <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
              For nearly <span className="font-bold text-slate-800">10 years</span> we have been developing and improving our system, creating new products, and adding new features. We are currently recognized as one of the most widely used and reputable CRM companies worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold text-purple-600 mb-2">{stat.value}</div>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.logo} alt={testimonial.name} className="h-10 w-10 rounded-full mr-4" />
                  <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
