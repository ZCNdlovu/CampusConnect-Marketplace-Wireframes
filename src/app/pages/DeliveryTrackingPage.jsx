import { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { ZoomControls } from "../components/ZoomControls";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowLeft, Package, MapPin, CheckCircle, Truck, Clock, Search } from "lucide-react";

const trackingSteps = [
  { id: 1, status: "Order Confirmed", date: "2026-05-08 10:30 AM", completed: true, icon: CheckCircle },
  { id: 2, status: "Item Packaged", date: "2026-05-08 02:15 PM", completed: true, icon: Package },
  { id: 3, status: "In Transit", date: "2026-05-09 09:00 AM", completed: true, icon: Truck },
  { id: 4, status: "Out for Delivery", date: "2026-05-10 08:30 AM", completed: false, icon: MapPin },
  { id: 5, status: "Delivered", date: "Expected: Today", completed: false, icon: CheckCircle },
];

const pickupLocations = [
  { id: 1, name: "Main Campus - Library", address: "District Six Campus, Library Building", hours: "Mon-Fri: 8AM-6PM", available: true },
  { id: 2, name: "Bellville Campus - Admin", address: "Bellville Campus, Administration Block", hours: "Mon-Fri: 9AM-5PM", available: true },
  { id: 3, name: "Mowbray Campus - Cafeteria", address: "Mowbray Campus, Student Center", hours: "Mon-Fri: 8AM-4PM", available: false },
];

export function DeliveryTrackingPage() {
  const [checkPostcode, setCheckPostcode] = useState("");
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const handleCheckEligibility = () => {
    // Simulate eligibility check
    setIsEligible(checkPostcode.length >= 4);
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
        <Link to="/dashboard" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Orders
        </Link>

        <div className="max-w-5xl mx-auto">
          <h1 className="mb-8">Delivery & Tracking</h1>

          <Tabs defaultValue="tracking">
            <TabsList className="mb-6">
              <TabsTrigger value="tracking">Track Order</TabsTrigger>
              <TabsTrigger value="locations">Pickup Locations</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility Checker</TabsTrigger>
            </TabsList>

            {/* Tracking Tab */}
            <TabsContent value="tracking" className="space-y-6">
              <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                <CardHeader className="border-b border-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Order #ORDER-123456</CardTitle>
                      <CardDescription>Expected delivery: Today by 5:00 PM</CardDescription>
                    </div>
                    <Badge variant="default">In Transit</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  {/* Delivery Timeline */}
                  <div className="space-y-4">
                    {trackingSteps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.id} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div
                              className={`rounded-full p-3 ${
                                step.completed ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            {index < trackingSteps.length - 1 && (
                              <div
                                className={`w-0.5 h-16 ${
                                  step.completed ? 'bg-primary' : 'bg-muted'
                                }`}
                              />
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <h4 className={step.completed ? 'text-foreground' : 'text-muted-foreground'}>
                              {step.status}
                            </h4>
                            <p className="text-sm text-muted-foreground">{step.date}</p>
                            {step.id === 3 && step.completed && (
                              <p className="text-sm text-muted-foreground mt-1">
                                Package is on its way to Bellville Campus
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Delivery Details */}
                  <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="text-primary mb-1">Delivery Location</h4>
                        <p className="text-sm">Bellville Campus - Administration Block</p>
                        <p className="text-sm text-muted-foreground">Collect from front desk with student ID</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Item Details */}
              <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                <CardHeader className="border-b border-primary/10">
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop"
                      alt="Product"
                      className="w-20 h-20 object-cover rounded border border-primary/20"
                    />
                    <div className="flex-1">
                      <h4>MacBook Pro 13-inch (2020)</h4>
                      <p className="text-sm text-muted-foreground mt-1">Seller: Sarah K.</p>
                      <p className="text-sm text-muted-foreground">Campus: North Campus</p>
                      <p className="text-primary mt-2">R750.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pickup Locations Tab */}
            <TabsContent value="locations" className="space-y-4">
              <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                <CardHeader className="border-b border-primary/10">
                  <CardTitle>Secure Pickup Points</CardTitle>
                  <CardDescription>Collect your orders from these campus locations</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  {pickupLocations.map((location) => (
                    <div
                      key={location.id}
                      className="p-4 border border-primary/20 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                          <div className="bg-primary/10 text-primary p-3 rounded-full">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="mb-1">{location.name}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{location.address}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {location.hours}
                            </div>
                          </div>
                        </div>
                        <Badge variant={location.available ? "default" : "secondary"}>
                          {location.available ? "Available" : "Full"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Eligibility Checker Tab */}
            <TabsContent value="eligibility">
              <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                <CardHeader className="border-b border-primary/10">
                  <CardTitle>Delivery Eligibility Checker</CardTitle>
                  <CardDescription>Check if delivery is available to your location</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="postcode">Enter Your Postal Code</Label>
                      <div className="flex gap-2">
                        <Input
                          id="postcode"
                          placeholder="e.g., 7925"
                          value={checkPostcode}
                          onChange={(e) => setCheckPostcode(e.target.value)}
                        />
                        <Button onClick={handleCheckEligibility}>
                          <Search className="h-4 w-4 mr-2" />
                          Check
                        </Button>
                      </div>
                    </div>

                    {isEligible !== null && (
                      <div
                        className={`p-4 rounded-lg border ${
                          isEligible
                            ? 'bg-green-50 border-green-200 text-green-900'
                            : 'bg-red-50 border-red-200 text-red-900'
                        }`}
                      >
                        {isEligible ? (
                          <div>
                            <h4 className="mb-2">✓ Delivery Available</h4>
                            <p className="text-sm">
                              Great news! We deliver to your area. Estimated delivery time: 2-3 business days.
                            </p>
                            <ul className="text-sm mt-3 space-y-1">
                              <li>• On-campus pickup: Free</li>
                              <li>• Secure pickup point: R5.00</li>
                              <li>• Door-to-door delivery: R15.00</li>
                            </ul>
                          </div>
                        ) : (
                          <div>
                            <h4 className="mb-2">✗ Delivery Not Available</h4>
                            <p className="text-sm">
                              Sorry, we don't currently deliver to this postal code. You can still use on-campus pickup at any CPUT campus.
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                      <h4 className="text-primary mb-2">Delivery Coverage</h4>
                      <p className="text-sm mb-2">We currently deliver to the following areas:</p>
                      <ul className="text-sm space-y-1">
                        <li>• District Six and surrounding areas (7925)</li>
                        <li>• Bellville and surrounding areas (7530)</li>
                        <li>• Mowbray and surrounding areas (7700)</li>
                        <li>• Cape Town City Bowl (8001)</li>
                        <li>• Wellington and surrounding areas (7654)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
