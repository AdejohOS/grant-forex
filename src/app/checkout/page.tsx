"use client";

import { useSearchParams } from "next/navigation";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

export default function CheckoutPage() {
  const params = useSearchParams();

  const [loading, setLoading] = useState(false);

  const plan = params.get("plan") || "online";
  const name = params.get("name") || "";
  const email = params.get("email") || "";
  const phone = params.get("phone") || "";

  const plans = {
    online: {
      title: "Online Mentorship",
      price: 200000,
    },
    physical: {
      title: "Physical Classroom Training",
      price: 250000,
    },
    private: {
      title: "One-on-One Mentorship",
      price: 300000,
    },
  };

  const selectedPlan = plans[plan as keyof typeof plans];

  const handlePayment = async () => {
    setLoading(true);

    const res = await fetch("/api/kora/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: selectedPlan.price,
        name,
        phone,
        plan: selectedPlan.title,
      }),
    });

    if (!res.ok) {
      toast.error("Payment initialization failed");
      setLoading(false);
      return;
    }

    const data = await res.json();

    if (!data?.data?.checkout_url) {
      toast.error("Payment initialization failed", { position: "top-center" });

      setLoading(false);
      return;
    }

    window.location.href = data.data.checkout_url;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-[#0B3C5D] mb-4">
          Secure Checkout
        </h1>

        <p className="text-gray-500 mb-8">
          Complete your mentorship enrollment
        </p>

        {/* Plan Summary */}
        <div className="bg-slate-50 rounded-xl p-6 mb-8">
          <p className="text-sm text-gray-500 mb-2">Selected Plan</p>

          <h2 className="text-xl font-semibold text-[#0B3C5D]">
            {selectedPlan.title}
          </h2>

          <p className="text-3xl font-bold text-[#D4A373] mt-2">
            ₦{selectedPlan.price.toLocaleString()}
          </p>
        </div>

        {/* User Info */}
        <div className="text-left text-sm text-gray-600 mb-8 space-y-1">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
        </div>

        {/* Paystack Button */}
        <Button
          size="xxl"
          onClick={handlePayment}
          className="w-full bg-[#0B3C5D] text-white py-3 rounded-full"
          disabled={loading}
        >
          {loading ? "Redirecting..." : "Proceed to Payment"}
          {loading ? (
            <Loader2 className="animate-spin size-4" />
          ) : (
            <ArrowRight />
          )}
        </Button>

        {/* Trust message */}
        <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1 mt-2">
          Secure encrypted payment powered by{" "}
          <Link
            href="https://www.korahq.com/"
            target="_blank"
            className="text-blue-500"
          >
            Kora
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
