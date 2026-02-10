import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import saveEarthImg from "@/assets/save-earth.jpg";

const testimonials = [
  {
    quote:
      "Joining USIN Foundation's plantation drive changed my perspective completely. Planting my first tree felt like giving back to the Earth that has given us everything.",
    name: "Priya Sharma",
    role: "Volunteer, Delhi",
    initials: "PS",
  },
  {
    quote:
      "As a school teacher, I've seen how USIN's awareness program transforms children into passionate environmental guardians. The impact is truly remarkable.",
    name: "Rajesh Kumar",
    role: "Teacher, Uttar Pradesh",
    initials: "RK",
  },
  {
    quote:
      "Our village was facing severe water scarcity. USIN Foundation's water conservation project brought hope and green cover back to our land.",
    name: "Sunita Devi",
    role: "Community Leader, Rajasthan",
    initials: "SD",
  },
  {
    quote:
      "The foundation's approach is unique — they don't just plant trees, they build a community around each project. That's what makes the difference.",
    name: "Dr. Anand Verma",
    role: "Environmentalist, Maharashtra",
    initials: "AV",
  },
  {
    quote:
      "I donated to sponsor 50 trees and received updates on their growth. It feels amazing to know my contribution is literally growing and giving back to nature.",
    name: "Meera Patel",
    role: "Donor, Gujarat",
    initials: "MP",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-[0.07]">
        <img
          src={saveEarthImg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-muted/80" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
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
            Stories from Our <span className="text-gradient-green italic">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the people who have been part of our journey towards a greener India.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative bg-card rounded-3xl border border-border p-8 sm:p-12 shadow-lg">
            <Quote className="w-10 h-10 text-accent/20 absolute top-6 left-6 sm:top-8 sm:left-8" />
            <div className="relative z-10">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="font-display text-xl sm:text-2xl text-foreground leading-relaxed mb-8 italic"
              >
                "{testimonials[currentIndex].quote}"
              </motion.p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-leaf flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">
                    {testimonials[currentIndex].initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
