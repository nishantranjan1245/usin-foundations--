import { motion } from "framer-motion";
import { TreePine, Droplets, Sun, Wind } from "lucide-react";
import plantingCloseup from "@/assets/tree-planting-closeup.jpg";

const benefits = [
  {
    icon: TreePine,
    title: "Carbon Absorption",
    desc: "Each tree absorbs ~22 kg of CO₂ annually, combating climate change.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    desc: "Trees improve groundwater recharge and prevent soil erosion.",
  },
  {
    icon: Sun,
    title: "Temperature Control",
    desc: "Urban tree cover reduces local temperatures by up to 8°C.",
  },
  {
    icon: Wind,
    title: "Clean Air",
    desc: "A single tree produces enough oxygen for 4 people per year.",
  },
];

const TreePlantationAbout = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={plantingCloseup}
                alt="Woman carefully planting a sapling in rich soil"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="font-display text-3xl font-bold">5L+</p>
              <p className="text-sm text-primary-foreground/80">Trees Planted</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-2 block">
              Why We Plant
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Every Tree is a{" "}
              <span className="text-accent">Promise</span> to the Planet
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              India loses over 1.5 million hectares of forest every decade. 
              Our tree plantation program directly combats deforestation by 
              planting native species, engaging local communities, and ensuring 
              long-term survival of every sapling through our 3-year care model.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {benefit.desc}
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

export default TreePlantationAbout;
