"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Professional Mentors",
    description:
      "Learn from traders with 10+ years of professional trading experience in forex markets.",
  },
  {
    title: "Real Classroom Training",
    description:
      "Small group sessions with hands-on trading practice and real market analysis.",
  },
  {
    title: "Proven Strategies",
    description:
      "Master tested forex strategies that consistently generate positive returns.",
  },
  {
    title: "Personalized Guidance",
    description:
      "One-on-one mentorship tailored to your trading style and goals.",
  },
  {
    title: "24/7 Community Support",
    description:
      "Join our exclusive Telegram community for ongoing support and market updates.",
  },
  {
    title: "Real Account Management",
    description:
      "Learn to manage real trading accounts with proper risk management protocols.",
  },
];

export function WhyChooseUsSection() {
  return (
    <div className="bg-linear-to-br from-[#0B3C5D] via-[#0e466a] to-[#082c44] w-full">
      <section id="why-choose-us" className="py-20 px-4 ">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Why Choose{" "}
              <span className="text-[#D4A373]">Grant Forex Academy</span>
            </h2>
            <div className="h-0.5 w-20 bg-[#D4A373] mx-auto rounded-full mt-6" />
            <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              We provide structured forex trading mentorship focused on
              discipline, institutional strategy, and real market execution.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#D4A373]/40 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A373] shrink-0 mt-1 group-hover:scale-110 group-hover:text-white transition-all duration-300" />{" "}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-white text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
