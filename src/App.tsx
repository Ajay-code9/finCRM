import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import ScrollToTop from "@/components/utils/ScrollToTop";
import Home from "@/pages/Home";
import { RequestDemoDialog } from "@/components/common/RequestDemoDialog";
import { RequestDemoContext } from "@/context/RequestDemoContext";
import Solutions from "@/pages/Solutions";
import { useState } from "react";
import Integrations from "@/pages/Integrations";
import Pricing from "@/pages/Pricing";
import Company from "@/pages/Company";
import ProductDetail from "@/pages/ProductDetail";
import BackOffice from "@/pages/products/BackOffice";
import PropTradingCRM from "@/pages/products/PropTradingCRM";
import ClientArea from "@/pages/products/ClientArea";

import PartnerArea from "@/pages/products/PartnerArea";
import B2BCRM from "@/pages/products/B2BCRM";
import ServiceDesk from "@/pages/products/ServiceDesk";
import CRMFeatures from "@/pages/features/CRMFeatures";
import LoyaltyProgram from "@/pages/features/LoyaltyProgram";
import TradingPlatforms from "@/pages/integrations/TradingPlatforms";
import PaymentProviders from "@/pages/integrations/PaymentProviders";
import VoipProviders from "@/pages/integrations/VoipProviders";
import KycProviders from "@/pages/integrations/KycProviders";
import AboutUs from "@/pages/company/AboutUs";
import Partners from "@/pages/company/Partners";
import HelpCenter from "@/pages/company/HelpCenter";
import IsoCertification from "@/pages/company/IsoCertification";
import Careers from "@/pages/company/Careers";
import Blog from "@/pages/company/Blog";
import ContactUs from "@/pages/ContactUs";

export default function App() {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);

  return (
    <RequestDemoContext.Provider value={{ isDemoDialogOpen, setIsDemoDialogOpen }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/company" element={<Company />} />
            <Route path="/products/back-office" element={<BackOffice />} />
            <Route path="/products/prop-trading-crm" element={<PropTradingCRM />} />
            <Route path="/products/client-area" element={<ClientArea />} />

            <Route path="/products/partner-area" element={<PartnerArea />} />
            <Route path="/products/b2b-crm" element={<B2BCRM />} />
            <Route path="/products/service-desk" element={<ServiceDesk />} />
            <Route path="/features/crm" element={<CRMFeatures />} />
            <Route path="/features/loyalty-program" element={<LoyaltyProgram />} />
            <Route path="/integrations/trading-platforms" element={<TradingPlatforms />} />
            <Route path="/integrations/payment-providers" element={<PaymentProviders />} />
            <Route path="/integrations/voip-providers" element={<VoipProviders />} />
            <Route path="/integrations/kyc-providers" element={<KycProviders />} />
            <Route path="/company/about-us" element={<AboutUs />} />
            <Route path="/company/partners" element={<Partners />} />
            <Route path="/company/help-center" element={<HelpCenter />} />
            <Route path="/company/iso-certification" element={<IsoCertification />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/blog" element={<Blog />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
        <RequestDemoDialog>
          {/* DialogTrigger will be the buttons in Navbar/other components */}
          <></>
        </RequestDemoDialog>
      </div>
    </Router>
    </RequestDemoContext.Provider>
  );
}
