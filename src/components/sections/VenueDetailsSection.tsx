import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Star, Wifi, Car, Camera, Music } from "lucide-react";

const venueDetails = {
  name: "Grand Ballroom Hotel",
  rating: 4.8,
  reviews: 234,
  location: "Downtown, New York",
  capacity: "50-500 guests",
  price: "$2,500 - $8,000",
  image: "/api/placeholder/400/300",
  facilities: [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Car, label: "Parking" },
    { icon: Camera, label: "Photography Allowed" },
    { icon: Music, label: "Sound System" }
  ],
  description: "Elegant ballroom with crystal chandeliers, perfect for weddings and corporate events. Features state-of-the-art lighting and sound systems.",
  amenities: ["Air Conditioning", "Catering Kitchen", "Bridal Suite", "Dance Floor", "Stage Area", "Garden Access"]
};

export function VenueDetailsSection() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Venue Header */}
      <Card className="overflow-hidden">
        <div className="h-64 bg-gradient-secondary relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{venueDetails.rating}</span>
              <span className="text-sm opacity-90">({venueDetails.reviews} reviews)</span>
            </div>
            <h1 className="text-2xl font-bold">{venueDetails.name}</h1>
            <div className="flex items-center text-sm opacity-90">
              <MapPin className="w-4 h-4 mr-1" />
              {venueDetails.location}
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Capacity Details</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {venueDetails.capacity}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Available all year
                </div>
              </div>
              
              <h3 className="font-semibold text-lg mt-6 mb-2">Facilities</h3>
              <div className="grid grid-cols-2 gap-2">
                {venueDetails.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <facility.icon className="w-4 h-4 mr-2" />
                    {facility.label}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Pricing</h3>
              <div className="text-2xl font-bold text-primary mb-2">{venueDetails.price}</div>
              <p className="text-sm text-muted-foreground mb-4">Per event (includes basic setup)</p>
              
              <h3 className="font-semibold text-lg mb-2">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {venueDetails.amenities.map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-muted-foreground">{venueDetails.description}</p>
          </div>
          
          <div className="mt-6 flex gap-4">
            <Button className="flex-1">Book This Venue</Button>
            <Button variant="outline" className="flex-1">Request Quote</Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Additional Details */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Event Coordination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Professional event coordinator included</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Setup Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">4 hours before event</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Cancellation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Free cancellation up to 30 days</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}