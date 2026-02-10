import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import aerialForest from "@/assets/aerial-forest.jpg";

const stats = [
  { value: 10000, suffix: "+", label: "Trees Planted" },
  { value: 25, suffix: "+", label: "Communities Served" },
  { value: 5000, suffix: "+", label: "Volunteers" },
  { value: 15, suffix: "", label: "States Reached" },
];

const AnimatedCounter = ({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={aerialForest}
          alt="Aerial view of forest canopy"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
            Our Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Numbers That Speak
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Every number represents real change — real trees, real communities, 
            and a real difference for our planet.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="text-center"
            >
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </p>
              <p className="text-sm sm:text-base text-primary-foreground/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
