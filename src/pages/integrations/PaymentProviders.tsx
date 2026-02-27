import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  CreditCard, 
  Globe, 
  Search, 
  Filter, 
  ShieldCheck, 
  Zap, 
  Wallet, 
  Landmark,
  Coins,
  CheckCircle2,
  ExternalLink,
  Banknote, // New
  Bitcoin,  // New
  Euro,     // New
  DollarSign, // New
  IndianRupee, // New
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useRequestDemo } from "@/context/RequestDemoContext";

interface PaymentProvider {
  name: string;
  popular?: boolean;
  categories: string[];
  lucideIcon?: React.ElementType; // To store Lucide icon components
}

// Featured Providers Data
const featuredProviders = [
  {
    name: "OpenPayd",
    desc: "Embedded finance and banking-as-a-service infrastructure. Access multi-currency accounts, global payments and FX through a single API.",
    icon: Landmark,
    color: "bg-blue-50 text-blue-600"
  },
  {
    name: "Deus X Pay",
    desc: "Faster, cheaper & safer crypto deposits & withdrawals. Enable crypto-to-fiat and crypto-to-crypto transactions alongside traditional methods.",
    icon: Coins,
    color: "bg-purple-50 text-purple-600"
  },
  {
    name: "LetKnow",
    desc: "Elevate financial operations with the premier crypto payment gateway. Experience world-class service tailored to your needs.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600"
  },
  {
    name: "Match2Pay",
    desc: "Bespoke multi-crypto processor for Forex/CFD brokers. Access stablecoins, top coins, and expert brokerage support.",
    icon: Wallet,
    color: "bg-orange-50 text-orange-600"
  },
  {
    name: "NACE",
    desc: "Automate client deposits & withdrawals in under 30 seconds, including an auto-convert to fiat option to avoid volatility.",
    icon: Zap,
    color: "bg-indigo-50 text-indigo-600"
  }
];

// Full List of Providers
const allProviders: PaymentProvider[] = [
  // Popular
  { name: "Bankwire", popular: true, categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: Landmark },
  { name: "Beeteller", popular: true, categories: ["Deposit", "Withdrawal", "South America"], lucideIcon: DollarSign },
  { name: "Bitpace", popular: true, categories: ["Deposit", "Withdrawal", "Crypto"], lucideIcon: Bitcoin },
  { name: "Bridgerpay", popular: true, categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  { name: "Finrax", popular: true, categories: ["Deposit", "Withdrawal", "Crypto"], lucideIcon: Bitcoin },
  { name: "Instaxchange", popular: true, categories: ["Deposit", "Withdrawal", "Asia"], lucideIcon: IndianRupee },
  { name: "Neteller", popular: true, categories: ["Deposit", "Withdrawal", "Cashiers", "Europe"], lucideIcon: Wallet },
  { name: "PaymentAsia", popular: true, categories: ["Deposit", "Withdrawal", "Asia"], lucideIcon: Landmark },
  { name: "Paymid", popular: true, categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  { name: "Payretailers", popular: true, categories: ["Deposit", "Withdrawal", "South America"], lucideIcon: DollarSign },
  { name: "Praxis", popular: true, categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: ShieldCheck },
  { name: "Skrill", popular: true, categories: ["Deposit", "Withdrawal", "Cashiers", "Europe"], lucideIcon: Wallet },
  { name: "Stripe", popular: true, categories: ["Deposit", "Withdrawal", "Europe", "South America", "Asia"], lucideIcon: CreditCard },
  { name: "Trustpayments", popular: true, categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  // Others (Subset)
  { name: "VertuPay", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  { name: "24hpay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "2c2p", categories: ["Deposit", "Asia"], lucideIcon: Banknote },
  { name: "9Pay", categories: ["Deposit", "Asia"], lucideIcon: Banknote },
  { name: "AO Pay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Accentpay", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  { name: "Agile4Pay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Alijapan", categories: ["Deposit", "Asia"], lucideIcon: Banknote },
  { name: "Alipay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Alphapo", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "AsiaBanks", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Astropaycard", categories: ["Deposit", "Withdrawal", "South America"], lucideIcon: CreditCard },
  { name: "Autopss", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Awepay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "BFT", categories: ["Deposit", "South America"], lucideIcon: Landmark },
  { name: "BVNK", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Barclaycard", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  { name: "Bilderlings", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: Landmark },
  { name: "BitPay", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Bitolo", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Blockatm", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Blockbee", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Brightcart", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Callpay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Cardpay / Unlimint", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  { name: "CentPays", categories: ["Deposit", "Europe"], lucideIcon: Euro },
  { name: "Certus", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "CheezeePay", categories: ["Deposit", "Asia"], lucideIcon: IndianRupee },
  { name: "China Union Pay", categories: ["Deposit", "Asia"], lucideIcon: CreditCard },
  { name: "Chippay", categories: ["Deposit", "Asia"], lucideIcon: IndianRupee },
  { name: "Coinpayments", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Columis", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Cricpayz", categories: ["Deposit", "Asia"], lucideIcon: IndianRupee },
  { name: "Cryptogateway", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Cryptopayx", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "DBD", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "DPO Pay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Decta Gate", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  { name: "Decta Intraclear", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: Landmark },
  { name: "Dectapay", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  { name: "Deltapay", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "DeluxePay365", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Directa24", categories: ["Deposit", "South America"], lucideIcon: DollarSign },
  { name: "Dusupay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "EFTpay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "EUPaymentz", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: Euro },
  { name: "EasyPay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Ecomit Pay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "EeziePay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Elepayments", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Emyral", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "EqualsMoney", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: Banknote },
  { name: "Estropay", categories: ["Deposit", "South America"], lucideIcon: DollarSign },
  { name: "Ezeebill Asia", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "FS Technologies", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "FXPayGate", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Fasapay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Fibonatix", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  { name: "First Iraqi Bank", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "FlexiPay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Flutterwave", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "GBPrimePay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "GPay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Gate Express", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Global trust pay", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "GrowP", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Hash Pay", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Help2Pay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "IBitPay", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "ImpalaPay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Infipay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Interact via Gigadat", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "JCCgateway", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "JPay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Kasha", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Kesspay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Kingdom Bank", categories: ["Deposit", "Africa"], lucideIcon: Landmark },
  { name: "Leantech", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Liondom", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Luqapay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "M3Pay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "MLipa", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Max Pay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Megatransfer", categories: ["Deposit", "Europe"], lucideIcon: DollarSign },
  { name: "Monerchy", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Mpay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Multikart", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "NOWPayments", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "NganLuong", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Nusa Gate", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Octapay", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Ompay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Onlinenaira", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "OxPay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "PGPayTech", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "PandaPay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Parafix", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Pathly", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Pay4x", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "PayEssence", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "PayFort", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "PayGuru", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "PayStage", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "PayTrust88", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Paybizz", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Payda", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Payexchain", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Paymaxis", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "PaymentHot", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Paynamo", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Payoma", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Paypay89", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Paysec", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Payszone", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Paytiko", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Payversa", categories: ["Deposit", "South America"], lucideIcon: DollarSign },
  { name: "Payza", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Payzon", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Perfect Money", categories: ["Deposit", "Cashiers", "Europe"], lucideIcon: Wallet },
  { name: "Plus Wallets", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Pompay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Pro Finance Trade", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Przelewy24", categories: ["Deposit", "Europe"], lucideIcon: Landmark },
  { name: "QuickTransfer", categories: ["Deposit", "Europe"], lucideIcon: Landmark },
  { name: "Rafinita", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Realisto", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Rocketfuel", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Safecharge", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: CreditCard },
  { name: "Singlepayment", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Smilepayz", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Solid Payments", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "SozaPay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Speedlightpay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Starpay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Straal", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Suprem Cash", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Surepay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Swiffy", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Tap", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "The Last Asia", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Tinkbit", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Toolb", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Total Pay", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Transact 365", categories: ["Deposit", "Withdrawal", "Europe", "Asia"], lucideIcon: CreditCard },
  { name: "Traxx", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Trustpayfx", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Ubiqpay", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "UniPay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Unipay Bet", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Upaycard", categories: ["Deposit", "Withdrawal", "Europe"], lucideIcon: Wallet },
  { name: "VASU", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "VNPay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Verixa", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "VirtualPay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Vogue Pay", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Wallettec", categories: ["Deposit", "Africa"], lucideIcon: DollarSign },
  { name: "Webpay", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "Whish Money", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Wireaccount", categories: ["Deposit", "Europe"], lucideIcon: Landmark },
  { name: "Worldsafepay", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "XCoin", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Xcoins", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin },
  { name: "Xpate", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "ZaasPay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "Zoftpay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "bbpay", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "ePay.me", categories: ["Deposit", "Europe"], lucideIcon: CreditCard },
  { name: "exlink", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "i-Account", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "winway", categories: ["Deposit", "Asia"], lucideIcon: Landmark },
  { name: "xprocoins", categories: ["Deposit", "Crypto"], lucideIcon: Bitcoin }
];

const filters = [
  "Deposit", "Withdrawal", "Crypto", "Cashiers", 
  "Asia", "Europe", "Africa", "South America", "Australia & Oceania"
];

export default function PaymentProviders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const { setIsDemoDialogOpen } = useRequestDemo();

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  const filteredProviders = allProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilters.length === 0 || 
                          activeFilters.some(filter => provider.categories.includes(filter));
    return matchesSearch && matchesFilter;
  });

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
                340+ Integrations Available
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                Master Your <span className="text-purple-600">Payments</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Access the most popular PSPs on the market and alternative solutions for specific regions. We handle the entire integration process quickly and seamlessly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">Featured Partners</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProviders.map((provider, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${provider.color} flex items-center justify-center mb-6`}>
                  <provider.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{provider.name}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{provider.desc}</p>
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl border-slate-200 group-hover:bg-purple-50 group-hover:text-purple-700 group-hover:border-purple-200"
                    onClick={() => setIsDemoDialogOpen(true)}
                  >
                    Get Connected
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-xl text-slate-400 hover:text-purple-600">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Providers List */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Unveiling the Finest PSPs
            </h2>
            
            {/* Search & Filter */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input 
                  type="text" 
                  placeholder="Search PSP..." 
                  className="w-full pl-12 h-14 rounded-2xl border-slate-200 bg-white text-lg shadow-sm focus:ring-purple-500/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilters.includes(filter)
                        ? "bg-purple-600 text-white shadow-md"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-purple-200 hover:text-purple-600"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredProviders.map((provider, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center hover:border-purple-200 hover:shadow-md transition-all h-32 relative group"
              >
                {provider.popular && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border-none text-[10px] px-2 py-0.5">POPULAR</Badge>
                  </div>
                )}
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-3 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors overflow-hidden">
                  {provider.lucideIcon ? <provider.lucideIcon className="w-5 h-5" /> : <CreditCard className="w-5 h-5" />}
                </div>
                <span className="font-bold text-slate-700 text-sm group-hover:text-purple-700 transition-colors">{provider.name}</span>
              </motion.div>
            ))}
          </div>
          
          {filteredProviders.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No providers found matching your search.
            </div>
          )}
        </div>
      </section>

      {/* Terms & Disclaimer */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-xs text-slate-400 leading-relaxed space-y-4">
            <h4 className="font-bold text-slate-500 uppercase tracking-wider">PSP Terms of Use</h4>
            <p>
              The list of PSP providers on our webpage is indicative of the PSP Providers TEC FX BACK OFFICE Ltd. is currently integrated with. TEC FX BACK OFFICE Ltd. does not guarantee that the current connections with the presented PSP Providers work due to constant changes on the PSP Provider’s side.
            </p>
            <p>
              Updates may be required for existing PSPs to perform correctly, which may bear additional cost, or additional costs may also apply if the Broker wants any change to an existing integration. It is the Broker’s responsibility to inform TEC FX BACK OFFICE Ltd. of any update needed on the PSP’s side.
            </p>
            <p>
              The regions, jurisdictions, and/or currencies indicated for each PSP represent the areas that the respective PSP generally supports. The Broker acknowledges and agrees that certain regions, jurisdictions, or currencies may not be available, supported, or fully integrated within the Company’s system.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Can't find your PSP?</h3>
          <p className="text-slate-600 mb-6">No need to panic! We are constantly adding new integrations.</p>
          <Button
            className="bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-8"
            onClick={() => setIsDemoDialogOpen(true)}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
