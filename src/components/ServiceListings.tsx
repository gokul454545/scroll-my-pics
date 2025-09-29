import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Calendar, Filter, Search, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import royalDecoratorsImg from "@/assets/royal-decorators.jpg";
import spiceGardenImg from "@/assets/spice-garden-catering.jpg";
import crystalVisionImg from "@/assets/crystal-vision-photography.jpg";
import grandVenuesImg from "@/assets/grand-celebration-venues.jpg";
import floralDesignsImg from "@/assets/elegant-floral-designs.jpg";
import heritageMusicImg from "@/assets/heritage-music-group.jpg";

const services = [
  {
    id: 1,
    name: "Royal Palace Decorators",
    category: "Decoration",
    price: "$800 - $2500",
    rating: 4.8,
    reviews: 127,
    image: royalDecoratorsImg,
    location: "Downtown",
    available: true,
    tags: ["Wedding", "Traditional", "Luxury"],
    description: "Specializing in traditional wedding decorations with modern elegance."
  },
  {
    id: 2,
    name: "Spice Garden Catering",
    category: "Food & Catering",
    price: "$15 - $25 per person",
    rating: 4.6,
    reviews: 89,
    image: spiceGardenImg,
    location: "City Center",
    available: true,
    tags: ["Traditional Cuisine", "Vegetarian", "Halal"],
    description: "Authentic traditional cuisine with contemporary presentation."
  },
  {
    id: 3,
    name: "Crystal Vision Photography",
    category: "Photography",
    price: "$500 - $1200",
    rating: 4.9,
    reviews: 156,
    image: crystalVisionImg,
    location: "Uptown",
    available: false,
    tags: ["Wedding", "Portrait", "Traditional"],
    description: "Capturing your special moments with artistic vision and cultural sensitivity."
  },
  {
    id: 4,
    name: "Grand Celebration Venues",
    category: "Venues",
    price: "$1200 - $3000",
    rating: 4.7,
    reviews: 94,
    image: grandVenuesImg,
    location: "Suburbs",
    available: true,
    tags: ["Large Capacity", "Traditional", "Garden"],
    description: "Beautiful venues perfect for traditional ceremonies and celebrations."
  },
  {
    id: 5,
    name: "Elegant Floral Designs",
    category: "Decoration",
    price: "$300 - $800",
    rating: 4.5,
    reviews: 67,
    image: floralDesignsImg,
    location: "Downtown",
    available: true,
    tags: ["Flowers", "Traditional", "Custom"],
    description: "Fresh floral arrangements and traditional garland services."
  },
  {
    id: 6,
    name: "Heritage Music Group",
    category: "Entertainment",
    price: "$400 - $1000",
    rating: 4.8,
    reviews: 112,
    image: heritageMusicImg,
    location: "City Center",
    available: true,
    tags: ["Traditional Music", "Live Band", "Cultural"],
    description: "Traditional and contemporary music for all cultural celebrations."
  }
];

const categories = ["All", "Decoration", "Food & Catering", "Photography", "Venues", "Entertainment"];
const priceRanges = ["All", "Under $500", "$500 - $1000", "$1000 - $2000", "Above $2000"];
const locations = ["All", "Downtown", "City Center", "Uptown", "Suburbs"];

export function ServiceListings() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredServices = services.filter(service => {
    if (searchTerm && !service.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !service.description.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (selectedCategory !== "All" && service.category !== selectedCategory) return false;
    if (selectedLocation !== "All" && service.location !== selectedLocation) return false;
    if (showAvailableOnly && !service.available) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Service Listings</h1>
            <p className="text-muted-foreground">Find the perfect vendors for your cultural celebration</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(price => (
                  <SelectItem key={price} value={price}>{price}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Available Only Toggle */}
            <Button
              variant={showAvailableOnly ? "default" : "outline"}
              onClick={() => setShowAvailableOnly(!showAvailableOnly)}
              className="flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Available Only
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {filteredServices.length} of {services.length} services
        </p>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} className="group hover:shadow-elevated transition-all duration-300 overflow-hidden">
            <div className="relative">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {!service.available && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    Fully Booked
                  </Badge>
                </div>
              )}
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="bg-white/90 text-black">
                  {service.category}
                </Badge>
              </div>
              <div className="absolute top-3 right-3">
                <div className="bg-white/90 rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{service.rating}</span>
                </div>
              </div>
            </div>
            
            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {service.location}
                </div>
                <div className="text-sm text-muted-foreground">
                  ({service.reviews} reviews)
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {service.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="font-semibold text-primary">{service.price}</div>
                <Button 
                  size="sm" 
                  disabled={!service.available}
                  className="min-w-[80px]"
                >
                  {service.available ? "Book Now" : "Unavailable"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      {filteredServices.length > 0 && (
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Services
          </Button>
        </div>
      )}
    </div>
  );
}