import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchSection() {
  return (
    <section className="bg-gradient-hero py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-6">
          <h2 className="text-3xl font-bold mb-2">Every Occasion Meets Perfection</h2>
          <p className="text-lg opacity-90">Plan your perfect event with AI assistance</p>
        </div>
        
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search for events, venues, services..."
            className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-full shadow-card"
          />
        </div>
      </div>
    </section>
  );
}