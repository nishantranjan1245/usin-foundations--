import { motion } from "framer-motion";
import contactHeroImg from "@/assets/contact-hero.jpg";

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={contactHeroImg}
          alt="USIN Foundation support team ready to help"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6"
        >
          We'd Love to Hear From You
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
        >
          Have questions about our initiatives? Want to volunteer or partner with us? 
          Reach out — our team is always here to connect with you.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;
