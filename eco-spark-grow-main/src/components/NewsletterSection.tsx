import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const NewsletterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-gradient-earth rounded-2xl p-8 sm:p-12 text-center"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-earth-foreground mb-3">
            Stay Rooted With Us
          </h3>
          <p className="text-earth-foreground/80 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for updates on our drives, impact stories, 
            and ways you can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full bg-earth-foreground/10 border border-earth-foreground/20 text-earth-foreground placeholder:text-earth-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
            />
            <button className="px-6 py-3 rounded-full bg-gold text-gold-foreground font-semibold text-sm hover:brightness-110 transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
