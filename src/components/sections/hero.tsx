"use client";

import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Generate initial candlestick data with animation params
    const spacing = 40;
    const height = canvas.height;
    const candlesticks: Array<{
      x: number;
      baseHeight: number;
      phase: number;
      speed: number;
    }> = [];

    for (let x = 0; x < canvas.width; x += spacing) {
      candlesticks.push({
        x: x,
        baseHeight: Math.random() * height * 0.6 + height * 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.5,
      });
    }

    let startTime = Date.now();

    // Draw animated candlesticks
    const drawCandlesticks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const elapsed = (Date.now() - startTime) / 1000;
      const heightVariation = height * 0.15;

      candlesticks.forEach((stick) => {
        // Animate the wick height with sine wave
        const animation = Math.sin(elapsed * stick.speed + stick.phase);
        const wickHeight = stick.baseHeight + animation * heightVariation;
        const bodyHeight = wickHeight * 0.6;
        const bodyY = height * 0.5 - bodyHeight / 2;

        // Vary opacity for dynamic effect
        const opacityVariation =
          (Math.sin(elapsed * stick.speed * 0.7 + stick.phase) + 1) / 2;
        const baseOpacity = 0.04 + opacityVariation * 0.06;

        ctx.strokeStyle = `rgba(212, 165, 116, ${baseOpacity})`;
        ctx.lineWidth = 1;

        // Wick
        ctx.beginPath();
        ctx.moveTo(stick.x, height * 0.5 - wickHeight / 2);
        ctx.lineTo(stick.x, height * 0.5 + wickHeight / 2);
        ctx.stroke();

        // Body
        ctx.fillStyle = `rgba(212, 165, 116, ${baseOpacity * 1.5})`;
        ctx.fillRect(stick.x - 8, bodyY, 16, bodyHeight);
        ctx.strokeRect(stick.x - 8, bodyY, 16, bodyHeight);
      });

      requestAnimationFrame(drawCandlesticks);
    };

    drawCandlesticks();

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      startTime = Date.now();
    });
    resizeObserver.observe(canvas);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-background/50 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl text-[#0b3c5d] sm:text-6xl lg:text-7xl font-bold  mb-6 leading-tight">
          Trade the Markets with <span className="">Institutional </span>{" "}
          <span className="text-accent serif text-6xl sm:text-7xl lg:text-8xl">
            Precision
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Learn Smart Money Concepts, liquidity models, and risk management
          through structured classroom and online mentorship — taught by
          professional traders, not influencers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className=" rounded-full" size="xxl" variant="tdark">
            <ArrowRight /> Apply for Mentorship
          </Button>
          <Link
            href="https://t.me/milestraderchat"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Button className="rounded-full" size="xxl" variant="outline">
              {" "}
              <FaTelegram />
              Join free Telegram
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-border">
          <div className="text-center">
            <div className="text-5xl font-bold  mb-2 serif text-slate-700">
              300+
            </div>
            <p className="text-sm text-muted-foreground">Traders Mentored</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold  mb-2 serif text-slate-700">
              5+
            </div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold  mb-2 serif text-slate-700">
              1:3
            </div>
            <p className="text-sm text-muted-foreground">Avg Risk : Reward</p>
          </div>
        </div>
      </div>
    </section>
  );
}
