import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import banyanTree from "@/assets/banyan-tree.jpg";

const ImpactCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img
          src={banyanTree}
          alt="Majestic banyan tree symbolizing deep-rooted impact"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Be Part of This{" "}
            <span className="italic text-gold">Impact</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Every tree planted, every community empowered, and every 
            student inspired — starts with people like you taking action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold text-gold-foreground font-semibold text-base hover:brightness-110 transition-all duration-200 shadow-lg shadow-gold/25"
            >
              Get Involved <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/initiatives"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-all duration-200"
            >
              View Initiatives
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactCTA;
