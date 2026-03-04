"use client";
import { FaTelegram } from "react-icons/fa6";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Community() {
  const benefits = [
    {
      icon: "📊",
      title: "Daily Market Bias",
      desc: "Direction and key levels for major pairs",
    },
    {
      icon: "⚡",
      title: "Intraday Execution Insights",
      desc: "Real-time trading opportunities and setups",
    },
    {
      icon: "📈",
      title: "Weekly Breakdowns",
      desc: "Comprehensive market structure analysis",
    },
    {
      icon: "💬",
      title: "Community Commentary",
      desc: "Active discussion and trader interaction",
    },
  ];

  return (
    <section
      className="py-24 px-4 bg-linear-to-b from-[#F8FAFC] to-[#EEF2F7] sm:px-6 lg:px-8"
      id="community"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] leading-tight">
            Start with the{" "}
            <span className="text-[#D4A373]">Free Community</span>
          </h3>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of traders inside our active Telegram community for
            daily bias, execution insights, and structured market breakdowns.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#D4A373]/15 text-[#D4A373] text-2xl">
                {benefit.icon}
              </div>
              <h4 className="font-bold mb-2">{benefit.title}</h4>
              <p className="text-foreground/60 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="text-sm text-slate-500 mb-6">
            🔥 300+ Active Traders Inside
          </p>
          <Link
            href="https://t.me/Grant_fx_trading_community"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="xxl"
              className="bg-[#D4A373] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-[#c08c5a] hover:shadow-xl transition-all duration-300"
            >
              <FaTelegram className="mr-2" />
              Join Grant Forex Telegram
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
