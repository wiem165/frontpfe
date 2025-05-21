"use client";
import UploadScan from "@/components/UploadScan";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bone, Brain, Microscope } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import bone from "@/assets/people.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex h-16 items-center px-4 mx-auto">
          <div className="flex items-center space-x-2">
            <Bone className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">FractureFinder</span>
            <span className="text-sm text-gray-500">AI-enhanced fracture diagnosis from X-rays</span>
          </div>
          <div className="ml-auto">
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-800">
              AI-enhanced fracture diagnosis from X-rays
              </h1>
              <p className="text-xl text-gray-600 max-w-[600px] mx-auto lg:mx-0">
                Enhance your diagnostic accuracy with advanced AI technology designed specifically for radiologists.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                
                  
              </div>
              <UploadScan/>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* X-ray Image with Analysis Overlay */}
                      <div className="relative w-full h-full">
                        <Image
                          src={bone}
                          alt="X-ray analysis with AI detection"
                          fill
                          className="object-cover rounded-lg"
                        />
                        {/* AI Analysis Overlay */}
                        <div className="absolute inset-0 bg-blue-500/10">
                          {/* Detection Box */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-400 rounded-lg animate-pulse">
                            <div className="absolute -top-8 left-0 bg-blue-400 text-white text-xs px-2 py-1 rounded">
                              Analyzing...
                            </div>
                          </div>
                          {/* Measurement Lines */}
                          <div className="absolute top-1/4 left-4 right-4 flex justify-between items-center">
                            <div className="h-px w-full bg-blue-500/50 border-dashed"></div>
                            <span className="text-xs text-white bg-blue-500/75 px-1 rounded ml-2">32mm</span>
                          </div>
                          {/* Analysis Points */}
                          <div className="absolute bottom-4 right-4 space-y-2">
                            <div className="flex items-center space-x-2 text-xs text-white bg-blue-500/75 px-2 py-1 rounded">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              <span>Density: Normal</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-white bg-blue-500/75 px-2 py-1 rounded">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              <span>Structure: Intact</span>
                            </div>
                          </div>
                        </div>
                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-scan"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
         
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container flex h-16 items-center px-4 mx-auto">
          <p className="text-sm text-gray-500">
            © 2025 FractureFinder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}