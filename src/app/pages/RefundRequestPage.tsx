import { Link } from "react-router";
import { Header } from "../components/Header";
import { ZoomControls } from "../components/ZoomControls";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowLeft, DollarSign, Upload } from "lucide-react";

export function RefundRequestPage() {
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

        <div className="max-w-3xl mx-auto">
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
            <CardHeader className="border-b border-primary/10">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>Request a Refund</CardTitle>
                  <CardDescription>Submit a refund request for your order</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-6">
                {/* Order Information */}
                <div className="space-y-2">
                  <Label htmlFor="order-id">Order ID</Label>
                  <Input id="order-id" placeholder="e.g., #ORDER-123456" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="product-name">Product Name</Label>
                    <Input id="product-name" placeholder="Enter product name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="order-date">Order Date</Label>
                    <Input id="order-date" type="date" />
                  </div>
                </div>

                {/* Refund Reason */}
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Refund</Label>
                  <Select>
                    <SelectTrigger id="reason" className="bg-input-background">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="not-described">Item not as described</SelectItem>
                      <SelectItem value="damaged">Item damaged or defective</SelectItem>
                      <SelectItem value="wrong-item">Wrong item received</SelectItem>
                      <SelectItem value="not-received">Item not received</SelectItem>
                      <SelectItem value="changed-mind">Changed my mind</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Detailed Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide details about why you're requesting a refund..."
                    rows={5}
                  />
                </div>

                {/* Refund Amount */}
                <div className="space-y-2">
                  <Label htmlFor="amount">Refund Amount (R)</Label>
                  <Input id="amount" type="number" placeholder="0.00" />
                </div>

                {/* Upload Evidence */}
                <div className="space-y-2">
                  <Label>Upload Evidence (Photos/Documents)</Label>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      id="evidence"
                      multiple
                      accept="image/*,.pdf"
                      className="hidden"
                    />
                    <label htmlFor="evidence" className="cursor-pointer">
                      <Upload className="h-10 w-10 mx-auto mb-3 text-primary" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Click to upload photos or documents
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG, PDF up to 10MB (max 5 files)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Refund Method */}
                <div className="space-y-2">
                  <Label htmlFor="refund-method">Preferred Refund Method</Label>
                  <Select>
                    <SelectTrigger id="refund-method" className="bg-input-background">
                      <SelectValue placeholder="Select refund method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="original">Original payment method</SelectItem>
                      <SelectItem value="wallet">CampusConnect Wallet</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Policy Notice */}
                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                  <h4 className="text-primary mb-2">Refund Policy</h4>
                  <ul className="text-sm space-y-1 text-foreground">
                    <li>• Refund requests must be submitted within 7 days of delivery</li>
                    <li>• Items must be returned in original condition</li>
                    <li>• Processing time: 3-5 business days</li>
                    <li>• Refund will be issued to your selected payment method</li>
                    <li>• You may be required to return the item before refund is processed</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" className="flex-1" asChild>
                    <Link to="/dashboard">Cancel</Link>
                  </Button>
                  <Button type="submit" className="flex-1">
                    Submit Refund Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
