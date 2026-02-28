import { useState } from "react";
import { motion } from "motion/react";
import { Search, LifeBuoy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = {
  "Getting Started": [
    { question: "How do I create an account?", answer: "You can create an account by clicking the 'Sign Up' button on the top right corner of the page and filling out the registration form." },
    { question: "What are the system requirements?", answer: "Our platform is web-based and works on all modern browsers. We recommend using the latest version of Chrome, Firefox, or Safari for the best experience." },
  ],
  "Account Management": [
    { question: "How do I reset my password?", answer: "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email." },
    { question: "How can I update my profile information?", answer: "You can update your profile information in the 'Account Settings' section of your dashboard." },
  ],
  "Billing & Payments": [
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers. You can find more details on our pricing page." },
    { question: "How do I view my invoices?", answer: "You can view and download all your invoices from the 'Billing' section in your account dashboard." },
  ],
};

export default function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = Object.keys(faqs).reduce((acc, category) => {
    const filtered = faqs[category].filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-12 lg:py-16 bg-slate-800 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/helpcenter.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LifeBuoy className="w-16 h-16 text-brand-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                How can we help?
              </h1>
              <div className="relative max-w-2xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full p-4 pl-12 rounded-full bg-white/90 text-slate-900 shadow-lg text-lg focus:ring-2 focus:ring-brand-500/60"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {Object.keys(filteredFaqs).map((category) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 border-l-4 border-brand-500 pl-4">{category}</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {filteredFaqs[category].map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b-0">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <AccordionTrigger className="hover:no-underline text-left p-6 text-lg font-medium text-slate-900 bg-white rounded-2xl shadow-md data-[state=open]:bg-brand-600 data-[state=open]:text-white transition-all">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 p-6 bg-white rounded-b-2xl leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </motion.div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
            {Object.keys(filteredFaqs).length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500 text-lg">No results found for "{searchTerm}".</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
