import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wind, CloudRain, Thermometer, Bird, Leaf, HeartPulse } from "lucide-react";
import communityDriveImg from "@/assets/community-drive.jpg";

const facts = [
  {
    icon: Wind,
    title: "Cleaner Air",
    description: "A single mature tree absorbs up to 22 kg of CO₂ per year and provides oxygen for 2 people.",
    highlight: "22 kg CO₂/year",
  },
  {
    icon: CloudRain,
    title: "Water Cycle",
    description: "Trees regulate rainfall patterns and a single tree can absorb up to 15,000 litres of water per year.",
    highlight: "15,000 litres",
  },
  {
    icon: Thermometer,
    title: "Cool Cities",
    description: "Urban trees reduce surrounding temperatures by up to 8°C, fighting the urban heat island effect.",
    highlight: "8°C cooler",
  },
  {
    icon: Bird,
    title: "Biodiversity Haven",
    description: "One tree can be home to hundreds of species of insects, birds, fungi, and mosses.",
    highlight: "100s of species",
  },
  {
    icon: Leaf,
    title: "Soil Protection",
    description: "Tree roots hold soil in place, preventing erosion and protecting fertile farmland from being washed away.",
    highlight: "Zero erosion",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    description: "Spending 20 minutes near trees significantly reduces stress hormones and blood pressure levels.",
    highlight: "20 min therapy",
  },
];

const WhyTreesMatterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          {/* Full-width image banner */}
          <div className="relative rounded-3xl overflow-hidden mb-12 h-64 sm:h-80">
            <img
              src={communityDriveImg}
              alt="Community plantation drive with volunteers"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
              <div className="text-center px-4">
                <span className="text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
                  Did You Know?
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  Why Trees Matter
                </h2>
                <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
                  Trees are the lungs of our planet. Every tree creates a ripple of positive change.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Facts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <fact.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {fact.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {fact.description}
                  </p>
                  <span className="inline-block text-xs font-bold tracking-wider uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {fact.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTreesMatterSection;
