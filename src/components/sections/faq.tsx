"use client";

import Link from "next/link";
import { useState } from "react";

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
        "Our primary focus is cryptocurrency trading (Bitcoin, Ethereum, altcoins) on daily and 4-hour timeframes. However, the principles of market structure and ICT trading apply to forex, commodities, and equities as well.",
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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left"
            >
              <div className="bg-background border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <div
                    className={`text-2xl text-accent flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  >
                    ▼
                  </div>
                </div>

                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-foreground/5 border border-border rounded-2xl p-8 text-center">
          <p className="text-foreground mb-4">
            Still have questions? Let's discuss in the community.
          </p>
          <Link
            href="https://t.me/milestraderchat"
            target="_blank"
            className="inline-block mb-4 cursor-pointer"
          >
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all duration-300">
              Join the Community
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
