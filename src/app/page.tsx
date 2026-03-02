import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { About } from "@/components/sections/about";

import FAQ from "@/components/sections/faq";
import { Community } from "@/components/sections/community";
import { FloatingCTA } from "@/components/sections/floating-cta";
import Hero from "@/components/sections/hero";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUsSection />

      <Community />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
