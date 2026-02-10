import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import plantingImage from "@/assets/planting-seedling.jpg";
import volunteersImg from "@/assets/volunteers-planting.jpg";

const AboutStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Beginning */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={plantingImage}
                alt="Hands planting a seedling in rich soil"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <motion.div
              animate={isInView ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-xl shadow-xl p-5 border border-border"
            >
               <p className="font-display text-3xl font-bold text-primary">2017</p>
              <p className="text-sm text-muted-foreground">Est. 22 Dec</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Our Beginning
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Small Seed,{" "}
              <span className="text-gradient-green italic">A Big Dream</span>
            </h2>
             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              USIN Foundation was born out of a deep concern for India's rapidly 
              depleting green cover. Registered on 22nd December 2017 in New Delhi, 
              what started as a small group of passionate individuals planting trees 
              in local communities has grown into a nationwide movement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our founders witnessed the devastating effects of deforestation — 
              rising temperatures, vanishing wildlife, and polluted rivers. They 
              decided that complaining wasn't enough; action was needed. With just 
              100 saplings and a handful of volunteers, the first USIN plantation 
              drive took place in rural Uttar Pradesh, and the rest is history.
            </p>
          </motion.div>
        </div>

        {/* Our Growth */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Our Growth
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              From 100 Trees to{" "}
              <span className="text-gradient-green italic">10,000+</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Today, USIN Foundation operates across 15+ states in India. Our 
              programs have expanded beyond tree plantation to include water 
              conservation, eco-awareness campaigns, clean energy advocacy, and 
              wildlife protection.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work with schools, colleges, corporates, and government bodies 
              to create lasting environmental impact. Our volunteers — over 2,000 
              strong — are the heart and soul of every initiative we undertake.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={volunteersImg}
                alt="Volunteers planting trees together in a community drive"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <motion.div
              animate={isInView ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-4 lg:-left-8 bg-card rounded-xl shadow-xl p-5 border border-border"
            >
              <p className="font-display text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">States Active</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
