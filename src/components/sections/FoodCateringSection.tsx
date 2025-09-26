import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Utensils, Star, Clock, Users, ChefHat, Leaf, Award } from "lucide-react";

const cateringOptions = [
  {
    id: 1,
    name: "Elegant Affairs Catering",
    specialty: "Fine Dining",
    rating: 4.9,
    reviews: 156,
    priceRange: "$45-85 per person",
    image: "/api/placeholder/300/200",
    cuisines: ["Continental", "Mediterranean", "Asian Fusion"],
    services: ["Full Service", "Setup & Cleanup", "Professional Staff"],
    minGuests: 50,
    badges: ["Award Winner", "Organic Options"]
  },
  {
    id: 2,
    name: "Garden Fresh Catering",
    specialty: "Farm-to-Table",
    rating: 4.8,
    reviews: 203,
    priceRange: "$35-65 per person", 
    image: "/api/placeholder/300/200",
    cuisines: ["American", "Vegetarian", "Vegan"],
    services: ["Sustainable Sourcing", "Dietary Accommodations", "Custom Menus"],
    minGuests: 25,
    badges: ["Eco-Friendly", "Local Sourcing"]
  },
  {
    id: 3,
    name: "Global Flavors Co.",
    specialty: "International Cuisine",
    rating: 4.7,
    reviews: 189,
    priceRange: "$30-70 per person",
    image: "/api/placeholder/300/200", 
    cuisines: ["Italian", "Indian", "Mexican", "Thai"],
    services: ["Live Cooking Stations", "Cultural Presentations", "Themed Setups"],
    minGuests: 30,
    badges: ["Authentic Recipes", "Cultural Expert"]
  }
];

const menuCategories = [
  {
    name: "Appetizers & Starters", 
    items: [
      { name: "Bruschetta Trio", price: "$3.50", description: "Classic, mushroom, and goat cheese" },
      { name: "Shrimp Cocktail", price: "$4.25", description: "Jumbo shrimp with cocktail sauce" },
      { name: "Cheese & Charcuterie", price: "$5.75", description: "Artisanal selection with crackers" }
    ]
  },
  {
    name: "Main Courses",
    items: [
      { name: "Grilled Salmon", price: "$28.50", description: "Herb-crusted with lemon butter" },
      { name: "Beef Tenderloin", price: "$35.75", description: "With mushroom demi-glace" },
      { name: "Vegetarian Risotto", price: "$22.50", description: "Seasonal vegetables and herbs" }
    ]
  },
  {
    name: "Desserts",
    items: [
      { name: "Chocolate Fountain", price: "$6.50", description: "With fresh fruits and marshmallows" },
      { name: "Wedding Cake", price: "$8.25", description: "Custom design, serves 100" },
      { name: "Dessert Station", price: "$7.50", description: "Assorted mini desserts" }
    ]
  }
];

const dietaryOptions = [
  { name: "Vegetarian", icon: Leaf, count: "15+ options" },
  { name: "Vegan", icon: Leaf, count: "12+ options" },
  { name: "Gluten-Free", icon: Award, count: "20+ options" },
  { name: "Halal", icon: Award, count: "8+ options" }
];

export function FoodCateringSection() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Food & Catering</h1>
        <p className="text-muted-foreground">Delicious cuisine for your perfect event</p>
      </div>

      {/* Dietary Options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dietaryOptions.map((option, index) => (
          <Card key={index} className="hover:shadow-card transition-all cursor-pointer">
            <CardContent className="p-4 text-center">
              <option.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <h3 className="font-medium text-sm">{option.name}</h3>
              <p className="text-xs text-muted-foreground">{option.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Caterers */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Featured Catering Partners</h2>
        
        {cateringOptions.map((caterer) => (
          <Card key={caterer.id} className="overflow-hidden hover:shadow-elevated transition-all">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Caterer Image */}
                <div className="h-48 bg-gradient-secondary relative">
                  <div className="absolute top-3 left-3 space-y-1">
                    {caterer.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="block w-fit">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center bg-black/50 text-white px-2 py-1 rounded text-sm">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {caterer.rating}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-2 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{caterer.name}</h3>
                      <p className="text-muted-foreground">{caterer.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{caterer.priceRange}</div>
                      <div className="text-xs text-muted-foreground">per person</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Users className="w-4 h-4 mr-1" />
                    Min {caterer.minGuests} guests • {caterer.reviews} reviews
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="font-medium text-sm mb-2">Cuisines:</h4>
                    <div className="flex flex-wrap gap-1">
                      {caterer.cuisines.map((cuisine, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cuisine}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Services:</h4>
                    <div className="text-sm text-muted-foreground">
                      {caterer.services.map((service, index) => (
                        <div key={index}>• {service}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <ChefHat className="w-4 h-4 mr-2" />
                      Book Caterer
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Menu
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sample Menu */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Utensils className="w-5 h-5 mr-2" />
            Sample Menu & Pricing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-semibold text-lg mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b pb-3 last:border-b-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <span className="text-sm font-semibold text-primary">{item.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              * Prices shown are per person estimates. Final pricing varies by menu selection and guest count.
            </div>
            <Button>
              Request Custom Menu
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Service Options */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Service Styles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Buffet Service</h3>
                  <p className="text-sm text-muted-foreground">Self-service with variety</p>
                </div>
                <div className="text-sm font-semibold">$25-45/person</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Plated Service</h3>
                  <p className="text-sm text-muted-foreground">Formal seated dining</p>
                </div>
                <div className="text-sm font-semibold">$35-65/person</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Cocktail Reception</h3>
                  <p className="text-sm text-muted-foreground">Passed hors d'oeuvres</p>
                </div>
                <div className="text-sm font-semibold">$20-40/person</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Family Style</h3>
                  <p className="text-sm text-muted-foreground">Shared platters</p>
                </div>
                <div className="text-sm font-semibold">$30-50/person</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add-On Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Bar Service</h3>
                  <p className="text-sm text-muted-foreground">Open or cash bar</p>
                </div>
                <div className="text-sm font-semibold">$15-35/person</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Cake Cutting</h3>
                  <p className="text-sm text-muted-foreground">Professional service</p>
                </div>
                <div className="text-sm font-semibold">$2-5/person</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Coffee Station</h3>
                  <p className="text-sm text-muted-foreground">Specialty coffees</p>
                </div>
                <div className="text-sm font-semibold">$4-8/person</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Late Night Snacks</h3>
                  <p className="text-sm text-muted-foreground">Light bites for guests</p>
                </div>
                <div className="text-sm font-semibold">$6-12/person</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}