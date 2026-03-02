import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" border-t border-border bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white overflow-hidden rounded-full flex items-center justify-center">
                <Image
                  src="/images/grant.png"
                  alt="Grant Forex Logo"
                  width={100}
                  height={100}
                />
              </div>
              <span className="text-lg font-semibold text-gray-100">
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
            <h4 className="font-semibold text-gray-100 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a
                  href="#breakdown"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Trade Analysis
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-gray-100 mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Telegram Group
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-100 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Risk Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t  border-gray-500 pt-12">
          <div className="bg-[#0c3149] rounded-2xl p-6 border border-gray-500 mb-8">
            <h4 className="font-semibold text-accent mb-3">Risk Disclaimer</h4>
            <p className="text-xs text-gray-200 leading-relaxed mb-3">
              Trading cryptocurrencies, forex, and other financial instruments
              carries substantial risk of loss. Past performance is not
              indicative of future results. This content is for educational
              purposes only and should not be considered financial advice.
            </p>
            <p className="text-xs text-gray-200 leading-relaxed">
              Always conduct your own research, manage risk responsibly, and
              only risk capital you can afford to lose. We are not liable for
              trading losses incurred from applying our teachings.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-300">
              © 2026 Grant Forex. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-gray-300 hover:text-foreground transition-colors"
              >
                Risk Disclaimer
              </a>
              <a
                href="#"
                className="text-xs text-gray-300 hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xs text-gray-300 hover:text-foreground transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
