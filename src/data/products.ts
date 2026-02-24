import { 
  LayoutDashboard, 
  Trophy, 
  Users, 
  Smartphone, 
  Handshake, 
  Briefcase, 
  Headphones,
  BarChart3,
  Globe,
  Shield,
  Zap,
  CheckCircle2
} from "lucide-react";

export const products = {
  "back-office": {
    title: "Back Office",
    subtitle: "The Heart of Your Brokerage",
    description: "Automate operations and manage client data with our customizable forex CRM. The FinCRM Back Office is designed to streamline your daily operations, allowing you to focus on growth.",
    icon: LayoutDashboard,
    features: [
      "Centralized Client Management",
      "Automated KYC/AML Verification",
      "Multi-level IB Management",
      "Real-time Reporting & Analytics",
      "Integration with 5+ Trading Platforms",
      "Customizable Employee Permissions"
    ],
    image: "https://picsum.photos/seed/backoffice/1200/600"
  },
  "prop-trading-crm": {
    title: "Prop Trading CRM",
    subtitle: "Launch Your Prop Firm in Days",
    description: "Launch your prop trading firm, set up multi-step challenges and manage clients with ease. Our turnkey solution handles everything from challenge configuration to payout processing.",
    icon: Trophy,
    features: [
      "Customizable Challenge Rules",
      "Automated Breach Detection",
      "Real-time Trader Dashboard",
      "Certificate Generation",
      "Risk Management Tools",
      "Leaderboard Functionality"
    ],
    image: "https://picsum.photos/seed/proptrading/1200/600"
  },
  "client-area": {
    title: "Client Area",
    subtitle: "Unmatched Trader Experience",
    description: "Serve your clients with unmatched UI experience and technology. A fully branded, self-service portal that empowers your traders to manage their accounts.",
    icon: Users,
    features: [
      "Instant Deposits & Withdrawals",
      "Trading Account Opening",
      "Document Upload & Verification",
      "Internal Transfers",
      "Social Trading Integration",
      "Multi-language Support"
    ],
    image: "https://picsum.photos/seed/clientarea/1200/600"
  },
  "mobile-app": {
    title: "Mobile App",
    subtitle: "Trading on the Go",
    description: "Give your clients a seamless, intuitive mobile trading experience. Available for iOS and Android, fully white-labeled to match your brand identity.",
    icon: Smartphone,
    features: [
      "Native iOS & Android Apps",
      "Biometric Authentication",
      "Push Notifications",
      "Full Account Management",
      "In-app Charting",
      "One-click Trading"
    ],
    image: "https://picsum.photos/seed/mobileapp/1200/600"
  },
  "partner-area": {
    title: "Partner Area",
    subtitle: "Empower Your IBs",
    description: "Empower your IBs with real-time tracking and seamless commission management. Build a massive affiliate network with transparent reporting and automated payouts.",
    icon: Handshake,
    features: [
      "Multi-tier Rebate Structures",
      "Real-time Commission Tracking",
      "Marketing Asset Library",
      "Automated Payouts",
      "Detailed Performance Reports",
      "Referral Link Generation"
    ],
    image: "https://picsum.photos/seed/partnerarea/1200/600"
  },
  "b2b-crm": {
    title: "B2B CRM",
    subtitle: "Streamline Corporate Relations",
    description: "Streamline your company with automated workflows and targeted marketing tools. Manage institutional clients, liquidity providers, and technology partners in one place.",
    icon: Briefcase,
    features: [
      "Lead Pipeline Management",
      "Automated Email Sequences",
      "Task & Appointment Scheduling",
      "Contract Management",
      "Revenue Forecasting",
      "Integration with LinkedIn"
    ],
    image: "https://picsum.photos/seed/b2bcrm/1200/600"
  },
  "service-desk": {
    title: "Service Desk",
    subtitle: "World-Class Support Tools",
    description: "Support your customers with powerful tools. An integrated ticketing system that connects directly to client profiles for faster resolution.",
    icon: Headphones,
    features: [
      "Omnichannel Support (Email, Chat, Phone)",
      "Automated Ticket Routing",
      "Knowledge Base Integration",
      "SLA Management",
      "Client Satisfaction Surveys",
      "Performance Analytics"
    ],
    image: "https://picsum.photos/seed/servicedesk/1200/600"
  }
};
