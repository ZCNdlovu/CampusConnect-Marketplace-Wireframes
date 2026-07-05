import { useState } from "react";
import { Header } from "../components/Header";
import { ZoomControls } from "../components/ZoomControls";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Mail, Package, MessageCircle, TrendingDown, FileCheck, Tag, Bell } from "lucide-react";

// NotificationType Enum matching backend
enum NotificationType {
  MESSAGE = "MESSAGE",
  ORDER_UPDATE = "ORDER_UPDATE",
  PRICE_DROP = "PRICE_DROP",
  DOCUMENT_VERIFICATION = "DOCUMENT_VERIFICATION",
  PROMOTION = "PROMOTION"
}

// Notification Interface matching backend entity
interface Notification {
  notificationId: number;
  recipientId: number;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  actionUrl: string;
}

const notificationTypeConfig = {
  [NotificationType.MESSAGE]: {
    icon: MessageCircle,
    label: "Messages",
    description: "New messages from buyers and sellers",
    color: "text-blue-600"
  },
  [NotificationType.ORDER_UPDATE]: {
    icon: Package,
    label: "Order Updates",
    description: "Order status, shipping, and delivery notifications",
    color: "text-green-600"
  },
  [NotificationType.PRICE_DROP]: {
    icon: TrendingDown,
    label: "Price Drop Alerts",
    description: "Get notified when items on your wishlist go on sale",
    color: "text-orange-600"
  },
  [NotificationType.DOCUMENT_VERIFICATION]: {
    icon: FileCheck,
    label: "Document Verification",
    description: "Updates on your document verification status",
    color: "text-purple-600"
  },
  [NotificationType.PROMOTION]: {
    icon: Tag,
    label: "Promotions",
    description: "Special offers, tips, and marketplace updates",
    color: "text-pink-600"
  }
};

// Sample notifications data
const sampleNotifications: Notification[] = [
  {
    notificationId: 1001,
    recipientId: 123,
    type: NotificationType.ORDER_UPDATE,
    title: "Order Shipped",
    message: "Your order #12345 has been shipped and is on its way",
    isRead: false,
    createdAt: "2026-05-10T10:30:00",
    actionUrl: "/delivery-tracking"
  },
  {
    notificationId: 1002,
    recipientId: 123,
    type: NotificationType.MESSAGE,
    title: "New Message",
    message: "Sarah K. sent you a message about MacBook Pro",
    isRead: false,
    createdAt: "2026-05-10T09:15:00",
    actionUrl: "/chat"
  },
  {
    notificationId: 1003,
    recipientId: 123,
    type: NotificationType.PRICE_DROP,
    title: "Price Drop Alert",
    message: "Engineering Handbook is now R35 (was R40)",
    isRead: true,
    createdAt: "2026-05-09T14:20:00",
    actionUrl: "/category/textbooks"
  },
  {
    notificationId: 1004,
    recipientId: 123,
    type: NotificationType.DOCUMENT_VERIFICATION,
    title: "Document Approved",
    message: "Your student ID verification has been approved",
    isRead: true,
    createdAt: "2026-05-08T11:00:00",
    actionUrl: "/documents"
  }
];

export function EmailNotificationPage() {
  const [emailPreferences, setEmailPreferences] = useState({
    [NotificationType.MESSAGE]: true,
    [NotificationType.ORDER_UPDATE]: true,
    [NotificationType.PRICE_DROP]: false,
    [NotificationType.DOCUMENT_VERIFICATION]: true,
    [NotificationType.PROMOTION]: false
  });

  const [emailFrequency, setEmailFrequency] = useState("instant");

  const togglePreference = (type: NotificationType) => {
    setEmailPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSendNotification = () => {
    console.log("Sending notification...");
    // Implement sendNotification() logic
  };

  const handleMarkAsRead = (notificationId: number) => {
    console.log(`Marking notification ${notificationId} as read`);
    // Implement markAsRead() logic
  };

  const handleSendBatchNotification = (userIds: number[]) => {
    console.log(`Sending batch notification to users: ${userIds}`);
    // Implement sendBatchNotification() logic
  };

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
          <div className="mb-8">
            <h1 className="flex items-center gap-3">
              <Mail className="h-8 w-8 text-primary" />
              Email Notification Settings
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your email notification preferences by notification type
            </p>
          </div>

          {/* Recent Notifications Preview */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20 mb-6">
            <CardHeader className="border-b border-primary/10">
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>Preview of your latest notifications</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {sampleNotifications.slice(0, 3).map((notification) => {
                  const config = notificationTypeConfig[notification.type];
                  const Icon = config.icon;
                  return (
                    <div
                      key={notification.notificationId}
                      className={`flex items-start gap-4 p-3 rounded-lg border ${
                        !notification.isRead ? 'border-primary/30 bg-primary/5' : 'border-border'
                      }`}
                    >
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon className={`h-4 w-4 ${config.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-sm mb-1">{notification.title}</h4>
                            <p className="text-xs text-muted-foreground">{notification.message}</p>
                          </div>
                          {!notification.isRead && (
                            <Badge variant="default" className="ml-2">New</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {notification.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {new Date(notification.createdAt).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Email Preferences by NotificationType */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20 mb-6">
            <CardHeader className="border-b border-primary/10">
              <CardTitle>Notification Type Preferences</CardTitle>
              <CardDescription>
                Enable or disable email notifications for each notification type
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {Object.values(NotificationType).map((type) => {
                const config = notificationTypeConfig[type];
                const Icon = config.icon;
                return (
                  <div key={type}>
                    <div className="flex items-center justify-between p-4 rounded-lg border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon className={`h-5 w-5 ${config.color}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Label htmlFor={type} className="cursor-pointer">
                              {config.label}
                            </Label>
                            <Badge variant="outline" className="text-xs">
                              {type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {config.description}
                          </p>
                        </div>
                      </div>
                      <Switch
                        id={type}
                        checked={emailPreferences[type]}
                        onCheckedChange={() => togglePreference(type)}
                      />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Email Frequency */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20 mb-6">
            <CardHeader className="border-b border-primary/10">
              <CardTitle>Email Frequency</CardTitle>
              <CardDescription>How often would you like to receive email digests?</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="instant"
                  name="frequency"
                  checked={emailFrequency === "instant"}
                  onChange={() => setEmailFrequency("instant")}
                />
                <label htmlFor="instant" className="text-sm cursor-pointer">
                  <strong>Instant</strong> - Receive emails as events happen (sendNotification())
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="daily"
                  name="frequency"
                  checked={emailFrequency === "daily"}
                  onChange={() => setEmailFrequency("daily")}
                />
                <label htmlFor="daily" className="text-sm cursor-pointer">
                  <strong>Daily Digest</strong> - Once per day summary (sendBatchNotification())
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="weekly"
                  name="frequency"
                  checked={emailFrequency === "weekly"}
                  onChange={() => setEmailFrequency("weekly")}
                />
                <label htmlFor="weekly" className="text-sm cursor-pointer">
                  <strong>Weekly Digest</strong> - Once per week summary (sendBatchNotification())
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Notification Actions */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20 mb-6">
            <CardHeader className="border-b border-primary/10">
              <CardTitle>Notification Actions</CardTitle>
              <CardDescription>Test notification functionality</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button onClick={handleSendNotification} variant="outline">
                  <Bell className="h-4 w-4 mr-2" />
                  Send Test Notification
                </Button>
                <Button onClick={() => handleMarkAsRead(1001)} variant="outline">
                  Mark All as Read
                </Button>
                <Button onClick={() => handleSendBatchNotification([123, 456, 789])} variant="outline">
                  Send Batch Notification
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* API Information */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20 mb-6">
            <CardHeader className="border-b border-primary/10">
              <CardTitle>Notification Entity Structure</CardTitle>
              <CardDescription>Backend API notification model</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div className="text-primary">Notification Entity:</div>
                <div>• Long notificationId</div>
                <div>• Long recipientId</div>
                <div>• NotificationType type</div>
                <div>• String title</div>
                <div>• String message</div>
                <div>• boolean isRead</div>
                <div>• LocalDateTime createdAt</div>
                <div>• String actionUrl</div>
                <Separator className="my-2" />
                <div className="text-primary">Methods:</div>
                <div>• sendNotification() void</div>
                <div>• markAsRead() void</div>
                <div>• sendBatchNotification(List~Long~ users) void</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button className="flex-1">Save Preferences</Button>
            <Button variant="outline" className="flex-1">Reset to Default</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
