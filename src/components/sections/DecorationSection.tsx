import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Sparkles, Heart, Crown, Flower2, Star } from "lucide-react";
import romanticEleganceImg from "@/assets/decoration-romantic-elegance.jpg";
import royalLuxuryImg from "@/assets/decoration-royal-luxury.jpg";
import gardenParadiseImg from "@/assets/decoration-garden-paradise.jpg";
import modernMinimalistImg from "@/assets/decoration-modern-minimalist.jpg";

const decorationThemes = [
  {
    id: 1,
    name: "Romantic Elegance",
    icon: Heart,
    price: "$500 - $2,000",
    description: "Soft pastels, candles, and floral arrangements",
    colors: ["Rose Gold", "Blush Pink", "Ivory", "Champagne"],
    includes: ["Centerpieces", "Lighting", "Linens", "Floral Arrangements"],
    image: romanticEleganceImg
  },
  {
    id: 2, 
    name: "Royal Luxury",
    icon: Crown,
    price: "$800 - $3,500",
    description: "Rich colors, gold accents, and premium materials",
    colors: ["Deep Purple", "Gold", "Burgundy", "Navy"],
    includes: ["Crystal Chandeliers", "Velvet Draping", "Gold Chargers", "Premium Florals"],
    image: royalLuxuryImg
  },
  {
    id: 3,
    name: "Garden Paradise", 
    icon: Flower2,
    price: "$600 - $2,800",
    description: "Natural greenery, botanical elements, fresh flowers",
    colors: ["Sage Green", "White", "Natural Wood", "Coral"],
    includes: ["Living Walls", "Hanging Gardens", "Rustic Elements", "Fresh Bouquets"],
    image: gardenParadiseImg
  },
  {
    id: 4,
    name: "Modern Minimalist",
    icon: Sparkles, 
    price: "$400 - $1,800",
    description: "Clean lines, geometric shapes, contemporary style",
    colors: ["Black", "White", "Silver", "Accent Color"],
    includes: ["LED Lighting", "Geometric Centerpieces", "Modern Furniture", "Art Installations"],
    image: modernMinimalistImg
  }
];

const decorationServices = [
  { name: "Event Styling", price: "$300-800", icon: Palette },
  { name: "Floral Design", price: "$200-1200", icon: Flower2 },
  { name: "Lighting Setup", price: "$150-600", icon: Sparkles },
  { name: "Backdrop Design", price: "$250-900", icon: Star }
];

export function DecorationSection() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Event Decoration</h1>
        <p className="text-muted-foreground">Transform your venue with stunning decorations and themes</p>
      </div>

      {/* Quick Services */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {decorationServices.map((service, index) => (
          <Card key={index} className="hover:shadow-card transition-all cursor-pointer">
            <CardContent className="p-4 text-center">
              <service.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-sm">{service.name}</h3>
              <p className="text-xs text-muted-foreground">{service.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Decoration Themes */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Popular Decoration Themes</h2>
        
        {decorationThemes.map((theme, index) => (
          <Card key={theme.id} className="overflow-hidden hover:shadow-elevated transition-all">
            <CardContent className="p-0">
              <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:grid-cols-2' : ''}`}>
                {/* Image */}
                <div className={`h-64 bg-gradient-secondary relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src={theme.image} alt={theme.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <theme.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{theme.name}</h3>
                    <div className="text-lg font-bold text-primary">{theme.price}</div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{theme.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Color Palette:</h4>
                    <div className="flex flex-wrap gap-2">
                      {theme.colors.map((color, colorIndex) => (
                        <Badge key={colorIndex} variant="secondary" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Package Includes:</h4>
                    <div className="text-sm text-muted-foreground">
                      {theme.includes.map((item, itemIndex) => (
                        <div key={itemIndex}>• {item}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full">
                      Select This Theme
                    </Button>
                    <Button variant="outline" className="w-full">
                      Customize Package
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Custom Decoration Options */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Custom Decoration Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Floral Arrangements</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Bridal bouquets</li>
                <li>• Centerpieces</li>
                <li>• Ceremony arches</li>
                <li>• Table runners</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Lighting Design</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Ambient lighting</li>
                <li>• Spotlights</li>
                <li>• LED installations</li>
                <li>• Candle displays</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Furniture & Props</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Lounge furniture</li>
                <li>• Photo backdrops</li>
                <li>• Specialty linens</li>
                <li>• Decorative props</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <Button className="w-full md:w-auto">
              Request Custom Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}