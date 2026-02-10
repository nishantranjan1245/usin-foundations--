import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const states = [
  { name: "Uttar Pradesh", trees: "3,000+", status: "Active since 2018" },
  { name: "Rajasthan", trees: "2,500+", status: "Active since 2019" },
  { name: "Maharashtra", trees: "1,800+", status: "Active since 2020" },
  { name: "Gujarat", trees: "1,200+", status: "Active since 2021" },
  { name: "Delhi NCR", trees: "800+", status: "Active since 2020" },
  { name: "Madhya Pradesh", trees: "600+", status: "Active since 2022" },
  { name: "Karnataka", trees: "400+", status: "Active since 2022" },
  { name: "Tamil Nadu", trees: "350+", status: "Active since 2023" },
  { name: "Punjab", trees: "300+", status: "Active since 2023" },
  { name: "Bihar", trees: "250+", status: "Active since 2023" },
  { name: "Jharkhand", trees: "200+", status: "Active since 2024" },
  { name: "Chhattisgarh", trees: "150+", status: "Active since 2024" },
];

const ImpactMap = () => {
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
            Growing Across <span className="text-gradient-green italic">India</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From the deserts of Rajasthan to the coasts of Tamil Nadu — 
            our roots spread across 15+ states and counting.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {states.map((state, index) => (
            <motion.div
              key={state.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group flex items-start gap-3 bg-card rounded-xl border border-border p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground text-sm">
                  {state.name}
                </h4>
                <p className="text-primary font-semibold text-xs">{state.trees} trees</p>
                <p className="text-muted-foreground text-xs">{state.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMap;
