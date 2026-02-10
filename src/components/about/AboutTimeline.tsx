import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2017",
    title: "Foundation Established",
    description: "USIN Foundation was officially registered on 22nd December 2017 (CIN: U91990DL2017NPL326287) with a mission to restore India's green cover.",
  },
  {
    year: "2019",
    title: "First 1,000 Trees",
    description: "Crossed the milestone of 1,000 trees planted across Uttar Pradesh and Rajasthan.",
  },
  {
    year: "2020",
    title: "Eco-Awareness Launch",
    description: "Launched school & college awareness programs, reaching 2,000+ students despite the pandemic.",
  },
  {
    year: "2021",
    title: "Water Conservation Program",
    description: "Initiated rainwater harvesting and river cleaning campaigns in 5 states.",
  },
  {
    year: "2022",
    title: "10,000+ Trees Milestone",
    description: "Planted over 10,000 trees and expanded operations to 10 states across India.",
  },
  {
    year: "2023",
    title: "Corporate Partnerships",
    description: "Partnered with leading companies for large-scale CSR tree plantation drives.",
  },
  {
    year: "2024",
    title: "15+ States & Growing",
    description: "Now active in 15+ states with 2,000+ volunteers and counting.",
  },
];

const AboutTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Our Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Milestones of <span className="text-gradient-green italic">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, action, and unwavering commitment to our planet.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 sm:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1.5 sm:-translate-x-1.5 mt-2 z-10" />

              {/* Content */}
              <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left sm:ml-auto"
              }`}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-display font-bold text-sm mb-2">
                  {milestone.year}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
