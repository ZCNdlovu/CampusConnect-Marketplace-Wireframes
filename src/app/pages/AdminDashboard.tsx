import { Header } from "../components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Users, Flag, TrendingUp, Search, Ban, CheckCircle, XCircle } from "lucide-react";
import { ZoomControls } from "../components/ZoomControls";

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@mycput.ac.za", role: "Student", campus: "Main Campus", status: "active", listings: 5, orders: 12 },
  { id: 2, name: "Bob Williams", email: "bob@mycput.ac.za", role: "Student", campus: "North Campus", status: "active", listings: 3, orders: 8 },
  { id: 3, name: "Carol Brown", email: "carol@mycput.ac.za", role: "Student", campus: "South Campus", status: "flagged", listings: 2, orders: 15 },
  { id: 4, name: "David Lee", email: "david@mycput.ac.za", role: "Student", campus: "Bellville", status: "suspended", listings: 0, orders: 3 },
];

const reportedContent = [
  { id: 1, type: "Product", item: "iPhone 12 - Broken Screen", reporter: "Sarah K.", reason: "Misleading description", status: "pending", date: "2026-05-08" },
  { id: 2, type: "Review", item: "Review on MacBook Pro", reporter: "John M.", reason: "Inappropriate language", status: "pending", date: "2026-05-07" },
  { id: 3, type: "Product", item: "Designer Handbag", reporter: "Mike T.", reason: "Suspected counterfeit", status: "reviewed", date: "2026-05-06" },
  { id: 4, type: "User", item: "User: @fastdeals", reporter: "Amy R.", reason: "Spam/Scam behavior", status: "pending", date: "2026-05-05" },
];

const analytics = {
  totalUsers: 1247,
  activeListings: 342,
  completedTransactions: 856,
  totalRevenue: "$45,230",
  campusBreakdown: [
    { campus: "Main Campus", transactions: 245, revenue: "$12,450" },
    { campus: "Bellville Campus", transactions: 198, revenue: "$10,230" },
    { campus: "North Campus", transactions: 156, revenue: "$8,900" },
    { campus: "South Campus", transactions: 142, revenue: "$7,850" },
    { campus: "Mowbray Campus", transactions: 115, revenue: "$5,800" },
  ],
};

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background/50 backdrop-blur-sm" style={{
      backgroundImage: 'url(/src/imports/Campus.Connect.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Header />
      <ZoomControls />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1>Super Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage users, moderate content, and monitor marketplace activity</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Total Users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-3xl">{analytics.totalUsers}</span>
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Active Listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-3xl">{analytics.activeListings}</span>
                <TrendingUp className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Completed Transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-3xl">{analytics.completedTransactions}</span>
                <CheckCircle className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Total Revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-3xl">{analytics.totalRevenue}</span>
                <TrendingUp className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-4">
          <TabsList>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              User Management
            </TabsTrigger>
            <TabsTrigger value="moderation" className="flex items-center gap-2">
              <Flag className="h-4 w-4" />
              Content Moderation
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* User Management Tab */}
          <TabsContent value="users" className="space-y-4">
            <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
              <CardHeader className="border-b border-primary/10">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage all registered students and staff</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search users..." className="pl-10 w-64 bg-input-background" />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40 bg-input-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="flagged">Flagged</SelectItem>
                        <SelectItem value="suspended">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Campus</TableHead>
                      <TableHead>Listings</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.campus}</TableCell>
                        <TableCell>{user.listings}</TableCell>
                        <TableCell>{user.orders}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.status === "active" ? "default" :
                              user.status === "flagged" ? "outline" :
                              "destructive"
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                            {user.status !== "flagged" && (
                              <Button size="sm" variant="outline">
                                <Flag className="h-4 w-4" />
                              </Button>
                            )}
                            {user.status !== "suspended" && (
                              <Button size="sm" variant="outline">
                                <Ban className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Moderation Tab */}
          <TabsContent value="moderation" className="space-y-4">
            <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
              <CardHeader className="border-b border-primary/10">
                <CardTitle>Content Moderation Queue</CardTitle>
                <CardDescription>Review reported products, reviews, and users</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Item</TableHead>
                      <TableHead>Reporter</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reportedContent.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell>
                          <Badge variant="outline">{report.type}</Badge>
                        </TableCell>
                        <TableCell>{report.item}</TableCell>
                        <TableCell>{report.reporter}</TableCell>
                        <TableCell>{report.reason}</TableCell>
                        <TableCell>{report.date}</TableCell>
                        <TableCell>
                          <Badge variant={report.status === "pending" ? "secondary" : "default"}>
                            {report.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline">
                              <XCircle className="h-4 w-4 mr-1 text-red-600" />
                              Remove
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4">
            <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
              <CardHeader className="border-b border-primary/10">
                <CardTitle>Campus Performance Analytics</CardTitle>
                <CardDescription>Transaction breakdown across all campuses</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campus</TableHead>
                      <TableHead className="text-right">Transactions</TableHead>
                      <TableHead className="text-right">Revenue</TableHead>
                      <TableHead className="text-right">Avg. Transaction</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analytics.campusBreakdown.map((campus, index) => {
                      const avgTransaction = (parseFloat(campus.revenue.replace('$', '').replace(',', '')) / campus.transactions).toFixed(2);
                      return (
                        <TableRow key={index}>
                          <TableCell>{campus.campus}</TableCell>
                          <TableCell className="text-right">{campus.transactions}</TableCell>
                          <TableCell className="text-right">{campus.revenue}</TableCell>
                          <TableCell className="text-right">${avgTransaction}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                <CardHeader className="border-b border-primary/10">
                  <CardTitle>Top Categories</CardTitle>
                  <CardDescription>Most popular product categories</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Textbooks</span>
                      <span>342 listings</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Electronics</span>
                      <span>256 listings</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Clothing</span>
                      <span>189 listings</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Stationery</span>
                      <span>124 listings</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                <CardHeader className="border-b border-primary/10">
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest marketplace events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-600 rounded-full p-2">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">New user registered</p>
                      <p className="text-xs text-muted-foreground">sarah.k@mycput.ac.za - 5 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full p-2">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">Transaction completed</p>
                      <p className="text-xs text-muted-foreground">MacBook Pro sold for $750 - 12 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full p-2">
                      <Flag className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">Content reported</p>
                      <p className="text-xs text-muted-foreground">Product flagged for review - 25 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full p-2">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">New listing created</p>
                      <p className="text-xs text-muted-foreground">Calculus Textbook - 1 hour ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
