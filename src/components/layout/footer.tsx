import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 relative overflow-hidden">
      <div className="footer-rays" aria-hidden />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img
                src="/logo/finallogofincrm-white.svg"
                alt="FinCRM"
                className="h-9 md:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Specialized, fully customizable CRM and back-office solution for forex brokers and financial institutions.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <button
                type="button"
                className="hover:text-white transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="hover:text-white transition-colors"
                aria-label="Visit our Twitter profile"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="hover:text-white transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="hover:text-white transition-colors"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions" className="hover:text-brand-400 transition-colors">CRM</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-400 transition-colors">IB Portal</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-400 transition-colors">Risk Management</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-400 transition-colors">Mobile App</Link></li>
              <li><Link to="/integrations" className="hover:text-brand-400 transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/company" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/company" className="hover:text-brand-400 transition-colors">Careers</Link></li>
              <li><Link to="/company" className="hover:text-brand-400 transition-colors">Blog</Link></li>
              <li><Link to="/company" className="hover:text-brand-400 transition-colors">Contact</Link></li>
              <li><Link to="/company" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} FinCRM. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button type="button" className="hover:text-white transition-colors">
              Terms of Service
            </button>
            <button type="button" className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button type="button" className="hover:text-white transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
