import { useParams, Link } from "react-router";
import { Header } from "../components/Header";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { MapPin, Heart, ArrowLeft } from "lucide-react";
import { ZoomControls } from "../components/ZoomControls";

const categoryProducts = {
  textbooks: [
    { id: 1, name: "Calculus Textbook - 12th Edition", price: "$45", campus: "Main Campus", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop", condition: "Like New" },
    { id: 2, name: "Organic Chemistry Study Guide", price: "$30", campus: "East Campus", image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop", condition: "Like New" },
    { id: 3, name: "Engineering Handbook 2024", price: "$35", campus: "North Campus", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop", condition: "Good" },
    { id: 4, name: "Physics Fundamentals", price: "$40", campus: "South Campus", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop", condition: "Excellent" },
    { id: 5, name: "Introduction to Psychology", price: "$28", campus: "Main Campus", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop", condition: "Good" },
    { id: 6, name: "Business Management Textbook", price: "$38", campus: "Bellville Campus", image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=400&h=300&fit=crop", condition: "Like New" },
  ],
  electronics: [
    { id: 1, name: "MacBook Pro 13-inch (2020)", price: "$750", campus: "North Campus", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop", condition: "Good" },
    { id: 2, name: "Graphing Calculator TI-84", price: "$60", campus: "South Campus", image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400&h=300&fit=crop", condition: "Excellent" },
    { id: 3, name: "Scientific Calculator", price: "$20", campus: "Main Campus", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop", condition: "Good" },
    { id: 4, name: "Desk Lamp with USB Port", price: "$15", campus: "North Campus", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop", condition: "Excellent" },
    { id: 5, name: "Wireless Mouse", price: "$18", campus: "East Campus", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop", condition: "Like New" },
    { id: 6, name: "USB-C Hub Adapter", price: "$25", campus: "Main Campus", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop", condition: "Excellent" },
  ],
  clothing: [
    { id: 1, name: "University Hoodie - Size M", price: "$25", campus: "Main Campus", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop", condition: "Good" },
    { id: 2, name: "Lab Coat - Size L", price: "$12", campus: "South Campus", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop", condition: "Like New" },
    { id: 3, name: "Campus T-Shirt Set (3 pcs)", price: "$20", campus: "North Campus", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop", condition: "Good" },
    { id: 4, name: "Varsity Jacket - Size S", price: "$35", campus: "Bellville Campus", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop", condition: "Excellent" },
    { id: 5, name: "Sports Tracksuit", price: "$30", campus: "Main Campus", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop", condition: "Good" },
    { id: 6, name: "Formal Blazer - Size M", price: "$40", campus: "East Campus", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop", condition: "Like New" },
  ],
  stationery: [
    { id: 1, name: "Notebook Set (5 pcs)", price: "$8", campus: "Main Campus", image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=300&fit=crop", condition: "New" },
    { id: 2, name: "Desk Organizer Set", price: "$10", campus: "South Campus", image: "https://images.unsplash.com/photo-1531835207117-3e7517cca788?w=400&h=300&fit=crop", condition: "Like New" },
    { id: 3, name: "Pen & Pencil Set", price: "$5", campus: "North Campus", image: "https://images.unsplash.com/photo-1606571992268-60674baacb75?w=400&h=300&fit=crop", condition: "New" },
    { id: 4, name: "Art Supplies Kit", price: "$22", campus: "East Campus", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop", condition: "Good" },
    { id: 5, name: "Highlighter Set (12 colors)", price: "$6", campus: "Main Campus", image: "https://images.unsplash.com/photo-1587467512961-120760940315?w=400&h=300&fit=crop", condition: "New" },
    { id: 6, name: "Binder & Folder Set", price: "$12", campus: "Bellville Campus", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop", condition: "Like New" },
  ],
};

const categoryInfo = {
  textbooks: { name: "Textbooks", description: "Find all your course materials and study guides" },
  electronics: { name: "Electronics", description: "Laptops, calculators, and tech accessories" },
  clothing: { name: "Clothing", description: "University apparel and everyday wear" },
  stationery: { name: "Stationery", description: "Notebooks, pens, and office supplies" },
};

export function CategoryProductsPage() {
  const { category } = useParams<{ category: string }>();
  const products = categoryProducts[category as keyof typeof categoryProducts] || [];
  const info = categoryInfo[category as keyof typeof categoryInfo] || { name: "Category", description: "" };

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

        <div className="mb-8">
          <h1 className="mb-2">{info.name}</h1>
          <p className="text-muted-foreground">{info.description}</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">{products.length} items found</p>
          <div className="flex gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-background/95">
                <SelectValue placeholder="Filter by Campus" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Campuses</SelectItem>
                <SelectItem value="main">Main Campus</SelectItem>
                <SelectItem value="north">North Campus</SelectItem>
                <SelectItem value="south">South Campus</SelectItem>
                <SelectItem value="east">East Campus</SelectItem>
                <SelectItem value="bellville">Bellville Campus</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px] bg-background/95">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="condition">Best Condition</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer group bg-background/95 backdrop-blur-sm border-primary/20"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Badge className="absolute top-2 left-2" variant="secondary">
                  {item.condition}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="line-clamp-2 mb-2 min-h-[3rem]">{item.name}</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{item.campus}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <span className="text-primary">{item.price}</span>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No items found in this category</p>
            <Button asChild>
              <Link to="/">Browse All Categories</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
