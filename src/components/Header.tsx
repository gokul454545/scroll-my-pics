import { MapPin, User, Bell, Menu, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  currentSection?: string;
  onSectionChange?: (section: string) => void;
  onBack?: () => void;
}

export function Header({ currentSection, onSectionChange, onBack }: HeaderProps) {
  const sections = [
    "Details", "Photography", "Decoration", "Venues", "Budget", 
    "Food & Catering", "Services", "Custom Orders", "Booking", "Payment", "Messages"
  ];

  return (
    <header className="bg-gradient-hero text-white shadow-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-4">
            {onBack && (
              <Button variant="glass" size="icon" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">PlanEazy</h1>
            </div>
            {!onBack && (
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Chennai</span>
                <span className="text-xs opacity-75">9, Ruthland gate 5th street,...</span>
              </div>
            )}
          </div>

          {/* Section Navigation or Profile Icons */}
          {onSectionChange && currentSection ? (
            <div className="hidden md:flex items-center gap-2 overflow-x-auto">
              {sections.map((section) => (
                <Button
                  key={section}
                  variant={currentSection === section ? "default" : "glass"}
                  size="sm"
                  onClick={() => onSectionChange(section)}
                  className="whitespace-nowrap"
                >
                  {section}
                </Button>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Button variant="glass" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="glass" size="icon">
                <User className="w-4 h-4" />
              </Button>
              <Button variant="glass" size="icon" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}