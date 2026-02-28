import { motion } from "motion/react";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  { 
    title: "The Future of Brokerage Technology", 
    excerpt: "An in-depth look at the trends and innovations shaping the future of the brokerage industry.", 
    author: "John Doe", 
    date: "July 26, 2024",
    image: "/images/blog1.jpg"
  },
  { 
    title: "5 Ways to Optimize Your Brokerage Operations", 
    excerpt: "Discover practical tips and strategies to enhance efficiency and drive growth in your brokerage.", 
    author: "Jane Smith", 
    date: "July 22, 2024",
    image: "/images/blog2.jpg"
  },
];

export default function Blog() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-12 lg:py-16 bg-slate-800 bg-cover bg-center text-white"
       style={{ backgroundImage: "url('/images/blog.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                Expert <span className="text-brand-500">Insights</span> & Updates
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Stay informed with the latest news, expert analysis, and product updates from our team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-[0_10px_30px_-16px_rgba(16,185,129,0.7)] hover:-translate-y-1 transition-all group"
              >
                <Link to="/company" className="block">
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 group-hover:text-brand-600 transition-colors h-24">{post.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 h-20">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
