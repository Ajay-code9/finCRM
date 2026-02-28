import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import ScrollToTop from "@/components/utils/ScrollToTop";
import { RequestDemoDialog } from "@/components/common/RequestDemoDialog";
import { RequestDemoContext } from "@/context/RequestDemoContext";
import { useState } from "react";
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
        <RequestDemoDialog />
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
