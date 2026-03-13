import type { Metadata } from "next";
import { Playfair, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grantforex.com"),
  title: "Grant Forex Academy | Smart Money Concepts Forex Mentorship",
  description:
    "Grant Forex Academy (GFX) provides structured forex mentorship built on Smart Money Concepts (SMC) and ICT trading models. Learn market structure, liquidity concepts, and disciplined risk management.",

  keywords: [
    "forex mentorship",
    "smart money concepts forex",
    "ICT trading strategy",
    "learn forex trading",
    "forex academy",
    "SMC trading",
  ],
  alternates: {
    canonical: "https://www.grantforex.com",
  },

  openGraph: {
    title: "Grant Forex Academy",
    description:
      "Structured forex mentorship focused on Smart Money Concepts and institutional trading models.",
    url: "https://www.grantforex.com",
    siteName: "Grant Forex Academy",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `antialiased font-sans`,
          playfair.variable,
          figtree.variable,
        )}
      >
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
