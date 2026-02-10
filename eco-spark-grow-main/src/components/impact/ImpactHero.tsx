import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import aerialForest from "@/assets/aerial-forest.jpg";

const ImpactHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aerialForest}
          alt="Aerial view of a vast green forest canopy"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <BarChart3 className="w-5 h-5 text-gold" />
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">
              Our Impact
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary-foreground mb-6"
          >
            Measurable{" "}
            <span className="italic text-gold">Change</span>,{" "}
            Lasting <span className="italic text-gold">Impact</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto font-body"
          >
            See how our programs are transforming communities, restoring 
            ecosystems, and building a greener India — one tree, one 
            village, one state at a time.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ImpactHero;
