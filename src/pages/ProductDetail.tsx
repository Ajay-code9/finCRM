import { useParams, Navigate } from "react-router-dom";
import { products } from "@/data/products";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CTA } from "@/components/sections/cta";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products[slug as keyof typeof products];

  if (!product) {
    return <Navigate to="/solutions" replace />;
  }

  const Icon = product.icon;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
                <Icon className="w-4 h-4" />
                {product.title}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                {product.subtitle}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Book a Demo
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Key Features</h2>
            <p className="text-slate-600">Everything you need to succeed with {product.title}.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-slate-100 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
