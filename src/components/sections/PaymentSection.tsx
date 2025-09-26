import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CreditCard, Calendar, Shield, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const paymentSchedule = [
  {
    id: 1,
    description: "Initial Deposit",
    amount: 2500,
    dueDate: "March 15, 2024",
    status: "paid",
    paidDate: "March 12, 2024"
  },
  {
    id: 2,
    description: "50% Payment",
    amount: 6250,
    dueDate: "May 1, 2024", 
    status: "due",
    paidDate: null
  },
  {
    id: 3,
    description: "Final Payment",
    amount: 3750,
    dueDate: "June 1, 2024",
    status: "upcoming",
    paidDate: null
  }
];

const savedCards = [
  {
    id: 1,
    type: "visa",
    last4: "4242",
    expiry: "12/26",
    isDefault: true
  },
  {
    id: 2,
    type: "mastercard", 
    last4: "8888",
    expiry: "03/25",
    isDefault: false
  }
];

const recentTransactions = [
  {
    id: 1,
    description: "Venue Deposit Payment",
    amount: 2500,
    date: "March 12, 2024",
    method: "•••• 4242",
    status: "completed"
  },
  {
    id: 2,
    description: "Photography Booking",
    amount: 900,
    date: "March 18, 2024", 
    method: "•••• 4242",
    status: "completed"
  },
  {
    id: 3,
    description: "Decoration Consultation",
    amount: 150,
    date: "March 22, 2024",
    method: "•••• 8888", 
    status: "pending"
  }
];

const totalPaid = paymentSchedule.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0);
const totalDue = paymentSchedule.filter(p => p.status === 'due').reduce((sum, p) => sum + p.amount, 0);
const totalUpcoming = paymentSchedule.filter(p => p.status === 'upcoming').reduce((sum, p) => sum + p.amount, 0);

export function PaymentSection() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Payment Management</h1>
        <p className="text-muted-foreground">Manage payments and billing for your event</p>
      </div>

      {/* Payment Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">${totalPaid.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Paid</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">${totalDue.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Due Now</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">${totalUpcoming.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Upcoming</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <CreditCard className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">${(totalPaid + totalDue + totalUpcoming).toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Payment Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentSchedule.map((payment) => (
              <div key={payment.id} className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    payment.status === 'paid' ? 'bg-green-500' : 
                    payment.status === 'due' ? 'bg-orange-500' : 'bg-blue-500'
                  }`}></div>
                  <div>
                    <h3 className="font-medium">{payment.description}</h3>
                    <div className="text-sm text-muted-foreground">
                      Due: {payment.dueDate}
                      {payment.paidDate && ` • Paid: ${payment.paidDate}`}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">${payment.amount.toLocaleString()}</div>
                  <Badge 
                    variant={
                      payment.status === 'paid' ? 'default' : 
                      payment.status === 'due' ? 'destructive' : 'secondary'
                    }
                    className="text-xs"
                  >
                    {payment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          
          {totalDue > 0 && (
            <div className="mt-6 pt-6 border-t">
              <Button size="lg" className="w-full">
                Pay Now - ${totalDue.toLocaleString()}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Saved Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {savedCards.map((card) => (
                <div key={card.id} className="flex justify-between items-center p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-8 h-8 text-muted-foreground" />
                    <div>
                      <div className="font-medium">
                        {card.type.toUpperCase()} •••• {card.last4}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Expires {card.expiry}
                        {card.isDefault && (
                          <Badge variant="secondary" className="ml-2 text-xs">Default</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <CreditCard className="w-4 h-4 mr-2" />
                Add New Card
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Add New Card */}
        <Card>
          <CardHeader>
            <CardTitle>Add Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input placeholder="Card Number" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="MM/YY" />
                <Input placeholder="CVV" />
              </div>
              <Input placeholder="Cardholder Name" />
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Your payment information is encrypted and secure</span>
              </div>
              <Button className="w-full">
                Save Payment Method
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <div>
                  <div className="font-medium text-sm">{transaction.description}</div>
                  <div className="text-xs text-muted-foreground">
                    {transaction.date} • {transaction.method}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${transaction.amount}</div>
                  <Badge 
                    variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <Button variant="outline">
              View All Transactions
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Security */}
      <Card>
        <CardContent className="p-6 text-center">
          <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Secure Payment Processing</h3>
          <p className="text-sm text-muted-foreground mb-4">
            All payments are processed using industry-standard encryption and security protocols. 
            Your financial information is never stored on our servers.
          </p>
          <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
            <span>• SSL Encrypted</span>
            <span>• PCI Compliant</span>
            <span>• Bank-Level Security</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}