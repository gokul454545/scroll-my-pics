import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ChatInterface } from "./components/ChatInterface";
import { TimelineManager } from "./components/TimelineManager";
import { ServiceListings } from "./components/ServiceListings";
import { ServiceDetail } from "./components/ServiceDetail";
import { MyBookings } from "./components/MyBookings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/timeline" element={<TimelineManager />} />
          <Route path="/services" element={<ServiceListings />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/bookings" element={<MyBookings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
