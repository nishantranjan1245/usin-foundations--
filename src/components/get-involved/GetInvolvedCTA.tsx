import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";

const GetInvolvedCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img
          src={heroForest}
          alt="Dense green forest with sunlight streaming through"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-8 h-8 text-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Stay Rooted With Us
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Subscribe to our newsletter for updates on upcoming drives, 
            impact stories, and ways you can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
            />
            <button className="px-6 py-3 rounded-full bg-gold text-gold-foreground font-semibold text-sm hover:brightness-110 transition-all">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/impact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-all duration-200"
            >
              See Our Impact <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@usinfoundation.org.in"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolvedCTA;
