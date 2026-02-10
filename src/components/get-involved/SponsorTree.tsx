import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Award, MapPin, TrendingUp } from "lucide-react";
import familyPlanting from "@/assets/family-planting.jpg";

const features = [
  {
    icon: TreePine,
    title: "Choose Your Tree",
    description: "Select native species like Neem, Peepal, Banyan, or Mango.",
  },
  {
    icon: Award,
    title: "Get a Certificate",
    description: "Receive a personalized digital certificate for your sponsored tree.",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Know exactly where your tree is planted with location details.",
  },
  {
    icon: TrendingUp,
    title: "Growth Updates",
    description: "Quarterly photo updates showing your tree's progress over 3 years.",
  },
];

const SponsorTree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsor-tree" className="py-24 lg:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={familyPlanting}
                alt="Indian family planting a tree sapling together during golden hour"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Sponsor a Tree
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Gift a{" "}
              <span className="text-gradient-green italic">Tree</span>,{" "}
              Gift a Legacy
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Plant a tree in your name or dedicate it to someone special. 
              It's the perfect gift that keeps growing — literally! Each 
              sponsored tree is cared for 3 years with regular updates.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="mailto:info@usinfoundation.org.in?subject=Sponsor a Tree"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-gold-foreground font-semibold text-base hover:brightness-110 transition-all duration-200 shadow-lg shadow-gold/25"
            >
              Sponsor a Tree — Starting ₹100
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SponsorTree;
