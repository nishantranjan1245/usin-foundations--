import { motion } from "framer-motion";
import { Landmark, School, Droplets, Mountain } from "lucide-react";
import checkDam from "@/assets/water-check-dam.jpg";
import waterEducation from "@/assets/water-education.jpg";
import restoredPond from "@/assets/water-restored-pond.jpg";
import villageWell from "@/assets/water-village-well.jpg";

const programs = [
  {
    icon: Landmark,
    title: "Check Dam Construction",
    description:
      "Building earthen and stone check dams across seasonal rivers and streams to slow water flow, reduce erosion, and recharge groundwater tables in drought-prone regions.",
    image: checkDam,
    stats: "350+ Dams Built",
  },
  {
    icon: School,
    title: "Water Literacy Program",
    description:
      "Training 10,000+ students and teachers in water conservation through hands-on workshops, rainwater harvesting installations, and school-level water audits.",
    image: waterEducation,
    stats: "10,000+ Students",
  },
  {
    icon: Droplets,
    title: "Village Pond Restoration",
    description:
      "Reviving traditional village ponds (talabs) through desilting, bund strengthening, and plantation drives. Restored ponds serve as lifelines for irrigation and livestock.",
    image: restoredPond,
    stats: "200+ Ponds Restored",
  },
  {
    icon: Mountain,
    title: "Community Well Recharge",
    description:
      "Installing percolation pits and recharge shafts near existing bore wells and community wells to boost groundwater levels by up to 15 feet in a single monsoon.",
    image: villageWell,
    stats: "1,500+ Wells",
  },
];

const WaterConservationPrograms = () => {
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
            How We <span className="text-accent">Conserve</span> Water
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            From traditional pond restoration to modern rainwater harvesting, 
            our programs address India's water crisis at every level.
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

export default WaterConservationPrograms;
