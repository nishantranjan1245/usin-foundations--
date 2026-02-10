import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Leaf, Trees, Mountain } from "lucide-react";

const donationTiers = [
  {
    icon: TreePine,
    amount: "₹500",
    label: "Seed Starter",
    trees: "5 Trees",
    description: "Plant and nurture 5 native tree saplings for a full year. Perfect for individual contributors.",
    features: ["5 native saplings planted", "Annual growth report", "Digital certificate"],
  },
  {
    icon: Leaf,
    amount: "₹1,000",
    label: "Green Guardian",
    trees: "10 Trees",
    description: "Support 10 trees and receive a personalized plantation certificate with GPS coordinates.",
    features: ["10 trees with GPS tracking", "Personalized certificate", "Quarterly photo updates"],
    popular: true,
  },
  {
    icon: Trees,
    amount: "₹5,000",
    label: "Forest Friend",
    trees: "50 Trees",
    description: "Sponsor a mini-plantation drive in a village. Get quarterly impact reports with photos.",
    features: ["50 trees in your name", "Village drive sponsorship", "Impact report with photos"],
  },
  {
    icon: Mountain,
    amount: "₹10,000",
    label: "Eco Champion",
    trees: "100+ Trees",
    description: "Fund a full community plantation drive. Includes tree naming opportunity and site visit invitation.",
    features: ["100+ trees planted", "Tree naming opportunity", "Site visit invitation", "Annual impact report"],
  },
];

const DonateTiers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="donation-tiers" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Choose Your Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Every Rupee Grows a{" "}
            <span className="text-gradient-green italic">Greener Future</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Select a donation tier that suits you. Every contribution directly funds 
            tree plantation, water conservation, and eco-awareness programs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationTiers.map((tier, index) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative bg-card rounded-2xl border p-6 hover:shadow-xl transition-all duration-300 flex flex-col ${
                tier.popular
                  ? "border-primary ring-2 ring-primary/20 scale-[1.02]"
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              )}

              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5">
                <tier.icon className="w-7 h-7 text-primary" />
              </div>

              <p className="font-display text-3xl font-bold text-primary mb-1">
                {tier.amount}
              </p>
              <p className="font-display font-semibold text-foreground text-lg mb-1">
                {tier.label}
              </p>
              <p className="text-sm font-medium text-accent mb-3">{tier.trees}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {tier.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Donate {tier.amount}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonateTiers;
