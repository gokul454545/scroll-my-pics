import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Star, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import royalDecoratorsImg from "@/assets/royal-decorators.jpg";
import spiceGardenImg from "@/assets/spice-garden-catering.jpg";

const quickPrompts = [
  "Start Planning a Wedding",
  "What's needed for a Puberty Ceremony?",
  "Plan a Birthday Party",
  "Traditional Festival Setup"
];

const mockMessages = [
  {
    id: 1,
    sender: "ai",
    content: "Hello! I'm your Cultural Assistant. I can help you plan traditional ceremonies and events. What would you like to organize today?",
    timestamp: "10:30 AM"
  }
];

const mockServiceRecommendations = [
  {
    id: 1,
    name: "Royal Decorators",
    service: "Traditional Wedding Decoration",
    price: "$800 - $2500",
    rating: 4.8,
    image: royalDecoratorsImg,
    location: "Downtown"
  },
  {
    id: 2,
    name: "Spice Garden Catering",
    service: "Traditional Cuisine",
    price: "$15 - $25 per person",
    rating: 4.6,
    image: spiceGardenImg,
    location: "City Center"
  }
];

export function ChatInterface() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: "ai",
        content: "I'd be happy to help you plan that! Here are some recommended vendors and services:",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
      setShowRecommendations(true);
    }, 1000);
  };

  const handleQuickPrompt = (prompt: string) => {
    setNewMessage(prompt);
    handleSendMessage();
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="border-b p-4 bg-card">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <Bot className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">Cultural Assistant</h2>
            <p className="text-sm text-muted-foreground">Online • Ready to help</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Quick Prompts */}
        {messages.length === 1 && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground text-center">Quick start options:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickPrompt(prompt)}
                  className="text-left h-auto p-3 justify-start"
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'ai' && (
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Bot className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            )}
            
            <div className={`max-w-[70%] ${message.sender === 'user' ? 'order-first' : ''}`}>
              <Card className={`${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                <CardContent className="p-3">
                  <p className="text-sm">{message.content}</p>
                </CardContent>
              </Card>
              <p className="text-xs text-muted-foreground mt-1 px-2">
                {message.timestamp}
              </p>
            </div>

            {message.sender === 'user' && (
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-secondary">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {/* Service Recommendations */}
        {showRecommendations && (
          <div className="space-y-3">
            <p className="text-sm font-medium">Recommended Services:</p>
            {mockServiceRecommendations.map((service) => (
              <Card key={service.id} className="bg-card hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-20 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{service.name}</h4>
                          <p className="text-xs text-muted-foreground">{service.service}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs">{service.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{service.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {service.price}
                        </Badge>
                      </div>
                      <Button size="sm" className="mt-2 w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t p-4 bg-card">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ask me anything about event planning..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}