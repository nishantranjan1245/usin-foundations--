import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Recycle, Bike, ShowerHead, Lightbulb, ShoppingBag, Utensils } from "lucide-react";
import womanGardeningImg from "@/assets/woman-gardening.jpg";

const tips = [
  {
    icon: Recycle,
    title: "Reduce, Reuse, Recycle",
    description: "Segregate waste at home. Compost kitchen waste. Say no to single-use plastics.",
  },
  {
    icon: Bike,
    title: "Go Green on Commute",
    description: "Walk, cycle, or use public transport. Carpool when possible to cut carbon emissions.",
  },
  {
    icon: ShowerHead,
    title: "Save Water Daily",
    description: "Fix leaky taps. Take shorter showers. Collect rainwater for gardening.",
  },
  {
    icon: Lightbulb,
    title: "Conserve Energy",
    description: "Switch to LED bulbs. Unplug devices when not in use. Use natural light during the day.",
  },
  {
    icon: ShoppingBag,
    title: "Shop Sustainably",
    description: "Carry your own bags. Choose local produce. Support eco-friendly brands.",
  },
  {
    icon: Utensils,
    title: "Eat Planet-Friendly",
    description: "Reduce food waste. Eat more plant-based meals. Grow herbs at home.",
  },
];

const EcoTipsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden" ref={ref}>
      {/* Background Image Accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block opacity-20">
        <img
          src={womanGardeningImg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
            Live Sustainably
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Simple Eco Tips for <span className="italic text-gold">Everyday Life</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Small changes in daily habits can create a massive positive impact on our environment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300">
                <tip.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                {tip.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoTipsSection;
