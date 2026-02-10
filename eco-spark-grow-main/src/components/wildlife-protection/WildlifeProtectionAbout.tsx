import { motion } from "framer-motion";
import { Shield, TreePine, Bird, Heart } from "lucide-react";
import rescueImage from "@/assets/wildlife-rescue.jpg";

const highlights = [
  {
    icon: Shield,
    title: "Anti-Poaching Support",
    desc: "Equipping forest guards with technology, training, and resources to combat wildlife crime.",
  },
  {
    icon: TreePine,
    title: "Habitat Restoration",
    desc: "Restoring degraded forests and corridors to give wildlife safe spaces to thrive and migrate.",
  },
  {
    icon: Bird,
    title: "Species Monitoring",
    desc: "Using camera traps and field surveys to track endangered species populations across India.",
  },
  {
    icon: Heart,
    title: "Rescue & Rehabilitation",
    desc: "Operating rescue centres for injured and orphaned animals, nursing them back to health.",
  },
];

const WildlifeProtectionAbout = () => {
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
                src={rescueImage}
                alt="Wildlife veterinarian caring for a rescued deer"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="font-display text-3xl font-bold">500+</p>
              <p className="text-sm text-primary-foreground/80">Animals Rescued</p>
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
              Why Wildlife Matters
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Protecting the{" "}
              <span className="text-accent">Heartbeat of Our Forests</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              India is home to 8% of the world's biodiversity — from Bengal 
              tigers and Asian elephants to the Great Indian Bustard. Yet 
              habitat loss, poaching, and human-wildlife conflict threaten 
              hundreds of species. Our programs work on the frontlines to 
              protect India's incredible wild heritage.
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

export default WildlifeProtectionAbout;
