import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const bookingDetails = {
  eventType: "Wedding Reception",
  venue: "Grand Ballroom Hotel",
  date: "June 15, 2024",
  time: "6:00 PM - 11:00 PM",
  guests: 150,
  services: [
    { name: "Venue Rental", price: 2500, status: "confirmed" },
    { name: "Photography", price: 1800, status: "confirmed" },
    { name: "Catering", price: 4200, status: "pending" },
    { name: "Decoration", price: 1200, status: "confirmed" },
    { name: "Entertainment", price: 800, status: "pending" }
  ]
};

const totalAmount = bookingDetails.services.reduce((sum, service) => sum + service.price, 0);
const confirmedAmount = bookingDetails.services
  .filter(service => service.status === 'confirmed')
  .reduce((sum, service) => sum + service.price, 0);

const timelineItems = [
  { date: "March 1", task: "Initial Consultation", status: "completed" },
  { date: "March 15", task: "Venue Booking", status: "completed" },
  { date: "April 1", task: "Vendor Selection", status: "completed" },
  { date: "May 1", task: "Final Menu Tasting", status: "upcoming" },
  { date: "May 15", task: "Final Head Count", status: "upcoming" },
  { date: "June 1", task: "Final Details Review", status: "upcoming" },
  { date: "June 15", task: "Event Day", status: "upcoming" }
];

export function BookingSection() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Event Booking</h1>
        <p className="text-muted-foreground">Manage your event details and bookings</p>
      </div>

      {/* Booking Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Booking Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{bookingDetails.eventType}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {bookingDetails.venue}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {bookingDetails.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {bookingDetails.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {bookingDetails.guests} guests
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Contact Information</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Phone className="w-3 h-3 mr-2" />
                    (555) 123-4567
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-3 h-3 mr-2" />
                    event@planeazy.com
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Total Investment</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total:</span>
                  <span className="text-primary">${totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Confirmed:</span>
                  <span className="text-green-600">${confirmedAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Pending:</span>
                  <span className="text-orange-600">${(totalAmount - confirmedAmount).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Services & Vendors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bookingDetails.services.map((service, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    service.status === 'confirmed' ? 'bg-green-500' : 'bg-orange-500'
                  }`}></div>
                  <div>
                    <h3 className="font-medium">{service.name}</h3>
                    <Badge 
                      variant={service.status === 'confirmed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {service.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${service.price.toLocaleString()}</div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Planning Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Planning Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                  item.status === 'completed' 
                    ? 'bg-green-500' 
                    : item.status === 'upcoming'
                    ? 'bg-primary'
                    : 'bg-muted'
                }`}>
                  {item.status === 'completed' && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-medium ${
                    item.status === 'completed' ? 'text-muted-foreground' : 'text-foreground'
                  }`}>
                    {item.task}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.date}</div>
                </div>
                <Badge variant={
                  item.status === 'completed' ? 'secondary' : 
                  item.status === 'upcoming' ? 'default' : 'outline'
                }>
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Special Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Special Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Add any special requests or notes for your event..."
              className="min-h-32"
            />
            <Button className="w-full mt-4">
              Save Requests
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Primary Contact</label>
                <Input placeholder="Name" className="mt-1" />
                <Input placeholder="Phone" className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Secondary Contact</label>
                <Input placeholder="Name" className="mt-1" />
                <Input placeholder="Phone" className="mt-2" />
              </div>
              <Button className="w-full">
                Update Contacts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button size="lg" className="min-w-32">
          Confirm Booking
        </Button>
        <Button variant="outline" size="lg" className="min-w-32">
          Request Changes
        </Button>
        <Button variant="outline" size="lg" className="min-w-32">
          Download Contract
        </Button>
      </div>
    </div>
  );
}