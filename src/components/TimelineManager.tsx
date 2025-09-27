import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, CheckCircle, Circle, Download, Settings } from "lucide-react";

const timelineData = [
  {
    id: 1,
    phase: "Planning Phase",
    color: "bg-blue-500",
    tasks: [
      {
        id: 1,
        title: "Venue Booking",
        vendor: "Grand Palace Hall",
        vendorImage: "/api/placeholder/40/40",
        date: "2024-01-15",
        time: "10:00 AM",
        status: "completed",
        duration: 2
      },
      {
        id: 2,
        title: "Catering Selection",
        vendor: "Royal Feast Catering",
        vendorImage: "/api/placeholder/40/40",
        date: "2024-01-20",
        time: "2:00 PM",
        status: "pending",
        duration: 3
      }
    ]
  },
  {
    id: 2,
    phase: "Preparation Phase",
    color: "bg-orange-500",
    tasks: [
      {
        id: 3,
        title: "Decoration Setup",
        vendor: "Elegant Decorators",
        vendorImage: "/api/placeholder/40/40",
        date: "2024-02-10",
        time: "8:00 AM",
        status: "pending",
        duration: 8
      },
      {
        id: 4,
        title: "Sound System Setup",
        vendor: "Pro Audio Solutions",
        vendorImage: "/api/placeholder/40/40",
        date: "2024-02-10",
        time: "4:00 PM",
        status: "pending",
        duration: 2
      }
    ]
  },
  {
    id: 3,
    phase: "Event Day",
    color: "bg-green-500",
    tasks: [
      {
        id: 5,
        title: "Final Preparations",
        vendor: "Event Coordinator",
        vendorImage: "/api/placeholder/40/40",
        date: "2024-02-15",
        time: "6:00 AM",
        status: "pending",
        duration: 4
      },
      {
        id: 6,
        title: "Event Execution",
        vendor: "Full Team",
        vendorImage: "/api/placeholder/40/40",
        date: "2024-02-15",
        time: "6:00 PM",
        status: "pending",
        duration: 6
      }
    ]
  }
];

export function TimelineManager() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Function Timeline Manager</h1>
          <p className="text-muted-foreground">Manage and track your event planning progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export to Sheets
          </Button>
          <Button>
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Timeline Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Wedding Planning Timeline - February 15, 2024
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-green-50 rounded-lg border">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-green-700">Completed Tasks</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg border">
              <div className="text-2xl font-bold text-orange-600">6</div>
              <div className="text-sm text-orange-700">Pending Tasks</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border">
              <div className="text-2xl font-bold text-blue-600">45</div>
              <div className="text-sm text-blue-700">Days Until Event</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gantt Chart Style Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Timeline View</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {timelineData.map((phase) => (
              <div key={phase.id} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${phase.color}`}></div>
                  <h3 className="font-semibold text-lg">{phase.phase}</h3>
                  <Badge variant="outline">{phase.tasks.length} tasks</Badge>
                </div>
                
                <div className="ml-6 space-y-3">
                  {phase.tasks.map((task) => (
                    <Card key={task.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            {/* Status Icon */}
                            <div className="flex-shrink-0">
                              {task.status === 'completed' ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <Circle className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                            
                            {/* Task Info */}
                            <div className="flex-1">
                              <h4 className="font-medium">{task.title}</h4>
                              <div className="flex items-center gap-4 mt-1">
                                <div className="flex items-center gap-2">
                                  <Avatar className="w-6 h-6">
                                    <AvatarImage src={task.vendorImage} />
                                    <AvatarFallback className="text-xs">V</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm text-muted-foreground">{task.vendor}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Calendar className="w-3 h-3" />
                                  {task.date}
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  {task.time} ({task.duration}h)
                                </div>
                              </div>
                            </div>
                            
                            {/* Status Badge */}
                            <Badge 
                              variant={task.status === 'completed' ? 'default' : 'secondary'}
                              className={task.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                            >
                              {task.status === 'completed' ? 'Completed' : 'Pending'}
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-3 ml-9">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${phase.color} transition-all duration-300`}
                              style={{ width: task.status === 'completed' ? '100%' : '0%' }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Generated Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>AI Generated Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-3">Pre-Event Requirements</h4>
              <div className="space-y-2">
                {['Marriage Certificate', 'Venue Permits', 'Catering License', 'Music License'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Day-of Requirements</h4>
              <div className="space-y-2">
                {['Backup Power', 'First Aid Kit', 'Emergency Contacts', 'Vendor Coordination'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Circle className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}