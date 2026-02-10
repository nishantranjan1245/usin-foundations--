import { motion } from "framer-motion";
import { TreePine, MapPin, Users, Leaf } from "lucide-react";

const stats = [
  { icon: TreePine, value: "5,00,000+", label: "Trees Planted" },
  { icon: MapPin, value: "15+", label: "States Covered" },
  { icon: Users, value: "50,000+", label: "Volunteers Engaged" },
  { icon: Leaf, value: "120+", label: "Native Species Used" },
];

const species = [
  { name: "Neem", botanical: "Azadirachta indica", use: "Air purification, medicinal" },
  { name: "Peepal", botanical: "Ficus religiosa", use: "Maximum oxygen producer" },
  { name: "Banyan", botanical: "Ficus benghalensis", use: "Shade, ecosystem habitat" },
  { name: "Mango", botanical: "Mangifera indica", use: "Fruit, carbon sequestration" },
  { name: "Ashoka", botanical: "Saraca asoca", use: "Ornamental, soil retention" },
  { name: "Amla", botanical: "Phyllanthus emblica", use: "Medicinal, nutritional" },
];

const TreePlantationImpact = () => {
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
            Numbers That <span className="italic text-gold">Speak</span>
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
            Native Species We Plant
          </h3>
          <p className="text-primary-foreground/70 font-body max-w-xl mx-auto">
            We exclusively plant native Indian species that thrive in local 
            conditions and support biodiversity.
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
              <Leaf className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <p className="font-display font-semibold text-sm">
                  {s.name}{" "}
                  <span className="italic text-primary-foreground/50 font-body text-xs">
                    ({s.botanical})
                  </span>
                </p>
                <p className="text-xs text-primary-foreground/60 font-body">
                  {s.use}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreePlantationImpact;
