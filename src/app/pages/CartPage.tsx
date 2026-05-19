import { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Trash2, Minus, Plus, CreditCard, MapPin, ShoppingCart } from "lucide-react";
import { ZoomControls } from "../components/ZoomControls";

const cartItems = [
  { id: 1, name: "MacBook Pro 13-inch (2020)", seller: "Sarah K.", price: 750, quantity: 1, campus: "North Campus", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop" },
  { id: 2, name: "Graphing Calculator TI-84", seller: "John M.", price: 60, quantity: 1, campus: "South Campus", image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=100&h=100&fit=crop" },
  { id: 3, name: "University Hoodie - Size M", seller: "Mike T.", price: 25, quantity: 2, campus: "Main Campus", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop" },
];

export function CartPage() {
  const [items, setItems] = useState(cartItems);
  const [deliveryMethod, setDeliveryMethod] = useState("meetup");
  const [step, setStep] = useState<"cart" | "payment" | "confirmation">("cart");

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = deliveryMethod === "pickup" ? 5 : 0;
  const total = subtotal + deliveryFee;

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  if (step === "confirmation") {
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
          <Card className="max-w-2xl mx-auto text-center bg-background/95 backdrop-blur-sm border-primary/20">
            <CardHeader className="border-b border-primary/10">
              <div className="mx-auto mb-4 bg-primary/10 text-primary rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <CardTitle>Order Confirmed!</CardTitle>
              <CardDescription>Thank you for your purchase</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                <p className="text-lg">#ORDER-{Date.now().toString().slice(-6)}</p>
              </div>
              <Separator />
              <div className="text-left space-y-2">
                <h3>Order Summary</h3>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>${item.price * item.quantity}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg text-sm text-left">
                <p className="text-primary mb-1">Next Steps:</p>
                <ul className="list-disc list-inside text-foreground space-y-1">
                  <li>Check your email for order confirmation</li>
                  <li>Seller will contact you for {deliveryMethod === "meetup" ? "meetup details" : "pickup location"}</li>
                  <li>Track your order in the "My Orders" section</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant="outline" asChild className="flex-1">
                <Link to="/dashboard">View Orders</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/">Continue Shopping</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  if (step === "payment") {
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
            <h1 className="mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Delivery Method */}
                <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                  <CardHeader className="border-b border-primary/10">
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Delivery Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                      <div className="flex items-start space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted">
                        <RadioGroupItem value="meetup" id="meetup" />
                        <div className="flex-1">
                          <Label htmlFor="meetup" className="cursor-pointer">
                            On-Campus Meetup
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Arrange a meetup time and location with the seller
                          </p>
                          <Badge variant="secondary" className="mt-2">Free</Badge>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <div className="flex-1">
                          <Label htmlFor="pickup" className="cursor-pointer">
                            Secure Pickup Point
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Collect from designated campus pickup location
                          </p>
                          <Badge variant="secondary" className="mt-2">$5.00</Badge>
                        </div>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Payment Details */}
                <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
                  <CardHeader className="border-b border-primary/10">
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" type="password" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24 bg-background/95 backdrop-blur-sm border-primary/20">
                  <CardHeader className="border-b border-primary/10">
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>{item.name.substring(0, 20)}... (x{item.quantity})</span>
                          <span>${item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delivery Fee</span>
                        <span>${deliveryFee}</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col gap-2">
                    <Button className="w-full" onClick={() => setStep("confirmation")}>
                      Place Order
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setStep("cart")}>
                      Back to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        <h1 className="mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
              <CardHeader className="border-b border-primary/10">
                <CardTitle>Cart Items ({items.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-lg border">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">Sold by {item.seller}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.campus}
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, -1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <span className="text-lg">${item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-background/95 backdrop-blur-sm border-primary/20">
              <CardHeader className="border-b border-primary/10">
                <CardTitle>Cart Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button className="w-full" onClick={() => setStep("payment")}>
                  Proceed to Checkout
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/">Continue Shopping</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
