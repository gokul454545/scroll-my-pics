import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Users, Star, Search, Filter, Navigation } from "lucide-react";
import { useState } from "react";
import grandBallroomImg from "@/assets/venue-grand-ballroom.jpg";
import riversideGardensImg from "@/assets/venue-riverside-gardens.jpg";
import metropolitanLoftImg from "@/assets/venue-metropolitan-loft.jpg";
import historicMansionImg from "@/assets/venue-historic-mansion.jpg";

const venues = [
  {
    id: 1,
    name: "Grand Ballroom Hotel",
    location: "Manhattan, NY",
    distance: "2.5 miles",
    rating: 4.8,
    reviews: 234,
    capacity: "100-500",
    price: "$2,500",
    type: "Hotel",
    image: grandBallroomImg,
    features: ["Parking", "WiFi", "Catering", "A/V Equipment"]
  },
  {
    id: 2,
    name: "Riverside Gardens",
    location: "Brooklyn, NY", 
    distance: "4.2 miles",
    rating: 4.9,
    reviews: 187,
    capacity: "50-300",
    price: "$1,800",
    type: "Garden",
    image: riversideGardensImg,
    features: ["Outdoor", "Garden", "Photography", "Bridal Suite"]
  },
  {
    id: 3,
    name: "Metropolitan Loft",
    location: "SoHo, NY",
    distance: "1.8 miles", 
    rating: 4.7,
    reviews: 156,
    capacity: "80-200",
    price: "$3,200",
    type: "Loft",
    image: metropolitanLoftImg,
    features: ["City Views", "Modern", "Rooftop", "Downtown"]
  },
  {
    id: 4,
    name: "Historic Mansion",
    location: "Long Island, NY",
    distance: "12.3 miles",
    rating: 4.9,
    reviews: 298,
    capacity: "150-400",
    price: "$4,500",
    type: "Mansion", 
    image: historicMansionImg,
    features: ["Historic", "Elegant", "Gardens", "Ballroom"]
  }
];

const mapMarkers = [
  { id: 1, name: "Grand Ballroom", lat: 40.7614, lng: -73.9776, type: "hotel" },
  { id: 2, name: "Riverside Gardens", lat: 40.6892, lng: -74.0445, type: "garden" },
  { id: 3, name: "Metropolitan Loft", lat: 40.7229, lng: -74.0030, type: "loft" },
  { id: 4, name: "Historic Mansion", lat: 40.8176, lng: -73.0482, type: "mansion" }
];

export function VenuesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVenue, setSelectedVenue] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Find Your Perfect Venue</h1>
        <p className="text-muted-foreground">Discover amazing venues for your special event</p>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search venues by name, location, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              Near Me
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-secondary relative rounded-lg overflow-hidden">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 opacity-20"></div>
                <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded border border-white/20 p-4">
                  <h3 className="text-white font-semibold mb-4">Venue Locations</h3>
                  
                  {/* Map Markers */}
                  <div className="space-y-3">
                    {mapMarkers.map((marker) => (
                      <div
                        key={marker.id}
                        className={`flex items-center text-white text-sm cursor-pointer hover:bg-white/10 p-2 rounded ${
                          selectedVenue === marker.id ? 'bg-white/20' : ''
                        }`}
                        onClick={() => setSelectedVenue(marker.id)}
                      >
                        <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                        <span>{marker.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/20 text-white text-xs">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>Manhattan, NY</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Venues List */}
        <div className="lg:col-span-2 space-y-4">
          {venues.map((venue) => (
            <Card 
              key={venue.id} 
              className={`hover:shadow-elevated transition-all cursor-pointer ${
                selectedVenue === venue.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedVenue(venue.id)}
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Venue Image */}
                  <div className="h-48 md:h-auto bg-gradient-secondary relative">
                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary">{venue.type}</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center bg-black/50 text-white px-2 py-1 rounded text-sm">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {venue.rating}
                      </div>
                    </div>
                  </div>
                  
                  {/* Venue Details */}
                  <div className="md:col-span-2 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{venue.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-1" />
                          {venue.location} • {venue.distance}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">{venue.price}</div>
                        <div className="text-xs text-muted-foreground">per event</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Users className="w-4 h-4 mr-1" />
                      {venue.capacity} guests • {venue.reviews} reviews
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {venue.features.slice(0, 4).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {venue.features.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{venue.features.length - 4} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Check Availability
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Load More */}
          <div className="text-center pt-4">
            <Button variant="outline" size="lg">
              Load More Venues
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}