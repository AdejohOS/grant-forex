"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle, RotateCw } from "lucide-react";
import Link from "next/link";

export default function PaymentErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <AlertCircle className="mx-auto text-red-500 mb-4" size={60} />
        </motion.div>

        <h1 className="text-3xl font-bold text-[#0B3C5D] mb-4">
          Payment Failed
        </h1>

        <p className="text-gray-600 mb-6">
          We couldn't verify your payment. This can happen if the transaction
          was cancelled or declined by the bank.
        </p>

        {/* Retry */}
        <Link href="/pricing">
          <Button
            size="xxl"
            className="w-full bg-[#0B3C5D] text-white py-3 rounded-full font-semibold hover:bg-[#1E5F8A] transition mb-4"
          >
            Try Payment Again <RotateCw />
          </Button>
        </Link>

        {/* Support */}
        <a
          href="https://wa.me/2349134598884?text=Hello%20I%20had%20an%20issue%20with%20my%20Grant%20Forex%20mentorship%20payment"
          className="inline-block text-sm text-green-600 hover:underline"
        >
          Contact Support on WhatsApp
        </a>
      </motion.div>
    </div>
  );
}
