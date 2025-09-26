import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, UserCheck, Sparkles, Settings } from "lucide-react";

export function PlanningOptions() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Organize a plan with</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* AI Planning */}
          <Card className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">AI</h2>
              {/* <p className="text-muted-foreground mb-6">Let our intelligent AI plan your perfect event with personalized recommendations and automated coordination.</p> */}
              <Button variant="hero" size="lg" className="w-full">
                <Sparkles className="w-3 h-3 mr-2" />
                Start with AI
              </Button>
            </CardContent>
          </Card>

          {/* Manual Planning */}
          <Card className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="w-8 h-8 bg-gradient-secondary border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <UserCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Manual</h2>
              {/* <p className="text-muted-foreground mb-6">Take full control and plan every detail yourself with our comprehensive planning tools and resources.</p> */}
              <Button variant="outline" size="lg" className="w-full hover:bg-primary hover:text-primary-foreground">
                <Settings className="w-3 h-3 mr-2" />
                Plan Manually
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}