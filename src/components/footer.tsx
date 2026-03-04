"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-linear-to-br from-[#0B3C5D] via-[#0e466a] to-[#082c44] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 relative overflow-hidden rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/images/grant_no_bg.png"
                  alt="Grant Forex Logo"
                  width={100}
                  height={100}
                />
              </div>

              <span className="text-lg font-semibold text-white">
                Grant Forex
              </span>
            </Link>

            <p className="text-sm text-gray-300">
              Institutional precision trading for serious traders. Market
              structure analysis, risk management, and disciplined trading
              psychology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>

            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#mentorship"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Mentorship
                </a>
              </li>

              <li>
                <a
                  href="#community"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>

            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Telegram Group
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Twitter / X
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Discord
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2  items-start">
                <MapPin className="shrink-0 size-4" />
                Shop C9, Baki Plaza, Kuje, Abuja, Nigeria
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="shrink-0 size-4" />
                <a
                  href="tel:+2349134598884"
                  className="hover:text-[#D4A373] transition-colors"
                >
                  +234 913 459 8884
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="shrink-0 size-4" />
                <a
                  href="mailto:info@grantforex.com"
                  className="hover:text-[#D4A373] transition-colors"
                >
                  info@grantforex.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>

            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Risk Disclaimer
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-10">
          <div className="bg-[#0c3149] rounded-2xl p-6 border border-gray-500 mb-8">
            <h4 className="font-semibold text-[#D4A373] mb-4 text-lg">
              Risk Disclaimer
            </h4>

            <p className="text-sm text-slate-200 leading-relaxed mb-4">
              Trading forex and other financial instruments carries substantial
              risk of loss. Past performance is not indicative of future
              results. This content is for educational purposes only and should
              not be considered financial advice.
            </p>

            <p className="text-xs text-gray-200 leading-relaxed">
              Always conduct your own research, manage risk responsibly, and
              only risk capital you can afford to lose. We are not liable for
              trading losses incurred from applying our teachings.
            </p>
          </div>

          <div className="h-px w-full bg-white/10 mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-300">
              © 2026 Grant Forex. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
              >
                Risk Disclaimer
              </a>

              <a
                href="#"
                className="text-xs text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-xs text-slate-300 hover:text-[#D4A373] transition-colors duration-300"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
