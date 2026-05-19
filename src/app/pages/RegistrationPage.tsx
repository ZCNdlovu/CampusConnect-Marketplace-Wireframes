import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowLeft, UserCircle, ShieldCheck } from "lucide-react";
import { ZoomControls } from "../components/ZoomControls";

export function RegistrationPage() {
  const [role, setRole] = useState<"student" | "admin">("student");

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm flex items-center justify-center p-4">
      <ZoomControls />
      <div className="w-full max-w-2xl">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <Card className="bg-background/95 backdrop-blur-sm">
          <CardHeader className="text-center border-b border-primary/20">
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>Join the CampusConnect Marketplace community</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={role} onValueChange={(value) => setRole(value as "student" | "admin")} className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <UserCircle className="h-4 w-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Admin
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4 mt-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-name">Full Name</Label>
                    <Input id="student-name" placeholder="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student-email">University Email Address</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="john.doe@mycput.ac.za"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student-number">Student Number</Label>
                    <Input id="student-number" placeholder="2024001234" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="campus">Primary Campus</Label>
                    <Select>
                      <SelectTrigger id="campus" className="bg-input-background">
                        <SelectValue placeholder="Select your campus" />
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

                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input id="student-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student-confirm-password">Confirm Password</Label>
                    <Input id="student-confirm-password" type="password" />
                  </div>

                  <Button type="submit" className="w-full">
                    Register as Student
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="admin" className="space-y-4 mt-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-name">Full Name</Label>
                    <Input id="admin-name" placeholder="Jane Smith" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-email">University Email Address</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="jane.smith@mycput.ac.za"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="staff-id">Staff/Employee ID</Label>
                    <Input id="staff-id" placeholder="EMP-2024-001" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department/Authorization Code</Label>
                    <Input
                      id="department"
                      placeholder="Enter your department code"
                      type="password"
                    />
                    <p className="text-xs text-muted-foreground">
                      Contact your department head for the authorization code
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <Input id="admin-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-confirm-password">Confirm Password</Label>
                    <Input id="admin-confirm-password" type="password" />
                  </div>

                  <Button type="submit" className="w-full">
                    Register as Admin
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
