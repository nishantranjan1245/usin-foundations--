import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import donateHero from "@/assets/donate-hero.jpg";

const DonateHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={donateHero}
          alt="Community members holding tree saplings at a donation event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Heart className="w-5 h-5 text-gold" />
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">
              Donate Now
            </span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Generosity Can{" "}
            <span className="italic text-gold">Change the World</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Every contribution plants seeds of hope. Join thousands of donors who are 
            helping us restore forests, empower communities, and build a sustainable future for India.
          </p>

          <motion.a
            href="#donation-tiers"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-gold-foreground font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-lg"
          >
            <Heart className="w-5 h-5" />
            Start Donating
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateHero;
