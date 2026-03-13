"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
  const params = useSearchParams();
  const router = useRouter();
  const reference = params.get("reference");

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    if (!reference) {
      setStatus("error");
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await fetch("/api/kora/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reference }),
        });

        const data = await res.json();

        if (data?.data?.status === "success") {
          setStatus("success");
        } else {
          router.push("/error");
        }
      } catch (error) {
        router.push("/error");
      }
    };

    verifyPayment();
  }, [reference, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600"
        >
          Verifying payment...
        </motion.p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            Payment Verification Failed
          </h1>

          <p className="text-gray-600">
            We couldn't confirm your payment. Please contact support.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <CheckCircle className="mx-auto text-green-500 mb-4" size={60} />
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#0B3C5D] mb-4">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mb-2">
          Welcome to Grant Forex Academy. Your mentorship enrollment has been
          confirmed.
        </p>

        <p className="text-gray-600 text-sm mb-6">
          Your mentorship batch coordinator will contact you shortly.
        </p>

        {/* Next Steps */}
        <div className="bg-slate-50 rounded-lg p-4 text-sm text-gray-600 mb-6 text-left">
          <p className="font-semibold mb-2 text-[#0B3C5D]">Next Steps</p>
          <p>1. Join the mentorship WhatsApp group.</p>
          <p>2. Introduce yourself to the coordinator.</p>
          <p>3. Watch the onboarding instructions.</p>
        </div>

        {/* WhatsApp CTA */}
        <Link
          href={`https://wa.me/2349134598884?text=Hello%20I%20just%20completed%20payment%20for%20Grant%20Forex%20mentorship.%20Reference:%20${reference}`}
        >
          <Button
            size="xxl"
            className=" flex items-center w-full justify-center bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            <FaWhatsapp className="size-4 mr-2" />
            Join WhatsApp
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
