import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Children from "./pages/Children.tsx";
import ZoomWhitening from "./pages/ZoomWhitening.tsx";
import Invisalign from "./pages/Invisalign.tsx";
import DentalImplants from "./pages/DentalImplants.tsx";
import UninsuredChildren from "./pages/UninsuredChildren.tsx";
import UninsuredAdults from "./pages/UninsuredAdults.tsx";
import GeneralDentistry from "./pages/GeneralDentistry.tsx";
import Veneers from "./pages/Veneers.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/children" element={<Children />} />
          <Route path="/zoom-whitening" element={<ZoomWhitening />} />
          <Route path="/invisalign" element={<Invisalign />} />
          <Route path="/dental-implants" element={<DentalImplants />} />
          <Route path="/children-uninsured" element={<UninsuredChildren />} />
          <Route path="/adults-uninsured" element={<UninsuredAdults />} />
          <Route path="/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/veneers" element={<Veneers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
