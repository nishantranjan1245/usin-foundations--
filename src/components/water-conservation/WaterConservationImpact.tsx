import { motion } from "framer-motion";
import { Droplets, MapPin, Users, Waves } from "lucide-react";

const stats = [
  { icon: Droplets, value: "2,000+", label: "Water Structures Built" },
  { icon: MapPin, value: "12+", label: "States Covered" },
  { icon: Users, value: "5,00,000+", label: "Lives Impacted" },
  { icon: Waves, value: "850 Cr", label: "Litres Water Saved" },
];

const methods = [
  { name: "Check Dams", impact: "Slows river flow, recharges groundwater" },
  { name: "Percolation Tanks", impact: "Increases water table by 10-15 feet" },
  { name: "Rooftop Harvesting", impact: "Captures 50,000+ litres per roof annually" },
  { name: "Pond Desilting", impact: "Doubles storage capacity of village ponds" },
  { name: "Contour Trenching", impact: "Prevents soil erosion on hillsides" },
  { name: "Borewell Recharge", impact: "Revives dried wells within one monsoon" },
];

const WaterConservationImpact = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold mb-2 block">
            Our Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Every Drop <span className="italic text-gold">Counts</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="font-display text-3xl sm:text-4xl font-bold text-gold mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-primary-foreground/70 font-body">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Conservation Methods We Use
          </h3>
          <p className="text-primary-foreground/70 font-body max-w-xl mx-auto">
            Combining traditional Indian water wisdom with modern engineering 
            for maximum impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {methods.map((m, index) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <Droplets className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <p className="font-display font-semibold text-sm">{m.name}</p>
                <p className="text-xs text-primary-foreground/60 font-body">
                  {m.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterConservationImpact;
