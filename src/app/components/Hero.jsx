import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 max-w-3xl mx-auto">
          Sell what you don't need, find what you do.
        </h1>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your campus marketplace for textbooks, electronics, clothing, and more.
          Buy and sell safely within your university community.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/sell">
              Start Selling
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/category/textbooks">Browse Items</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
