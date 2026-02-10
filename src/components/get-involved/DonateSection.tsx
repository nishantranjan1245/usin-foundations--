import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Eye, Heart } from "lucide-react";
import donateHands from "@/assets/donate-hands.jpg";

const donationTiers = [
  {
    amount: "₹500",
    label: "Plant 5 Trees",
    description: "Enough to plant and nurture 5 native tree saplings for a year.",
  },
  {
    amount: "₹1,000",
    label: "Plant 10 Trees",
    description: "Support 10 trees and receive a personalized plantation certificate.",
    popular: true,
  },
  {
    amount: "₹5,000",
    label: "Green Guardian",
    description: "Sponsor a mini-plantation drive and get quarterly impact reports.",
  },
  {
    amount: "₹10,000",
    label: "Eco Champion",
    description: "Fund a full community drive. Includes a tree naming opportunity.",
  },
];

const trustPoints = [
  { icon: Shield, text: "100% goes to projects" },
  { icon: Eye, text: "Full transparency" },
  { icon: Heart, text: "Tax benefits available" },
];

const DonateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="donate" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Make a Donation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Every Rupee Grows a{" "}
              <span className="text-gradient-green italic">Greener Future</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Your contribution directly funds tree plantation, water conservation, 
              and eco-awareness programs. Choose a tier that suits you.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {donationTiers.map((tier, index) => (
                <motion.div
                  key={tier.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`relative bg-card rounded-xl border p-5 hover:shadow-lg transition-all duration-300 ${
                    tier.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-2.5 left-4 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  )}
                  <p className="font-display text-2xl font-bold text-primary mb-1">
                    {tier.amount}
                  </p>
                  <p className="font-display font-semibold text-foreground text-sm mb-2">
                    {tier.label}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {tier.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              {trustPoints.map((point) => (
                <div key={point.text} className="flex items-center gap-2">
                  <point.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">{point.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={donateHands}
                alt="Woman donating to an NGO worker at a charity event"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <motion.div
              animate={isInView ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-4 lg:-left-8 bg-card rounded-xl shadow-xl p-5 border border-border"
            >
              <p className="font-display text-3xl font-bold text-gold">100%</p>
              <p className="text-sm text-muted-foreground">Goes to Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
