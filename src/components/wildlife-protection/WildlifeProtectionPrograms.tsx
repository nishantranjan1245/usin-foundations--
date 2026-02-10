import { motion } from "framer-motion";
import { Shield, Bird, Camera, Users } from "lucide-react";
import awarenessImage from "@/assets/wildlife-awareness.jpg";
import birdingImage from "@/assets/wildlife-birding.jpg";
import cameraTrapImage from "@/assets/wildlife-camera-trap.jpg";
import rescueImage from "@/assets/wildlife-rescue.jpg";

const programs = [
  {
    icon: Camera,
    title: "Wildlife Monitoring & Camera Traps",
    description:
      "Deploying 500+ camera traps across forests to monitor tiger, leopard, and elephant populations. Data helps forest departments plan conservation strategies effectively.",
    image: cameraTrapImage,
    stats: "500+ Camera Traps",
  },
  {
    icon: Bird,
    title: "Bird Sanctuary Conservation",
    description:
      "Protecting and restoring wetlands and bird sanctuaries across India. Our volunteers conduct annual bird census counts and habitat assessments.",
    image: birdingImage,
    stats: "30+ Sanctuaries",
  },
  {
    icon: Users,
    title: "Community Coexistence Programs",
    description:
      "Training forest-edge communities to coexist safely with wildlife through awareness workshops, early warning systems, and alternative livelihood support.",
    image: awarenessImage,
    stats: "300+ Villages",
  },
  {
    icon: Shield,
    title: "Animal Rescue & Rehabilitation",
    description:
      "Operating rescue centres for injured, orphaned, and displaced animals. Our veterinary teams provide medical care and release rehabilitated animals back to the wild.",
    image: rescueImage,
    stats: "500+ Animals Saved",
  },
];

const WildlifeProtectionPrograms = () => {
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
            How We <span className="text-accent">Protect</span> Wildlife
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            From camera traps in tiger corridors to community awareness in 
            forest-edge villages, our programs take a holistic approach.
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

export default WildlifeProtectionPrograms;
