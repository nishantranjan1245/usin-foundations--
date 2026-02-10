import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10,000+", label: "Trees Planted" },
  { value: "15+", label: "States Active" },
  { value: "50+", label: "Drives Conducted" },
  { value: "5,000+", label: "Students Reached" },
  { value: "2,000+", label: "Volunteers" },
  { value: "100+", label: "Schools Partnered" },
];

const InitiativesImpact = () => {
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
            Our Reach
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Impact in <span className="text-gradient-green italic">Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every number represents real trees, real communities, 
            and real change happening across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesImpact;
