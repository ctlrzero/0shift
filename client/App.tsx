import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Services from "./pages/Services";
import HowWeWork from "./pages/HowWeWork";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div id="top">
          <Header />
          <main className="pt-16 md:pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/careers" element={<Careers />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const _rootEl = document.getElementById("root")!;
if (!(window as any).__app_root) {
  (window as any).__app_root = createRoot(_rootEl);
}
(window as any).__app_root.render(<App />);
