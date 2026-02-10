import { motion } from "framer-motion";
import { ArrowDown, TreePine, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-forest-new.jpg";

const floatingLeaves = [
  { delay: 0, duration: 8, x: "10vw", startY: -20 },
  { delay: 2, duration: 10, x: "30vw", startY: -40 },
  { delay: 4, duration: 7, x: "55vw", startY: -10 },
  { delay: 1, duration: 9, x: "75vw", startY: -30 },
  { delay: 3, duration: 11, x: "90vw", startY: -50 },
  { delay: 5, duration: 8, x: "20vw", startY: -60 },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={heroImage}
          alt="Breathtaking aerial view of lush Indian forest with golden sunlight and river"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/30" />
        {/* Golden glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gold/10 to-transparent" />
      </div>

      {/* Floating Leaves Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingLeaves.map((leaf, i) => (
          <motion.div
            key={i}
            initial={{ y: leaf.startY, x: leaf.x, opacity: 0, rotate: 0 }}
            animate={{
              y: ["0vh", "100vh"],
              opacity: [0, 0.6, 0.4, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
          >
            <Leaf className="w-4 h-4 text-gold/40" />
          </motion.div>
        ))}
      </div>

      {/* Glowing orbs for magical atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15"
            >
              <TreePine className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold tracking-widest uppercase text-gold">
                USIN Foundation
              </span>
              <Sparkles className="w-4 h-4 text-gold" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-primary-foreground mb-8"
          >
            Nurturing a{" "}
            <motion.span
              className="relative inline-block"
            >
              <span className="italic text-gold drop-shadow-[0_0_30px_hsl(var(--gold)/0.4)]">
                Greener
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold/80 via-gold to-gold/80 rounded-full"
              />
            </motion.span>{" "}
            <br className="hidden md:block" />
            Future for India
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
          >
            We plant trees, protect ecosystems, and inspire communities 
            to build a sustainable tomorrow. Every seed planted is a 
            promise to our planet.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/get-involved"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-gold-foreground font-semibold text-base overflow-hidden transition-all duration-300 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <TreePine className="w-5 h-5" />
                Plant a Tree Today
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold via-accent to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-primary-foreground/25 text-primary-foreground font-semibold text-base backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all duration-300 hover:scale-105"
            >
              Learn Our Mission
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { value: "1M+", label: "Trees Planted" },
              { value: "500+", label: "Villages Reached" },
              { value: "50K+", label: "Volunteers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-display text-3xl md:text-4xl font-bold text-gold drop-shadow-[0_0_10px_hsl(var(--gold)/0.3)]">
                  {stat.value}
                </span>
                <span className="text-sm text-primary-foreground/60 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-primary-foreground/50 tracking-widest uppercase">
            Explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
