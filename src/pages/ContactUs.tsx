import { motion } from "motion/react";
import { Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-8">
                  Get in touch
                </h1>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-purple-600" />
                    <span className="text-lg text-slate-700">+357 25250675</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                    <span className="text-lg text-slate-700">Labyrinthou 8, 3081, Limassol, Cyprus</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative max-w-md w-full">
                <div className="rounded-3xl bg-white border border-slate-200 shadow-[0_20px_60px_-32px_rgba(15,23,42,0.9)] overflow-hidden">
                  <div className="bg-slate-100 flex items-center justify-center p-4">
                    <img
                      src="/images/getintouch.jpg"
                      alt="FinCRM team at work"
                      className="max-w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Send us a message</h2>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border-slate-200" />
                <Input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border-slate-200" />
                <Textarea placeholder="Your Message" className="w-full p-3 rounded-lg border-slate-200" rows={6} />
                <Button className="bg-purple-600 text-white hover:bg-purple-700 rounded-xl px-8 py-3 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Location</h2>
              <div className="w-full h-96 bg-slate-200 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0000000000005!2d33.040000000000006!3d34.67800000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e733d9b736c3c9%3A0x3b763a3b263b7e1c!2sLabyrinthou%208%2C%20Limassol%203081%2C%20Cyprus!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
