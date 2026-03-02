import type { Metadata } from "next";
import { Playfair, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grant Forex Academy | Professional Forex Mentorship & SMC Training",
  description:
    "Grant Forex Academy (GFX) offers structured forex mentorship built on Smart Money Concepts (SMC) and ICT trading models. Join our professional trading academy for disciplined market execution, risk management, and live classroom training.",
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
        {children}
      </body>
    </html>
  );
}
