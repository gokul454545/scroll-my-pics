import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Star, Clock, Users, Award } from "lucide-react";

const photographers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Wedding Specialist",
    rating: 4.9,
    reviews: 127,
    price: "$800 - $2,500",
    image: "/api/placeholder/300/200",
    specialties: ["Weddings", "Portraits", "Events"],
    experience: "8 years",
    packages: ["Basic (4hrs)", "Standard (8hrs)", "Premium (12hrs)"]
  },
  {
    id: 2,
    name: "Alex Chen", 
    title: "Event Photographer",
    rating: 4.8,
    reviews: 98,
    price: "$600 - $2,000",
    image: "/api/placeholder/300/200", 
    specialties: ["Corporate", "Social", "Lifestyle"],
    experience: "6 years",
    packages: ["Essential (3hrs)", "Complete (6hrs)", "Full Day (10hrs)"]
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    title: "Portrait Artist", 
    rating: 5.0,
    reviews: 89,
    price: "$900 - $3,000",
    image: "/api/placeholder/300/200",
    specialties: ["Fine Art", "Fashion", "Editorial"],
    experience: "12 years", 
    packages: ["Studio (2hrs)", "Location (4hrs)", "Exclusive (8hrs)"]
  }
];

const portfolioImages = [
  "/api/placeholder/200/300", "/api/placeholder/200/200", "/api/placeholder/200/250",
  "/api/placeholder/200/280", "/api/placeholder/200/220", "/api/placeholder/200/300"
];

export function PhotographySection() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Photography Services</h1>
        <p className="text-muted-foreground">Capture your perfect moments with professional photographers</p>
      </div>

      {/* Featured Portfolio */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Camera className="w-5 h-5 mr-2" />
            Featured Portfolio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-secondary rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-full h-full bg-muted"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Photographers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photographers.map((photographer) => (
          <Card key={photographer.id} className="group hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-0">
              {/* Photographer Image */}
              <div className="h-48 bg-gradient-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{photographer.rating}</span>
                    <span className="text-xs opacity-90">({photographer.reviews})</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Award className="w-3 h-3 mr-1" />
                    Pro
                  </Badge>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{photographer.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{photographer.title}</p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  {photographer.experience} experience
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {photographer.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-lg font-semibold text-primary mb-3">
                  {photographer.price}
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Available Packages:</h4>
                  {photographer.packages.map((pkg, index) => (
                    <div key={index} className="text-xs text-muted-foreground">
                      • {pkg}
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 space-y-2">
                  <Button className="w-full" size="sm">
                    Book Photographer
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service Options */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Photography Services Include:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium">Professional Equipment</h3>
              <p className="text-sm text-muted-foreground">High-end cameras & lenses</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium">Team Coverage</h3>
              <p className="text-sm text-muted-foreground">Multiple photographers available</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium">Quick Delivery</h3>
              <p className="text-sm text-muted-foreground">Photos ready in 48-72 hours</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium">Professional Editing</h3>
              <p className="text-sm text-muted-foreground">Color correction & retouching</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}