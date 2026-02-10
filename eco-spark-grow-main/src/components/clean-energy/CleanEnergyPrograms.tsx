import { motion } from "framer-motion";
import { Sun, Flame, GraduationCap, Users } from "lucide-react";
import solarFarm from "@/assets/clean-energy-solar-farm.jpg";
import schoolImage from "@/assets/clean-energy-school.jpg";
import womenImage from "@/assets/clean-energy-women.jpg";
import biogasImage from "@/assets/clean-energy-biogas.jpg";

const programs = [
  {
    icon: Sun,
    title: "Village Solar Microgrids",
    description:
      "Installing community-owned solar microgrids that power entire villages — from streetlights and water pumps to homes and small businesses. Each microgrid serves 100-200 households.",
    image: solarFarm,
    stats: "150+ Microgrids",
  },
  {
    icon: GraduationCap,
    title: "Solar-Powered Schools",
    description:
      "Equipping rural schools with rooftop solar panels and LED lighting, ensuring children can study in well-lit classrooms and access digital learning tools.",
    image: schoolImage,
    stats: "500+ Schools",
  },
  {
    icon: Users,
    title: "Women Solar Entrepreneurs",
    description:
      "Training women's self-help groups to assemble, sell, and maintain solar lanterns and home lighting systems — creating green livelihoods in rural areas.",
    image: womenImage,
    stats: "3,000+ Women",
  },
  {
    icon: Flame,
    title: "Biogas & Clean Cookstoves",
    description:
      "Installing household biogas plants and distributing clean cookstoves to replace polluting chulhas, reducing indoor air pollution and protecting women's health.",
    image: biogasImage,
    stats: "8,000+ Stoves",
  },
];

const CleanEnergyPrograms = () => {
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
            Bringing <span className="text-accent">Clean Energy</span> to Every Home
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            From solar microgrids to biogas plants, our programs deliver 
            affordable renewable energy to India's most underserved communities.
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

export default CleanEnergyPrograms;
