import { FaTelegram } from "react-icons/fa6";
import { Button } from "../ui/button";

export function Community() {
  const benefits = [
    {
      icon: "📊",
      title: "Daily Market Bias",
      desc: "Direction and key levels for major pairs",
    },
    {
      icon: "⚡",
      title: "Intraday Execution Insights",
      desc: "Real-time trading opportunities and setups",
    },
    {
      icon: "📈",
      title: "Weekly Breakdowns",
      desc: "Comprehensive market structure analysis",
    },
    {
      icon: "💬",
      title: "Community Commentary",
      desc: "Active discussion and trader interaction",
    },
  ];

  return (
    <section
      className="py-24 px-4 bg-accent/5 sm:px-6 lg:px-8 border-y border-border"
      id="community"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl serif font-bold mb-4">
            Start with the Free Community
          </h3>
          <p className="text-foreground/70 text-lg">
            Join our Telegram community for daily analysis and trading insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 text-center border border-border/50 hover:border-accent/50 transition"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h4 className="font-bold mb-2">{benefit.title}</h4>
              <p className="text-foreground/60 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="xxl"
            className="border-2  border-accent/50 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/10 transition"
          >
            <FaTelegram />
            Join Grant Forex Telegram
          </Button>
        </div>
      </div>
    </section>
  );
}
