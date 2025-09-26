import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Send, Phone, Video, MoreVertical, Paperclip, Search } from "lucide-react";
import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Wedding Photographer", 
    avatar: "SM",
    lastMessage: "The engagement photos are ready for review!",
    timestamp: "2 mins ago",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "Grand Ballroom Hotel",
    role: "Venue Coordinator",
    avatar: "GH",
    lastMessage: "Confirming the setup details for June 15th...",
    timestamp: "1 hour ago", 
    unread: 0,
    online: true
  },
  {
    id: 3,
    name: "Elegant Affairs Catering",
    role: "Catering Manager",
    avatar: "EA", 
    lastMessage: "Menu tasting scheduled for next Friday",
    timestamp: "3 hours ago",
    unread: 1,
    online: false
  },
  {
    id: 4,
    name: "Alex Chen",
    role: "Event Planner",
    avatar: "AC",
    lastMessage: "Let's review the timeline together",
    timestamp: "Yesterday",
    unread: 0,
    online: false
  },
  {
    id: 5,
    name: "Floral Dreams",
    role: "Florist",
    avatar: "FD",
    lastMessage: "Your bouquet design is ready!",
    timestamp: "2 days ago",
    unread: 0,
    online: true
  }
];

const currentMessages = [
  {
    id: 1,
    sender: "Sarah Mitchell",
    content: "Hi! I've finished editing your engagement photos. They turned out absolutely beautiful!",
    timestamp: "10:30 AM",
    isOwn: false
  },
  {
    id: 2,
    sender: "You",
    content: "That's fantastic! We can't wait to see them. When can we schedule a review?",
    timestamp: "10:32 AM", 
    isOwn: true
  },
  {
    id: 3,
    sender: "Sarah Mitchell",
    content: "How about tomorrow at 2 PM? I can show you the full gallery and we can select your favorites for the wedding album.",
    timestamp: "10:35 AM",
    isOwn: false
  },
  {
    id: 4,
    sender: "You", 
    content: "Perfect! Should we meet at your studio?",
    timestamp: "10:36 AM",
    isOwn: true
  },
  {
    id: 5,
    sender: "Sarah Mitchell",
    content: "Yes, that works great. I'll send you the address and parking information in a moment.",
    timestamp: "10:38 AM",
    isOwn: false
  }
];

export function MessagesSection() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter(conv => 
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-muted-foreground">Communicate with your event vendors and team</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 h-[600px]">
        {/* Conversations List */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader className="pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`p-4 cursor-pointer transition-colors hover:bg-muted/50 ${
                      selectedConversation?.id === conversation.id ? 'bg-muted' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{conversation.avatar}</AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                          {conversation.unread > 0 && (
                            <Badge variant="default" className="text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{conversation.role}</p>
                        <p className="text-xs text-muted-foreground truncate">{conversation.lastMessage}</p>
                        <p className="text-xs text-muted-foreground mt-1">{conversation.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-3">
          <Card className="h-full flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{selectedConversation?.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{selectedConversation?.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedConversation?.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {currentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isOwn
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground/70'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      // Handle sending message
                      setNewMessage('');
                    }
                  }}
                />
                <Button>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-medium">Start Group Chat</h3>
            <p className="text-sm text-muted-foreground">Create a group with all vendors</p>
            <Button size="sm" className="mt-2">Create Group</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-medium">Schedule Call</h3>
            <p className="text-sm text-muted-foreground">Set up a video conference</p>
            <Button size="sm" variant="outline" className="mt-2">Schedule</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Paperclip className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-medium">Share Files</h3>
            <p className="text-sm text-muted-foreground">Upload contracts and documents</p>
            <Button size="sm" variant="outline" className="mt-2">Upload</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}