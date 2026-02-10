import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, MapPin, Calendar, Clock } from "lucide-react";
import youthWorkshop from "@/assets/youth-workshop.jpg";

const benefits = [
  "Be part of tree plantation drives across India",
  "Attend exclusive training workshops & leadership programs",
  "Connect with 2,000+ like-minded changemakers",
  "Get a volunteer certificate for your contribution",
  "Access to special events and eco-tours",
];

const upcomingDrives = [
  { location: "Delhi NCR", date: "March 2026", time: "7:00 AM onwards" },
  { location: "Rajasthan", date: "April 2026", time: "6:30 AM onwards" },
  { location: "Maharashtra", date: "May 2026", time: "7:00 AM onwards" },
];

const VolunteerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="volunteer" className="py-24 lg:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={youthWorkshop}
                alt="Young students sitting in a circle on grass during an eco workshop"
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
              <p className="font-display text-3xl font-bold text-primary">2,000+</p>
              <p className="text-sm text-muted-foreground">Active Volunteers</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Volunteer With Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Time Can{" "}
              <span className="text-gradient-green italic">Change Lives</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join our community of passionate volunteers who are making a 
              real difference on the ground. No experience needed — just 
              bring your enthusiasm!
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Upcoming drives */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h4 className="font-display font-bold text-foreground mb-4">Upcoming Drives</h4>
              <div className="space-y-3">
                {upcomingDrives.map((drive) => (
                  <div key={drive.location} className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-primary font-semibold min-w-[120px]">
                      <MapPin className="w-3.5 h-3.5" />
                      {drive.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {drive.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {drive.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
