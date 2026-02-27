import {
  LayoutDashboard,
  Trophy,
  Users,
  Handshake,
  Briefcase,
  Headphones,
  Settings,
  BarChart2,
  Wallet,
  Phone,
  ShieldCheck,
  CheckCircle,
  FileText,
} from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  description: string;
}

export interface NavGroups {
  forex: NavItem[];
  b2b: NavItem[];
}

export const productsNav: NavGroups = {
  forex: [
    {
      name: 'Back Office',
      href: '/products/back-office',
      icon: LayoutDashboard,
      description: 'Automate operations and manage client data.',
    },
    {
      name: 'Prop Trading CRM',
      href: '/products/prop-trading-crm',
      icon: Trophy,
      description: 'Launch your prop trading firm with ease.',
    },
    {
      name: 'Client Area',
      href: '/products/client-area',
      icon: Users,
      description: 'Unmatched UI experience and technology.',
    },
    {
      name: 'Partner Area',
      href: '/products/partner-area',
      icon: Handshake,
      description: 'Empower your IBs with real-time tracking.',
    },
  ],
  b2b: [
    {
      name: 'B2B CRM',
      href: '/products/b2b-crm',
      icon: Briefcase,
      description: 'Streamline your company with automated workflows.',
    },
    {
      name: 'Service Desk',
      href: '/products/service-desk',
      icon: Headphones,
      description: 'Support your customers with powerful tools.',
    },
  ],
};

export const featuresNav: NavItem[] = [
  {
    name: 'CRM Features',
    href: '/features/crm',
    icon: Settings,
    description: 'Elevate your brokerage with modular tools.',
  },
  {
    name: 'Tiered Loyalty Program',
    href: '/features/loyalty-program',
    icon: Users,
    description: 'Boost client retention with our rewards system.',
  },
];

export const integrationsNav: NavItem[] = [
  {
    name: 'Trading platforms',
    href: '/integrations/trading-platforms',
    icon: BarChart2,
    description: 'Integrate with top-tier trading platforms.',
  },
  {
    name: 'Payment providers',
    href: '/integrations/payment-providers',
    icon: Wallet,
    description: 'Access over 340+ top-tier PSPs worldwide.',
  },
  {
    name: 'VOIP providers',
    href: '/integrations/voip-providers',
    icon: Phone,
    description: 'Seamlessly integrate with leading VOIP services.',
  },
  {
    name: 'KYC providers',
    href: '/integrations/kyc-providers',
    icon: ShieldCheck,
    description: 'Streamline onboarding and ensure compliance.',
  },
];

export const companyNav: NavItem[] = [
  {
    name: 'About us',
    href: '/company/about-us',
    icon: LayoutDashboard,
    description: 'Top-notch solutions to optimize your brokerage.',
  },
  {
    name: 'Partners',
    href: '/company/partners',
    icon: Handshake,
    description: 'Teaming up with top-tier unicorns.',
  },
  {
    name: 'Help center',
    href: '/company/help-center',
    icon: Headphones,
    description: 'Find answers in our detailed FAQs.',
  },
  {
    name: 'ISO Certification',
    href: '/company/iso-certification',
    icon: CheckCircle,
    description: 'Committed to security with ISO 27001:2022.',
  },
  {
    name: 'Careers',
    href: '/company/careers',
    icon: Trophy,
    description: 'Join our dynamic and innovative team.',
  },
  {
    name: 'Blog',
    href: '/company/blog',
    icon: FileText,
    description: 'Expert insights and product updates.',
  },
];

