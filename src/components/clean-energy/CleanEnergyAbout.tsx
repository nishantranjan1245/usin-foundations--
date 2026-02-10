import { motion } from "framer-motion";
import { Sun, Flame, Zap, Lightbulb } from "lucide-react";
import biogasImage from "@/assets/clean-energy-biogas.jpg";

const highlights = [
  {
    icon: Sun,
    title: "Solar Power",
    desc: "Rooftop and community solar installations powering homes, schools, and health centres.",
  },
  {
    icon: Flame,
    title: "Biogas Solutions",
    desc: "Converting agricultural and kitchen waste into clean cooking fuel for rural families.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    desc: "Replacing kerosene lamps and wood-fired chulhas with LED lights and clean cookstoves.",
  },
  {
    icon: Lightbulb,
    title: "Solar Lanterns",
    desc: "Distributing solar lanterns to off-grid villages, enabling children to study after dark.",
  },
];

const CleanEnergyAbout = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={biogasImage}
                alt="Indian woman cooking on a clean biogas stove"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="font-display text-3xl font-bold">10,000+</p>
              <p className="text-sm text-primary-foreground/80">Homes Powered</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-2 block">
              Why Clean Energy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Ending Energy Poverty with{" "}
              <span className="text-accent">Sustainable Solutions</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Over 240 million Indians still lack reliable electricity. 
              Millions more depend on polluting kerosene and firewood. 
              Our clean energy programs deliver affordable, renewable 
              power to the communities that need it most — improving 
              health, livelihoods, and the environment simultaneously.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CleanEnergyAbout;
