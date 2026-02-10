import { motion } from "framer-motion";
import { Droplets, CloudRain, Waves, Leaf } from "lucide-react";
import villageWell from "@/assets/water-village-well.jpg";

const highlights = [
  {
    icon: CloudRain,
    title: "Rainwater Harvesting",
    desc: "Capturing monsoon water to recharge aquifers and prevent urban flooding.",
  },
  {
    icon: Waves,
    title: "River Rejuvenation",
    desc: "Restoring dying rivers through watershed management and plantation drives.",
  },
  {
    icon: Droplets,
    title: "Groundwater Recharge",
    desc: "Building percolation tanks and bore-well recharge pits across arid regions.",
  },
  {
    icon: Leaf,
    title: "Wetland Restoration",
    desc: "Protecting and restoring wetlands that naturally filter and store water.",
  },
];

const WaterConservationAbout = () => {
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
                src={villageWell}
                alt="Indian woman filling water from a traditional village well"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="font-display text-3xl font-bold">500+</p>
              <p className="text-sm text-primary-foreground/80">Villages Impacted</p>
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
              Why Water Matters
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              India's Water Crisis{" "}
              <span className="text-accent">Needs Action Now</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              India is home to 18% of the world's population but only 4% of 
              its freshwater resources. Over 600 million people face extreme 
              water stress. Our programs tackle this crisis through community-led 
              conservation, traditional wisdom, and modern engineering.
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

export default WaterConservationAbout;
