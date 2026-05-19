import { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Package, ShoppingCart, Heart, MessageCircle, Edit, Check, Trash2, MapPin } from "lucide-react";
import { ZoomControls } from "../components/ZoomControls";

const myListings = [
  { id: 1, name: "Calculus Textbook", price: "$45", status: "active", views: 23, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100&h=100&fit=crop" },
  { id: 2, name: "Scientific Calculator", price: "$20", status: "active", views: 15, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=100&h=100&fit=crop" },
  { id: 3, name: "Lab Coat - Size M", price: "$12", status: "sold", views: 8, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop" },
];

const myOrders = [
  { id: 1, item: "MacBook Pro 13-inch", seller: "Sarah K.", price: "$750", status: "pending", paymentStatus: "paid", deliveryStatus: "awaiting pickup" },
  { id: 2, item: "Graphing Calculator", seller: "John M.", price: "$60", status: "completed", paymentStatus: "paid", deliveryStatus: "delivered" },
  { id: 3, item: "University Hoodie", seller: "Mike T.", price: "$25", status: "pending", paymentStatus: "paid", deliveryStatus: "in transit" },
];

const wishlistItems = [
  { id: 1, name: "Engineering Handbook", price: "$35", campus: "Main Campus", image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200&h=150&fit=crop" },
  { id: 2, name: "Wireless Mouse", price: "$15", campus: "North Campus", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=150&fit=crop" },
  { id: 3, name: "Desk Organizer", price: "$10", campus: "South Campus", image: "https://images.unsplash.com/photo-1531835207117-3e7517cca788?w=200&h=150&fit=crop" },
  { id: 4, name: "Notebook Set", price: "$8", campus: "Main Campus", image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=200&h=150&fit=crop" },
];

const activeChats = [
  { id: 1, user: "Alice Johnson", message: "Is the textbook still available?", time: "5m ago", unread: 2, avatar: "" },
  { id: 2, user: "Bob Williams", message: "Can we meet at Bellville campus?", time: "1h ago", unread: 0, avatar: "" },
  { id: 3, user: "Carol Brown", message: "Thanks for the quick delivery!", time: "2h ago", unread: 1, avatar: "" },
  { id: 4, user: "David Lee", message: "What's the condition of the calculator?", time: "3h ago", unread: 0, avatar: "" },
];

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("listings");

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
              <h1>My Dashboard</h1>
              <p className="text-muted-foreground">Manage your listings, orders, and marketplace activity</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="listings" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  My Listings
                </TabsTrigger>
                <TabsTrigger value="orders" className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  My Orders
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Wishlist
                </TabsTrigger>
              </TabsList>

              {/* My Listings Tab */}
              <TabsContent value="listings" className="space-y-4">
                <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                  <CardHeader className="border-b border-primary/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>My Listings</CardTitle>
                        <CardDescription>Products you're currently selling</CardDescription>
                      </div>
                      <Button>
                        <Package className="h-4 w-4 mr-2" />
                        Add New Listing
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Views</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {myListings.map((listing) => (
                          <TableRow key={listing.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <img src={listing.image} alt={listing.name} className="w-12 h-12 rounded object-cover" />
                                <span>{listing.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{listing.price}</TableCell>
                            <TableCell>
                              <Badge variant={listing.status === "active" ? "default" : "secondary"}>
                                {listing.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{listing.views}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button size="sm" variant="outline">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                {listing.status === "active" && (
                                  <Button size="sm" variant="outline">
                                    <Check className="h-4 w-4 mr-1" />
                                    Mark Sold
                                  </Button>
                                )}
                                <Button size="sm" variant="outline">
                                  <Trash2 className="h-4 w-4" />
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

              {/* My Orders Tab */}
              <TabsContent value="orders" className="space-y-4">
                <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                  <CardHeader className="border-b border-primary/10">
                    <CardTitle>My Orders</CardTitle>
                    <CardDescription>Track your purchases and delivery status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Item</TableHead>
                          <TableHead>Seller</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Payment</TableHead>
                          <TableHead>Delivery</TableHead>
                          <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {myOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell>{order.item}</TableCell>
                            <TableCell>{order.seller}</TableCell>
                            <TableCell>{order.price}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {order.paymentStatus}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {order.deliveryStatus}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Badge variant={order.status === "completed" ? "default" : "secondary"}>
                                {order.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Wishlist Tab */}
              <TabsContent value="wishlist" className="space-y-4">
                <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                  <CardHeader className="border-b border-primary/10">
                    <CardTitle>Wishlist</CardTitle>
                    <CardDescription>Items you've saved for later</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {wishlistItems.map((item) => (
                        <Card key={item.id} className="overflow-hidden">
                          <div className="flex gap-4">
                            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover" />
                            <div className="flex-1 p-4">
                              <h4 className="mb-2">{item.name}</h4>
                              <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <MapPin className="h-4 w-4 mr-1" />
                                {item.campus}
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-primary">{item.price}</span>
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" asChild>
                                    <Link to="/cart">Add to Cart</Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Active Chats Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
              <CardHeader className="border-b border-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Active Chats
                </CardTitle>
                <CardDescription>Recent conversations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeChats.map((chat) => (
                  <div
                    key={chat.id}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  >
                    <Avatar>
                      <AvatarImage src={chat.avatar} />
                      <AvatarFallback>{chat.user.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm truncate">{chat.user}</p>
                        {chat.unread > 0 && (
                          <Badge variant="destructive" className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                            {chat.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{chat.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{chat.time}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Messages
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
