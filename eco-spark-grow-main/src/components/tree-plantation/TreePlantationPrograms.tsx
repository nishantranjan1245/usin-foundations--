import { motion } from "framer-motion";
import { Users, School, Building2, Mountain } from "lucide-react";
import childrenPlanting from "@/assets/children-planting.jpg";
import treeNursery from "@/assets/tree-nursery.jpg";
import grownPlantation from "@/assets/grown-plantation.jpg";
import volunteersPlanting from "@/assets/volunteers-planting.jpg";

const programs = [
  {
    icon: Users,
    title: "Community Plantation Drives",
    description:
      "Large-scale drives engaging 500+ volunteers per event across villages and towns. We provide saplings, tools, and expert guidance.",
    image: volunteersPlanting,
    stats: "200+ Drives",
  },
  {
    icon: School,
    title: "School Green Campus",
    description:
      "Partnering with 1,000+ schools to create green campuses. Students plant and nurture trees, learning environmental stewardship.",
    image: childrenPlanting,
    stats: "1,000+ Schools",
  },
  {
    icon: Building2,
    title: "Nursery Development",
    description:
      "Operating 25+ native species nurseries producing 2 lakh saplings annually for distribution to communities and plantation sites.",
    image: treeNursery,
    stats: "25+ Nurseries",
  },
  {
    icon: Mountain,
    title: "Forest Restoration",
    description:
      "Rehabilitating degraded forest land using Miyawaki method and native reforestation techniques for rapid ecosystem recovery.",
    image: grownPlantation,
    stats: "5,000+ Acres",
  },
];

const TreePlantationPrograms = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-2 block">
            Our Programs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How We <span className="text-accent">Plant</span> & Protect
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            From community-driven plantation drives to scientific forest 
            restoration, our programs are designed for maximum impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-border"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  {program.stats}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <program.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {program.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreePlantationPrograms;
