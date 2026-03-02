import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Professional Mentors",
    description:
      "Learn from traders with 10+ years of professional trading experience in forex markets.",
  },
  {
    title: "Real Classroom Training",
    description:
      "Small group sessions with hands-on trading practice and real market analysis.",
  },
  {
    title: "Proven Strategies",
    description:
      "Master tested forex strategies that consistently generate positive returns.",
  },
  {
    title: "Personalized Guidance",
    description:
      "One-on-one mentorship tailored to your trading style and goals.",
  },
  {
    title: "24/7 Community Support",
    description:
      "Join our exclusive Telegram community for ongoing support and market updates.",
  },
  {
    title: "Real Account Management",
    description:
      "Learn to manage real trading accounts with proper risk management protocols.",
  },
];

export function WhyChooseUsSection() {
  return (
    <div className="bg-[#115786] w-full">
      <section id="why-choose-us" className="py-20 px-4 ">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl serif md:text-5xl font-bold text-gray-50">
              Why Choose{" "}
              <span className="text-gray-100">Grant Forex Academy</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              We provide comprehensive forex trading education with a focus on
              practical skills and professional mentorship.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
