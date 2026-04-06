import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  formatted?: boolean;
}

const stats: StatItem[] = [
  { target: 12, suffix: "+", label: "Years of Excellence" },
  { target: 10, suffix: "+", label: "Projects Delivered" },
  { target: 4, suffix: ".8", label: "JustDial Rating" },
  { target: 1, suffix: "", label: "City — Visakhapatnam" },
];

function AnimatedCounter({
  target,
  suffix,
  formatted,
  inView,
}: {
  target: number;
  suffix: string;
  formatted?: boolean;
  inView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, target, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(formatted ? v.toLocaleString() : String(v));
    });
    return unsubscribe;
  }, [rounded, formatted]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const StatsBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true });

  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom, #0A0E1A 0%, #0A0E1A 30%, #FAF8F3 100%)",
      }}
      className="py-20 md:py-28"
    >
      <div
        ref={containerRef}
        className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-heading font-bold text-gold">
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                formatted={stat.formatted}
                inView={inView}
              />
            </p>
            <p className="text-cream/60 text-sm font-body mt-2 tracking-wide">
              {stat.label}
            </p>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
