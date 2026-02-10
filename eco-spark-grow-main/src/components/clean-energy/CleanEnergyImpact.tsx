import { motion } from "framer-motion";
import { Sun, MapPin, Users, Zap } from "lucide-react";

const stats = [
  { icon: Sun, value: "150+", label: "Solar Microgrids" },
  { icon: MapPin, value: "10+", label: "States Covered" },
  { icon: Users, value: "10,000+", label: "Homes Powered" },
  { icon: Zap, value: "15 MW", label: "Clean Energy Generated" },
];

const solutions = [
  { name: "Rooftop Solar Panels", impact: "Powering homes with 3-5 kW systems saving ₹2,000/month" },
  { name: "Solar Water Pumps", impact: "Replacing diesel pumps for 5,000+ farmers" },
  { name: "Community Microgrids", impact: "24/7 power for off-grid villages via mini solar grids" },
  { name: "Biogas Digesters", impact: "Converting cow dung into clean cooking fuel for families" },
  { name: "Solar Street Lights", impact: "Lighting 2,000+ village roads for safety and mobility" },
  { name: "Clean Cookstoves", impact: "Reducing indoor smoke by 90% and firewood use by 60%" },
];

const CleanEnergyImpact = () => {
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
            Energy That <span className="italic text-gold">Transforms</span> Lives
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

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Our Clean Energy Solutions
          </h3>
          <p className="text-primary-foreground/70 font-body max-w-xl mx-auto">
            A range of renewable energy technologies tailored to 
            rural India's unique needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((s, index) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <Sun className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <p className="font-display font-semibold text-sm">{s.name}</p>
                <p className="text-xs text-primary-foreground/60 font-body">
                  {s.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleanEnergyImpact;
