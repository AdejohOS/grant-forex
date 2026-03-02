import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
export function About() {
  return (
    <div className="bg-[#0b3c5d] w-full">
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Portrait Placeholder */}
            <div className="bg-linear-to-br from-accent/20 to-accent/5 aspect-square rounded-lg overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full ">
                <Image src="/images/1.jpg" alt="Grant Forex Portrait" fill />
              </div>
            </div>

            {/* Right - Authority Bio */}
            <div className="space-y-6">
              <div>
                <h3 className="text-5xl font-bold mb-4 serif text-gray-50">
                  Grant Forex Philosophy
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  With over 5 years of specialized experience in Smart Money
                  Concepts and ICT frameworks, We are dedicated to teaching
                  disciplined, structure-based trading to serious traders
                  worldwide.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-[#d4a373]" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Institutional Approach
                    </h4>
                    <p className="text-accent text-sm">
                      Trading strategies modeled after professional institutions
                      and smart money mechanics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-primary" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Structured Execution
                    </h4>
                    <p className="text-accent text-sm">
                      Clear entry/exit models based on market structure and
                      price action analysis.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-primary" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Risk Management First
                    </h4>
                    <p className="text-accent text-sm">
                      Capital preservation through proper position sizing and
                      disciplined stop placement.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="xxl"
                className="bg-primary text-accent-foreground px-6 py-3 rounded-full font-semibold hover:bg-[#c08c5a] transition mt-6"
              >
                <ArrowRight className="size-4" /> Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
