import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sprout, Globe } from "lucide-react";
import plantingImage from "@/assets/planting-seedling.jpg";

const values = [
  {
    icon: Sprout,
    title: "Plant & Protect",
    description: "We plant native tree species and protect existing forests from degradation.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Empowering local communities to become stewards of their own environment.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Contributing to carbon reduction and biodiversity preservation worldwide.",
  },
];

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={plantingImage}
                alt="Hands planting a seedling in rich soil"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating stat */}
            <motion.div
              animate={isInView ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-xl shadow-xl p-5 border border-border"
            >
              <p className="font-display text-3xl font-bold text-primary">10K+</p>
              <p className="text-sm text-muted-foreground">Trees Planted</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Our Mission
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Rooted in Purpose,{" "}
              <span className="text-gradient-green">Growing for Good</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              USIN Foundation is dedicated to environmental restoration across India. 
              We believe every tree planted is a step towards cleaner air, healthier 
              communities, and a thriving planet. Our grassroots approach ensures 
              lasting impact through awareness, action, and community leadership.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
