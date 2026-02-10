import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Droplets, Sun, BookOpen } from "lucide-react";

const initiatives = [
  {
    icon: TreePine,
    title: "Tree Plantation Drives",
    description:
      "Organizing large-scale tree plantation campaigns across rural and urban India, planting native species to restore biodiversity.",
    stat: "50+ Drives",
    color: "bg-primary" as const,
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description:
      "Implementing rainwater harvesting and watershed management to protect India's precious freshwater ecosystems.",
    stat: "12 Projects",
    color: "bg-accent" as const,
  },
  {
    icon: Sun,
    title: "Clean Energy Advocacy",
    description:
      "Promoting solar energy adoption in rural communities and advocating for sustainable energy policies.",
    stat: "8 Communities",
    color: "bg-earth" as const,
  },
  {
    icon: BookOpen,
    title: "Eco-Awareness",
    description:
      "Running awareness programs in schools and colleges, empowering the next generation of environmental leaders.",
    stat: "5000+ Students",
    color: "bg-moss" as const,
  },
];

const InitiativesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="initiatives" className="py-24 lg:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Our Green Initiatives
          </h2>
          <p className="text-lg text-muted-foreground">
            From planting saplings to educating communities, our programs 
            tackle environmental challenges at every level.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="pt-4 border-t border-border">
                <span className="text-sm font-bold text-primary">{item.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
