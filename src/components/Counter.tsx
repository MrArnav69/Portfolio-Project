"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1200; // ms
      const increment = value / (duration / 16); // rough 60fps
      
      const animate = () => {
        start += increment;
        if (start < value) {
          setCount(Math.ceil(start));
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      animate();
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}
