import { Link } from "react-router";
import { Header } from "../components/Header";
import { ZoomControls } from "../components/ZoomControls";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Download, Mail, Printer, Receipt as ReceiptIcon } from "lucide-react";

export function ReceiptPage() {
  const receiptData = {
    orderNumber: "ORDER-123456",
    date: "May 10, 2026",
    time: "10:30 AM",
    items: [
      { name: "MacBook Pro 13-inch (2020)", quantity: 1, price: 750.00 },
      { name: "Wireless Mouse", quantity: 1, price: 18.00 },
    ],
    subtotal: 768.00,
    deliveryFee: 5.00,
    total: 773.00,
    paymentMethod: "Credit Card (**** 4242)",
    deliveryMethod: "Secure Pickup Point - Bellville Campus",
    seller: "Sarah K.",
    buyer: "John Doe",
    buyerEmail: "john.doe@mycput.ac.za",
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

        <div className="max-w-3xl mx-auto">
          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="flex-1">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" className="flex-1">
              <Mail className="h-4 w-4 mr-2" />
              Email Receipt
            </Button>
          </div>

          {/* Receipt Card */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
            <CardHeader className="border-b border-primary/10 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 text-primary p-4 rounded-full">
                  <ReceiptIcon className="h-8 w-8" />
                </div>
              </div>
              <CardTitle className="text-2xl">CampusConnect Marketplace</CardTitle>
              <p className="text-sm text-muted-foreground">Official Transaction Receipt</p>
            </CardHeader>
            <CardContent className="pt-6">
              {/* Order Information */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Receipt Number</p>
                    <p className="font-mono">{receiptData.orderNumber}</p>
                  </div>
                  <Badge variant="default" className="bg-green-500 hover:bg-green-600">Paid</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Date</p>
                    <p>{receiptData.date}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Time</p>
                    <p>{receiptData.time}</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Buyer & Seller Information */}
              <div className="mb-6">
                <h3 className="mb-3">Transaction Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Buyer</p>
                    <p>{receiptData.buyer}</p>
                    <p className="text-muted-foreground">{receiptData.buyerEmail}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Seller</p>
                    <p>{receiptData.seller}</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Items */}
              <div className="mb-6">
                <h3 className="mb-4">Items Purchased</h3>
                <div className="space-y-3">
                  {receiptData.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-3 rounded-lg bg-muted">
                      <div className="flex-1">
                        <p>{item.name}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <p>R{item.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Payment Summary */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>R{receiptData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>R{receiptData.deliveryFee.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg">
                  <span>Total</span>
                  <span>R{receiptData.total.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Payment & Delivery Information */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Payment Method</p>
                  <p>{receiptData.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Delivery Method</p>
                  <p>{receiptData.deliveryMethod}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-primary/10 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Thank you for using CampusConnect Marketplace
                </p>
                <p className="text-xs text-muted-foreground">
                  For support, contact us at support@campusconnect.mycput.ac.za
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  This is an official receipt for your transaction
                </p>
              </div>

              {/* QR Code Placeholder */}
              <div className="mt-6 flex justify-center">
                <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-xs text-muted-foreground text-center">
                    QR Code<br/>Verification
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
