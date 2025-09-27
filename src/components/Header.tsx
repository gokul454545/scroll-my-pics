import {
  MapPin,
  User,
  Bell,
  Menu,
  ArrowLeft,
  ChevronDown,
  Search,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  currentSection?: string;
  onSectionChange?: (section: string) => void;
  onBack?: () => void;
}

export function Header({ currentSection, onSectionChange, onBack }: HeaderProps) {
  const sections = [
    "Details",
    "Photography",
    "Decoration",
    "Venues",
    "Budget",
    "Food & Catering",
    "Services",
    "Custom Orders",
    "Booking",
    "Payment",
    "Messages",
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
                <span className="text-xs opacity-75">
                  9, Ruthland gate 5th street,...
                </span>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <Input
              placeholder="Search for events, venues, services..."
              className="pl-12 pr-4 py-3 text-base bg-white/95 backdrop-blur-sm border-0 rounded-full shadow-elevated text-foreground"
            />
          </div>

          {/* Extra Buttons */}
          <div className="flex items-center space-x-3">
            {/* Chat Button */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <MessageCircle className="h-4 w-4 mr-2" />
              Need Help?
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Section Navigation or Profile Icons */}
          <div className="flex items-center gap-3">
            {onSectionChange && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="glass" className="flex items-center gap-2">
                    Services
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 bg-card border-border"
                >
                  {sections.map((section) => (
                    <DropdownMenuItem
                      key={section}
                      onClick={() => onSectionChange(section)}
                      className={`cursor-pointer transition-colors ${
                        currentSection === section
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {section}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <Button variant="glass" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="icon">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>

            {/* Login Button styled gold manually */}
            <Button
              size="sm"
              className="hidden sm:flex bg-yellow-500 text-white hover:bg-yellow-600"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
