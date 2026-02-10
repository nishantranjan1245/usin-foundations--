import { motion } from "framer-motion";
import { Shield, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const WildlifeProtectionCTA = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Shield className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
            Be a Voice for the{" "}
            <span className="text-accent">Voiceless</span>
          </h2>
          <p className="text-muted-foreground font-body mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you fund a camera trap, support a rescue centre, or help 
            train forest guards — your contribution directly saves lives. 
            Together, we can ensure India's wildlife thrives for generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-base hover:brightness-110 transition-all duration-200 shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Join Wildlife Conservation
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Shield className="w-5 h-5" />
              Fund a Camera Trap — ₹2,000
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Phone className="w-4 h-4" />
            <span className="font-body">
              Questions? Call us at{" "}
              <span className="font-semibold text-foreground">+91 XXXX XXXXXX</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WildlifeProtectionCTA;
