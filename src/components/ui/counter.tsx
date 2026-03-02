"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
}

export default function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 25,
    stiffness: 100,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });

    return () => unsubscribe();
  }, [spring]);

  return (
    <motion.span ref={ref}>
      {display}
      {suffix}
    </motion.span>
  );
}
