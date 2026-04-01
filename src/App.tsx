import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopOnNav from "@/components/ScrollToTopOnNav";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen onComplete={handleComplete} />}
        </AnimatePresence>
        {!loading && (
          <BrowserRouter>
            <ScrollToTopOnNav />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppButton />
            <ScrollToTop />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};
export default App;
