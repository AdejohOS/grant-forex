"use client";

import { useSearchParams } from "next/navigation";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CheckoutPage() {
  const params = useSearchParams();

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

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: selectedPlan.price * 100, // Paystack uses kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    metadata: {
      name,
      phone,
      plan: selectedPlan.title,
    },
  };

  const onSuccess = () => {
    window.location.href = "/success";
  };

  const onClose = () => {
    console.log("Payment closed");
  };

  const handlePayment = async () => {
    const res = await fetch("/api/paystack/initialize", {
      method: "POST",
      body: JSON.stringify({
        email,
        amount: selectedPlan.price,
        name,
        phone,
        plan: selectedPlan.title,
      }),
    });

    const data = await res.json();

    window.location.href = data.data.authorization_url;
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
        >
          Pay Now <ArrowRight />
        </Button>

        {/* Trust message */}
        <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
          Secure payment powered by{" "}
          <span className="relative aspect-video">
            <Image
              src="/images/Paystack.png"
              alt="Paystack"
              width={100}
              height={100}
            />
          </span>
        </p>
      </motion.div>
    </div>
  );
}
