"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-background/50 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white overflow-hidden rounded-full flex items-center justify-center">
              <Image
                src="/images/grant.png"
                alt="Grant Forex Logo"
                width={100}
                height={100}
              />
            </div>
            <span className="text-lg font-semibold text-foreground hidden sm:inline">
              Grant Forex
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("methodology")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Methodology
            </button>
            <button
              onClick={() => scrollToSection("breakdown")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Trade Analysis
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("community")}
            className="px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Join Community
          </button>
        </div>
      </div>
    </nav>
  );
}
