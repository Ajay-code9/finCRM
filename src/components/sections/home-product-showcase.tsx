import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ProductKey =
  | "backOffice"
  | "propTrading"
  | "clientArea"
  | "partnerArea"
  | "b2bCrm"
  | "serviceDesk";

interface ProductRow {
  key: ProductKey;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  route: string;
}

const rows: ProductRow[] = [
  {
    key: "backOffice",
    eyebrow: "Back Office CRM",
    title: "Enterprise-Grade Back Office CRM",
    description:
      "A premier ecosystem designed to streamline workflows, enhance client satisfaction, and drive revenue growth through intelligent automation.",
    bullets: [
      "Securely manage comprehensive client profiles, documentation, and trading history in one place.",
      "Automate routine daily tasks to free up valuable employee time.",
      "Unify departments and international offices on a single platform.",
    ],
    image: "/images/fincrmm5.jpg",
    route: "/products/back-office",
  },
  {
    key: "propTrading",
    eyebrow: "Prop Trading CRM",
    title: "Launch Your Own Prop Trading Firm",
    description:
      "Set up multi-step challenges, manage clients with ease, and offer an innovative funding system.",
    bullets: [
      "Design multi-stage challenges with customizable trading conditions.",
      "Set flexible trading goals and risk parameters for each challenge.",
      "Reward successful traders with funded accounts and profit share.",
    ],
    image: "/images/proptrading1.jpg",
    route: "/products/prop-trading-crm",
  },
  {
    key: "clientArea",
    eyebrow: "Client Area",
    title: "The Ultimate Client Experience",
    description:
      "Serve your clients with an intuitive, secure, and fully customizable portal that builds trust and simplifies operations 24/7.",
    bullets: [
      "Offer branded, fully customizable client dashboards.",
      "Provide clear account information, deposits, and withdrawals.",
      "Give clients secure access to documents and transaction history.",
    ],
    image: "/images/clientarea5.jpg",
    route: "/products/client-area",
  },
  {
    key: "partnerArea",
    eyebrow: "Partner Area",
    title: "Empower Your IB Partners",
    description:
      "Equip your Introducing Brokers with the tools they need to generate business and massively expand your brokerage's reach.",
    bullets: [
      "Automate daily administrative processes for partners.",
      "Create and manage marketing campaigns and referral links.",
      "Provide transparent, real-time commission and volume tracking.",
    ],
    image: "/images/partnerarea1.jpg",
    route: "/products/partner-area",
  },
  {
    key: "b2bCrm",
    eyebrow: "B2B CRM",
    title: "The Best B2B CRM on the Market",
    description:
      "Streamline your internal operations and take your customer service to a new level.",
    bullets: [
      "Instant notifications for new registrations and callbacks.",
      "Powerful client categorization with infinite parameters.",
      "Automated emails and mass campaigns in a few clicks.",
    ],
    image: "/images/b2b1.jpg",
    route: "/products/b2b-crm",
  },
  {
    key: "serviceDesk",
    eyebrow: "Service Desk",
    title: "Service Desk: Support Your Customers",
    description:
      "Quickly and easily handle enquiries, issues, and requests with a customizable system designed for B2B needs.",
    bullets: [
      "Enable clients to create ticket requests effortlessly.",
      "Control ticket priorities and statuses across departments.",
      "Centralize communication with live chat and internal comments.",
    ],
    image: "/images/servicedesk1.jpg",
    route: "/products/service-desk",
  },
];

const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

export function HomeProductShowcase() {
  const navigate = useNavigate();

  return (
    <section className="section-spacious bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500 mb-3">
            Product suite
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Purpose‑built modules for modern brokers
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Explore each layer of FinCRM – from back office and client area to
            partner portals, prop trading, B2B CRM, and service desk – all
            working together as one platform.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {rows.map((row, index) => {
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={row.key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={transition}
                className={`grid gap-10 items-center lg:grid-cols-2 ${
                  isReversed ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-5 ${
                    isReversed ? "lg:order-last" : ""
                  }`}
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-[0.18em]">
                    {row.eyebrow}
                  </span>
                  <h3 className="text-2.25xl md:text-3xl font-display font-bold text-slate-900">
                    {row.title}
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {row.description}
                  </p>
                  <ul className="space-y-3 text-sm md:text-base text-slate-700">
                    {row.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => navigate(row.route)}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-(--shadow-card-hover) hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Explore {row.eyebrow}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div
                  className={`relative ${
                    isReversed ? "lg:order-first" : ""
                  }`}
                >
                  <div className="relative rounded-3xl bg-slate-900/5 border border-slate-200 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.9)] overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-tr from-brand-500/20 via-emerald-500/10 to-slate-900/10" />
                    <div className="relative pt-10 px-6 pb-6 sm:px-8 sm:pb-8">
                      <div className="absolute top-4 left-6 flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="overflow-hidden rounded-2xl border border-slate-900/5 bg-slate-950/60">
                        <img
                          src={row.image}
                          alt={row.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

