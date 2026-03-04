"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-14 h-14 relative overflow-hidden flex items-center justify-center">
              {" "}
              <Image
                src="/images/grant_no_bg.png"
                alt="Grant Forex Logo"
                fill
              />
            </div>
            <span className="text-2xl font-semibold text-foreground hidden sm:inline serif">
              Grant Forex
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-slate-600 hover:text-[#0B3C5D] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#0B3C5D] after:transition-all hover:after:w-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("breakdown")}
              className="text-sm font-medium text-slate-600 hover:text-[#0B3C5D] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#0B3C5D] after:transition-all hover:after:w-full"
            >
              Trade Analysis
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-sm font-medium text-slate-600 hover:text-[#0B3C5D] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#0B3C5D] after:transition-all hover:after:w-full"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-slate-600 hover:text-[#0B3C5D] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#0B3C5D] after:transition-all hover:after:w-full"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <Button
            variant="tlight"
            size="xxl"
            onClick={() => scrollToSection("community")}
            className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold shadow-md hover:bg-[#c7955f] hover:shadow-lg transition-all duration-300"
          >
            <Plus className="mr-2" />
            Join Community
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
