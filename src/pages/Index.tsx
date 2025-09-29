import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EventCarousel } from "@/components/EventCarousel";
import { PlanningOptions } from "@/components/PlanningOptions";
import { FeatureSection } from "@/components/FeatureSection";
import { CategorySection } from "@/components/CategorySection";
import { VenueDetailsSection } from "@/components/sections/VenueDetailsSection";
import { PhotographySection } from "@/components/sections/PhotographySection";
import { DecorationSection } from "@/components/sections/DecorationSection";
import { VenuesSection } from "@/components/sections/VenuesSection";
import { BudgetSection } from "@/components/sections/BudgetSection";
import { FoodCateringSection } from "@/components/sections/FoodCateringSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { PaymentSection } from "@/components/sections/PaymentSection";
import { MessagesSection } from "@/components/sections/MessagesSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, List, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [showDetailedView, setShowDetailedView] = useState(false);
  const navigate = useNavigate();

  const renderCurrentSection = () => {
    if (!showDetailedView) {
      return (
        <>
          <HeroSection />
          <EventCarousel />
          <PlanningOptions />
          <FeatureSection />
          <CategorySection />
        </>
      );
    }

    switch (currentSection) {
      case "Details":
        return <VenueDetailsSection />;
      case "Photography":
        return <PhotographySection />;
      case "Decoration":
        return <DecorationSection />;
      case "Venues":
        return <VenuesSection />;
      case "Budget":
        return <BudgetSection />;
      case "Food & Catering":
        return <FoodCateringSection />;
      case "Services":
        return <DecorationSection />;
      case "Custom Orders":
        return <VenueDetailsSection />;
      case "Booking":
        return <BookingSection />;
      case "Payment":
        return <PaymentSection />;
      case "Messages":
        return <MessagesSection />;
      default:
        return (
          <>
            <HeroSection />
            <EventCarousel />
            <PlanningOptions />
            <FeatureSection />
            <CategorySection />
          </>
        );
    }
  };

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    if (!showDetailedView) {
      setShowDetailedView(true);
    }
  };

  const handleBack = () => {
    setShowDetailedView(false);
    setCurrentSection("home");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
        onBack={showDetailedView ? handleBack : undefined}
      />
      
      <main className="min-h-screen">
        {renderCurrentSection()}
      </main>
      
      {!showDetailedView && (
        <>
          <footer className="bg-gradient-hero text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Plan Your Perfect Event?</h2>
              <p className="text-lg opacity-90 mb-6">Join thousands of satisfied customers who trust PlanEazy</p>
              
              {/* Quick Access Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button 
                  variant="glass" 
                  className="flex items-center gap-2"
                  onClick={() => navigate('/chat')}
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat with Assistant
                </Button>
                <Button 
                  variant="glass" 
                  className="flex items-center gap-2"
                  onClick={() => navigate('/services')}
                >
                  <List className="w-4 h-4" />
                  Browse Services
                </Button>
                <Button 
                  variant="glass" 
                  className="flex items-center gap-2"
                  onClick={() => navigate('/bookings')}
                >
                  <Calendar className="w-4 h-4" />
                  My Bookings
                </Button>
                <Button 
                  variant="glass" 
                  className="flex items-center gap-2"
                  onClick={() => navigate('/timeline')}
                >
                  <Clock className="w-4 h-4" />
                  Timeline Manager
                </Button>
              </div>
              
              <div className="text-sm opacity-75">
                © 2024 PlanEazy. Making every occasion perfect.
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
