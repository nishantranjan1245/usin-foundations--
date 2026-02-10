import { motion } from "framer-motion";
import { Shield, MapPin, Camera, Bird } from "lucide-react";

const stats = [
  { icon: Shield, value: "500+", label: "Animals Rescued" },
  { icon: MapPin, value: "25+", label: "Protected Areas Supported" },
  { icon: Camera, value: "500+", label: "Camera Traps Deployed" },
  { icon: Bird, value: "150+", label: "Species Monitored" },
];

const species = [
  { name: "Bengal Tiger", status: "Endangered", effort: "Corridor protection & anti-poaching patrols" },
  { name: "Asian Elephant", status: "Endangered", effort: "Human-elephant conflict mitigation programs" },
  { name: "Indian Leopard", status: "Vulnerable", effort: "Camera trap monitoring & community awareness" },
  { name: "Great Indian Bustard", status: "Critically Endangered", effort: "Habitat restoration in grasslands" },
  { name: "Indian Pangolin", status: "Endangered", effort: "Anti-trafficking intelligence & rescue operations" },
  { name: "Gharial", status: "Critically Endangered", effort: "River habitat protection & breeding support" },
];

const WildlifeProtectionImpact = () => {
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
            Protecting India's <span className="italic text-gold">Wild Legacy</span>
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

        {/* Species */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Key Species We Protect
          </h3>
          <p className="text-primary-foreground/70 font-body max-w-xl mx-auto">
            Focused conservation efforts for India's most threatened 
            and iconic wildlife species.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {species.map((s, index) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <Shield className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <p className="font-display font-semibold text-sm">
                  {s.name}{" "}
                  <span className="italic text-gold/70 font-body text-xs">
                    ({s.status})
                  </span>
                </p>
                <p className="text-xs text-primary-foreground/60 font-body">
                  {s.effort}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WildlifeProtectionImpact;
