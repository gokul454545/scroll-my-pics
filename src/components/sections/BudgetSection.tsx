import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DollarSign, TrendingUp, TrendingDown, AlertCircle, PieChart, Calculator } from "lucide-react";
import { useState } from "react";

const budgetCategories = [
  { name: "Venue", allocated: 8000, spent: 6500, color: "bg-blue-500" },
  { name: "Catering", allocated: 5000, spent: 4200, color: "bg-green-500" },
  { name: "Photography", allocated: 2500, spent: 2500, color: "bg-purple-500" },
  { name: "Decoration", allocated: 3000, spent: 2100, color: "bg-orange-500" },
  { name: "Entertainment", allocated: 2000, spent: 1500, color: "bg-pink-500" },
  { name: "Flowers", allocated: 1500, spent: 800, color: "bg-yellow-500" },
  { name: "Transportation", allocated: 1000, spent: 600, color: "bg-red-500" },
  { name: "Miscellaneous", allocated: 2000, spent: 1200, color: "bg-gray-500" }
];

const totalBudget = budgetCategories.reduce((sum, cat) => sum + cat.allocated, 0);
const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
const remaining = totalBudget - totalSpent;

const recentExpenses = [
  { id: 1, item: "Venue Deposit", category: "Venue", amount: 2500, date: "2024-01-15", status: "paid" },
  { id: 2, item: "Photography Booking", category: "Photography", amount: 1200, date: "2024-01-18", status: "paid" },
  { id: 3, item: "Catering Tasting", category: "Catering", amount: 150, date: "2024-01-20", status: "pending" },
  { id: 4, item: "Floral Consultation", category: "Flowers", amount: 75, date: "2024-01-22", status: "paid" }
];

export function BudgetSection() {
  const [newExpense, setNewExpense] = useState({ item: "", category: "", amount: "" });

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Budget Planning</h1>
        <p className="text-muted-foreground">Track and manage your event expenses</p>
      </div>

      {/* Budget Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">${totalBudget.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Budget</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">${totalSpent.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Spent</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingDown className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">${remaining.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Remaining</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <PieChart className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{Math.round((totalSpent/totalBudget)*100)}%</div>
            <div className="text-sm text-muted-foreground">Budget Used</div>
          </CardContent>
        </Card>
      </div>

      {/* Budget Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="w-5 h-5 mr-2" />
            Budget Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {budgetCategories.map((category, index) => {
              const percentage = (category.spent / category.allocated) * 100;
              const isOverBudget = category.spent > category.allocated;
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="font-medium">{category.name}</span>
                      {isOverBudget && (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${category.spent.toLocaleString()} / ${category.allocated.toLocaleString()}
                    </div>
                  </div>
                  <Progress 
                    value={Math.min(percentage, 100)} 
                    className="h-2"
                  />
                  <div className="flex justify-between items-center text-xs">
                    <span className={`${isOverBudget ? 'text-red-600' : 'text-muted-foreground'}`}>
                      {percentage.toFixed(1)}% used
                    </span>
                    <span className={`${isOverBudget ? 'text-red-600' : 'text-green-600'}`}>
                      ${Math.abs(category.allocated - category.spent).toLocaleString()} 
                      {isOverBudget ? ' over' : ' remaining'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Expenses */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentExpenses.map((expense) => (
                <div key={expense.id} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{expense.item}</div>
                    <div className="text-xs text-muted-foreground">{expense.category} • {expense.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${expense.amount}</div>
                    <Badge 
                      variant={expense.status === 'paid' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {expense.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Add Expense */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Expense</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Expense description"
                value={newExpense.item}
                onChange={(e) => setNewExpense({...newExpense, item: e.target.value})}
              />
              <Input
                placeholder="Category"
                value={newExpense.category}
                onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
              />
              <Input
                placeholder="Amount ($)"
                type="number"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
              />
              <Button className="w-full">
                Add Expense
              </Button>
            </div>
            
            <div className="mt-6 p-4 bg-muted/20 rounded-lg">
              <h4 className="font-medium mb-2">Budget Tips</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Set aside 10-15% for unexpected expenses</li>
                <li>• Get quotes from multiple vendors</li>
                <li>• Track all deposits and payments</li>
                <li>• Review and adjust budget monthly</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Budget Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Analysis & Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-green-600">On Track</h3>
              <ul className="text-sm space-y-1">
                <li>• Photography (100% used)</li>
                <li>• Catering (84% used)</li>
                <li>• Venue (81% used)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-yellow-600">Needs Attention</h3>
              <ul className="text-sm space-y-1">
                <li>• Entertainment (75% used)</li>
                <li>• Decoration (70% used)</li>
                <li>• Miscellaneous (60% used)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-600">Available Budget</h3>
              <ul className="text-sm space-y-1">
                <li>• Flowers ($700 remaining)</li>
                <li>• Transportation ($400 remaining)</li>
                <li>• Decoration ($900 remaining)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}