import { useState } from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  Globe, 
  MessageSquare, 
  Headphones, 
  Activity, 
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Server,
  Shield,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRequestDemo } from "@/context/RequestDemoContext";

// Featured Providers
const featuredProviders = [
  {
    name: "SquareTalk",
    desc: "A powerful cloud communications platform. Integrate seamless VoIP solutions to enhance your team's connectivity and customer support.",
    icon: MessageSquare,
    color: "bg-blue-50 text-blue-600"
  },
  {
    name: "Vamesong",
    desc: "Reliable and scalable VoIP services tailored for businesses. Ensure crystal-clear voice quality and robust performance.",
    icon: Headphones,
    color: "bg-green-50 text-green-600"
  },
  {
    name: "Commpeak",
    desc: "A leading provider of cloud-based communication solutions. Optimize your business operations with advanced VoIP features.",
    icon: Activity,
    color: "bg-purple-50 text-purple-600"
  },
  {
    name: "Coperato",
    desc: "Innovative VoIP solutions designed for modern enterprises. Streamline your communication channels with ease.",
    icon: Phone,
    color: "bg-orange-50 text-orange-600"
  }
];

// Other Providers List
const otherProviders = [
  "RingCentral", "8x8", "Vonage", "Nextiva", "Dialpad", "GoToConnect", "Ooma", "Grasshopper"
];

// FAQs
const faqs = [
  {
    question: "What are the benefits of using a VoIP provider?",
    answer: "VoIP providers offer cost-effective communication, scalability, and advanced features like call forwarding, voicemail-to-email, and conferencing."
  },
  {
    question: "How does VoIP improve business communication?",
    answer: "It allows for seamless communication across various devices and locations, ensuring your team stays connected regardless of where they are."
  },
  {
    question: "Is VoIP secure?",
    answer: "Yes, reputable VoIP providers use encryption and other security measures to protect your calls and data."
  },
  {
    question: "Can I integrate VoIP with my existing CRM?",
    answer: "Most modern VoIP providers offer integration with popular CRM systems, allowing for better customer data management and call tracking."
  }
];

export default function VoipProviders() {
  const { setIsDemoDialogOpen } = useRequestDemo();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                12+ Integrations Available
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                Crystal Clear <span className="text-purple-600">VoIP Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Connect with your customers globally using our top-tier VoIP providers. Ensure reliability, quality, and seamless integration with your business operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProviders.map((provider, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg hover:shadow-xl hover:border-purple-100 transition-all group flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl ${provider.color} flex items-center justify-center mb-6 shadow-sm`}>
                  <provider.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{provider.name}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{provider.desc}</p>
                <div className="flex gap-4 mt-auto">
                  <Button
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white rounded-xl"
                    onClick={() => setIsDemoDialogOpen(true)}
                  >
                    Get Connected
                  </Button>
                  <Button variant="outline" className="flex-1 border-slate-200 hover:bg-slate-50 rounded-xl">
                    Visit Website
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Providers List */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              More VoIP Options
            </h2>
            <p className="text-slate-600">Explore additional providers to fit your specific needs.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {otherProviders.map((provider, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-3 hover:border-purple-200 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-700 group-hover:text-purple-700 transition-colors">{provider}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-slate-100 rounded-2xl px-6 bg-slate-50/50 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
                  <AccordionTrigger className="hover:no-underline py-6 text-lg font-medium text-slate-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Terms & Disclaimer */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-xs text-slate-400 leading-relaxed space-y-4">
            <h4 className="font-bold text-slate-500 uppercase tracking-wider">VoIP Terms of Use</h4>
            <p>
              The list of VoIP providers on our webpage is indicative of the VoIP Providers TEC FX BACK OFFICE Ltd. is currently integrated with. TEC FX BACK OFFICE Ltd. does not guarantee that the current connections with the presented VoIP Providers work due to constant changes on the VoIP Provider’s side.
            </p>
            <p>
              Updates may be required for existing VoIP software to perform correctly, which may bear additional cost, or additional costs may also apply if the Broker wants any change to an existing integration. It is the Broker’s responsibility to inform TEC FX BACK OFFICE Ltd. of any update needed on the VoIP provider’s side.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden max-w-4xl mx-auto shadow-2xl shadow-slate-900/20">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Need a custom VoIP solution?</h3>
              <p className="text-slate-300 mb-8 text-lg">We can help you integrate with the provider of your choice.</p>
              <Button
                className="bg-purple-600 text-white hover:bg-purple-700 rounded-xl px-8 py-6 text-lg font-bold shadow-lg shadow-purple-500/30"
                onClick={() => setIsDemoDialogOpen(true)}
              >
                Contact Us
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
