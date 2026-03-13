"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ApplyPage() {
  const params = useSearchParams();
  const router = useRouter();

  const plan = params.get("plan") || "online";

  const plans = {
    online: {
      title: "Online Mentorship",
      price: 200000,
      description:
        "Learn Smart Money Concepts and institutional trading frameworks through structured mentorship and live market breakdowns.",
      features: [
        "Smart Money Concepts (SMC)",
        "ICT Trading Framework",
        "Market Structure & Liquidity",
        "Risk Management Techniques",
        "Entry Models & Trade Execution",
        "Weekly Market Breakdown Sessions",
      ],
    },
    physical: {
      title: "Physical Classroom Training",
      price: 250000,
      description:
        "Attend in-person training sessions with hands-on trading education, practical chart analysis, and guided mentorship.",
      features: [
        "Live Classroom Training",
        "Free wifi and signals",
        "Structured Trading Curriculum",
        "Direct Mentor Interaction",
        "Risk Management Training",
        "Trading Psychology Development",
      ],
    },
    private: {
      title: "One-on-One Mentorship",
      price: 300000,
      description:
        "Private mentorship designed for traders who want personalized guidance, deeper strategy development, and faster progress.",
      features: [
        "Private Mentorship Sessions",
        "Free wifi and signals",
        "Direct Strategy Development",
        "Advanced Trade Execution",
        "Account Growth Guidance",
        "Dedicated Mentor Support",
      ],
    },
  };

  const selectedPlan = plans[plan as keyof typeof plans];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!accepted) return;

    router.push(
      `/checkout?plan=${plan}&name=${encodeURIComponent(
        name,
      )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`,
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-28 px-4">
      <div className="max-w-4xl mx-auto">
        {/* PLAN INTRO */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-3">
            {selectedPlan.title}
          </h1>

          <p className="text-2xl font-semibold text-[#D4A373] mb-4">
            ₦{selectedPlan.price.toLocaleString()}
          </p>

          <p className="text-gray-600 max-w-2xl mx-auto">
            {selectedPlan.description}
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {selectedPlan.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <span className="text-[#D4A373] text-xl">
                <Check />
              </span>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* COMMITMENT NOTE */}
        <div className="bg-white p-6 rounded-xl shadow mb-14 text-center">
          <p className="text-gray-700">
            This mentorship program is designed for serious traders committed to
            mastering market structure, risk management, and disciplined
            trading.
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Mentorship slots are limited to maintain quality guidance.
          </p>
        </div>

        {/* APPLICATION FORM */}
        <div className="bg-white p-8 rounded-xl shadow max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B3C5D] mb-6 text-center">
            Mentorship Application
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border px-4 py-3 rounded-full"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border px-4 py-3 rounded-full"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="tel"
              placeholder="WhatsApp Phone Number"
              required
              className="w-full border px-4 py-3 rounded-full"
              onChange={(e) => setPhone(e.target.value)}
            />
            <p className="text-xs text-center text-gray-500">
              Secure encrypted payment powered by{" "}
              <Link
                href="https://www.korahq.com/"
                target="_blank"
                className="text-blue-500"
              >
                Kora
              </Link>
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1"
              />

              <p>
                I confirm that Grant Forex Academy provides educational
                mentorship only. I understand that all payments are final and
                non-refundable once enrollment is completed.
              </p>
            </div>

            <Button
              size="xxl"
              type="submit"
              disabled={!accepted}
              className="w-full bg-[#0B3C5D] text-white py-3 rounded-full hover:bg-[#1E5F8A] transition"
            >
              Continue to Payment <ArrowRight />
            </Button>

            <div className="relative flex justify-center ">
              <Image
                src="/images/pay.png"
                alt="secured secured channels"
                height={150}
                width={150}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
