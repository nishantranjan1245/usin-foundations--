import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import volunteersImg from "@/assets/volunteers-planting.jpg";
import communityImg from "@/assets/community-drive.jpg";
import ecoAwarenessImg from "@/assets/eco-education.jpg";

const detailedPrograms = [
  {
    title: "Tree Plantation Drives",
    subtitle: "Restoring India's Green Cover",
    description:
      "Our flagship program organizes large-scale tree plantation drives across 15+ states. We focus on planting native species that support local ecosystems and biodiversity.",
    image: volunteersImg,
    imageAlt: "Volunteers planting trees during a community drive",
    highlights: [
      "10,000+ trees planted across India",
      "Native species only — no invasive planting",
      "Post-plantation care for 3 years",
      "Community-owned tree guardianship",
      "GPS tracking of every tree planted",
    ],
  },
  {
    title: "Water Conservation",
    subtitle: "Protecting India's Lifeline",
    description:
      "Our water conservation initiatives focus on rainwater harvesting, river cleaning campaigns, and creating sustainable water management systems in drought-prone regions.",
    image: communityImg,
    imageAlt: "Community members participating in water conservation",
    highlights: [
      "Rainwater harvesting systems in 12 villages",
      "River cleaning drives across 5 states",
      "Watershed management programs",
      "Training local communities in water preservation",
      "Partnering with government water schemes",
    ],
  },
  {
    title: "Eco-Awareness Campaigns",
    subtitle: "Empowering The Next Generation",
    description:
      "We run comprehensive awareness programs in schools, colleges, and communities to build environmental consciousness and inspire action from the ground up.",
    image: ecoAwarenessImg,
    imageAlt: "Students participating in eco-awareness workshop",
    highlights: [
      "Workshops in 100+ schools and colleges",
      "5,000+ students trained as eco-leaders",
      "Interactive environmental curriculum",
      "Annual inter-school eco competitions",
      "Teacher training for sustainability integration",
    ],
  },
];

const InitiativeDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            In Depth
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Flagship <span className="text-gradient-green italic">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A closer look at our most impactful initiatives and 
            the change they're creating across India.
          </p>
        </motion.div>

        <div className="space-y-24">
          {detailedPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * index }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    className="w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-3 block">
                  {program.subtitle}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativeDetails;
