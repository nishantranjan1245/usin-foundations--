import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import heroImage from "@/assets/water-conservation-hero.jpg";

const WaterConservationHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Indian villagers building a rainwater harvesting check dam together"
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
            <Droplets className="w-5 h-5 text-gold" />
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">
              Water Conservation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary-foreground mb-6"
          >
            Saving Every{" "}
            <span className="italic text-gold">Drop</span>,{" "}
            Securing Every <span className="italic text-gold">Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto font-body"
          >
            Water is life. Our conservation programs are reviving rivers,
            recharging groundwater, and empowering communities to protect
            India's most precious resource.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WaterConservationHero;
