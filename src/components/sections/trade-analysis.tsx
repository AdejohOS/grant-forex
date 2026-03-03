"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function TradeAnalysis() {
  return (
    <section
      id="breakdown"
      className="py-24 px-4 bg-linear-to-b from-[#F8FAFC] to-[#EEF2F7]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3C5D]">
            Trade <span className="text-[#D4A373]">Analysis</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            A structured breakdown using Smart Money Concepts and ICT execution
            models.
          </p>
        </motion.div>

        {/* Analysis Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden"
        >
          {/* Chart Image */}
          <div className="relative w-full h-100">
            <Image
              src="/images/analysis.png"
              alt="EURUSD Trade Analysis"
              fill
              className="object-cover"
            />
          </div>

          {/* Structured Breakdown */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="font-semibold text-[#0B3C5D] mb-1">Pair</h4>
                <p className="text-slate-600">EUR/USD</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0B3C5D] mb-1">
                  Higher Timeframe Bias
                </h4>
                <p className="text-slate-600">Bullish Market Structure</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0B3C5D] mb-1">
                  Entry Model
                </h4>
                <p className="text-slate-600">
                  Liquidity Sweep + Fair Value Gap (FVG)
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0B3C5D] mb-1">
                  Risk : Reward
                </h4>
                <p className="text-[#D4A373] font-semibold text-lg">1 : 3</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-600 leading-relaxed">
                Price swept prior liquidity before delivering bullish
                displacement. Entry was taken at the equilibrium of the fair
                value gap with stop placed below the protected low. Target
                aligned with external liquidity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
