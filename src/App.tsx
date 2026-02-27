import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import { appRoutes } from "@/routes/config";
import { AnimatePresence, motion } from "motion/react";

function AppLayout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              {appRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {route.element}
                    </motion.div>
                  }
                />
              ))}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <RequestDemoDialog>
          {/* DialogTrigger will be the buttons in Navbar/other components */}
          <></>
        </RequestDemoDialog>
      </div>
    </>
  );
}

export default function App() {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);

  return (
    <RequestDemoContext.Provider value={{ isDemoDialogOpen, setIsDemoDialogOpen }}>
      <Router>
        <AppLayout />
      </Router>
    </RequestDemoContext.Provider>
  );
}
