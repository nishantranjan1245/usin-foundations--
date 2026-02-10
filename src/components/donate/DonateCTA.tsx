import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const DonateCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-gradient-earth text-earth-foreground" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Heart className="w-10 h-10 text-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Make a{" "}
            <span className="italic text-gold">Difference?</span>
          </h2>
          <p className="text-lg text-earth-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether it's ₹500 or ₹10,000, every contribution creates lasting impact. 
            Join our community of donors and help us plant a greener future for India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#donation-tiers"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-gold-foreground font-semibold hover:brightness-110 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </a>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-earth-foreground/30 text-earth-foreground font-semibold hover:bg-earth-foreground/10 transition-all duration-300"
            >
              Other Ways to Help
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-earth-foreground/60">
            <a href="mailto:donate@usinfoundation.org.in" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              donate@usinfoundation.org.in
            </a>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 XXXX XXXXXX
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateCTA;
