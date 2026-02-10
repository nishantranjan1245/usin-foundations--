import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import aerialForest from "@/assets/aerial-forest.jpg";

const AboutHero = () => {
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
            <Leaf className="w-5 h-5 text-gold" />
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary-foreground mb-6"
          >
            {["Our", "Story", "of"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 1.0, type: "spring", stiffness: 120 }}
              className="inline-block italic text-gold mr-[0.3em]"
            >
              Hope
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              className="inline-block mr-[0.3em]"
            >
              &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 1.4, type: "spring", stiffness: 120 }}
              className="inline-block italic text-gold"
            >
              Growth
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto font-body"
          >
            From a small group of passionate environmentalists to a movement 
            spanning 15+ states — learn how USIN Foundation is transforming 
            India's green landscape.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
