import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Droplets, Users, MapPin } from "lucide-react";
import donateImpact from "@/assets/donate-impact.jpg";

const impactStats = [
  { icon: TreePine, value: "1,00,000+", label: "Trees Planted" },
  { icon: Droplets, value: "50+", label: "Water Bodies Restored" },
  { icon: Users, value: "25,000+", label: "Lives Impacted" },
  { icon: MapPin, value: "100+", label: "Villages Covered" },
];

const DonateImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={donateImpact}
                alt="Volunteers watering young saplings in a village nursery"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <motion.div
              animate={isInView ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-xl shadow-xl p-5 border border-border"
            >
              <p className="font-display text-3xl font-bold text-gold">100%</p>
              <p className="text-sm text-muted-foreground">Goes to Projects</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Where Your Money Goes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Real Impact,{" "}
              <span className="text-gradient-green italic">Real Change</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Every donation is tracked and accounted for. We ensure complete transparency 
              so you can see exactly how your contribution transforms communities and ecosystems.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  className="bg-card rounded-xl p-5 border border-border"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-3" />
                  <p className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonateImpact;
