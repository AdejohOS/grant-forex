import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { About } from "@/components/sections/about";

import FAQ from "@/components/sections/faq";
import { Community } from "@/components/sections/community";
import { FloatingCTA } from "@/components/sections/floating-cta";
import Hero from "@/components/sections/hero";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";

import { MentorshipProgram } from "@/components/sections/mantorship-program";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUsSection />

      <MentorshipProgram />
      <Pricing />

      <Community />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
