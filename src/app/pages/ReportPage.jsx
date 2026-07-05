import { Link } from "react-router";
import { Header } from "../components/Header";
import { ZoomControls } from "../components/ZoomControls";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowLeft, Flag, Upload } from "lucide-react";

export function ReportPage() {
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
          Back to Dashboard
        </Link>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
            <CardHeader className="border-b border-primary/10">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Flag className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>Report an Issue</CardTitle>
                  <CardDescription>Help us maintain a safe marketplace by reporting violations</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-6">
                {/* Report Type */}
                <div className="space-y-2">
                  <Label htmlFor="report-type">What are you reporting?</Label>
                  <Select>
                    <SelectTrigger id="report-type" className="bg-input-background">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">Product/Listing</SelectItem>
                      <SelectItem value="user">User/Seller</SelectItem>
                      <SelectItem value="review">Review</SelectItem>
                      <SelectItem value="message">Inappropriate Message</SelectItem>
                      <SelectItem value="transaction">Transaction Issue</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Item/User Information */}
                <div className="space-y-2">
                  <Label htmlFor="item-url">Item/User Link or ID</Label>
                  <Input id="item-url" placeholder="Paste the URL or enter the ID" />
                </div>

                {/* Reason for Report */}
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Report</Label>
                  <Select>
                    <SelectTrigger id="reason" className="bg-input-background">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scam">Scam or Fraud</SelectItem>
                      <SelectItem value="counterfeit">Counterfeit Product</SelectItem>
                      <SelectItem value="inappropriate">Inappropriate Content</SelectItem>
                      <SelectItem value="harassment">Harassment or Bullying</SelectItem>
                      <SelectItem value="misleading">Misleading Description</SelectItem>
                      <SelectItem value="prohibited">Prohibited Item</SelectItem>
                      <SelectItem value="spam">Spam</SelectItem>
                      <SelectItem value="copyright">Copyright Violation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Detailed Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide as much detail as possible about the issue..."
                    rows={6}
                  />
                  <p className="text-xs text-muted-foreground">
                    Include specific examples, dates, and any relevant context
                  </p>
                </div>

                {/* Upload Evidence */}
                <div className="space-y-2">
                  <Label>Upload Evidence (Screenshots/Photos)</Label>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      id="evidence"
                      multiple
                      accept="image/*,.pdf"
                      className="hidden"
                    />
                    <label htmlFor="evidence" className="cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-3 text-primary" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Click to upload screenshots or documents
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG, PDF up to 10MB (max 5 files)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-2">
                  <Label htmlFor="contact">Your Contact Email (Optional)</Label>
                  <Input id="contact" type="email" placeholder="your.email@mycput.ac.za" />
                  <p className="text-xs text-muted-foreground">
                    We may need to contact you for additional information
                  </p>
                </div>

                {/* Anonymous Option */}
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="anonymous" className="rounded" />
                  <label htmlFor="anonymous" className="text-sm">
                    Submit this report anonymously
                  </label>
                </div>

                {/* Important Notice */}
                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                  <h4 className="text-primary mb-2">Important Information</h4>
                  <ul className="text-sm space-y-1">
                    <li>• All reports are reviewed by our moderation team</li>
                    <li>• False reports may result in account suspension</li>
                    <li>• Processing time: 1-3 business days</li>
                    <li>• You will be notified of the outcome via email</li>
                    <li>• Serious violations may be reported to campus authorities</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" className="flex-1" asChild>
                    <Link to="/dashboard">Cancel</Link>
                  </Button>
                  <Button type="submit" className="flex-1">
                    <Flag className="h-4 w-4 mr-2" />
                    Submit Report
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
