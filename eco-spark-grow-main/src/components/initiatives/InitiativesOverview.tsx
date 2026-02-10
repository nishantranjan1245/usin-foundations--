import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Droplets, Sun, BookOpen, Shield, Recycle } from "lucide-react";

const programs = [
  {
    icon: TreePine,
    title: "Tree Plantation Drives",
    description: "Large-scale campaigns planting native species across rural and urban India to restore biodiversity and green cover.",
    stat: "50+ Drives Completed",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Rainwater harvesting, river cleaning, and watershed management to protect India's freshwater ecosystems.",
    stat: "12 Active Projects",
  },
  {
    icon: Sun,
    title: "Clean Energy Advocacy",
    description: "Promoting solar energy adoption in rural communities and advocating for sustainable energy policies.",
    stat: "8 Communities Served",
  },
  {
    icon: BookOpen,
    title: "Eco-Awareness Campaigns",
    description: "Running awareness programs in schools and colleges, empowering the next generation of environmental leaders.",
    stat: "5,000+ Students Reached",
  },
  {
    icon: Shield,
    title: "Wildlife Protection",
    description: "Preserving natural habitats and protecting endangered species through restoration and community awareness.",
    stat: "6 Conservation Zones",
  },
  {
    icon: Recycle,
    title: "Sustainable Living",
    description: "Teaching communities eco-friendly practices including composting, waste reduction, and organic farming.",
    stat: "20+ Workshops Held",
  },
];

const InitiativesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Green <span className="text-gradient-green italic">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each initiative is designed to address a critical environmental 
            challenge facing India today.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-leaf opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <program.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {program.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-bold text-primary">{program.stat}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesOverview;
