import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TreePine, Users, MapPin, Droplets, School, Calendar } from "lucide-react";

const stats = [
  { icon: TreePine, value: 10000, suffix: "+", label: "Trees Planted", description: "Native species across India" },
  { icon: MapPin, value: 15, suffix: "+", label: "States Active", description: "Nationwide presence" },
  { icon: Users, value: 2000, suffix: "+", label: "Volunteers", description: "Passionate changemakers" },
  { icon: School, value: 5000, suffix: "+", label: "Students Reached", description: "Eco-awareness programs" },
  { icon: Calendar, value: 50, suffix: "+", label: "Drives Conducted", description: "Tree plantation campaigns" },
  { icon: Droplets, value: 12, suffix: "", label: "Water Projects", description: "Conservation initiatives" },
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

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const ImpactStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            By The Numbers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Impact in <span className="text-gradient-green italic">Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every number represents real trees, real communities, and 
            real change happening across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-2xl border border-border p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-leaf opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
                </p>
                <p className="font-display font-semibold text-foreground text-sm mb-1">
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-xs">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
