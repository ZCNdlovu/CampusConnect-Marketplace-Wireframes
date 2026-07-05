import { MapPin, Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const featuredItems = [
  {
    id: 1,
    name: "Calculus Textbook - 12th Edition",
    price: "$45",
    campus: "Main Campus",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    condition: "Like New",
  },
  {
    id: 2,
    name: "MacBook Pro 13-inch (2020)",
    price: "$750",
    campus: "North Campus",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    condition: "Good",
  },
  {
    id: 3,
    name: "Graphing Calculator TI-84",
    price: "$60",
    campus: "South Campus",
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400&h=300&fit=crop",
    condition: "Excellent",
  },
  {
    id: 4,
    name: "University Hoodie - Size M",
    price: "$25",
    campus: "Main Campus",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
    condition: "Good",
  },
  {
    id: 5,
    name: "Organic Chemistry Study Guide",
    price: "$30",
    campus: "East Campus",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop",
    condition: "Like New",
  },
  {
    id: 6,
    name: "Desk Lamp with USB Port",
    price: "$15",
    campus: "North Campus",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
    condition: "Excellent",
  },
  {
    id: 7,
    name: "Scientific Calculator",
    price: "$20",
    campus: "South Campus",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
    condition: "Good",
  },
  {
    id: 8,
    name: "Backpack - Waterproof",
    price: "$35",
    campus: "Main Campus",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    condition: "Like New",
  },
];

export function FeaturedItems() {
  return (
    <section className="py-12 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2>Featured Items</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
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
      </div>
    </section>
  );
}
