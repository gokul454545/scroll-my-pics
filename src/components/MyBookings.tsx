import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  DollarSign, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Download,
  Edit,
  Eye,
  AlertCircle
} from "lucide-react";

const bookings = [
  {
    id: 1,
    function: "Traditional Wedding Ceremony",
    date: "2024-03-15",
    time: "6:00 PM",
    venue: "Grand Palace Hall",
    services: [
      {
        name: "Royal Palace Decorators",
        type: "Decoration",
        image: "/api/placeholder/60/60",
        status: "confirmed"
      },
      {
        name: "Spice Garden Catering",
        type: "Catering",
        image: "/api/placeholder/60/60",
        status: "confirmed"
      },
      {
        name: "Crystal Vision Photography",
        type: "Photography",
        image: "/api/placeholder/60/60",
        status: "pending"
      }
    ],
    totalCost: 4500,
    status: "confirmed",
    guests: 250,
    thumbnail: "/api/placeholder/80/80"
  },
  {
    id: 2,
    function: "Birthday Celebration",
    date: "2024-04-20",
    time: "7:00 PM",
    venue: "Garden Paradise Resort",
    services: [
      {
        name: "Party Planners Pro",
        type: "Event Planning",
        image: "/api/placeholder/60/60",
        status: "confirmed"
      },
      {
        name: "Sweet Treats Bakery",
        type: "Cake & Desserts",
        image: "/api/placeholder/60/60",
        status: "confirmed"
      }
    ],
    totalCost: 1200,
    status: "pending",
    guests: 50,
    thumbnail: "/api/placeholder/80/80"
  },
  {
    id: 3,
    function: "Corporate Annual Meeting",
    date: "2024-02-28",
    time: "2:00 PM",
    venue: "Business Center Convention Hall",
    services: [
      {
        name: "Tech Solutions AV",
        type: "Audio/Visual",
        image: "/api/placeholder/60/60",
        status: "completed"
      },
      {
        name: "Corporate Catering Co",
        type: "Catering",
        image: "/api/placeholder/60/60",
        status: "completed"
      }
    ],
    totalCost: 2800,
    status: "completed",
    guests: 150,
    thumbnail: "/api/placeholder/80/80"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'completed':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'confirmed':
      return <Clock className="w-3 h-3" />;
    case 'pending':
      return <AlertCircle className="w-3 h-3" />;
    case 'completed':
      return <Calendar className="w-3 h-3" />;
    default:
      return <Clock className="w-3 h-3" />;
  }
};

export function MyBookings() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Bookings</h1>
          <p className="text-muted-foreground">Manage your event bookings and track progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <Calendar className="w-4 h-4 mr-2" />
            New Booking
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Events</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Confirmed</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold">$8,500</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card key={booking.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Thumbnail */}
                <img 
                  src={booking.thumbnail} 
                  alt={booking.function}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                
                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{booking.function}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {booking.date} at {booking.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {booking.venue}
                        </div>
                        <div className="flex items-center gap-1">
                          <span>{booking.guests} guests</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total Cost</p>
                        <p className="font-bold text-lg text-primary">${booking.totalCost.toLocaleString()}</p>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>
                        {getStatusIcon(booking.status)}
                        <span className="ml-1 capitalize">{booking.status}</span>
                      </Badge>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Services Booked:</p>
                    <div className="flex flex-wrap gap-3">
                      {booking.services.map((service, index) => (
                        <div key={index} className="flex items-center gap-2 bg-muted/50 rounded-lg p-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={service.image} />
                            <AvatarFallback className="text-xs">{service.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-xs font-medium">{service.name}</p>
                            <p className="text-xs text-muted-foreground">{service.type}</p>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getStatusColor(service.status)}`}
                          >
                            {service.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Manage Timeline
                    </Button>
                    {booking.status !== 'completed' && (
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Booking
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Vendors
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Support
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State (if no bookings) */}
      {bookings.length === 0 && (
        <Card className="text-center p-12">
          <CardContent>
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No bookings yet</h3>
            <p className="text-muted-foreground mb-4">Start planning your first event</p>
            <Button>
              Browse Services
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}