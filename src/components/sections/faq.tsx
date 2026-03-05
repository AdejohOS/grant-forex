"use client";

import { ChevronDown, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this beginner friendly?",
      answer:
        "Yes, we accept traders of all experience levels. However, this is not a get-rich-quick community. We focus on building a solid foundation in market structure analysis, risk management, and trading psychology. Beginners should expect to dedicate time to learning and practice.",
    },
    {
      question: "Do you teach ICT concepts?",
      answer:
        "Absolutely. ICT (Internal Chain Trading) and Smart Money Concepts form the foundation of our methodology. We break down market structure, order blocks, fair value gaps, and liquidity patterns in detail through our analysis and educational discussions.",
    },
    {
      question: "Is this signal-based?",
      answer:
        "No. We do not provide trading signals or specific buy/sell recommendations. Instead, we teach you how to identify high-probability setups yourself using market structure analysis. This approach builds your skills and creates sustainable trading success.",
    },
    {
      question: "Is there mentorship?",
      answer:
        "We foster a community-based learning environment where experienced traders discuss their analysis openly. You can learn from others, ask questions, and develop your own trading style. The community aspect is invaluable for growth.",
    },
    {
      question: "What markets do you trade?",
      answer:
        "Our primary focus is forex trading (major and minor currency pairs) using Smart Money Concepts and ICT frameworks. However, these principles can also apply to crypto, commodities, and indices.",
    },
    {
      question: "How much capital do I need to start?",
      answer:
        "There is no minimum. Our methodology teaches proper risk management and position sizing. You can start with any capital amount and scale responsibly as your account grows. We emphasize consistent, disciplined trading over large quick gains.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#F8FAFC] to-[#EEF2F7]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="h-0.5 w-16 bg-[#D4A373] mx-auto mb-6 rounded-full" />
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] leading-tight">
            Frequently Asked <span className="text-[#D4A373]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-[#D4A373]/40 transition-all duration-300">
                {" "}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4A373] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-[#0B3C5D] rounded-2xl p-10 text-center text-white shadow-lg">
          {" "}
          <p className="mb-6 text-lg text-slate-200">
            Still have questions? Join the community and speak with active
            traders.
          </p>
          <Link
            href="https://t.me/Grant_fx_trading_community"
            target="_blank"
            className="inline-block mb-4 cursor-pointer"
          >
            <Button
              size="xxl"
              className="px-8 py-3 bg-[#D4A373] text-white rounded-full font-semibold hover:bg-[#c08c5a] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Plus className="mr-2 inline-block" /> Join the Community
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
