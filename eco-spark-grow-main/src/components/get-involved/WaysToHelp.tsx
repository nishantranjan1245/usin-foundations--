import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Users, HandHeart, Megaphone } from "lucide-react";

const ways = [
  {
    icon: TreePine,
    title: "Plant a Tree",
    description: "Sponsor a tree plantation in your name or dedicate it to a loved one. You'll receive a certificate and regular growth updates.",
    cta: "Start Planting",
    href: "#sponsor-tree",
  },
  {
    icon: Users,
    title: "Volunteer With Us",
    description: "Join our drives, workshops, and community events. Your time and passion can create incredible impact on the ground.",
    cta: "Become a Volunteer",
    href: "#volunteer",
  },
  {
    icon: HandHeart,
    title: "Make a Donation",
    description: "100% of your donations go directly towards saplings, drives, and eco-awareness programs across India.",
    cta: "Donate Now",
    href: "#donate",
  },
  {
    icon: Megaphone,
    title: "Spread the Word",
    description: "Share our mission on social media, talk about us in your community, and help us reach more people who care.",
    cta: "Share Our Mission",
    href: "#",
  },
];

const WaysToHelp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Take Action
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ways to <span className="text-gradient-green italic">Help</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose how you'd like to contribute to building a greener India. 
            Every action, big or small, makes a difference.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * index }}
              className="group relative bg-card rounded-2xl border border-border p-8 text-center hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-leaf opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <way.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {way.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {way.description}
                </p>
                <a
                  href={way.href}
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

export default WaysToHelp;
