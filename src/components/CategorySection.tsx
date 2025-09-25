import { Card, CardContent } from "@/components/ui/card";
import { Home, Activity, Bell, MessageCircle } from "lucide-react";

const categories = [
  {
    icon: Home,
    label: "Home",
    active: true
  },
  {
    icon: Activity,
    label: "Status",
    active: false
  },
  {
    icon: Bell,
    label: "Updates",
    active: false
  },
  {
    icon: MessageCircle,
    label: "Chats",
    active: false
  }
];

export function CategorySection() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Top Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {categories.map((category) => (
            <Card 
              key={category.label}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                category.active 
                  ? 'bg-gradient-primary text-white shadow-primary' 
                  : 'bg-card hover:bg-muted/50'
              }`}
            >
              <CardContent className="p-6 text-center">
                <category.icon className={`w-8 h-8 mx-auto mb-3 ${
                  category.active ? 'text-white' : 'text-primary group-hover:text-primary'
                }`} />
                <p className={`font-medium ${
                  category.active ? 'text-white' : 'text-foreground'
                }`}>
                  {category.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}