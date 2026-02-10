import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const teamMembers = [
  {
    name: "Nivedita Mehra",
    role: "Director",
    quote: "Every tree we plant is a promise to the next generation.",
    initials: "NM",
  },
  {
    name: "Gaurav Verma",
    role: "Director",
    quote: "Real change happens when communities take ownership of their environment.",
    initials: "GV",
  },
  {
    name: "Mukesh Aghi",
    role: "Director",
    quote: "Our volunteers are the roots that hold this movement together.",
    initials: "MA",
  },
];

const AboutTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            The People Behind It
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-green italic">Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated team united by the shared belief that India 
            deserves a greener, healthier future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group bg-card rounded-2xl border border-border p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="font-display text-2xl font-bold text-primary-foreground">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-accent font-semibold mb-4">{member.role}</p>
              <div className="flex justify-center mb-3">
                <Quote className="w-5 h-5 text-gold" />
              </div>
              <p className="text-muted-foreground text-sm italic leading-relaxed">
                "{member.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
