"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const phases = [
  {
    title: "Foundation",
    desc: "Understanding market structure, liquidity behavior, and how institutional order flow moves price.",
  },
  {
    title: "Smart Money Concepts",
    desc: "Mastering order blocks, fair value gaps, liquidity sweeps, and multi-timeframe bias alignment.",
  },
  {
    title: "Execution & Risk Management",
    desc: "Precise entry models, stop placement logic, position sizing, and maintaining consistent risk-to-reward discipline.",
  },
  {
    title: "Live Market Application",
    desc: "Real-time breakdowns, weekly reviews, and guided refinement inside an active trading environment.",
  },
];

export function MentorshipProgram() {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="h-0.5 w-16 bg-[#D4A373] mx-auto mb-6 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] leading-tight">
            The <span className="text-[#D4A373]">Mentorship Framework</span>
          </h2>

          <p className="text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            A structured progression designed to transform you from a reactive
            trader into a disciplined, structure-driven market participant.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex items-start gap-8"
              >
                {/* Number */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#D4A373]/15 text-[#D4A373] font-bold flex items-center justify-center z-10">
                  {index + 1}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3C5D] mb-3">
                    Phase {index + 1} — {phase.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <Button
            size="xxl"
            className="bg-[#0B3C5D] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#1E5F8A] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ArrowRight /> Apply for Mentorship
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
