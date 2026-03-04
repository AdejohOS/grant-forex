"use client";

import { useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa6";
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

      {/* Telegram CTA */}
      <a
        href="https://t.me/milestraderchat"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <span className="absolute right-16 bg-[#0B3C5D] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Join Community
        </span>
        <div className="bg-[#D4A373] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:bg-[#c08c5a] transition-all duration-300 glow">
          {" "}
          <FaTelegram
            size={22}
            className="transition-transform group-hover:rotate-12"
          />
        </div>
      </a>
    </motion.div>
  );
}
