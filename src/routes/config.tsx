import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import Integrations from '@/pages/Integrations';
import Pricing from '@/pages/Pricing';
import Company from '@/pages/Company';
import ProductDetail from '@/pages/ProductDetail';
import BackOffice from '@/pages/products/BackOffice';
import PropTradingCRM from '@/pages/products/PropTradingCRM';
import ClientArea from '@/pages/products/ClientArea';
import PartnerArea from '@/pages/products/PartnerArea';
import B2BCRM from '@/pages/products/B2BCRM';
import ServiceDesk from '@/pages/products/ServiceDesk';
import CRMFeatures from '@/pages/features/CRMFeatures';
import LoyaltyProgram from '@/pages/features/LoyaltyProgram';
import TradingPlatforms from '@/pages/integrations/TradingPlatforms';
import PaymentProviders from '@/pages/integrations/PaymentProviders';
import VoipProviders from '@/pages/integrations/VoipProviders';
import KycProviders from '@/pages/integrations/KycProviders';
import AboutUs from '@/pages/company/AboutUs';
import Partners from '@/pages/company/Partners';
import HelpCenter from '@/pages/company/HelpCenter';
import IsoCertification from '@/pages/company/IsoCertification';
import Careers from '@/pages/company/Careers';
import Blog from '@/pages/company/Blog';
import ContactUs from '@/pages/ContactUs';
import type { ReactElement } from 'react';

export interface AppRoute {
  path: string;
  element: ReactElement;
}

export const appRoutes: AppRoute[] = [
  { path: '/', element: <Home /> },
  { path: '/solutions', element: <Solutions /> },
  { path: '/integrations', element: <Integrations /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/company', element: <Company /> },
  { path: '/products/back-office', element: <BackOffice /> },
  { path: '/products/prop-trading-crm', element: <PropTradingCRM /> },
  { path: '/products/client-area', element: <ClientArea /> },
  { path: '/products/partner-area', element: <PartnerArea /> },
  { path: '/products/b2b-crm', element: <B2BCRM /> },
  { path: '/products/service-desk', element: <ServiceDesk /> },
  { path: '/features/crm', element: <CRMFeatures /> },
  { path: '/features/loyalty-program', element: <LoyaltyProgram /> },
  { path: '/integrations/trading-platforms', element: <TradingPlatforms /> },
  { path: '/integrations/payment-providers', element: <PaymentProviders /> },
  { path: '/integrations/voip-providers', element: <VoipProviders /> },
  { path: '/integrations/kyc-providers', element: <KycProviders /> },
  { path: '/company/about-us', element: <AboutUs /> },
  { path: '/company/partners', element: <Partners /> },
  { path: '/company/help-center', element: <HelpCenter /> },
  { path: '/company/iso-certification', element: <IsoCertification /> },
  { path: '/company/careers', element: <Careers /> },
  { path: '/company/blog', element: <Blog /> },
  { path: '/contact-us', element: <ContactUs /> },
  { path: '/products/:slug', element: <ProductDetail /> },
];

