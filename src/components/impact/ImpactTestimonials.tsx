import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "USIN Foundation planted 500 trees in our village. Now our children play under their shade. This is the best gift we could have received.",
    name: "Village Sarpanch",
    location: "Rajasthan",
    initials: "VS",
  },
  {
    quote: "The eco-awareness program opened my eyes to how we can protect our environment. I've become a student ambassador for sustainability.",
    name: "College Student",
    location: "Delhi NCR",
    initials: "CS",
  },
  {
    quote: "Their water conservation project saved our crops during the drought season. We are forever grateful to the USIN team.",
    name: "Local Farmer",
    location: "Maharashtra",
    initials: "LF",
  },
  {
    quote: "As a corporate partner, I've seen firsthand how transparent and passionate this team is. Every rupee donated creates real impact.",
    name: "CSR Head",
    location: "Mumbai",
    initials: "CH",
  },
];

const ImpactTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Voices of Change
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What People <span className="text-gradient-green italic">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the communities, students, and partners 
            who have experienced our impact firsthand.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * index }}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-gold/60 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-primary-foreground">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactTestimonials;
