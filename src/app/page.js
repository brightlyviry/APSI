"use client";
import React from "react";
import HeroSection from "@/components/homepage/HeroSection";
import ValueCards from "@/components/homepage/ValueCards";
import AboutSection from "@/components/homepage/AboutSection";
import BlogSection from "@/components/homepage/BlogSection";
import PustakaSection from "@/components/homepage/PustakaSection";
import ContactSection from "@/components/homepage/ContactSection";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <HeroSection />
      <ValueCards />
      <AboutSection />
      <BlogSection />
      <PustakaSection />
      <ContactSection />
    </div>
  );
}
