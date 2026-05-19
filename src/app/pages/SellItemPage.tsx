import { Link } from "react-router";
import { Header } from "../components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowLeft, Upload, Package } from "lucide-react";
import { useState } from "react";
import { ZoomControls } from "../components/ZoomControls";

export function SellItemPage() {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
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
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
            <CardHeader className="border-b border-primary/10">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Package className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>Create New Listing</CardTitle>
                  <CardDescription>List your item for sale on the marketplace</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-6">
                {/* Product Images */}
                <div className="space-y-2">
                  <Label htmlFor="images">Product Images</Label>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      id="images"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label htmlFor="images" className="cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG, GIF up to 10MB (max 5 images)
                      </p>
                    </label>
                  </div>
                  {images.length > 0 && (
                    <div className="grid grid-cols-5 gap-2 mt-4">
                      {images.map((img, index) => (
                        <div key={index} className="relative aspect-square">
                          <img
                            src={img}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-full object-cover rounded border border-primary/20"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="title">Product Title</Label>
                    <Input id="title" placeholder="e.g., Calculus Textbook - 12th Edition" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide details about the item, its condition, and any other relevant information..."
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category" className="bg-input-background">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="textbooks">Textbooks</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="stationery">Stationery</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition</Label>
                    <Select>
                      <SelectTrigger id="condition" className="bg-input-background">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price (R)</Label>
                    <Input id="price" type="number" placeholder="0.00" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="campus">Campus Location</Label>
                    <Select>
                      <SelectTrigger id="campus" className="bg-input-background">
                        <SelectValue placeholder="Select campus" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="district-six">District Six Campus</SelectItem>
                        <SelectItem value="bellville">Bellville Campus</SelectItem>
                        <SelectItem value="mowbray">Mowbray Campus</SelectItem>
                        <SelectItem value="cape-town">Cape Town Campus</SelectItem>
                        <SelectItem value="wellington">Wellington Campus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Contact Preferences */}
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Method</Label>
                  <Select>
                    <SelectTrigger id="contact" className="bg-input-background">
                      <SelectValue placeholder="How should buyers reach you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chat">In-app Chat</SelectItem>
                      <SelectItem value="email">University Email</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Delivery Options */}
                <div className="space-y-2">
                  <Label>Delivery Options</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="meetup" className="rounded" defaultChecked />
                      <label htmlFor="meetup" className="text-sm">On-campus meetup</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="pickup" className="rounded" />
                      <label htmlFor="pickup" className="text-sm">Secure pickup point</label>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" className="flex-1" asChild>
                    <Link to="/">Cancel</Link>
                  </Button>
                  <Button type="submit" className="flex-1">
                    <Package className="h-4 w-4 mr-2" />
                    List Item for Sale
                  </Button>
                </div>

                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                  <h4 className="text-primary mb-2">Listing Guidelines</h4>
                  <ul className="text-sm space-y-1 text-foreground">
                    <li>• Be honest about the condition of your item</li>
                    <li>• Use clear, well-lit photos</li>
                    <li>• Price items fairly based on condition and market value</li>
                    <li>• Respond promptly to buyer inquiries</li>
                    <li>• Only sell items you own and have permission to sell</li>
                  </ul>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
