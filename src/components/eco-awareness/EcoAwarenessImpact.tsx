import { motion } from "framer-motion";
import { Lightbulb, MapPin, Users, Megaphone } from "lucide-react";

const stats = [
  { icon: Users, value: "1,00,000+", label: "People Reached" },
  { icon: MapPin, value: "800+", label: "Villages Covered" },
  { icon: Megaphone, value: "2,500+", label: "Workshops Conducted" },
  { icon: Lightbulb, value: "15,000+", label: "Eco-Champions Trained" },
];

const topics = [
  { name: "Waste Segregation", impact: "Reducing landfill waste by 60% in target villages" },
  { name: "Organic Composting", impact: "Converting kitchen waste into rich organic fertilizer" },
  { name: "Chemical-Free Farming", impact: "Training farmers to reduce pesticide use by 80%" },
  { name: "Plastic-Free Living", impact: "Eliminating single-use plastics in 200+ villages" },
  { name: "Climate Awareness", impact: "Helping communities adapt to changing weather patterns" },
  { name: "Biodiversity Conservation", impact: "Protecting local flora, fauna, and ecosystems" },
];

const EcoAwarenessImpact = () => {
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
            Awareness That <span className="italic text-gold">Transforms</span>
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

        {/* Topics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Key Awareness Topics
          </h3>
          <p className="text-primary-foreground/70 font-body max-w-xl mx-auto">
            Our programs cover a wide range of environmental topics 
            tailored to each community's needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <Lightbulb className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-primary-foreground/60 font-body">
                  {t.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoAwarenessImpact;
