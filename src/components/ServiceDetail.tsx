import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  Star, 
  MapPin, 
  Calendar as CalendarIcon, 
  Phone, 
  Mail, 
  MessageCircle, 
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  Users,
  Award
} from "lucide-react";

const serviceData = {
  id: 1,
  name: "Royal Palace Decorators",
  category: "Decoration",
  rating: 4.8,
  reviews: 127,
  location: "Downtown",
  phone: "+1 (555) 123-4567",
  email: "info@royalpalace.com",
  description: "Royal Palace Decorators brings over 15 years of experience in creating magical moments for your special occasions. We specialize in traditional wedding decorations with a modern twist, ensuring your celebration reflects your cultural heritage while embracing contemporary elegance.",
  images: [
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400"
  ],
  packages: [
    {
      name: "Essential Package",
      price: 800,
      features: ["Basic stage decoration", "Entrance decoration", "Table centerpieces", "Basic lighting"]
    },
    {
      name: "Premium Package",
      price: 1500,
      features: ["Complete venue transformation", "Bridal stage", "Photo booth setup", "Advanced lighting", "Floral arrangements"]
    },
    {
      name: "Luxury Package",
      price: 2500,
      features: ["Full venue theming", "Custom backdrops", "LED lighting system", "Premium flowers", "Dedicated coordinator", "Setup & cleanup"]
    }
  ],
  features: [
    "Free consultation",
    "24/7 support",
    "Setup & cleanup included",
    "100% satisfaction guarantee"
  ],
  availability: ["2024-03-15", "2024-03-20", "2024-03-25", "2024-04-05"],
  vendor: {
    name: "Rajesh Kumar",
    image: "/api/placeholder/60/60",
    experience: "15+ years",
    specialties: ["Traditional Weddings", "Corporate Events", "Religious Ceremonies"]
  }
};

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    date: "2024-01-15",
    comment: "Absolutely stunning decoration! They transformed our venue into a fairy tale. Highly recommended for traditional weddings.",
    images: ["/api/placeholder/100/100", "/api/placeholder/100/100"]
  },
  {
    id: 2,
    name: "Michael Johnson",
    rating: 5,
    date: "2024-01-10",
    comment: "Professional service and beautiful setup. The team was punctual and worked efficiently. Our guests were impressed!",
    images: []
  },
  {
    id: 3,
    name: "Anita Patel",
    rating: 4,
    date: "2024-01-05",
    comment: "Good service overall. The decoration was beautiful, though there were minor delays in setup. Would recommend.",
    images: ["/api/placeholder/100/100"]
  }
];

export function ServiceDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(serviceData.packages[1]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [guestCount, setGuestCount] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % serviceData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + serviceData.images.length) % serviceData.images.length);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Images and Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image Carousel */}
          <Card className="overflow-hidden">
            <div className="relative h-96">
              <img 
                src={serviceData.images[currentImageIndex]} 
                alt={serviceData.name}
                className="w-full h-full object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {serviceData.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* Service Info */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{serviceData.name}</h1>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{serviceData.rating}</span>
                      <span className="text-muted-foreground">({serviceData.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {serviceData.location}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-muted-foreground">{serviceData.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">What's Included</h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vendor Profile */}
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={serviceData.vendor.image} />
                      <AvatarFallback>RK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium">{serviceData.vendor.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {serviceData.vendor.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {serviceData.reviews} events
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                      {review.images.length > 0 && (
                        <div className="flex gap-2">
                          {review.images.map((img, index) => (
                            <img key={index} src={img} alt="Review" className="w-16 h-16 rounded object-cover" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Booking Panel */}
        <div className="space-y-6">
          {/* Booking Card */}
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Book This Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Package Selection */}
              <div>
                <Label className="text-sm font-medium">Select Package</Label>
                <div className="space-y-2 mt-2">
                  {serviceData.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedPackage.name === pkg.name ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{pkg.name}</span>
                        <span className="font-bold text-primary">${pkg.price}</span>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {pkg.features.slice(0, 2).map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                        {pkg.features.length > 2 && (
                          <li>• +{pkg.features.length - 2} more features</li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Date Selection */}
              <div>
                <Label>Event Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? selectedDate.toDateString() : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guest Count */}
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  placeholder="Enter guest count"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                />
              </div>

              {/* Special Requests */}
              <div>
                <Label htmlFor="requests">Special Requests</Label>
                <Textarea
                  id="requests"
                  placeholder="Any special requirements or requests..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={3}
                />
              </div>

              <Separator />

              {/* Price Summary */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Package Price</span>
                  <span>${selectedPackage.price}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Service Fee</span>
                  <span>$50</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${selectedPackage.price + 50}</span>
                </div>
              </div>

              {/* Booking Buttons */}
              <div className="space-y-2">
                <Button className="w-full" size="lg">
                  Book Now
                </Button>
                <Button variant="outline" className="w-full">
                  Request Quote
                </Button>
              </div>

              {/* Contact Info */}
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Need help? Contact us</p>
                <div className="flex justify-center gap-4">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bundling Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Intelligent Bundling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 border rounded-lg bg-green-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">Decoration + Catering</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Save 15%</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Bundle with our catering partner</p>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">Full Event Package</span>
                  <Badge variant="secondary">Save 25%</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Decoration + Catering + Photography</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}