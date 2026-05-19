import { Book, Laptop, Shirt, Pencil } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent } from "./ui/card";

const categories = [
  {
    name: "Textbooks",
    slug: "textbooks",
    icon: Book,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Electronics",
    slug: "electronics",
    icon: Laptop,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Clothing",
    slug: "clothing",
    icon: Shirt,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Stationery",
    slug: "stationery",
    icon: Pencil,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function Categories() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} to={`/category/${category.slug}`}>
                <Card className="hover:shadow-md hover:shadow-primary/20 transition-all cursor-pointer border-primary/20">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className={`${category.bgColor} p-4 rounded-full mb-3`}>
                      <Icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <h3>{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
