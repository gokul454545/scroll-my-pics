import { Card, CardContent } from "@/components/ui/card";
import { Handshake, DollarSign, Clock, Shield, Star, Users } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "End to End",
    description: "Complete event management from planning to execution",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: DollarSign,
    title: "Cost Efficient",
    description: "Best prices with transparent pricing and no hidden fees",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Clock,
    title: "Time Saving",
    description: "Quick planning process with automated recommendations",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Shield,
    title: "Reliable Service",
    description: "Trusted vendors and guaranteed quality service",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "High-end venues and top-rated service providers",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Users,
    title: "Expert Support", 
    description: "Dedicated event coordinators at your service",
    color: "bg-pink-100 text-pink-600"
  }
];

export function FeatureSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Book Events With PlanEazy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our comprehensive event planning platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-card/60 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}