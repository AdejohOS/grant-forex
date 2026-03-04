"use client";

import { motion } from "framer-motion";

export function Pricing() {
  const plans = [
    {
      title: "Online Mentorship",
      price: "₦200,000",
      description: "Learn from anywhere with structured online mentorship.",
      features: [
        "Smart Money Concepts training",
        "ICT trading framework",
        "Weekly market breakdowns",
        "Community access",
        "Trade analysis discussions",
      ],
      popular: false,
    },
    {
      title: "Physical Classroom",
      price: "₦250,000",
      description: "In-person learning with hands-on trading sessions.",
      features: [
        "Live classroom training",
        "Direct mentor interaction",
        "Hands-on chart analysis",
        "Practical trading sessions",
        "Structured learning environment",
      ],
      popular: true,
    },
    {
      title: "One-on-One Mentorship",
      price: "₦300,000",
      description: "Private mentorship tailored to your trading goals.",
      features: [
        "Personal mentorship sessions",
        "Custom trading strategy guidance",
        "Trade review feedback",
        "Risk management coaching",
        "Direct mentor access",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-4 bg-linear-to-b from-[#F8FAFC] to-[#EEF2F7]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="h-0.5 w-16 bg-[#D4A373] mx-auto mb-6 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3C5D]">
            Mentorship <span className="text-[#D4A373]">Programs</span>
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Choose the mentorship format that best fits your trading journey.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border bg-white transition-all duration-300
              ${
                plan.popular
                  ? "border-[#D4A373] shadow-xl scale-105"
                  : "border-slate-200 shadow-md hover:shadow-lg"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4A373] text-white text-sm px-4 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0B3C5D] mb-2">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="text-3xl font-bold text-[#D4A373] mb-6">
                {plan.price}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-slate-600 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4A373]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300
                ${
                  plan.popular
                    ? "bg-[#0B3C5D] text-white hover:bg-[#1E5F8A]"
                    : "bg-slate-100 text-[#0B3C5D] hover:bg-slate-200"
                }`}
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-slate-500 mt-12">
          Limited seats available for each mentorship batch.
        </p>
      </div>
    </section>
  );
}
