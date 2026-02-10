import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HandHeart, Users, TreePine } from "lucide-react";
import elderTreeImg from "@/assets/elder-tree.jpg";

const ways = [
  {
    icon: TreePine,
    title: "Plant a Tree",
    description: "Sponsor a tree plantation in your name or your loved one's. Every contribution grows into a lasting legacy.",
    cta: "Start Planting",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our drives, workshops, and community events. Your time and passion can create incredible impact.",
    cta: "Join Us",
  },
  {
    icon: HandHeart,
    title: "Donate",
    description: "Support our mission financially. 100% of donations go directly towards environmental restoration projects.",
    cta: "Contribute Now",
  },
];

const GetInvolvedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="get-involved" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Image + Heading Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden h-72 lg:h-96"
          >
            <img
              src={elderTreeImg}
              alt="Elder reading under a tree in peaceful nature"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Take Action
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Be the Change
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you plant, volunteer, or donate — every action 
              matters in building a greener India. Join thousands of 
              changemakers who are already making a difference.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group relative bg-card rounded-2xl border border-border p-8 text-center hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-leaf opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <way.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {way.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {way.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-accent transition-colors duration-200"
                >
                  {way.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetInvolvedSection;
