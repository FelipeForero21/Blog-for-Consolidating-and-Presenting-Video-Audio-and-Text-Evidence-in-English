
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import AcademicPage from "./pages/AcademicPage";
import CriticalPage from "./pages/CriticalPage";
import TravelPage from "./pages/TravelPage";
import ProfessionalPage from "./pages/ProfessionalPage";
import PostDetailPage from "./pages/PostDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academic" element={<AcademicPage />} />
            <Route path="/critical" element={<CriticalPage />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/professional" element={<ProfessionalPage />} />
            <Route path="/:category/:slug" element={<PostDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
