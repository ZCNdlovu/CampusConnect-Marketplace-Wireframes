import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { ShoppingBag } from "lucide-react";
import { ZoomControls } from "../components/ZoomControls";

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm flex items-center justify-center p-4">
      <ZoomControls />
      <Card className="w-full max-w-md bg-background/95 backdrop-blur-sm">
        <CardHeader className="text-center border-b border-primary/20">
          <div className="flex justify-center mb-4">
            <div className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg shadow-primary/20">
              <ShoppingBag className="h-8 w-8" />
            </div>
          </div>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to CampusConnect Marketplace</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">University Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@mycput.ac.za"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Sign up for a new account
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
