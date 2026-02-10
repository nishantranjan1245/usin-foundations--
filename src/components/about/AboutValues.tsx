import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Droplets, Users, Sun, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: TreePine,
    title: "Environmental Restoration",
    description: "We restore degraded ecosystems through strategic tree plantation and forest conservation programs.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Protecting India's water bodies through rainwater harvesting, river cleaning, and watershed management.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description: "Training local communities to become environmental leaders and guardians of their natural resources.",
  },
  {
    icon: Sun,
    title: "Clean Energy Advocacy",
    description: "Promoting solar and renewable energy solutions in rural and semi-urban communities across India.",
  },
  {
    icon: Shield,
    title: "Wildlife Protection",
    description: "Working to preserve habitats and protect endangered species through awareness and habitat restoration.",
  },
  {
    icon: Heart,
    title: "Transparency & Trust",
    description: "100% of donations go directly to projects. We publish regular impact reports for complete accountability.",
  },
];

const AboutValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            What Drives Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Core <span className="text-gradient-green italic">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every initiative we undertake is guided by these principles that 
            keep us rooted in our mission of building a greener India.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-leaf opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
