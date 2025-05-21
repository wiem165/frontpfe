"use client";
import UploadScan from "@/components/UploadScan";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Bone,
  FolderPlus,
  ImagePlus,
  LogOut,
  Settings,
  Upload,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container flex h-16 items-center px-4 mx-auto">
          <div className="flex items-center space-x-2">
            <Bone className="h-6 w-6" />
            <span className="text-xl font-bold">FractureFinder</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container px-4 py-6 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-3 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Patient Folders</CardTitle>
                <CardDescription>Organize your scans by patient</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="outline">
                  <FolderPlus className="mr-2 h-4 w-4" />
                  New Folder
                </Button>
                <Separator />
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Patient A
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Patient B
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Patient C
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9 space-y-6">
            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Upload New Scan</CardTitle>
                <CardDescription>
                  Upload X-ray images for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Patient</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select patient" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">Patient A</SelectItem>
                        <SelectItem value="b">Patient B</SelectItem>
                        <SelectItem value="c">Patient C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Scan Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xray">X-Ray</SelectItem>
                        <SelectItem value="ct">CT Scan</SelectItem>
                        <SelectItem value="mri">MRI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <UploadScan />
                </div>
              </CardContent>
            </Card>

            {/* Recent Scans */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Scans</CardTitle>
                <CardDescription>
                  View and manage your recent uploads
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Example scan cards */}
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-lg mb-2" />
                        <div className="space-y-1">
                          <p className="font-medium">Scan #{i}</p>
                          <p className="text-sm text-muted-foreground">
                            Patient {String.fromCharCode(64 + i)}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}