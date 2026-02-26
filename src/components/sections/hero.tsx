"use client";

import { useEffect, useRef } from "react";

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
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="mb-6 inline-block">
          <span className="text-sm uppercase tracking-widest text-accent font-medium">
            Institutional Trading
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Trade the Markets with{" "}
          <span className="text-accent">Institutional Precision</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Master Smart Money Concepts, liquidity engineering, and ICT trading
          models. Join a disciplined community of serious traders focused on
          market structure and risk management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-base hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
            Join the Private Trading Community
          </button>
          <button className="px-8 py-4 border border-border text-foreground rounded-full font-semibold text-base hover:bg-card hover:border-accent transition-all duration-300">
            See Trade Analysis
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">290+</div>
            <p className="text-sm text-muted-foreground">Community Members</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <p className="text-sm text-muted-foreground">Years Trading</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">2.5:1</div>
            <p className="text-sm text-muted-foreground">Avg Risk:Reward</p>
          </div>
        </div>
      </div>
    </section>
  );
}
