import { Header } from "@/components/Header";
import { SearchSection } from "@/components/SearchSection";
import { EventCarousel } from "@/components/EventCarousel";
import { PlanningOptions } from "@/components/PlanningOptions";
import { FeatureSection } from "@/components/FeatureSection";
import { CategorySection } from "@/components/CategorySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchSection />
      <EventCarousel />
      <PlanningOptions />
      <FeatureSection />
      <CategorySection />
      
      <footer className="bg-gradient-hero text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Plan Your Perfect Event?</h2>
          <p className="text-lg opacity-90 mb-6">Join thousands of satisfied customers who trust PlanEazy</p>
          <div className="text-sm opacity-75">
            © 2024 PlanEazy. Making every occasion perfect.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
