import { Header } from "../components/Header";
import { ZoomControls } from "../components/ZoomControls";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Bell, Package, ShoppingCart, MessageCircle, AlertCircle, CheckCircle } from "lucide-react";

const notifications = [
  { id: 1, type: "order", title: "Order Shipped", message: "Your order #12345 has been shipped", time: "5 min ago", read: false, icon: Package },
  { id: 2, type: "message", title: "New Message", message: "Sarah K. sent you a message about MacBook Pro", time: "1 hour ago", read: false, icon: MessageCircle },
  { id: 3, type: "sale", title: "Item Sold", message: "Your Calculus Textbook has been sold", time: "2 hours ago", read: true, icon: ShoppingCart },
  { id: 4, type: "alert", title: "Price Drop Alert", message: "Engineering Handbook is now $5 cheaper", time: "3 hours ago", read: true, icon: AlertCircle },
  { id: 5, type: "order", title: "Order Delivered", message: "Your order #12340 has been delivered", time: "1 day ago", read: true, icon: CheckCircle },
  { id: 6, type: "message", title: "New Review", message: "You received a 5-star review from John M.", time: "1 day ago", read: true, icon: MessageCircle },
  { id: 7, type: "sale", title: "New Order", message: "Someone purchased your Scientific Calculator", time: "2 days ago", read: true, icon: ShoppingCart },
];

export function NotificationsPage() {
  const unreadCount = notifications.filter(n => !n.read).length;

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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="flex items-center gap-3">
                <Bell className="h-8 w-8 text-primary" />
                Notifications
              </h1>
              <p className="text-muted-foreground mt-2">
                You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
              </p>
            </div>
            <Button variant="outline">Mark all as read</Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-3">
              {notifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <Card
                    key={notification.id}
                    className={`bg-background/95 backdrop-blur-sm border-primary/20 cursor-pointer hover:shadow-md transition-all ${
                      !notification.read ? 'border-l-4 border-l-primary' : ''
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${!notification.read ? 'bg-primary/10' : 'bg-muted'}`}>
                          <Icon className={`h-5 w-5 ${!notification.read ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="mb-1">{notification.title}</h3>
                              <p className="text-sm text-muted-foreground">{notification.message}</p>
                            </div>
                            {!notification.read && (
                              <Badge variant="default" className="ml-2">New</Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>

            <TabsContent value="unread" className="space-y-3">
              {notifications.filter(n => !n.read).map((notification) => {
                const Icon = notification.icon;
                return (
                  <Card
                    key={notification.id}
                    className="bg-background/95 backdrop-blur-sm border-primary/20 border-l-4 border-l-primary cursor-pointer hover:shadow-md transition-all"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="mb-1">{notification.title}</h3>
                              <p className="text-sm text-muted-foreground">{notification.message}</p>
                            </div>
                            <Badge variant="default" className="ml-2">New</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
