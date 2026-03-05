"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 items-end"
    >
      {/* Back To Top */}
      <button
        onClick={scrollToTop}
        className="bg-[#0B3C5D] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        <ArrowUp size={18} />
      </button>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/2349134598884?text=Hello%20I%20want%20to%20apply%20for%20Grant%20Forex%20Mentorship"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <span className="absolute right-16 bg-[#0B3C5D] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Chat on WhatsApp
        </span>

        <div className="bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:bg-green-600 transition-all duration-300 glow">
          <FaWhatsapp
            size={22}
            className="transition-transform group-hover:rotate-12"
          />
        </div>
      </a>
    </motion.div>
  );
}
