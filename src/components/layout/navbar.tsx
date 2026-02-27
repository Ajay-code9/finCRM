import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import { useRequestDemo } from "@/context/RequestDemoContext";
import { MenuPromoCard } from "@/components/layout/menu-promo-card";
import {
  companyNav,
  featuresNav,
  integrationsNav,
  productsNav,
  type NavItem,
} from "@/data/nav";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { setIsDemoDialogOpen } = useRequestDemo();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled || location.pathname !== "/" || isMobileMenuOpen
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group z-50 relative">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-xl group-hover:bg-brand-700 transition-colors">
            F
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">
            FinCRM
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <NavigationMenu.Root className="relative z-50 flex justify-center" delayDuration={0}>
            <NavigationMenu.List className="flex items-center gap-4 lg:gap-6 list-none m-0 p-0">
              <DesktopMenu aname="Products" items={{ Forex: productsNav.forex, B2B: productsNav.b2b }} />
              <DesktopMenu aname="Features" items={{ General: featuresNav }} />
              <DesktopMenu aname="Integration" items={{ General: integrationsNav }} />
              <DesktopMenu aname="Company" items={{ General: companyNav }} />
              <NavLink href="/pricing" name="Pricing" />
              <NavLink href="/contact-us" name="Contact us" />
            </NavigationMenu.List>
            <DesktopViewport />
          </NavigationMenu.Root>
        </div>

        <div className="hidden lg:flex items-center gap-4 z-50 relative">
          <Button className="bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full px-6 whitespace-nowrap" onClick={() => setIsDemoDialogOpen(true)}>
            Request a demo
          </Button>
        </div>

        <button
          className={`lg:hidden p-2 z-50 relative ${isMobileMenuOpen ? 'text-slate-900' : 'text-slate-600'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      
    </nav>
<MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} setIsDemoDialogOpen={setIsDemoDialogOpen} />
    </>
  );
}

interface DesktopMenuItems {
  [key: string]: NavItem[];
}

interface DesktopMenuProps {
  aname: string;
  items: DesktopMenuItems;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ aname, items }) => (
  <NavigationMenu.Item>
    <NavigationMenu.Trigger className="group flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors outline-none select-none data-[state=open]:text-brand-600">
      {aname}
    </NavigationMenu.Trigger>
    <NavigationMenu.Content className="absolute top-0 left-0 w-full md:w-auto data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight">
      <div className="w-max max-w-[95vw] p-5 lg:p-6 flex flex-row gap-6 lg:gap-8">
        {Object.entries(items).map(([category, links]) => (
          <div key={category} className="w-full md:w-[240px] lg:w-[260px] shrink-0 space-y-4">
            {category !== "General" && (
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                {category}
              </div>
            )}
            {links.map((link) => (
              <DesktopLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                name={link.name}
                description={link.description}
              />
            ))}
          </div>
        ))}

        {/* Right-side promo card shown in all desktop submenus */}
        <div className="hidden md:block w-full md:w-[260px] lg:w-[280px] shrink-0">
          <MenuPromoCard
            imageSrc="/images/headerimage.jpg"
            title="Platform Overview"
            description="Take a free tour of our platform features."
            ctaText="Request a demo"
            ctaLink="/features/crm"
            onCtaClick={() => setIsDemoDialogOpen(true)}
          />
        </div>
      </div>
    </NavigationMenu.Content>
  </NavigationMenu.Item>
);

interface DesktopLinkProps {
  href: string;
  icon: React.ElementType;
  name: string;
  description: string;
}

const DesktopLink: React.FC<DesktopLinkProps> = ({ href, icon: Icon, name, description }) => (
  <Link to={href} className="flex items-start gap-3 group">
    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:border-brand-100 transition-all shrink-0">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <div className="font-bold text-sm text-slate-900 group-hover:text-brand-600 transition-colors">{name}</div>
      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{description}</p>
    </div>
  </Link>
);

interface NavLinkProps {
  href: string;
  name: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, name }) => {
  const location = useLocation();
  return (
    <NavigationMenu.Item>
      <Link
        to={href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-brand-600 block py-2 px-3",
          location.pathname === href ? "text-brand-600" : "text-slate-600"
        )}
      >
        {name}
      </Link>
    </NavigationMenu.Item>
  );
};

const DesktopViewport: React.FC = () => (
  <div className="absolute top-full left-[-100px] flex justify-start perspective-[2000px]">
    <NavigationMenu.Viewport className="relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 transition-[width,_height] duration-300 data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut sm:w-[var(--radix-navigation-menu-viewport-width)]" />
  </div>
);

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setIsDemoDialogOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, setIsDemoDialogOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="lg:hidden bg-slate-950/60 backdrop-blur-sm fixed inset-0 z-40"
        />
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="lg:hidden w-[75vw] max-w-[320px] h-full bg-brand-950/60 backdrop-blur-2xl text-slate-100 shadow-[-20px_0_40px_rgba(0,0,0,0.3)] flex flex-col fixed top-0 right-0 z-50 border-l border-white/10"
        >
          <div className="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/30">
                F
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                FinCRM
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-5 flex-grow overflow-y-auto no-scrollbar">
            <Accordion.Root type="multiple" className="flex flex-col">
              <MobileAccordionItem value="products" title="Products">
                <MobileSubmenu items={productsNav.forex} setIsOpen={setIsOpen} />
                <MobileSubmenu items={productsNav.b2b} setIsOpen={setIsOpen} />
              </MobileAccordionItem>
              <MobileAccordionItem value="features" title="Features">
                <MobileSubmenu items={featuresNav} setIsOpen={setIsOpen} />
              </MobileAccordionItem>
              <MobileAccordionItem value="integration" title="Integration">
                <MobileSubmenu items={integrationsNav} setIsOpen={setIsOpen} />
              </MobileAccordionItem>
              <MobileAccordionItem value="company" title="Company">
                <MobileSubmenu items={companyNav} setIsOpen={setIsOpen} />
              </MobileAccordionItem>
              <MobileLink href="/pricing" name="Pricing" setIsOpen={setIsOpen} />
              <MobileLink href="/contact-us" name="Contact us" setIsOpen={setIsOpen} />
            </Accordion.Root>
          </div>
          <div className="p-5 border-t border-white/10 bg-white/5 shrink-0 mt-auto">
            <Button className="w-full bg-white text-brand-950 hover:bg-slate-100 font-bold rounded-full py-6 text-base shadow-xl transition-all" onClick={() => {
              setIsDemoDialogOpen(true);
              setIsOpen(false);
            }}>
              Request a demo
            </Button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

interface MobileAccordionItemProps {
  value: string;
  title: string;
  children: React.ReactNode;
}

const MobileAccordionItem: React.FC<MobileAccordionItemProps> = ({ value, title, children }) => (
  <Accordion.Item value={value} className="border-b border-white/10">
    <Accordion.Trigger className="flex items-center justify-between w-full py-4 text-lg font-semibold text-white group transition-colors">
      {title}
      <ChevronDown className="w-5 h-5 text-white/60 group-data-[state=open]:rotate-180 transition-transform" />
    </Accordion.Trigger>
    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
      <div className="pt-1 pb-4 space-y-4">
        {children}
      </div>
    </Accordion.Content>
  </Accordion.Item>
);

interface MobileSubmenuProps {
  items: NavItem[];
  setIsOpen: (open: boolean) => void;
}

const MobileSubmenu: React.FC<MobileSubmenuProps> = ({ items, setIsOpen }) => (
  <div className="pl-3 border-l-2 border-white/10 space-y-1 ml-2 mb-2">
    {items.map(item => (
      <Link 
        key={item.href} 
        to={item.href} 
        className="flex items-center gap-3 p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all group"
        onClick={() => setIsOpen(false)}
      >
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand-500/40 group-hover:text-white transition-colors">
          <item.icon className="w-4 h-4 text-white/90" />
        </div>
        <span className="font-medium text-base">{item.name}</span>
      </Link>
    ))}
  </div>
);

interface MobileLinkProps {
  href: string;
  name: string;
  setIsOpen: (open: boolean) => void;
}

const MobileLink: React.FC<MobileLinkProps> = ({ href, name, setIsOpen }) => (
  <Link
    to={href}
    className="block py-4 text-lg font-semibold text-white hover:text-white border-b border-white/10 transition-colors"
    onClick={() => setIsOpen(false)}
  >
    {name}
  </Link>
);
