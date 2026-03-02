"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

export function About() {
  return (
    <div className="bg-linear-to-br from-[#0B3C5D] via-[#0e466a] to-[#082c44] w-full">
      <motion.div
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Portrait Placeholder */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 border-4 border-[#D4A373]/40 rounded-2xl z-10 pointer-events-none" />
              <Image
                src="/images/1.jpg"
                alt="Grant Forex Portrait"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Authority Bio */}
            <div className="space-y-6">
              <div>
                <div className="h-0.5 w-16 bg-[#D4A373] mb-6 rounded-full" />
                <h3 className="text-4xl sm:text-5xl font-bold mb-4 text-white leading-tight">
                  The <span className="text-[#D4A373]">Grant Forex</span>{" "}
                  Philosophy
                </h3>
                <p className="text-slate-200 text-lg leading-relaxed">
                  With over 5 years of specialized experience in Smart Money
                  Concepts and ICT frameworks, We are dedicated to teaching
                  disciplined, structure-based trading to serious traders
                  worldwide.
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-1 bg-[#d4a373]" />
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      Institutional Approach
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Trading strategies modeled after professional institutions
                      and smart money mechanics.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-1 bg-primary" />
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      Structured Execution
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Clear entry/exit models based on market structure and
                      price action analysis.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-1 bg-primary" />
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      Risk Management First
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Capital preservation through proper position sizing and
                      disciplined stop placement.
                    </p>
                  </div>
                </motion.div>
              </div>

              <Button
                size="xxl"
                className="bg-[#D4A373] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c08c5a] shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
              >
                <ArrowRight className="size-4" /> Learn More
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
